import { FaqsConstainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";

export default function Home() {
	return (
		<>
			<JumbotronContainer />
			<FaqsConstainer />
			<FooterContainer />
		</>
	);
}
