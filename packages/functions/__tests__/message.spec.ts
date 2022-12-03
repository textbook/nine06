import type { HandlerResponse } from "@netlify/functions";

import { work as _work } from "@nine06/core";

jest.mock("@nine06/core");
const work = jest.mocked(_work);

import { handler } from "../message";

describe("message handler", () => {
	it("returns 200 OK", async () => {
		work.mockResolvedValue("foo");
		await expect(handler())
			.resolves.toEqual<HandlerResponse>({ body: "foo", statusCode: 200 });
	});
});
