import express from 'express'; //ES modules
import diaryRouter from './routes/diaries'

const app = express();

app.use(express.json());//middleware

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('some pinged here!!!');
    res.send('pong')
})


app.use('/api/diaries', diaryRouter)


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})