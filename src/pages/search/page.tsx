import { Table } from 'antd'
import { memo } from 'react'
import { useSearch } from './useSearch'

export const SearchPage = memo(() => {
  const { data, columns, pagination, isLoading, isFetching, handleTableChange } = useSearch()

  return (
    <Table
      rowKey='id'
      columns={columns}
      dataSource={data}
      pagination={pagination}
      scroll={{ x: 1000, y: 500 }}
      onChange={handleTableChange}
      loading={isLoading || isFetching}
    />
  )
})
