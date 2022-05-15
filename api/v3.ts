import { Router, Req, Res } from "https://deno.land/x/denorest@v2.0/mod.ts"

const r = new Router();

r.use((req: Req, res: Res) => {
    res.headers = {
        ...res.headers,
        "V": "3"
    }
})

r.all("/", (req: Req, res: Res) => {
    res.reply = {
        "api": "v3"
    }
})

r.all("/login", (req: Req, res: Res) => {
    res.reply = {
        "api": "v3/login"
    }
})

r.all("/login/:username/:password", (req: Req, res: Res) => {
    res.reply = {
        "api": "v3/login/:username/:password"
    }
})

r.all("/auth/:token", (req: Req, res: Res) => {
    res.reply = {
        "api": "v3/auth/:token"
    }
})

const r1 = new Router()
r1.use((req: Req, res: Res) => {
    res.headers = {
        ...res.headers,
        "Router": "r1"
    }
})
r1.all("/username/:newusername", (req: Req, res: Res) => {
    res.reply = {
        "api": "v3/setting/username/:newusername"
    }
})
r1.all("/password", (req: Req, res: Res) => {
    res.reply = {
        "api": "v3/setting/password"
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
        "api": "v3/post/:username"
    }
})
r2.all("/:postid", (req: Req, res: Res) => {
    res.reply = {
        "api": "v3/post/:username/:postid"
    }
})

r.pre("/setting", r1)
r.pre("/post/:username", r2)

export default r; 
