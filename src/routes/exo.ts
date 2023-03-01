import {FastifyInstance} from "fastify";

export async function exercice(app: FastifyInstance) {
    app.get('/', ()=> {
        return 'Bienvenue sur mon serveur'
    })
    
    app.get('/hello', ()=> {
        return'Bonjour tout le monde'
    })
    
    app.get('/eleves', (request, response)=> {
        response.header('Developed-With', 'fastify')
        return [{id: 1, nom: 'john', prenom:'john', age:30},
                {id: 2, nom: 'rose', prenom:'john', age:36},
                {id: 3, nom: 'jane', prenom:'john', age:40},
                {id: 4, nom: 'jean', prenom:'john', age:38}]
    })
    
}