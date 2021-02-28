import { FaqsConstainer } from "../containers/faqs";
import { OptForm, Feature } from "../components";
import { FooterContainer } from "../containers/footer";
import HeaderContainer from "../containers/header";
import JumbotronContainer from "../containers/jumbotron";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited films and series.</Feature.Title>
					<Feature.SubTitle>Join us Now!</Feature.SubTitle>
					<OptForm>
						<Link to="/signup" style={{ textDecoration: "none" }}>
							<OptForm.Button>
								<OptForm.ButtonLink>Sign up</OptForm.ButtonLink>
							</OptForm.Button>
						</Link>

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
