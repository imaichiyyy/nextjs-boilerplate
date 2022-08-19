interface MenuProps {
  value: number
  updateValue: (newValue: number) => void
}

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

export type { MenuProps, TabPanelProps }
