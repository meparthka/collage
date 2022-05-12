import { serve } from "https://deno.land/std@0.138.0/http/server.ts";

// main handler
const hand = async (req: Request): Promise<Response> => {
  let html = await Deno.readTextFile("./index.html");
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let jsond = JSON.parse(await data.text());
  let blob = ``;
  for (const u of jsond) {
    blob += `
      <tr>
        <td>${u.id}</td>
        <td>${u.name}</td>
        <td>${u.username}</td>
        <td>${u.email}</td>
        <td>${u.phone}</td>
      </tr>
`;
  }

  return new Response(html.replace("{data}", blob), {
    headers: {
      "Content-Type": "text/html",
    },
  });
};

// listen server on port 3000
serve(hand, {
  port: 3000,
});
