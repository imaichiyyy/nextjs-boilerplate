interface Labels {
  name: string
  checked: boolean
  category: 'service' | 'department'
}

interface FilterLabelsProps {
  selectedLabels: Labels[]
  updateLabels: (selectedValues: Labels[]) => void
}

export type { Labels, FilterLabelsProps }
