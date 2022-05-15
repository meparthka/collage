import { Router, Req, Res } from "https://deno.land/x/denorest@v2.0/mod.ts"
import v1 from "./v1.ts"
import v2 from "./v2.ts"
import v3 from "./v3.ts"

const r = new Router();

r.use((req: Req, res: Res) => {
    console.log(`path: ${req.url?.pathname} time: ${Date()}`);
    
    res.headers = {
        "Content-Type": "application/json"
    }
})

r.all("/", (req: Req, res: Res) => {
    res.headers = {
        ...res.headers,
        "Content-Type": "text/html"
    }
    res.reply = "Hello, World!";
})

const api = new Router()

api.use((_, res: Res) => {
    res.headers = {
        ...res.headers,
        "Router": "API"
    }
})

api.all("/", (req: Req, res: Res) => {
    res.status = 200
    res.reply = {
        
    }
})

api.pre("/v1", v1)
api.pre("/v2", v2)
api.pre("/v3", v3)
r.pre("/api", api)

export default r; 
