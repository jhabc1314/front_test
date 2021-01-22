// const hostname = '0.0.0.0';

// const port=8080;

// const listener=Deno.listen({hostname, port});
// console.log(`Listening on ${hostname}:${port}`);
// for await (const conn of listener) {
//     Deno.copy(conn, conn);
// }

import {serve} from "https://deno.land/std@0.83.0/http/server.ts";

const server = serve({port:8000});
console.log("http://localhost:8000");
for await (const req of server) {
    req.respond({body:"Hello,world\n"});
}
