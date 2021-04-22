CREATE TABLE price_list (
    id uuid PRIMARY KEY NOT NULL,
    valid_until bigint NOT NULL,
    data jsonb NOT NULL
);

CREATE TABLE bookings (
    id uuid PRIMARY KEY NOT NULL,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    routes jsonb NOT NULL,
    price integer NOT NULL,
    total_travel_time bigint NOT NULL,
    transport_company_names jsonb NOT NULL,
    price_list_id uuid NOT NULL REFERENCES price_list(id) ON DELETE CASCADE,
    date bigint NOT NULL
);

CREATE OR REPLACE FUNCTION keep_row_number()
RETURNS TRIGGER AS
$body$
BEGIN
	IF(SELECT count(valid_until) FROM price_list) > 15
  THEN
  	DELETE FROM price_list
    WHERE valid_until = (SELECT min(valid_until) FROM price_list);
  END IF;
	RETURN NULL;
END;
$body$
LANGUAGE plpgsql;

CREATE TRIGGER keep_row_number
AFTER INSERT ON price_list
FOR EACH ROW EXECUTE PROCEDURE keep_row_number();