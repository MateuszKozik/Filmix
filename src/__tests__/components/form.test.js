import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";
import { Link } from "react-router-dom";
jest.mock("react-router-dom");

describe("<Form />", () => {
	it("renders the <Form /> with populated data", () => {
		const { container, getByText, getByPlaceholderText } = render(
			<Form>
				<Form.Title>Sign In Now</Form.Title>

				<Form.Base>
					<Form.Input placeholder="Email address" onChange={() => {}} />
					<Form.Input
						type="password"
						placeholder="Password"
						onChange={() => {}}
					/>
					<Form.Submit type="submit" disabled>
						Sign In
					</Form.Submit>
				</Form.Base>

				<Form.Text>New to Filmix? Sign up now.</Form.Text>
				<Form.TextSmall>
					Register to watch Your favourite movies!
				</Form.TextSmall>
			</Form>
		);

		expect(getByText("Register to watch Your favourite movies!")).toBeTruthy();
		expect(getByText("Sign In")).toBeTruthy();
		expect(getByText("Sign In").disabled).toBeTruthy();
		expect(getByPlaceholderText("Email address")).toBeTruthy();
		expect(getByPlaceholderText("Password")).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});

	it("rendest the <Form /> with an error", () => {
		const { container, getByText, queryByText } = render(
			<Form>
				<Form.Error>Passowrd is incorrect</Form.Error>
				<Form.Submit type="submit">Sign In</Form.Submit>
			</Form>
		);

		expect(getByText("Passowrd is incorrect")).toBeTruthy();
		expect(queryByText("Sign In").disabled).toBeFalsy();
		expect(container.firstChild).toMatchSnapshot();
	});
});
