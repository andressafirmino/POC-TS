import express from "express";
import "express-async-errors";
import cors from "cors";
import userRouter from "./routes/usersRoute";
import errorHandler from "./middlewares/errorHandle";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));
