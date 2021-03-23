const jwt = require("jsonwebtoken")

// Create a secret key for signing the token
// Later on we can store this in the server so it doesn't exist in the code
// 'my secret' is just for development
const secret = process.env.ACCESS_TOKEN_SECRET || 'my secret'

function generateToken(data) {
  const token = jwt.sign(data, secret, { expiresIn: "100000000000000000000000s" })
  return token
}
exports.generateToken = generateToken


app.post('/api/login', function(req, res) {
    
    // get the user from the database
  
    // Create an jwt from the user details and send the token back to the client
    const accessToken = jwt.generateToken({id: user.id, username: user.username})
    res.send({ accessToken: accessToken })
  })
  
  // Create a new user
  app.post('/api/login', function(req, res) {
    // save the user to the database
  
    // Create an jwt from the user details and send the token back to the client
    const accessToken = jwt.generateToken({id: user.id, username: user.username})
    res.send({ accessToken: accessToken })
  })