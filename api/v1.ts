import { Router, Req, Res } from "https://deno.land/x/denorest@v2.0/mod.ts"

const r = new Router();

r.use((req: Req, res: Res) => {
    res.headers = {
        ...res.headers,
        "V": "1"
    }
})

r.all("/", (req: Req, res: Res) => {
    res.reply = {
        "api": "v1"
    }
})

r.all("/login", (req: Req, res: Res) => {
    res.reply = {
        "api": "v1/login"
    }
})

r.all("/register", (req: Req, res: Res) => {
    res.reply = {
        "api": "v1/register"
    }
})

r.all("/auth", (req: Req, res: Res) => {
    res.reply = {
        "api": "v1/auth"
    }
})

const setting = new Router();

setting.use((req:Req, res:Res) => {
    res.headers = {
        ...res.headers,
        "Router": "setting"
    }
})

setting.all('/profile', (req: Req, res: Res) => {
    res.reply = {
        "api": "v1/setting/profile"
    }
})

setting.all('/username', (req: Req, res: Res) => {
    res.reply = {
        "api": "v1/setting/username"
    }
})

r.pre("/setting", setting)

export default r; 
