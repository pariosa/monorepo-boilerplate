import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express } from 'express'
import { schema } from './graphql/schema'
import routes from './routes'

async function server(): Promise<void> {
  dotenv.config()

  const PORT = process.env.BACKEND_PORT || 8080
  const app: Express = express()
  const server = new ApolloServer({ schema })

  // todo: map these cors to environments
  app.use(
    cors({
      origin: 'http://localhost:3001',
    })
  )

  app.use(routes)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  await server.start()

  server.applyMiddleware({ app })

  app.listen(PORT, () =>
    console.log(
      `Running on ${PORT} ⚡Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  )
}

server()
