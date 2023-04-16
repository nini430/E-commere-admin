import {MongoClient} from 'mongodb'


if(!process.env.MONGO_URI) {
    throw new Error('Mongo URI not specified!')
}


let client;
let clientPromise:Promise<MongoClient>;
let options={};

if(process.env.NODE_ENV==='development') {
    if(!global.mongoClientPromise) {
        client=new MongoClient(process.env.MONGO_URI,options);
        global.mongoClientPromise=client.connect();
    }
    clientPromise=global.mongoClientPromise;
}else{
    client=new MongoClient(process.env.MONGO_URI,options);
    clientPromise=client.connect();
}



export default clientPromise;