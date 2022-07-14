import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchGetProducts } from 'api/products'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'

interface DataType {
  name: string
  id: number
  barcode: string
  productName: string
  product: number
  supplier: string
}

export const useProducts = () => {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    total: 0,
    current: 1,
    pageSize: 10,
  })

  const { isLoading, isFetching } = useQuery(
    ['products-list', pagination.total, pagination.current, pagination.pageSize],
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
        sorter: (a, b) =>
          a.productName < b.productName ? -1 : a.productName > b.productName ? 1 : 0,
        render: (value) => (value === '' || !value ? '-' : value),
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
