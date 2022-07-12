import { URLController } from './controller/URLController'
import express from 'express'
import mongoose from 'mongoose'
import { config } from './Configs/Constants';

const api = express()
api.use(express.json())

const urlController = new URLController()

api.post('/shorten', urlController.shorten)

api.get('/:hash', urlController.redirect)

mongoose.connect(config.MONGO_CONNECTION)
    .then(() => {
        console.log('Server running and connected on MongoDB 🤡')
        api.listen(5000)        
    })

    .catch((err) => console.log(err))
