const data = await fetch("https://jsonplaceholder.typicode.com/users");
const blob = await data.text();

await Deno.writeTextFile("data.json", blob);
