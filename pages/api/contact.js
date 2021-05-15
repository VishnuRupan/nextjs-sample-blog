import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, comment } = req.body;

    if (!email || !name || !comment) {
      res.status(422).json({ message: "invald input" });
      return;
    }

    //store in a database
    const newMessage = {
      email,
      name,
      comment,
    };

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.9zydd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: "could not connect" });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "could not store" });
      return;
    }

    client.close();
    res.status(201).json({ message: "sent to db " });
  }
}

export default handler;
