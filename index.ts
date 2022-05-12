import { serve } from "https://deno.land/std@0.138.0/http/server.ts";

// main handler
const hand = async (req: Request): Promise<Response> => {
  let body = "";
  if (req.body) {
    body = await req.text();
  }
  
  return new Response(body, {headers:{
    "X-Firefox-Spdy": "h2"
  }});
};

// listen server on port 3000
serve(hand, {
  port: 3000,
});