import { Button, Input, Space } from 'antd'
import type { ColumnType } from 'antd/es/table'
import type { FilterConfirmProps } from 'antd/es/table/interface'
import { IconSearch } from './IconSearch'

interface DataType {
  name: string
  id: number
  barcode: string
  productName: string
  product: number
  supplier: string
}

export const getSearchTable = (
  searchInput: any,
  handleSearch: (
    arg0: string[],
    arg1: {
      (param?: FilterConfirmProps | undefined): void
      (param?: FilterConfirmProps | undefined): void
    },
  ) => void,
  handleReset: (arg0: () => void) => void,
): ColumnType<DataType> => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        ref={searchInput}
        placeholder='Search name'
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys as string[], confirm)}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type='primary'
          onClick={() => handleSearch(selectedKeys as string[], confirm)}
          size='small'
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size='small'
          style={{ width: 90 }}
        >
          Reset
        </Button>
        <Button
          type='link'
          size='small'
          onClick={() => {
            confirm({ closeDropdown: false })
          }}
        >
          Filter
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered: boolean) => <IconSearch isActive={filtered} />,
  onFilter: (value, record) =>
    record.name
      .toString()
      .toLowerCase()
      .includes((value as string).toLowerCase()),
  onFilterDropdownVisibleChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current.select(), 100)
    }
  },
  render: (text) => text,
})
