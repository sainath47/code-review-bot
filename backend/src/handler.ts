import express, { Request, Response } from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.json());

// import {
//   DynamoDBClient
// } from "@aws-sdk/client-dynamodb";
// import {
//   DynamoDBDocumentClient,
//   GetCommand,
//   PutCommand,
// } from "@aws-sdk/lib-dynamodb";

// // Environment variable (ensure it's defined in serverless.yml)
// const USERS_TABLE = process.env.USERS_TABLE as string;

// const client = new DynamoDBClient({});
// const docClient = DynamoDBDocumentClient.from(client);



// // ---------------- GET User ----------------
// app.get("/users/:userId", async (req: Request, res: Response) => {
//   const params = {
//     TableName: USERS_TABLE,
//     Key: {
//       userId: req.params.userId,
//     },
//   };

//   try {
//     const command = new GetCommand(params);
//     const { Item } = await docClient.send(command);

//     if (Item) {
//       const { userId, name } = Item as { userId: string; name: string };
//       res.json({ userId, name });
//     } else {
//       res
//         .status(404)
//         .json({ error: 'Could not find user with provided "userId"' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Could not retrieve user" });
//   }
// });

// // ---------------- POST User ----------------
// app.post("/users", async (req: Request, res: Response) => {
//   const { userId, name } = req.body as { userId: string; name: string };

//   if (typeof userId !== "string") {
//     return res.status(400).json({ error: '"userId" must be a string' });
//   } else if (typeof name !== "string") {
//     return res.status(400).json({ error: '"name" must be a string' });
//   }

//   const params = {
//     TableName: USERS_TABLE,
//     Item: { userId, name },
//   };

//   try {
//     const command = new PutCommand(params);
//     await docClient.send(command);
//     res.json({ userId, name });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Could not create user" });
//   }
// });

// // ---------------- 404 Handler ----------------
// app.use((req: Request, res: Response) => {
//   res.status(404).json({ error: "Not Found" });
// });



// ---------------- GET User ----------------
app.get("/git-webhook", async (req: Request, res: Response) => {

    res.status(500).json({ res: "hello from the code-reviewer",method: req.method,
  path: req.path,
  headers: req.headers,
  body: req.body, });
  
});


export const handler = serverless(app);
