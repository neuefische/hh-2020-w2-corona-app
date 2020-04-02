import React, { useEffect, useState } from 'react'

function App() {
  const [countryData, setCountryData] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)
  const selectedCountry = countryData[selectedIndex]

  useEffect(() => {
    fetch('https://corona.lmao.ninja/countries?sort=country')
      .then(res => res.json())
      .then(data => setCountryData(data.reverse()))
  }, [])

  return (
    <div>
      {countryData.map((country, index) => (
        <button key={country.country} onClick={() => setSelectedIndex(index)}>
          {country.country}
        </button>
      ))}
      {selectedCountry && (
        <h1>
          Cases in {selectedCountry.country} = {selectedCountry.cases}
        </h1>
      )}
    </div>
  )
}

export default App
