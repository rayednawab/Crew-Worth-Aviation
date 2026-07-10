"use client"

import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

// Custom hook for debouncing search input
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debouncedValue
}

export function PartsClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearch = useDebounce(searchTerm, 300)

  const { data: parts, isLoading } = useQuery({
    queryKey: ['parts', debouncedSearch],
    queryFn: async () => {
      const res = await fetch(`/api/parts?q=${encodeURIComponent(debouncedSearch)}`)
      if (!res.ok) throw new Error('Failed to fetch parts')
      return res.json()
    }
  })

  const columns = [
    {
      accessorKey: "partNumber",
      header: "Part Number",
      cell: ({ row }: any) => <span className="font-medium text-slate-900">{row.original.partNumber}</span>
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "engines",
      header: "Compatible Engines",
      cell: ({ row }: any) => {
        const engines = row.original.engines || []
        if (engines.length === 0) return <span className="text-slate-400">General</span>
        return (
          <div className="flex flex-wrap gap-1">
            {engines.map((e: any, index: number) => (
              <Badge key={e.slug || e.name || index} variant="secondary" className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200">
                {e.name}
              </Badge>
            ))}
          </div>
        )
      }
    },
    {
      accessorKey: "availability",
      header: "Status",
      cell: ({ row }: any) => {
        const status = row.original.availability
        const isAvailable = status === "IN_STOCK"
        return (
          <Badge variant={isAvailable ? "default" : "destructive"} 
                 className={isAvailable 
                   ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]" 
                   : "bg-red-500/10 text-red-600 hover:bg-red-500/20 border border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)]"}>
            <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isAvailable ? "bg-emerald-500" : "bg-red-500"}`}></span>
            {status.replace("_", " ")}
          </Badge>
        )
      }
    }
  ]

  const table = useReactTable({
    data: parts || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-6">
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
        <Input
          placeholder="Search parts, engines, description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-slate-900"
        />
      </div>

      <div className="rounded-md border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="min-w-[600px]">
            <TableHeader className="bg-slate-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="text-slate-600 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-slate-500">
                    Searching database...
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-blue-50/50 even:bg-slate-50/50 cursor-pointer transition-colors border-b border-slate-100"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-5">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-slate-500">
                    No parts found matching your criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
