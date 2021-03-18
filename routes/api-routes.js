const Workout= require('../models/workout')

module.exports = (app) => {






    // need get

app.get ("/api/workouts", (req, res) => {
    console.log("test GET")
    Workout.aggregate([
        {$limit: 7},
        {
            $addFields
            { <newField>: <expression>, ... } }




        }




    ])






}





)


    // post a workout
    // app.post("/api/workouts", (body, res) => {
    //     console.log(body)
    //     console.log('Hello World')
    //     Workout.create(body)
    //       .then(dbWorkout => {
    //         console.log(body)
    //         res.json(dbWorkout);
    //       })
    //       .catch(err => {
    //         res.json(err);
    //       });
    //   });


 // put 


































}