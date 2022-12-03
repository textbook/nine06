import type { HandlerEvent, HandlerResponse } from "@netlify/functions";

export type Event = Pick<HandlerEvent, "body">;

const handler = async (event: Event): Promise<HandlerResponse> => {
	return { statusCode: 200 };
};

export { handler };
