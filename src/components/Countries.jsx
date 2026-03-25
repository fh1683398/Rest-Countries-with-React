import Country from './Country';
import { use, useState } from 'react'

const Countries = ({ countryPromise }) => {

    const [visitedCountry, setVisitedCountry] = useState([])

    const showVisitedCountry = (country) => {
        const isVisited = visitedCountry.includes(country)

        if (isVisited) {
            const newList = visitedCountry.filter(item => item !== country)
            setVisitedCountry(newList)
        } else {
            const newList = [...visitedCountry, country]
            setVisitedCountry(newList)
        }

    }

    const countries = use(countryPromise)

    return (
        <>
            <h1>All countries</h1>
            <p>Visited Countries : {visitedCountry.length}</p>
            {
                visitedCountry.map(country => <li>{country.name.common}</li>)
            }
            <div className='grid-display'>

                {countries.map(country => <Country
                    key={country.name.common}
                    country={country}
                    showVisitedCountry={showVisitedCountry}></Country>)}
            </div>
        </>
    );
};

export default Countries;