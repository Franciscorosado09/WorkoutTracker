const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
           
        },

        name: {
            type: String,
            trim: true,
           
        },

        weight: {
            type: Number,
            
            
        },

        sets: {
            type: Number,
        },

        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        },
       
    }]
   
});




// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", workoutSchema);

// Export the User model
module.exports = Workout;