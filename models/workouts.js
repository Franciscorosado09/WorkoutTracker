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
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
            
            
        },
        reps: {
            type: Number,
        },

        sets: {
            type: Number,
        },

        
        distance: {
            type: Number,
        },
       
    }]},

    // {
    //     toJSON: {virtuals: true},
    // }
   
);




// This creates our model from the above schema, using mongoose's model method
const Workouts = mongoose.model("Workouts", workoutSchema);

// Export the User model
module.exports = Workouts;