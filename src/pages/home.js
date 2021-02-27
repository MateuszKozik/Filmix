import { FaqsConstainer } from "../containers/faqs";
import { OptForm, Feature } from "../components";
import { FooterContainer } from "../containers/footer";
import HeaderContainer from "../containers/header";
import JumbotronContainer from "../containers/jumbotron";

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited films and series.</Feature.Title>
					<Feature.SubTitle>Join us Now!</Feature.SubTitle>
					<OptForm>
						<OptForm.Input placeholder="Email address" />
						<OptForm.Button>Try it now</OptForm.Button>
						<OptForm.Break />
						<OptForm.Text>
							Ready to watch? Enter you email to create or restart your
							membership
						</OptForm.Text>
					</OptForm>
				</Feature>
			</HeaderContainer>

			<JumbotronContainer />
			<FaqsConstainer />
			<FooterContainer />
		</>
	);
}
