import { useMemo, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { InputRef } from 'antd'
import { fetchGetProducts } from 'api/products'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { FilterConfirmProps } from 'antd/es/table/interface'
import { getSearchTable } from 'components/search'

interface DataType {
  name: string
  id: number
  barcode: string
  productName: string
  product: number
  supplier: string
}

export const useSearch = () => {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    total: 0,
    current: 1,
    pageSize: 10,
  })

  const searchInput = useRef<InputRef>(null)

  const handleSearch = (selectedKeys: string[], confirm: (param?: FilterConfirmProps) => void) => {
    confirm()
  }

  const handleReset = (clearFilters: () => void) => {
    clearFilters()
  }

  const { isLoading, isFetching } = useQuery(
    ['products-list-with-search', pagination.total, pagination.current, pagination.pageSize],
    () => fetchGetProducts(pagination.current, pagination.pageSize),
    {
      onSuccess: (res) => {
        setData(res.items)
        setPagination({ ...pagination, total: res.total_count })
      },
    },
  )

  const handleTableChange = (newPagination: TablePaginationConfig) => {
    setPagination(newPagination)
  }

  const columns: ColumnsType<DataType> = useMemo(
    () => [
      {
        title: 'Product Name',
        dataIndex: 'productName',
        ...getSearchTable(searchInput, handleSearch, handleReset),
      },
      {
        title: 'Product Type',
        dataIndex: 'name',
        render: (value) => (value === '' || !value ? '-' : value),
        sorter: (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
      },

      {
        title: 'Product Id',
        dataIndex: 'product',
        sorter: (a, b) => a.product - b.product,
      },
      {
        title: 'Supplier',
        dataIndex: 'supplier',
      },
      {
        title: 'Barcode',
        dataIndex: 'barcode',
      },
    ],
    [],
  )

  return { data, columns, pagination, isLoading, isFetching, handleTableChange }
}
