import { serveTls } from "https://deno.land/std@0.138.0/http/server.ts";

// main handler
const hand = async (req: Request): Promise<Response> => {
  return new Response("Hello, World!", {headers:{
    "X-Firefox-Spdy": "h2"
  }});
};

// listen server on port 443
serveTls(hand, {
  port: 443,
  certFile: "/home/parthka/.local/share/Trash/files/cert/CA/cert.crt",
  keyFile: "/home/parthka/.local/share/Trash/files/cert/CA/cert.key"
});