import express, {Express, Request, Response} from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

app.get('/test', (req: Request, res: Response) => {
    res.send('TEST API Freki')
})

app.get('/freki', (req: Request, res: Response) => {
    res.send('TEST API Freki')
})

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000 !`)
})