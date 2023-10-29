import React from 'react'
import { Country,State, City } from 'country-state-city';
import Select from "react-select";

const options = Country.getAllCountries().map((country) => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isocode: country.isoCode,
    },
label: country.name,
}));

function CityPicker() {
  return (
    <div className='text-black'>
        <Select
        options={options} />
    </div>
  )
}

export default CityPicker;