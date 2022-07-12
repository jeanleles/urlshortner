import { config } from '../Configs/Constants'
import { Request, response, Response } from "express"
import shortid from 'shortid'
import { URLModel } from '../database/model/URL'

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        //Verificar se a URL ja existe
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if(url) {
            res.json(url)
            return
        }

        //Gerar o Hash e a URL encurtada
        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({ hash, shortURL, originURL })

        res.json(newURL)
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        //Pegar hash da URL
        const { hash } = req.params
        const url = await URLModel.findOne({ hash })

        //Redireciona para a URL original
        if(url) {
            res.redirect(url.originURL)
            return
        }  
        
        res.status(400).json({error: 'URL not found'})
    }
}