import Paper from '@mui/material/Paper'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPersonsWithRedux as fetchPersons } from '../actions/personActions'
import { fetchTradePartnersWithRedux as fetchTradePartners } from '../actions/tradePartnersActions'
import Header from '../components/Header'
import TradePartnersTable from '../components/Table/TradePartnersTable'
interface StateProps {}

interface DispatchProps {
  fetchPersons: () => void
  fetchTradePartners: () => void
}

type OwnProps = {}

type Props = StateProps & DispatchProps & OwnProps

const mapDispatchToProps = {
  fetchPersons,
  fetchTradePartners,
}

function Index({ fetchPersons, fetchTradePartners }: Props) {
  useEffect(() => {
    fetchPersons()
  }, [fetchPersons])
  useEffect(() => {
    fetchTradePartners()
  }, [fetchTradePartners])
  return (
    <>
      {/* <ApolloProvider client={client}> */}
      <Paper>
        <Header />
        <TradePartnersTable />
      </Paper>
      {/* </ApolloProvider> */}
    </>
  )
}

export default connect<StateProps, DispatchProps, OwnProps>(
  null,
  mapDispatchToProps
)(Index)
