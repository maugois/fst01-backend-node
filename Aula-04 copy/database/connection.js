import pkg from 'mongoose';
const { connect, connection, disconnect } = pkg;

const uri = "mongodb+srv://mauriciogoiskonecta:KOYHnjFyzsk2gLWO@dbnosql.gw7vp2o.mongodb.net/firstNoSQL?retryWrites=true&w=majority&appName=DBNoSQL";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await connect(uri, clientOptions);
    await connection.db.admin().command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
  } catch {
    console.log("Error connecting to MongoDB!");
  }
}

run().catch((error) => console.log(error));