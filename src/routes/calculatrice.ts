import { FastifyInstance } from "fastify";


 export async function calculatrice(app: FastifyInstance){
    type Calculator = {
        Params:{
            x:string
            y:string   
        }
    }
    
    app.get<Calculator>('/calc/add/:x/:y', request => {
        const x = parseFloat(request.params.x)
        const y = parseFloat(request.params.y)
    
        return {
            "result":  x + y,
            "x": x,
            "y": y ,
            "operation": "add"
        } 
    })
    
    app.get<Calculator>('/calc/sub/:x/:y', request => {
        const x = parseFloat(request.params.x)
        const y = parseFloat(request.params.y)
    
        return {
            "result":  x - y,
            "x": x,
            "y": y ,
            "operation": "sub"
        } 
    })
    
    app.get<Calculator>('/calc/mul/:x/:y', request => {
        const x = parseFloat(request.params.x)
        const y = parseFloat(request.params.y)
    
        return {
            "result": x * y,
            "x": x,
            "y": y ,
            "operation": "mul"
        } 
    })
    
    app.get<Calculator>('/calc/div/:x/:y', (request, response) => {
        const x = parseFloat(request.params.x)
        const y = parseFloat(request.params.y)
    
        if(y === 0){
            response.code(400)
    
            return{
                error: "division par 0",
                message: 'il est impossible de diviser un nombre par 0'
            }
        }
        return {
            "result":  x / y,
            "x": x,
            "y": y ,
            "operation": "div"
        } 
    })
    
    type CalculateRoute = {
        Headers: {
            Operation: string
        }
    
        Body:{
            x:number,
            y:number
        }
    }
    
    app.post<CalculateRoute>('/calculate', (request, response) => {
    
        const operation = request.headers.operation
        const x = request.body.x
        const y = request.body.y
    
        if(operation === 'add'){
            return {
                result: x + y,
                x: x,
                y: y,
                operation: operation
            }
        }
    
        if(operation === 'sub'){
            return {
                result: x - y,
                x: x,
                y: y,
                operation: operation
            }
        }
    
        if(operation === 'mul'){
            return {
                result: x * y,
                x: x,
                y: y,
                operation: operation
            }
        }
    
        if(operation === 'div'){
            if(y === 0){
                response.code(400)
        
                return{
                    error: "division par 0",
                    message: 'il est impossible de diviser un nombre par 0'
                }
            }
    
            return {
                result: x / y,
                x: x,
                y: y,
                operation: operation
            }
        }
    
        response.code(400)
    
        return {
            error: 'invalid command',
            message: 'Je ne connais pas l\'operation'  
        }
        
    })
 }