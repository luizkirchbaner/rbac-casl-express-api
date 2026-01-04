import { Router } from 'express';
import { UserController } from './user.controller';
import { ensureAuthenticated } from '@/shared/middlewares/ensure-authenticated.middleware';

const userRoutes = Router();
const userController = new UserController();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: List of users
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter users by name
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
userRoutes.get('/', ensureAuthenticated, (request, response) =>
  userController.get(request, response)
);

export { userRoutes };
