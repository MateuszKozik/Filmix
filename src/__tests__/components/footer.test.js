import { render } from "@testing-library/react";
import { Footer } from "../../components";

describe("<Footer />", () => {
	it("renders the <Footer /> with populated data", () => {
		const { container, getByText } = render(
			<Footer>
				<Footer.Title>Questions? Contact us</Footer.Title>
				<Footer.Break />
				<Footer.Row>
					<Footer.Column>
						<Footer.Link href="#">About</Footer.Link>
						<Footer.Link href="#">FAQ</Footer.Link>
					</Footer.Column>

					<Footer.Column>
						<Footer.Link href="#">Help</Footer.Link>
						<Footer.Link href="#">Privacy</Footer.Link>
						<Footer.Link href="#">Cookie Preferences</Footer.Link>
					</Footer.Column>

					<Footer.Column>
						<Footer.Link href="#">Refund Policy</Footer.Link>
						<Footer.Link href="#">Terms</Footer.Link>
					</Footer.Column>

					<Footer.Column>
						<Footer.Link href="#">Facebook</Footer.Link>
						<Footer.Link href="#">Twitter</Footer.Link>
					</Footer.Column>
				</Footer.Row>
				<Footer.Break />
				<Footer.Text>Filmix &copy; 2021</Footer.Text>
			</Footer>
		);

		expect(getByText("Questions? Contact us")).toBeTruthy();
		expect(getByText("Cookie Preferences")).toBeTruthy();
		expect(getByText("Terms")).toBeTruthy();
		expect(getByText("Facebook")).toBeTruthy();

		expect(container.firstChild).toMatchSnapshot();
	});
});
