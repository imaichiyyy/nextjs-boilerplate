import { rest } from 'msw'
import { getSample, postSample } from 'src/mocks/api/sample'

export const handlers = [
  rest.get(process.env.API_DOMAIN + '/get_sample', getSample),
  rest.post(process.env.API_DOMAIN + '/post_sample', postSample),
]
