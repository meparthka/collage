import { serveTls } from "https://deno.land/std@0.138.0/http/server.ts";

// main handler
const hand = async (req: Request): Promise<Response> => {
  const html = await Deno.readTextFile("./index.html")
  return new Response(html, {
      headers: {
          "Content-Type": "text/html"
      }
  });
};

// listen server on port 443
serveTls(hand, {
  port: 443,
  certFile: "/home/parthka/.local/share/Trash/files/cert/CA/cert.crt",
  keyFile: "/home/parthka/.local/share/Trash/files/cert/CA/cert.key"
});