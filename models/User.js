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
    photoUrl: {
      type: String,
      default: ''
    }, 
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['student', 'parent', 'teacher'],
      default: 'student'
    },
    status: {
      type: String,
      enum: ['pending', 'active'],
      default: 'pending'
    },
    confirmationCode: {
      type: String,
      unique:true
    }
  },
  {
    timestamps: true,
    versionKey:false
  }
)

userSchema.plugin(PLM, { usernameField: 'username' })
module.exports = model('User', userSchema)