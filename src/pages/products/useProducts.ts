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
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Product Name',
        dataIndex: 'productName',
      },
      {
        title: 'Product Id',
        dataIndex: 'product',
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
