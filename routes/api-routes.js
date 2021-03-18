const Workouts = require('../models/workouts')
// console.log (Workouts)

module.exports = (app) => {



    // app.get("/api/workouts", (req, res) => {
    //     db.Workouts.find({})
    //       .then(dbWorkouts => {
    //         res.json(dbWorkouts);
    //       })
    //       .catch(err => {
    //         res.json(err);
    //       });
    //   });



    // need get

    app.get("/api/workouts", (req, res) => {
        console.log("test GET")
        Workouts.aggregate([{
                    $limit: 7
                },
                {
                    $addFields: {
                        totalDuration: {
                            $sum: "$exercise.duration"
                        }

                    }

                },

            ])
            .then(dbWorkouts => {
                console.log(dbWorkouts);
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err)
            })





    })

    // //range
    // app.get("/api/workouts/range", (req, res) => {
    //     Workout.aggregate([{ $limit: 7 },
    //     {
    //         $addFields: {
    //             totalDuration: {
    //                 $sum: "$exercise.duration"

    //             }
    //         }

    //     },

    //     ])
    //         .then(Workouts => {
    //             res.json(Workouts)
    //         })
    //         .catch(err => {
    //             res.status(err)
    //         })
    // })







    // post a workout
    app.post("/api/workouts", (body, res) => {
        console.log(body)
        console.log('Hello World')
        Workouts.create(body)
            .then(dbWorkouts => {
                console.log(body)
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });


    // put 




    app.put("/api/workouts:id", (req, res) => {
            console.log(req)
            console.log('test put')
            Workouts.findOneAndUpdate({
                _id: req.params.id
            }, {
                $push: 
                {
                    exercise: req.body
                }
            }, 
            
            {
                new: true
            }

        ).then(Workouts => {
            console.log("test")
            console.log(req.body)
            console.log(req.params.id)
            res.json(Workouts)
        }



        ).catch(err => {
            res.json(err)
        })
    });































}