import mongoose from 'mongoose'

const MONGODB_URI = "mongodb+srv://shevchromaha:shevchroma@cluster0.5yitcpc.mongodb.net/test?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MONGO CONNECTION SUCCESSFUL')

  } catch (e) {
    throw new Error('Error is connecting to mongo db')
  }
}

export default connect;
