import express from 'express';
import mongoose from 'mongoose';
import router from './src/router.js'
import fileUpload from 'express-fileupload';
const PORT = 5000;

const DB_URL = "mongodb+srv://jest347:Deluvion1993@cluster0.llqg8kh.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.use(express.json()); // on order to read json files such as body req
app.use(fileUpload({}))
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('Server Started'));
    } catch (e) {
        console.log(e);
    }
}

startApp();
