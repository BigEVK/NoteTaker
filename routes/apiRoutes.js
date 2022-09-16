const router = require("express").Router();
const { response } = require("express");
const fs = require("fs");
const { notes } = require("../db/db.json");

router.get("/notes", (req, res) => {
  //     let results = notes;
  //     if (req.query) {
  //         results = filterByQuery(req.query, results);
  //     }
  //     res.json(results);
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    // for (var i = 0; i < data.length; i++){
    //     box.push(JSON.parse(data))
    // }

    // console.log(data.length);
    res.json(JSON.parse(data));
  });
});

// router.get('/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// })

router.post("/notes", (req, res) => {
  var saveNotes = [];
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    // console.log(data.length);
    data = JSON.parse(data);
    console.log(data);
    // res.json(JSON.parse(data));
    for (var i = 0; i < data.length; i++) {
      saveNotes.push(data[i]);
    }
    console.log(saveNotes);
    const note = {
      title: req.body.title,
      text: req.body.text,
    };
    saveNotes.push(note)
    fs.writeFile("./db/db.json", JSON.stringify(saveNotes), function (err) {
      if (err) console.log(err);
      console.log("Your note was successfully added");
      res.json("Your note was added");
    });
  });

  console.log(req.body);
});


// router.delete("/:id", (req, res) => {
//   var deleteNote = [];
//   fs.readFile("./db/db.json", "utf8", function (err, data) {
//     // console.log(data.length);
//     data = JSON.parse(data);
//     console.log(data);
//     // res.json(JSON.parse(data));
//     for (var i = 0; i < data.length; i++) {
//       deleteNote.push(data[i]);
//     }
//     console.log(deleteNote);
//     const note = {
//       title: req.body.title,
//       text: req.body.text,
//     };
//     deleteNote.push(note)
//     fs.writeFile("./db/db.json", JSON.stringify(deleteNote), function (err) {
//       if (err) console.log(err);
//       console.log("Your note was successfully deleted");
//       res.json("Your note was deleted");
//     });
//   });

//   // ---------------- Not sure about the following ---------------
//   // let noteId = req.params.id.toString();

//   // let newData = data.filter( note => note.id.toString() !== noteId );

//   // fs.writeFileSync('../db/db.json', JSON.stringify(newData));

//   // response.json(newData);

//   // --------------------------------------------------------------
// });

module.exports = router;
