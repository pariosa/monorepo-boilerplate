import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../reducers/rootReducer'
import {
  setTableOrder,
  setTableOrderBy,
  setTablePage,
  setTableRowsPerPage,
  setTableSelected,
  TableState,
} from '../../reducers/tableReducer'
import { TradePartner } from '../../reducers/tradePartnerReducer'
import EnhancedTableHead from './EnhancedTableHead'
import EnhancedTableToolbar from './EnhancedTableToolbar'
import { getComparator, tableSort } from './HelperFunctions'

interface StateProps {
  table: TableState
  partners: Array<TradePartner>
}

function TradePartnersTable() {
  const { table, partners } = useSelector<State, StateProps>((state: State) => {
    return {
      table: state.table,
      partners: state.partners,
    }
  })

  const { order, orderBy, selected, page, rowsPerPage } = table

  const dispatch = useDispatch()

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof TradePartner
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    dispatch(setTableOrder(isAsc ? 'desc' : 'asc'))
    dispatch(setTableOrderBy(property))
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = partners.map((n: TradePartner) => n.vendorId)
      dispatch(setTableSelected(newSelected))
      return
    }
    dispatch(setTableSelected([]))
  }

  const handleClick = (_event: React.MouseEvent<unknown>, vendorId: string) => {
    const selectedIndex = selected.indexOf(vendorId)
    let newSelected: string[] = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, vendorId)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    dispatch(setTableSelected(newSelected))
  }

  const handleChangePage = (_event: unknown, newPage: number) => {
    dispatch(setTablePage(newPage))
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setTableRowsPerPage(parseInt(event.target.value, 10)))
    dispatch(setTablePage(0))
  }

  const isSelected = (vendorId: string) => selected.indexOf(vendorId) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - partners.length) : 0

  return (
    partners && (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby='tableTitle'
              size={'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={partners.length}
              />
              <TableBody>
                {tableSort(partners, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.vendorId.toString())
                    const labelId = `enhanced-table-checkbox-${index}`
                    return (
                      <TableRow
                        hover
                        onClick={(event) =>
                          handleClick(event, row.vendorId.toString())
                        }
                        role='checkbox'
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.vendorId}
                        selected={isItemSelected}
                      >
                        <TableCell padding='checkbox'>
                          <Checkbox
                            color='primary'
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='none'
                        >
                          {row.vendorId}
                        </TableCell>
                        <TableCell>{row.vendorName.toString()}</TableCell>
                      </TableRow>
                    )
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={partners.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    )
  )
}

export default TradePartnersTable
