import { render, fireEvent, queryByText } from "@testing-library/react";
import faqsData from "../../fixtures/faqs.json";
import { Accordion } from "../../components";

describe("<Accordion />", () => {
	it("renders the <Accordion /> with populated data", () => {
		const { container, getByText } = render(
			<Accordion>
				<Accordion.Title>Frequently Asked Questions</Accordion.Title>
				{faqsData.map((item) => (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		);

		expect(getByText("Frequently Asked Questions")).toBeTruthy();
		expect(getByText("What is Filmix?")).toBeTruthy();
		expect(getByText("How much does Filmix cost?")).toBeTruthy();
		expect(getByText("Where can I watch?")).toBeTruthy();
		expect(getByText("How do I cancel?")).toBeTruthy();
		expect(getByText("What can I watch on Filmix?")).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it("opens and closes the <Accordion /> component", () => {
		const { container, queryByText } = render(
			<Accordion>
				<Accordion.Title>Frequently Asked Questions</Accordion.Title>
				{faqsData.map((item) => (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		);

		const whatisFlimixBodyText =
			"Filmix is a streaming service that offers a wide variety of films and series!";

		expect(queryByText(whatisFlimixBodyText)).toBeFalsy();
		fireEvent.click(queryByText("What is Filmix?"));
		expect(queryByText(whatisFlimixBodyText)).toBeTruthy();
		fireEvent.click(queryByText("What is Filmix?"));
		expect(queryByText(whatisFlimixBodyText)).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
