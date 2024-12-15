// const {MongoClient} = require('mongodb');
// //const MongoClient = require.MongoClient;
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function getData(){
//     let result= await client.connect();
//     let db   = result.db("test-1");
//     let collection = db.collection('product');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();




const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'test-1';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('product');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
