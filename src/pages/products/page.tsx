import { Table } from 'antd'
import { useProducts } from './useProducts'

export const ProductsPage = () => {
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
}
