import express from 'express'
import mongoose from 'mongoose'
import Data from './data.js'
import Videos from './dbmodel.js'

const app = express()
const port = 9000

// Middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next();
})

// DB config
const connection = "mongodb+srv://admin:FlQc82IfgxGwim0p@cluster0.goesw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

app.get('/', (req, res)=>res.status(200).send("Hello World!"))
app.get('/v1/posts', (req, res) => res.status(200).send(Data))
app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
app.post('/v2/posts', (req, res)=>{
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.listen(port, console.log(`Listening on localhost: ${port}`))