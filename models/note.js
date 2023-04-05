const {Schema, model} = require("mongoose");

const noteSchema = new Schema({
    text: {
      type: String,
    },
    // name: {
    //   type: String,
    //   required: [true, 'Set name for contact'],
    // },
    // email: {
    //   type: String,
    // },
    // phone: {
    //   type: String,
    // },
    // favorite: {
    //   type: Boolean,
    //   default: false,
    // },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
}, {versionKey: false, timestamps: true});

const Note = model("note", noteSchema);

module.exports = Note;