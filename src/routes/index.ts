import { Router, Request, Response, RequestHandler } from 'express';

const router = Router()

router.get('/', (req: Request, res: Response) => {
    //let user: string = 'Beatriz'
    let user = {
        nome: 'Beatriz',
        idade: 19
    }

    res.render('home',{
        user
    })
})

//quando usamos middleware, usamos NEXT
const interferir: RequestHandler = (req,res,next) =>{
    //console.log("PASSOU PELO MIDDLEWARE")
    //next significa que liberamos o middleware a pag d. contatos
    let logged = true
    if(logged){
        next()
    }else{
        res.status(404).send("Loggin não permitido")
    } 
}

router.get('/contatos',interferir, (req: Request, res: Response) => {
    //console.log("Executou a pagina de CONTATOS")
    res.render('contatos')
})
router.get('/sobre', (req: Request, res: Response) => {
    res.render('sobre')
})


//rota dinâmica
router.get('/noticia/:slug',(req: Request,res: Response) => {
    let slug: string = req.params.slug
    res.send(`Noticia: ${slug}`)
})
router.get('/voo/:origem-:destino',(req: Request,res: Response) => {
    let{origem, destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

export default router