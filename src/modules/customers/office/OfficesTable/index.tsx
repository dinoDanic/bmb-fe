import { Stack } from '@kodiui/kodiui'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { Office } from 'generated/graphql'
import React, { FC } from 'react'
import {
  StyledContainer,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from 'styles/tables'

interface Props {
  offices: Office[]
}

const columns: ColumnDef<Office>[] = [
  {
    accessorKey: 'id',
    cell: (info) => info.getValue(),
    header: () => 'id',
  },
  {
    accessorKey: 'name',
    cell: (info) => info.getValue(),
    header: () => 'Naziv',
  },
  {
    accessorFn: (row) => row.address,
    id: 'address',
    header: () => 'Adresa',
  },
]

export const OfficesTable: FC<Props> = ({ offices }) => {
  const [data] = React.useState(() => [...offices])
  const [sorting, setSorting] = React.useState<SortingState>([])
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
                  <TableData key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableData>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </StyledContainer>
  )
}
