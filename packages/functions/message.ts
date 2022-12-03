import type { HandlerResponse } from "@netlify/functions";

import { work } from "@nine06/core";

const handler = async (): Promise<HandlerResponse> => {
	const body = await work();
	return { body, statusCode: 200 };
};

export { handler };
