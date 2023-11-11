import React from "react";
import { Card, AreaChart, Title } from "@tremor/react";

function RainChart({ weatherData }) {
    if (
        !weatherData ||
        !weatherData.hourly ||
        !Array.isArray(weatherData.hourly.precipitation_probability)
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
		"Rain (%)": weatherData.hourly.precipitation_probability[index],
	}));

	const dataFormatter = (number) => `${number} %`;

	return (
		<Card className="rounded-2xl sm:w-[25rem] lg:w-[45rem] xl:w-[81rem]">
			<Title>Chances of Rain</Title>
			<AreaChart
				className="mt-3"
				data={data}
				showLegend
				index="time"
				categories={["Rain (%)"]}
				colors={["blue"]}
				minValue={0}
				maxValue={100}
				valueFormatter={dataFormatter}
                yAxisWidth={45}
			/>
		</Card>
	);
}

export default RainChart;
