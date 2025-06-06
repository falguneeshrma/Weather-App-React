import * as React from "react";
import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
	const INIT_URL =
		"https://images.unsplash.com/photo-1479476437642-f85d89e5ad7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

	const HOT_URL =
		"https://images.unsplash.com/photo-1514125669375-59ee3985d08b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	const COLD_URL =
		"https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	const RAIN_URL =
		"https://images.unsplash.com/photo-1605035015406-54c130d0bf89?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

	return (
		<div className="InfoBox" id="root">
			<div className="card-container">
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={
							info.humidity > 80
								? RAIN_URL
								: info.temp > 15
								? HOT_URL
								: COLD_URL
						}
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{info.city} &nbsp;
							{info.humidity > 80 ? (
								<ThunderstormIcon />
							) : info.temp > 15 ? (
								<WbSunnyIcon />
							) : (
								<AcUnitIcon />
							)}
						</Typography>
						<Typography
							variant="body2"
							sx={{ color: "text.secondary", component: "span" }}>
							<p>
								It is <i>{info.weather}</i>
							</p>
							<p>Temperature: {info.temp}&deg;C</p>
							<p>Humidity: {info.humidity}</p>
							<p>Minimum Temperature: {info.tempMin}&deg;C</p>
							<p>Maximum Temperature: {info.tempMax}&deg;C</p>
							<p>The weather feels like: {info.feelsLike}&deg;C</p>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
