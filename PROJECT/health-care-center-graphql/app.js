import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import mysql from 'mysql'
import HCCResolver from './graphql/resolver/index.js';

const app = express()

const HCCSchema = buildSchema(`
     type Query {
         getAllUser : [User],
         getAllDoctor : [Doctor]
     }

     type User {
         id : Int,
         firstName : String,
         lastName : String,
         role : String,
         mobileNumber : String,
         emailID : String
         password : String
     }

     type Doctor {
        id : Int,
        name: String,
        address: String
    }
`)

app.listen(8080, () => {
    console.log('server is running on 8080...')
})

app.use('/hcc-graphql', graphqlHTTP({
    schema: HCCSchema,
    rootValue: HCCResolver,
    graphiql: true
}))