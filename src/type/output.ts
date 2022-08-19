type OutputData = {
  query: string
  hits: string | number
  results: ResultsData[]
}

type ResultsData = {
  filename: string
  content: string
  downloadpath?: string
  score: string | number
  last_modified: any
  keyphrases: string
  organizations?: string
  people?: string
}

export type { OutputData, ResultsData }
