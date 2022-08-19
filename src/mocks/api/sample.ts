// src/mocks.js
import { MockedRequest, ResponseResolver, restContext } from 'msw'

const postSample: ResponseResolver<MockedRequest, typeof restContext> = async (req, res, ctx) => {
  const { username } = await req.json()
  if (!username)
    return res(
      ctx.status(401),
      ctx.json({
        message: 'The "key" does not exist.',
      }),
    )
  return res(
    ctx.status(200),
    ctx.json({
      username: username,
    }),
  )
}

const getSample: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const username = req.url.searchParams.get('username')
  if (!username)
    return res(
      ctx.status(401),
      ctx.json({
        message: 'The "key" does not exist.',
      }),
    )
  return res(
    ctx.status(200),
    ctx.json({
      userName: username,
    }),
  )
}

export { getSample, postSample }
