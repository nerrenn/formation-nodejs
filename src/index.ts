import fastify from "fastify";
import fastifyPlugin from "fastify-plugin";
import { calculatrice } from "./routes/calculatrice";
import { exercice } from "./routes/exo";

const app = fastify()

app.listen({port: process.env.PORT as any, host: process.env.HOST}, ()=> {
    console.log(`Le serveur http est prêt sur l'address : ${process.env.HOST}:${process.env.PORT}`)
})

app.register(fastifyPlugin(exercice))
app.register(fastifyPlugin(calculatrice))