import Fastify from 'fastify'
import dbConnector from './our-db-connector.js'
import routes from './our-first-routes.js'

const fastify = Fastify({
    logger: true
})
fastify.register(dbConnector)
fastify.register(routes)

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})