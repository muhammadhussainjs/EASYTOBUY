import express from 'express'
import cors from 'cors'
import db from './config/db.mjs'
import routes from './routes/index.mjs'

const app = express()

app.use(cors());

app.use(express.json())


db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))
app.use('/' , routes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

