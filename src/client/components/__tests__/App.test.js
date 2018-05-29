import React from "react";
import App from "../App";
import renderer from "react-test-renderer";

describe("App", () => {
	let tree;
	beforeAll(() => {
		const component = renderer.create(
			<App />
		);
		tree = component.toJSON();
	})

	it("returns a single h1", () => {
		expect(tree.type).toBe("h1");
	})

	it("returns Hello World! text", () => {
		expect(tree.children).toEqual(["Hello World!"]);
	})
});