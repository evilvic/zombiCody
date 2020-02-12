const { model, Schema } = require('mongoose')

const questionSchema = new Schema (
  {
    content: String,
    image_URL: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option5: String,
    solution: String,
    feedback: String,
    correct: {
      type: Number,
      default: 0
    },
    incorrect: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    versionKey:false
  }
)

module.exports = model('Question', questionSchema)