import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
const app: Express = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const PORT: number = 3000

app.get('/', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/swapping.html')
})

app.post('/swapping', (req: Request, res: Response) => {
    let { number1, number2 }: { number1: number, number2: number } = req.body

    number1 += number2
    number2 = number1 - number2
    number1 = number1 - number2

    res.send(`<h3>Swapping of the two numbers is ${number1} : ${number2}</h3>`)
})

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})
