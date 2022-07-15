import { SortingState } from '@tanstack/react-table'
import { Office } from 'generated/graphql'
import { useAppDispatch, useAppSelector, useIds } from 'hooks'
import React, { FC, useEffect } from 'react'
import { selectOffices } from 'services/offices'

export const OfficesTable: FC<Office[]> = (props) => {
  const dispatch = useAppDispatch()
  const offices = useAppSelector(selectOffices)
  const { activeOrganizationId } = useIds()

  const [data, setData] = React.useState(() => [...offices])
  const [sorting, setSorting] = React.useState<SortingState>([])

  return null
  //   useEffect(() => {
  //     if (!activeOrganizationId) return
  //     dispatch(
  //       getCustomersByOrganizationIdAction({
  //         organizationId: activeOrganizationId,
  //       })
  //     )
  //     if (offices.length > 0) setData(offices)
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [activeOrganizationId, offices])

  //   const table = useReactTable({
  //     data,
  //     columns,
  //     state: {
  //       sorting,
  //     },
  //     getCoreRowModel: getCoreRowModel(),
  //     onSortingChange: setSorting,
  //     getSortedRowModel: getSortedRowModel(),
  //     debugTable: true,
  //   })

  //   return (
  //     <StyledContainer>
  //       <Stack>
  //         <Table>
  //           <TableHead>
  //             {table.getHeaderGroups().map((headerGroup) => (
  //               <TableRow key={headerGroup.id}>
  //                 {headerGroup.headers.map((header) => {
  //                   return (
  //                     <TableHeader key={header.id} colSpan={header.colSpan}>
  //                       {header.isPlaceholder ? null : (
  //                         <div
  //                           {...{
  //                             className: header.column.getCanSort()
  //                               ? 'cursor-pointer select-none'
  //                               : '',
  //                             onClick: header.column.getToggleSortingHandler(),
  //                           }}
  //                         >
  //                           {flexRender(
  //                             header.column.columnDef.header,
  //                             header.getContext()
  //                           )}
  //                           {{
  //                             asc: ' 🔼',
  //                             desc: ' 🔽',
  //                           }[header.column.getIsSorted() as string] ?? null}
  //                         </div>
  //                       )}
  //                     </TableHeader>
  //                   )
  //                 })}
  //               </TableRow>
  //             ))}
  //           </TableHead>
  //           <TableBody>
  //             {table.getRowModel().rows.map((row) => (
  //               <TableRow key={row.id}>
  //                 {row.getVisibleCells().map((cell) => (
  //                   <Link
  //                     key={cell.id}
  //                     href={`${routes.offices}/${cell.row.original.id}`}
  //                   >
  //                     <TableData key={cell.id}>
  //                       {flexRender(
  //                         cell.column.columnDef.cell,
  //                         cell.getContext()
  //                       )}
  //                     </TableData>
  //                   </Link>
  //                 ))}
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </Stack>
  //     </StyledContainer>
}
