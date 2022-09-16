import { makeExecutableSchema } from '@graphql-tools/schema'
import { merge } from 'lodash'
import { queryType as Person } from '../Types/Person'
import { queryType as Query } from '../Types/Query'
import { queryType as TradeParter } from '../Types/TradePartner'
import { personResolver } from './resolvers/person'
import { tradePartnerResolver } from './resolvers/tradePartner'

export const schema = makeExecutableSchema({
  typeDefs: [Query, TradeParter, Person],
  resolvers: merge(tradePartnerResolver, personResolver),
})
