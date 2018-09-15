const express = require('express')
const app = express()

/* Routes */
app.get('/', function (req, res) {
  res.render('index'), {title: 'HelloWorld'}
})

app.post('/register', function (req, res) {
  /* Create the User Document and save it */
  console.log("In Register post!!");


  /* Pull the infromation from the post - either postman or html */
  if ( req.is('application/json') ){ // Postman
    console.log("This is a reqeust from postman!")

    var new_user = new User ({ name: 'Laurie'
                               role: 'Superhero',
                               pin: '1112',
                               phone: '617-922-1313'})




  } else{ // Html Form
    console.log("This is a reqeust from html!")

  }

  /* Create a schema entry and save it */
  new_user.save((function (err) {
  if (err) return handleError(err);
    console.log("saved!")
    // saved!
  });)

  console.log("End of the register post!")

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
