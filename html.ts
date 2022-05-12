import { serve } from "https://deno.land/std@0.138.0/http/server.ts";

// main handler
const hand = async (req: Request): Promise<Response> => {
  const html = await Deno.readTextFile("./index.html")
  return new Response(html, {
      headers: {
          "Content-Type": "text/html"
      }
  });
};

// listen server on port 3000
serve(hand, {
  port: 3000,
});
