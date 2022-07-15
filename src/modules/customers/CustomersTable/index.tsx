import React, { useEffect } from 'react'
import { Stack } from '@kodiui/kodiui'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useAppDispatch, useAppSelector, useIds } from 'hooks'
import {
  getCustomersByOrganizationIdAction,
  selectCustomers,
} from 'services/customers'
import { Customer } from 'generated/graphql'
import Link from 'next/link'
import { routes } from 'modules/routes'
import {
  StyledContainer,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from 'styles/tables'

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
    if (!activeOrganizationId) return
    dispatch(
      getCustomersByOrganizationIdAction({
        organizationId: activeOrganizationId,
      })
    )
    if (customers.length > 0) setData(customers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <Link
                    key={cell.id}
                    href={`${routes.customers}/${cell.row.original.id}`}
                  >
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
