interface PropType {
  isActive: boolean
}

export const IconSearch = ({ isActive }: PropType) => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
      stroke={isActive ? 'var(--blue)' : '#33312E'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.0004 21L16.6504 16.65'
      stroke={isActive ? 'var(--blue)' : '#33312E'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)