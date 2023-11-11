import React from "react";
import { Card, AreaChart, Title, NumberInput } from "@tremor/react";

function TempChart({ weatherData }) {
    if (
        !weatherData ||
        !weatherData.hourly ||
        !Array.isArray(weatherData.hourly.uv_index) ||
        !Array.isArray(weatherData.hourly.temperature_2m)
      ) {
        return null;
      }
	const hourly = weatherData?.hourly.time.map((time) =>
		new Date(time)
			.toLocaleTimeString("en-US", {
				hour: "numeric",
				hour12: false,
			})
	).slice(1, 25);

	const data = hourly.map((hour, index) => ({
		time: hour,
		"UV Index": weatherData.hourly.uv_index[index],
		"Temperature (C)": weatherData.hourly.temperature_2m[index],
	}));

	const dataFormatter = (number) => `${number} °C`;

	return (
		<Card className="rounded-2xl sm:w-[25rem] lg:w-[45rem] xl:w-[81rem]">
			<Title>Temperature & UV Index</Title>
			<AreaChart
				className="mt-3"
				data={data}
				showLegend
				index="time"
				categories={["Temperature (C)", "UV Index"]}
				colors={["blue", "rose"]}
				minValue={0}
				valueFormatter={dataFormatter}
                yAxisWidth={45}
			/>
		</Card>
	);
}

export default TempChart;
