import { createClient } from "redis";

console.log("about to connect to redis");
const client = await createClient({
  url: "redis://localhost:6379",
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

console.log("Connected with success to redis");

await client.flushAll();
for (let i = 0; i < 500; i++) {
  await client.sAdd("titi", "val" + i);
}

await client.disconnect();
