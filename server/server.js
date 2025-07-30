import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import postsRoutes from './src/routes/posts.routes.js'
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(postsRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})