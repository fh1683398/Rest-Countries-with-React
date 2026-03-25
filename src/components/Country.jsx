import { useState } from "react";

const Country = ({ country, showVisitedCountry }) => {

    const [visited, setVisited] =useState(false)

    const handleVisited = ()=>{
        setVisited(!visited)
        showVisitedCountry(country);
    }

    return (
        <div className={`countryStyle ${visited && 'visitedStyle'}`}>
            <h4>Name : {country.name.common}</h4>
            <p>Official: {country.name.official}</p>
            <button onClick={handleVisited}>{visited? "Visited": "Not visited"}</button>
        </div>
    );
};

export default Country;