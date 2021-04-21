import './Search.css';
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import SearchResult from '../SearchResult/SearchResult';

import { getFlights, getCompanies } from '../../Services/flights';

const Search = ({ location, history }) => {
    const [priceListId, setPriceListId] = useState();
    const [flights, setFlights] = useState();
    const [validUntil, setValidUntil] = useState();
    const [companies, setCompanies] = useState();
    const [compSelect, setCompSelect] = useState('');

    // search queries
    const from = queryString.parse(location.search).from;
    const to = queryString.parse(location.search).to;
    const filter = queryString.parse(location.search).filter;
    const company = queryString.parse(location.search).company;

    // company flights search
    const onSubmit = (e) => {
        e.preventDefault();
        if(compSelect === company) return;
        history.push(compSelect === '' ? `/search?from=${from}&to=${to}` : `/search?from=${from}&to=${to}&company=${compSelect}`);
    };

    // get available companies
    useEffect(() => {
        async function getCompanySelection(){
            const result = await getCompanies();
            if(!result){
                alert('Something went wrong, please refresh the page');
                return;
            };
            setCompanies(result);
        };

        getCompanySelection();
        
    }, []);

    // get results for search
    useEffect(() => {
        async function getResults(){
            const data = {
                from: from,
                to: to
            };
            if(filter) data.filter = filter;
            if(company) data.company = company;

            const result = await getFlights(data);
            if(!result) {
                alert('Something went wrong, please refresh the page')
                return;
            };

            setPriceListId(result.id);
            setFlights(result.options);
            setValidUntil(result.validUntil);
        };

        getResults();
        
        // set selected company option if available
        if(company) setCompSelect(company);

    }, [filter, company]);


    // display available companies
    let companySelection;
    if(companies){
        companySelection = companies.map((item, i) => (
            <option value={item} key={i} >{item}</option>
        ));
    };

    // display flight options
    let results;
    if(flights){
        results = flights.map((item, i) => (
            <SearchResult data={item} validUntil={validUntil} key={i} priceListId={priceListId} /> 
        ));
    };

    return (
        <div className='search-page' >
            <Header />
            <div className='search-page-content' >
                <div className='search-header' >
                    <h3>Routes From {from} To {to}</h3>
                </div>
                <div className='search-filter' >
                    <div className='search-filter-selection' >
                        <div className='search-filter-link' >
                            <p><Link to={company !== undefined ? `/search?from=${from}&to=${to}&filter=price&company=${company}` : `/search?from=${from}&to=${to}&filter=price`} >Cheapest</Link></p>
                        </div>
                        <div className='search-filter-link' >
                            <p><Link to={company !== undefined ? `/search?from=${from}&to=${to}&filter=distance&company=${company}` : `/search?from=${from}&to=${to}&filter=distance`} >Shortest</Link></p>
                        </div>
                        <div className='search-filter-link' >
                            <p><Link to={company !== undefined ? `/search?from=${from}&to=${to}&filter=traveltime&company=${company}` : `/search?from=${from}&to=${to}&filter=traveltime`} >Quickest</Link></p>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className='company-selector' >
                        <select onChange={(e) => setCompSelect(e.target.value)} value={compSelect} >
                            <option value='' >Select a company</option>
                            {companySelection}
                        </select>
                        <button>Filter</button>
                    </form>
                </div>
                {results}
            </div>
        </div>
    );
};

export default Search;