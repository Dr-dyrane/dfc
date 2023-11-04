import {
	RiSunFill,
	RiSunCloudyFill,
	RiCloudyFill,
	RiFoggyFill,
	RiDrizzleFill,
	RiRainyFill,
	RiSnowyFill,
	RiSnowyLine,
	RiThunderstormsFill,
	RiShowersFill,
	RiHeavyShowersFill,
	// Add other weather icons as needed
} from "react-icons/ri";
import { BsCloudSunFill } from "react-icons/bs";

const weatherCodeToIcon = {
	0: RiSunFill,
	1: RiSunCloudyFill,
	2: RiCloudyFill,
	3: BsCloudSunFill,
	45: RiFoggyFill,
	48: RiFoggyFill,
	51: RiDrizzleFill,
	53: RiDrizzleFill,
	55: RiDrizzleFill,
	56: RiDrizzleFill,
	57: RiDrizzleFill,
	61: RiRainyFill,
	63: RiRainyFill,
	65: RiRainyFill,
	66: RiRainyFill,
	67: RiRainyFill,
	71: RiSnowyFill,
	73: RiSnowyFill,
	75: RiSnowyFill,
	77: RiSnowyFill,
	80: RiShowersFill,
	81: RiHeavyShowersFill,
	82: RiHeavyShowersFill,
	85: RiSnowyLine,
	86: RiSnowyLine,
	95: RiThunderstormsFill,
	96: RiThunderstormsFill,
	99: RiThunderstormsFill,
};

function translateToIcon(weatherCode) {
	const icon = weatherCodeToIcon[weatherCode];
	return icon || RiSunCloudyFill; // You can provide a default icon if the code doesn't match any.
}

export { translateToIcon };
