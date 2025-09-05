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

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { response } from "express";
// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// const ddbClient = new DynamoDBClient({ region: "ap-south-1" });
// const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);
// const tableName = process.env.TABLE_NAME || "ecommerce-products-dev";

const CLIENT_ID = "Ov23liRvM5jyoUAhaWRL";
const CLIENT_SECRET = "1fc7e832f9273d006a3ebd9cb49fcc3c529bf3f2";

// POST /products
export const gitWebhook = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Seeded and fetched" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error",
        error: (error as Error).message,
      }),
    };
  }
};

export const getAccessToken = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    console.log(event.queryStringParameters?.code);

    const params =
      "?client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET +
      "&code=" +
      event.queryStringParameters?.code;
   const data =  await fetch("https://github.com/login/oauth/access_token" + params,{
      method: "POST",
      headers:{
        Accept: "application/json"
      }
    }).then((response)=>{
      return response.json()
    })
    // .then((data)=>{
    //      return {
    //   statusCode: 200,
    //   body: JSON.stringify({data }),
    // };
    // })

     return {
      statusCode: 200,
      body: JSON.stringify({data }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error",
        error: (error as Error).message,
      }),
    };
  }
};

// Default export
export default {
  gitWebhook,
  getAccessToken,
};
