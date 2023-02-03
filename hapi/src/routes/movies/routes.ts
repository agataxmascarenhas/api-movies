import type {ServerRoute, Request} from '@hapi/hapi'

import { getAll } from './service'



/** Get All Movies
 * @handle `GET /`
 */
const getAllMovies = Object.freeze<ServerRoute>({
  method: 'GET',
  path: '/',
  handler: (req, h) => {
	const mongo = req.mongo
	const offset = Number(req.query.offset) || 0;
	return getAll(mongo, offset);
  }
})







// /**
//  * @handle `GET /with-content-type`
//  */
// const getWithContentType = Object.freeze<ServerRoute>({
//   method: 'GET',
//   path: '/with-content-type',
//   handler: async (_req, h) => {
//     const res = await Promise.resolve(hello())
//     return h.response(res).header('content-type', 'text/plain')
//   },
// })


/**
 * Routes of the plugin `hello`
 */
export default [getAllMovies]
