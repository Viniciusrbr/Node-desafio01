import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

// to do: create a route for each method
export const routes = [
  {
    method: 'GET',
  },
  {
    method: 'POST',
  },
  {
    method: 'PUT',
  },
  {
    method: 'DELETE',
  },
  {
    method: 'PATCH',
  }
]