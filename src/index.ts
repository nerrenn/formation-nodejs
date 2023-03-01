import fastify from "fastify";

const app = fastify()

app.listen({port: process.env.PORT as any, host: process.env.HOST}, ()=> {
    console.log(`Le serveur http est prêt sur l'address : ${process.env.HOST}:${process.env.PORT}`)
})

app.get('/', ()=> {
    return 'Bienvenue sur mon serveur'
})

app.get('/hello', ()=> {
    return'Bonjour tout le monde'
})