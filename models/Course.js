const { model, Schema } = require('mongoose')

const courseSchema = new Schema (
  {
    title: String,
    image_URL: String,
    description: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    courseCode: {
      type: String,
      default: ''
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question'
      }
    ]
  },
  {
    timestamps: true,
    versionKey:false
  }
)

module.exports = model('Course', courseSchema)