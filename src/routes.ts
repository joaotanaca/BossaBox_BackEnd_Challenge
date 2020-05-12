import { Router } from 'express'
import ToolController from './controllers/ToolController'

const routes = Router()

routes.get('/tools', ToolController.index)
routes.post('/tools', ToolController.createTool)
routes.delete('/tools/:id', ToolController.deleteTool)

export default routes
