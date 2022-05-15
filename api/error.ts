import { Req, Res } from "https://deno.land/x/denorest@v2.0/mod.ts";

const error404 = (req: Req, res: Res) => {
    res.status = 404
    res.headers = {
        "Content-Type": "application/json"
    }
    res.reply = {
        massage: "API Not Found"
    }
}

const error500 = (req: Req, res: Res) => {
    res.status = 500
    res.headers = {
        "Content-Type": "application/json"
    }
    res.reply = {
        massage: "Internal Server Error"
    }
}

export { error404, error500 }
