import { FaqsConstainer } from "../containers/faqs";
import { OptForm } from "../components";
import { FooterContainer } from "../containers/footer";
import HeaderContainer from "../containers/header";
import JumbotronContainer from "../containers/jumbotron";

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<OptForm>
					<OptForm.Input placeholder="Email address" />
					<OptForm.Button>Try it now</OptForm.Button>
					<OptForm.Break />
					<OptForm.Text>
						Ready to watch? Enter you email to create or restart your membership
					</OptForm.Text>
				</OptForm>
			</HeaderContainer>

			<JumbotronContainer />
			<FaqsConstainer />
			<FooterContainer />
		</>
	);
}
