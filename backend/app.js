import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/route';

dotenv.config();

const app = express();
const port = process.env.PORT || 8010;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Express is running on port ${port}`);
});
