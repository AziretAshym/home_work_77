import express from 'express';
import cors from 'cors';
import fileDb from "./fileDb";
import messageRouter from "./routes/messages";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use('/messages', messageRouter);

const run = async () => {
    await fileDb.init();
    app.listen(port, () => console.log(`Server started on port http://localhost:${port}`));
};

run().catch(console.error);