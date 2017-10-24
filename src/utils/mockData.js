import data from './sample.json'

export const isLoading = {
  entries: [],
  isLoading: true,
  error: null
}

export const hasEntries = {
  "entries": data.entries,
  isLoading: false,
  error: ''
}

export const hasError = {
  entries: [],
  isLoading: false,
  error: 'abc'
}
