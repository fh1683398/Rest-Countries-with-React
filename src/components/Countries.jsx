import Country from './Country';
import { use } from 'react'

const Countries = ({ countryPromise }) => {
    const countries = use(countryPromise)


    return (
        <div>
            {countries.map(country => <Country key={country.name.common} country={country}></Country>)}
        </div>
    );
};

export default Countries;