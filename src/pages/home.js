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
						<OptForm.Button>
							<OptForm.ButtonLink to="/signup">Sign up</OptForm.ButtonLink>
						</OptForm.Button>
						<OptForm.Break />
					</OptForm>
				</Feature>
			</HeaderContainer>

			<JumbotronContainer />
			<FaqsConstainer />
			<FooterContainer />
		</>
	);
}
