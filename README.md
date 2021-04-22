# Cosmos Odyssey

An assignement by Uptime OÜ<br/>
Created by **Ezayji** in April 2021

---

## Usage
### Prerequisites:
        
*  [Node Js](https://nodejs.org/en/) locally installed
* [PostgreSQL](https://www.postgresql.org/download/windows/) locally installed

### Local Setup

1. Fork or download the repository
2. Create a PostgreSQL database and insert the commands included in */cosmos_odyssey/cosmos_odyssey.sql*
3. Navigate to the **server** folder with a **CLI** and install the back-end packages. 
    ```
    $ cd .../cosmos_odyssey/server
    ```
    ```
    $ npm install
    ```
4. Navigate to the **client** folder using a **CLI** and install the front-end packages.
    ```
    $ cd ..
    ```
    ```
    $ cd client
    ```
    ```
    $ npm install
    ```
5. Open the project directory with a code editor and inside the **server** folder create a **.env** file with the following rows
    ```
    PG_USER=[your postgres user here]
    PG_PW=[your postgres password]
    PG_HOST=localhost
    PG_PORT=5432
    PG_DB=[name of the database you created]
    ```
6. Still using a code editor open a file named **host.js** located in */cosmos_odyssey/client/src/Services/host.js* and verify that it is set to *http://localhost:5000*
    ```javascript
    const host = 'http://localhost:5000';

    export default host;
    ```
    * This determines where the server's access point is located

7. You are ready to go.

### Running Locally
1. You must run two instances of node environments at once, one for the **client** and one for the **server**.
2. Open a terminal / CLI and navigate to */cosmos_odyssey/server* and start the **server**.
    ```
    $ cd .../cosmos_odyssey/server
    ```
    ```
    $ npm run dev
    ```
3. Open a second terminal / CLI and navigate to */cosmos_odyssey/client* and start the front-end.
    ```
    $ cd .../cosmos_odyssey/client
    ```
    ```
    $ npm start
    ```
4. The application should now be accessible at http://localhost:3000