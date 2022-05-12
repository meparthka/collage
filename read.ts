let data = await Deno.readTextFile("data.json");
let jsond = JSON.parse(data);

for (const u of jsond) {
    console.log("Id: " + u.id);
    console.log("Name: " + u.name);
    console.log("Em@il: " + u.email);
    console.log("Em@il: " + u.email);
    console.log("--------------------------------");
}
