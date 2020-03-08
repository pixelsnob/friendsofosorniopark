
import mongoose from 'mongoose';

var EventSchema = new mongoose.Schema({
  date: String,
  url: String,
  name: String
});

let connection;

const connectToMongo = async () => {
  if (!connection) {
    connection = await mongoose.createConnection(
      process.env.DB_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useUnifiedTopology: true
      }
    );
  }
  
  return {
    connection,
    models: {
      Event: connection.model('Event', EventSchema)
    }
  };
}

export default handler => async (req, res) => {
  const { connection, models } = await connectToMongo();
  try {
    await handler(req, res, connection, models);
  } catch (e) {
    connection.close();
    res.status(500).json({ error: e.message || 'DB connection failed' });
  }
 
}

