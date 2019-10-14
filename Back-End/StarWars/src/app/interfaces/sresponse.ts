import { Nave } from './nave'

export interface SResponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}
