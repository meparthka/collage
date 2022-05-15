import { WebApp } from "https://deno.land/x/denorest@v2.0/mod.ts";
import { error404, error500 } from "./api/error.ts";
import mainRouter from "./api/router.ts"

const app = new WebApp()

app.set(mainRouter);
app.set404(error404);
app.set500(error500);
app.listen(8080)
