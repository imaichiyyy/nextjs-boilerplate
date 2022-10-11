// src/mocks.js
import { MockedRequest, ResponseResolver, restContext } from 'msw'
import db from 'src/mocks/db'

const getSample: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  const id = req.url.searchParams.get('id')
  const user = id
    ? db.user.findFirst({
        where: {
          id: {
            equals: id,
          },
        },
      })
    : db.user.getAll()
  console.log(user)

  return res(ctx.status(200), ctx.json(user))
}

const postSample: ResponseResolver<MockedRequest, typeof restContext> = async (req, res, ctx) => {
  const { username, id } = await req.json()
  if (!id || !username)
    return res(
      ctx.status(400),
      ctx.json({
        message: '"id" and "username" is requried.',
      }),
    )
  const user = db.user.create({
    id: id,
    username: username,
  })
  console.log(user)

  return res(ctx.status(200), ctx.json(user))
}

const putSample: ResponseResolver<MockedRequest, typeof restContext> = async (req, res, ctx) => {
  const { username, id } = await req.json()
  if (!id || !username)
    return res(
      ctx.status(400),
      ctx.json({
        message: '"id" and "username" is requried.',
      }),
    )
  const updatedUser = db.user.update({
    where: {
      id: {
        equals: id,
      },
    },
    data: {
      username: username,
    },
  })
  console.log(updatedUser)

  return res(ctx.status(200), ctx.json(updatedUser))
}

export { getSample, postSample, putSample }
