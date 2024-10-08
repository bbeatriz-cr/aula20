//importando o express 
import express, {Request, Response} from 'express'
import path from 'path'

//importanto o arquivo index.ts das rotas
import mainRoutes from './routes/index'

//usando express 
const server = express()

//configuração da pasta public
server.use(express.static(path.join(__dirname,'../public')))

//inserindo a rota no servidor
server.use(mainRoutes)

//página não encontrada
server.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada")
})

//reg - Request
//res - Response
//get para só exibir --- post precisa de login


//gerar o servidor na porta 3000
server.listen(3000)
