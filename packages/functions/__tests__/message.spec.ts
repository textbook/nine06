import type { HandlerResponse } from "@netlify/functions";

import { handler } from "../message";

describe("message handler", () => {
	it("returns 200 OK", async () => {
		await expect(handler())
			.resolves.toEqual<HandlerResponse>({ statusCode: 200 });
	});
});
