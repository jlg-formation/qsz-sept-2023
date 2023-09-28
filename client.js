import { createClient } from "redis";

console.log("about to connect to redis");
const client = await createClient({
  url: "redis://localhost:6379",
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

console.log("Connected with success to redis");

await client.set("key", "value");
const value = await client.get("key");
await client.disconnect();
