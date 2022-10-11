import { rest } from 'msw'
import { getSample, postSample, putSample } from 'src/mocks/api/user_sample'

export const handlers = [
  rest.get(process.env.API_DOMAIN + '/user_sample', getSample),
  rest.post(process.env.API_DOMAIN + '/user_sample', postSample),
  rest.put(process.env.API_DOMAIN + '/user_sample', putSample),
]
