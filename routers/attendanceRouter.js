var express = require('express'),
    router = express.Router(),
    Attendance = require('../models/attendanceModel');

router.route('/')

    .post(function(req, res) {

        var attendance = new Attendance();      // create a new instance of the parent model
        attendance.pId = req.body.pId;
        attendance.reason = req.body.reason;
        attendance.dates = req.body.dates;
        attendance.confirm = req.body.confirm;
        // save the attendance and check for errors
        attendance.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'attendance created!' });
        });

    })

    .get(function(req, res) {
        Attendance.find(function(err, parents) {
            if (err)
                res.send(err);

            res.json(parents);
        });
    });

module.exports = router;