import { serve } from "https://deno.land/std@0.138.0/http/server.ts";

// main handler
const hand = async (req: Request): Promise<Response> => {
  return new Response("Hello, World!");
};

// listen server on port 3000
serve(hand, {
  port: 3000,
});
