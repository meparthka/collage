import { Router, Req, Res, bodyParse } from "https://deno.land/x/denorest@v2.0/mod.ts"

const r = new Router();

r.use((req: Req, res: Res) => {
    res.headers = {
        ...res.headers,
        "V": "2"
    }
})

r.all("/", (req: Req, res: Res) => {
    res.reply = {
        "api": "v2"
    }
})

r.all("/auth", (req: Req, res: Res) => {
    res.reply = {
        "api": "v2/auth"
    }
})

r.all("/oauth", (req: Req, res: Res) => {
    res.reply = {
        "api": "v2/oauth"
    }
})

const r2 = new Router()
r2.use((req: Req, res: Res) => {
    res.headers = {
        ...res.headers,
        "Router": "r2"
    }
})

r2.all("/", (req: Req, res: Res) => {
    res.reply = {
        "api": "v2/post"
    }
})

r2.post("/:postid", async (req: Req, res: Res) => {
    const body = await bodyParse(req);
    console.log(body.value("name"));
    console.log(body.value("username"));
    console.log(body.value("password"));
    res.reply = {
        "api": "v2/post/:postid"
    }
})

r.pre("/post", r2)

export default r; 
