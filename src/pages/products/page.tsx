import { Table } from 'antd'
import { memo } from 'react'
import { useProducts } from './useProducts'

export const ProductsPage = memo(() => {
  const { data, columns, pagination, isLoading, isFetching, handleTableChange } = useProducts()

  return (
    <Table
      rowKey='id'
      columns={columns}
      dataSource={data}
      pagination={pagination}
      scroll={{ x: true, y: 500 }}
      onChange={handleTableChange}
      loading={isLoading || isFetching}
    />
  )
})
