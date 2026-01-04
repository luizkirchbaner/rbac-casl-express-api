import { Router } from 'express'
import { UserController } from './user.controller'

const userRoutes = Router()
const userController = new UserController()

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List of users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid input
 */
userRoutes.get('/', (request, response) =>
  userController.get(request, response)
)

export { userRoutes }
