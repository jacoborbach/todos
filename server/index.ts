import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { TodoResolver } from "./resolvers/TodoResolver";
import { buildSchema } from "type-graphql";

async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [TodoResolver],
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started!");
}
main();

// require("dotenv").config();
// const massive = require("massive");
// const express = require("express");
// const { User } = require("./userModel");
// const { CONNECTION_STRING, SERVER_PORT } = process.env;
// const app = express();
// app.use(express.json());

// massive({
//   connectionString: CONNECTION_STRING,
//   ssl: { rejectUnauthorized: false },
// }).then((db) => {
//   app.set("db", db);
//   console.log("db working");
// });

// // get todos by user
// app.get("/api/gettodos/:user", async (req, res) => {
//   const { user } = req.params;
//   const db = req.app.get("db");

//   const todos = await db.gettodos(user);

//   if (todos[0]) {
//     // existing user
//     return res.status(200).send(todos);
//   } else {
//     // new user
//     // const [createduser] = await db.createuser(user);
//     const createduser = await User.create({ users: user });
//     return res.status(200).send(createduser);
//   }
// });

// app.post("/api/addtodo", async (req, res) => {
//   const { todo, user_id } = req.body;
//   const db = req.app.get("db");

//   const [createdTodo] = await db.createtodo(todo, user_id);

//   return res.status(200).send(createdTodo);
// });

// app.put("/api/closetodo", async (req, res) => {
//   const { id } = req.body;

//   const db = req.app.get("db");

//   await db.closetodo(id);

//   return res.status(200);
// });

// app.put("/api/opentodo", async (req, res) => {
//   const { id } = req.body;
//   const db = req.app.get("db");

//   await db.opentodo(id);

//   return res.status(200);
// });

// app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
