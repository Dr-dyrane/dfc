import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { GlobeIcon } from "@heroicons/react/solid";

const options = Country.getAllCountries().map((country) => ({
	value: {
		latitude: country.latitude,
		longitude: country.longitude,
		isocode: country.isoCode,
	},
	label: country.name,
}));

function CityPicker({ onLocationSelect }) {
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [isoCode, setIsocode] = useState(null);
	const [selectedCity, setSelectedCity] = useState(null);
	const navigate = useNavigate();

	const handleSelectedCountry = (option) => {
		setSelectedCountry(option);
		setSelectedCity(null);
	};

	useEffect(() => {
		if (selectedCountry) {
			setIsocode(selectedCountry.value.isocode);
		}
	}, [selectedCountry]);

	const handleSelectedCity = (option) => {
		setSelectedCity(option);
		onLocationSelect && onLocationSelect(option?.value);
		navigate(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
	};

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<div className="text-black/80 flex items-center space-x-2">
					<GlobeIcon className="h-5 w-5 text-black" />
					<label htmlFor="country">Country</label>
				</div>
				<Select
					className="text-black"
					value={selectedCountry}
					onChange={handleSelectedCountry}
					options={options}
				/>
			</div>

			{selectedCountry && (
				<div className="space-y-2">
					<div className="text-black/80 flex items-center space-x-2">
						<GlobeIcon className="h-5 w-5 text-black" />
						<label htmlFor="city">City</label>
					</div>
					<Select
						className="text-black"
						value={selectedCity}
						onChange={handleSelectedCity}
						options={City.getCitiesOfCountry(isoCode).map(
							(city) => ({
								value: {
									latitude: city.latitude,
									longitude: city.longitude,
									countryCode: city.countryCode,
									name: city.name,
									stateCode: city.stateCode,
								},
								label: city.name,
							})
						)}
					/>
				</div>
			)}
		</div>
	);
}

export default CityPicker;
