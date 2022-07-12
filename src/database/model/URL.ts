import { prop, getModelForClass } from '@typegoose/typegoose'
import * as mongoose from 'mongoose'

export class URL {
    @prop({ required: true })
    hash: string

    @prop({ required: true })
    originURL: string

    @prop({ required: true })
    shortURL: string
}

export const URLModel = getModelForClass(URL)