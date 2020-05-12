import { Schema, model } from 'mongoose'

const ToolsSchema = new Schema({
  title: String,
  link: String,
  description: String,
  tags: [String]
}, {
  timestamps: true
})

export default model('Tools', ToolsSchema)
