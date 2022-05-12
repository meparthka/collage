# Inspecting the incoming request  | Deno.

## Run without clone

### HTTP Server e.g. 1
```console
deno run --allow-net --allow-read https://raw.githubusercontent.com/elparthka/collage/day-4/index.ts
```

### HTTP Server e.g. 2
```console
deno run --allow-net --allow-read https://raw.githubusercontent.com/elparthka/collage/day-4/html.ts
```

## Clone Repo.
```console
git clone --branch=day-4 https://github.com/elparthka/collage.git
cd collage
```

## Run

### HTTP Server e.g. 1
```console
deno run --allow-net --allow-read index.ts
```

### HTTP Server e.g. 2
```console
deno run --allow-net --allow-read html.ts
```
