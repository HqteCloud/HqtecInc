// /pages/movies/@id/+data.ts
// Environment: server

export { data };
export type Data = Awaited<ReturnType<typeof data>>;

import { ofetch } from "ofetch";
import type { PageContextServer } from "vike/types";

async function data(pageContext: PageContextServer) {
	const { substack } = pageContext.config.secrets!;
	const { endpoint, resources } = substack;

	const options = {
		baseURL: endpoint,
		method: "GET" as const,
		timeout: 2000
	};

	try {
	const response = await ofetch(resources.posts, options);

	return {
		articles: response,
		error: null,
	};

	} catch (e) {
		return {
			articles: []
		}
	}
}
