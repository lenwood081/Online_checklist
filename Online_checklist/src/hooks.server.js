import { connectMongo } from "$lib/Database/connection";

await connectMongo()
   .then(() => {
      console.log("Mongo connection secured :)");
   }).catch(err => {
      console.error(err);
   });

export const handle = async ({event, resolve}) => {
    return await resolve(event);
}