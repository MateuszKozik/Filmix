import { useContent } from "../hooks";

export default function Browse() {
	const { series } = useContent("series");
	const { films } = useContent("films");
	console.log(series);

	return <p>Hello from the Browse</p>;
}
