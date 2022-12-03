import type { HandlerResponse } from "@netlify/functions";

const handler = async (): Promise<HandlerResponse> => {
	return { statusCode: 200 };
};

export { handler };
