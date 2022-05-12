import { serve } from "https://deno.land/std@0.138.0/http/server.ts";

// main handler
const hand = async (req: Request): Promise<Response> => {
  let html = "";
  let reqType = "";
  if (req.headers.get("content-type")) {
    reqType = req.headers.get("content-type")?.split(";")[0] || "";
  } else {
    reqType = "";
  }

  if (req.method === "POST") {
    html = await Deno.readTextFile("./req.html");
    html = html.replace("{req}", reqType);

    if (req.body) {
      html = html.replace("{body}", await req.text());
    }
  } else {
    html = await Deno.readTextFile("./index.html");
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};

// listen server on port 3000
serve(hand, {
  port: 3000,
});
