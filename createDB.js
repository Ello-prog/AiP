const { MongoClient } = require('mongodb');
var data = require('./data.js').data;

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'az2024';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('cars');

  await collection.deleteMany({});
  const insertResult = await collection.insertMany(data);
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
