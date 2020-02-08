const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema (
  {
    username: {
      type: String, 
      required: true
    },
    birthday: {
      type: Date,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['student', 'parent', 'teacher'],
      default: 'student'
    }
  },
  {
    timestamps: true
  }
)

userSchema.plugin(PLM, { usernameField: 'username' })
module.exports = model('User', userSchema)