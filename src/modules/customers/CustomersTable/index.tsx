import React, { useEffect } from 'react'
import {
  ColorMods,
  Container,
  CursorMods,
  ifHovered,
  SizeMods,
  Stack,
  TransitionMods,
} from '@kodiui/kodiui'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import styled from '@emotion/styled'
import { theme } from 'styles'
import { useAppDispatch, useAppSelector, useIds } from 'hooks'
import {
  getCustomersByOrganizationIdAction,
  selectCustomers,
} from 'services/customers'
import { Customer } from 'generated/graphql'
import Link from 'next/link'
import { routes } from 'modules/routes'

const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'id',
    cell: (info) => info.getValue(),
    header: () => 'id',
  },
  {
    accessorKey: 'name',
    cell: (info) => info.getValue(),
    header: () => 'Naziv kupca',
  },
  {
    accessorFn: (row) => row.address,
    id: 'address',
    header: () => 'Adresa',
  },
  {
    accessorFn: (row) => row.offices?.map((o) => o.name),
    id: 'offices',
    header: () => 'Poslovnice',
  },
  {
    accessorKey: 'oib',
    header: () => 'oib',
  },
]

export const CustomersTable = () => {
  const dispatch = useAppDispatch()
  const customers = useAppSelector(selectCustomers)
  const { activeOrganizationId } = useIds()

  const [data, setData] = React.useState(() => [...customers])
  const [sorting, setSorting] = React.useState<SortingState>([])

  useEffect(() => {
    if (customers.length > 0) {
      setData(customers)
      return
    }
    if (!activeOrganizationId) return

    dispatch(
      getCustomersByOrganizationIdAction({
        organizationId: activeOrganizationId,
      })
    )
  }, [activeOrganizationId, customers])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })

  return (
    <StyledContainer>
      <Stack>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHeader key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </TableHeader>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Link href={`${routes.customers}/${cell.row.original.id}`}>
                    <TableData key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableData>
                  </Link>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </StyledContainer>
  )
}

const TableRow = styled.tr`
  ${TransitionMods.Base}
`

const Table = styled.table`
  ${SizeMods.FullWidth}/* border-collapse: collapse */
`

const TableBody = styled.tbody`
  tr {
    &:nth-child(1n) {
      background-color: ${theme.color.primaryLighter};
    }
    &:nth-child(2n) {
      background-color: ${theme.color.primaryLight};
    }
    ${CursorMods.Pointer}
    ${ifHovered([ColorMods({ background: theme.color.primary })])}
  }
`

const TableData = styled.td`
  height: 50px;
  padding: 0 30px;
`

const TableHead = styled.thead`
  background-color: ${theme.color.primary};
  color: ${theme.color.primaryDark};
  height: 60px;
`

const TableHeader = styled.th``

const StyledContainer = styled(Container)``
