import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries'

const countryPromise = fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies')
  .then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<h2>Nadir on the go....</h2>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
