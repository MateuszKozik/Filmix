import { render, fireEvent } from "@testing-library/react";
import { Player } from "../../components";

describe("<Player />", () => {
	it("renders the <Player /> with short test video", () => {
		const { container, getByText, queryByTestId } = render(
			<Player>
				<Player.Button />
				<Player.Video scr="/video/bunny.mp4" />
			</Player>
		);

		expect(queryByTestId("player")).toBeFalsy();
		fireEvent.click(getByText("Watch"));

		expect(queryByTestId("player")).toBeTruthy();
		fireEvent.click(queryByTestId("player"));

		expect(queryByTestId("player")).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
