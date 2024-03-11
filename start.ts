import { serve, file } from "bun";

const PUBLIC = "./public";
const PORT = 3000;

async function fetchq(req: Request) {
	const path = new URL(req.url).pathname;
	const propath = path.length > 1 ? `${PUBLIC}${path}` : `${PUBLIC}/index.html`;
	const res: Response = new Response(file(propath));
	console.log("Propath = ", propath);
	console.dir("== req ==\n", req);
	console.dir("== res ==\n", res);
	return res;
}

const server = serve({
	development: true,
	port: PORT,
	fetch: fetchq,
});

console.log(`Listening on ${server.url} with ID = ${server.id}`);