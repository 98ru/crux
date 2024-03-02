import { serve, file } from "bun";

const PUBLIC = "./public";
const PORT = 3000;

async function fetchq(req: Request) {
	const path = new URL(req.url).pathname;
	const propath = `${PUBLIC}${path}`;
	const res: Response = new Response(file(propath));
	console.log(propath);
	console.dir("== req ==\n", req);
	console.dir("== res ==\n", res);
	return res;
}

serve({
	development: true,
	port: PORT,
	fetch: fetchq,
});
