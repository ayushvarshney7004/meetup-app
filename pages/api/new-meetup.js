// /api/new-meetup
//POST /api/new-meetup
import { MongoClient } from "mongodb";
async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    //const{ image ,title, address, description} = data;

    const client = await MongoClient.connect(
      "mongodb+srv://ayush003:ayu9953@first-app-nextjs.qb5yptu.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "meetup inserted !" });
  }
}
export default Handler;
