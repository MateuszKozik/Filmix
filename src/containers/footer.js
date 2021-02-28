import { Footer } from "../components";

export function FooterContainer() {
	return (
		<Footer>
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
					<Footer.Link href="https://www.flaticon.com/authors/dinosoftlabs">
						Icons creator
					</Footer.Link>
					<Footer.Link href="https://www.flaticon.com/">Flaticon</Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Break />
			<Footer.Text>Filmix &copy; 2021</Footer.Text>
		</Footer>
	);
}
