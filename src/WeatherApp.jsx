import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
	const [weatherInfo, setWeatherInfo] = useState({
		city: "Delhi",
		feelsLike: 14.62,
		humidity: 77,
		temp: 15.05,
		tempMax: 15.05,
		tempMin: 15.05,
		weather: "mist",
	});

	let updateInfo = (newInfo) => {
		setWeatherInfo(newInfo);
	};
	return (
		<div style={{ textAlign: "center" }}>
			<h2>Weather App</h2>
			<SearchBox updateInfo={updateInfo} />
			<InfoBox info={weatherInfo} />
		</div>
	);
}
