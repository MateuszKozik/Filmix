import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
	it("renders the <Feature /> with populated data", () => {
		const { container, getByText } = render(
			<Feature>
				<Feature.Title>Unlimited films and series.</Feature.Title>
				<Feature.SubTitle>Join us Now!</Feature.SubTitle>
			</Feature>
		);

		expect(getByText("Unlimited films and series.")).toBeTruthy();
		expect(getByText("Join us Now!")).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it("renders the <Feature /> with just a title", () => {
		const { container, getByText, queryByText } = render(
			<Feature>
				<Feature.Title>Unlimited films and series.</Feature.Title>
			</Feature>
		);

		expect(getByText("Unlimited films and series.")).toBeTruthy();
		expect(queryByText("Join us Now!")).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it("renders the <Feature /> with just a subtitle", () => {
		const { container, getByText, queryByText } = render(
			<Feature>
				<Feature.SubTitle>Join us Now!</Feature.SubTitle>
			</Feature>
		);

		expect(queryByText("Unlimited films and series.")).toBeFalsy();
		expect(getByText("Join us Now!")).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
