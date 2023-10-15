import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express()
app.use(express.json())


let cars = [
    {id: "1" , model:"tata"},
    {id: "2" , model:"kia"},
    {id: "3" , model:"mahindra"}

]
 
const options = {
    swaggerDefinition : {
        openapi: "3.0.0",
        info:{
            title: "Node js Api Project",
            version : "1.0.0"
        },
        servers:[
            {
                url: "http://localhost:8080/"
            }
        ]
    },
    apis:[
        "./index.js"
    ]
};


// creating server
 const swaggerSpec = swaggerJSDoc(options);
 app.use("/api-docs" , swaggerUi.serve , swaggerUi.setup(swaggerSpec))

/**
 * @swagger
 * components: 
 *    schemas:
 *       cars:
 *         type: object
 *         properties:
 *                 id:
 *                    type: string
 *                 model:
 *                    type: string
 *  */  



/**
 * @swagger
 * /data:
 *     get:
 *        summary: Get cars information
 *        description: This Api return cars information
 *        responses: 
 *         200:
 *          description: Successful response with car data.
 *          content: 
 *             application/json:
 *               schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/cars'
 * */




//.............get data........//
app.get("/data",(req,res)=>{
    res.status(200).json(cars)
    console.log("hello")
})




app.listen(8080 ,()=>{
    console.log("Server has started on 8080")
})