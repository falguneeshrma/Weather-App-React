import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
	let [city, setCity] = useState("");
	let [err, setErr] = useState(false);

	const API_URL = "https://api.openweathermap.org/data/2.5/weather";
	const API_KEY = "f1158c74cd07856f528acd6e62dda7dc";

	let getWeatherInfo = async () => {
		try {
			let response = await fetch(
				`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
			);
			let jsonResponse = await response.json();
			let result = {
				city: city,
				temp: jsonResponse.main.temp,
				tempMin: jsonResponse.main.temp_min,
				tempMax: jsonResponse.main.temp_max,
				humidity: jsonResponse.main.humidity,
				feelsLike: jsonResponse.main.feels_like,
				weather: jsonResponse.weather[0].description,
			};
			console.log(result);
			return result;
		} catch (er) {
			console.log(er);
			throw er;
		}
	};

	let handleChange = (event) => {
		setCity(event.target.value);
	};
	let handleDefault = async (event) => {
		try {
			event.preventDefault();
			console.log(city);
			setCity("");
			let newInfo = await getWeatherInfo();
			updateInfo(newInfo);
		} catch (er) {
			console.log(er);
			setErr(true);
		}
	};

	return (
		<div className="SearchBox">
			<form onSubmit={handleDefault}>
				<TextField
					id="outlined-basiccity"
					label="City Name"
					variant="outlined"
					value={city}
					onChange={handleChange}
					required
				/>
				<br />
				<br />
				<Button variant="contained" type="submit">
					Search
				</Button>
				{err && <p style={{ color: "red" }}>Retry or Check again later.</p>}
			</form>
		</div>
	);
}
