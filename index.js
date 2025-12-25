import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const {PORT} = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

console.log("this is my feature branch commit ")

app.listen(PORT||3000, () => {
    console.log(`Server is running on port ${PORT}`);
})