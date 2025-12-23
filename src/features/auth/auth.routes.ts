import { Router } from 'express'
import { AuthController } from './auth.controller'

const authRoutes = Router()
const authController = new AuthController()

authRoutes.post('/login', (request, response) =>
  authController.login(request, response)
)

export { authRoutes }
