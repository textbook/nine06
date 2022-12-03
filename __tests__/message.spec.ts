import type { HandlerResponse } from "@netlify/functions";

import { handler } from "../functions/message";

describe("message handler", () => {
	it("returns 200 OK", async () => {
		await expect(handler({ body: "" }))
			.resolves.toEqual<HandlerResponse>({ statusCode: 200 });
	});
});
