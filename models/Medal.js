const { model, Schema } = require('mongoose')

const medalSchema = new Schema (
  {
    name: 'String',
    description: 'String',
    photoUrl: 'String',
    value: Number
  }
)

module.exports = model('Medal', medalSchema)