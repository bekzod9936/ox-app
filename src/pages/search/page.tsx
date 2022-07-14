import { Table } from 'antd'
import { useSearch } from './useSearch'

export const SearchPage = () => {
  const { data, columns, pagination, isLoading, isFetching, handleTableChange } = useSearch()

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
