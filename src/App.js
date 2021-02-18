import { BrowserRouter as Router, Route } from "react-router-dom";
import { FaqsConstainer } from "./containers/faqs";
import { FooterContainer } from "./containers/footer";
import JumbotronContainer from "./containers/jumbotron";
import * as ROUTES from "./constants/routes";

export default function App() {
	return (
		<Router>
			<Route exact path={ROUTES.HOME}>
				<JumbotronContainer />
				<FaqsConstainer />
				<FooterContainer />
			</Route>
		</Router>
	);
}
