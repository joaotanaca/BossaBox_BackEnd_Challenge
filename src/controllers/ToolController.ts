/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'
import Tools from '../Schemas/Tools'

class ToolsController {
  public async index (req: Request, res: Response): Promise<Response> {
    const { q, tags } = req.query
    let tools
    if (q) {
      tools = await Tools.find({ title: q })
    } else {
      if (tags) {
        tools = await Tools.find({ tags: { $all: tags } })
      } else {
        tools = await Tools.find()
      }
    }
    return res.json(tools)
  }

  public async createTool (req: Request, res: Response): Promise<Response> {
    const tool = await Tools.create(req.body)
    return res.json({
      Status: '201 Created',
      ContentType: 'application/json',
      data: tool
    })
  }

  public async deleteTool (req: Request, res: Response): Promise<Response> {
    try {
      const tool = await Tools.findByIdAndDelete(req.params.id)
      return res.json({ Status: '204 No Content', data: tool })
    } catch (err) {
      return res.json({ Error: err })
    }
  }
}

export default new ToolsController()
