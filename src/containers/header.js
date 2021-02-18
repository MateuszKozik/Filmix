import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME} alt="Filmix" src="" />
				<Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	);
}
