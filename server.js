  
//This will be the main file for the app that will be responsible for managing all of the HTTP requests.

const database = require('./mysqlDatabase')

const jwt = require('.jwt')
const express = require('express')
const { RSA_SSLV23_PADDING } = require('node:constants')

const app = express()

app.use(express.json()) // tells express to accept any JSON body data that client sends in an http request

//The brower makes an GET HTTP request to application running on localhost:8080 at the /api/items path
app.get('/api/Users', (req, res) => {

    database.allUsers((error, Users) => {
        if (error) {
            res.send({ error })
            return
        }
        res.send({ Users })
    })
})

// ------------- POST -----------------------------------

// 1. Create a post 

app.post('api/posts', jwt.authorize, upload.single('image'), async (req, res) => {

    const {filename, path} = req.file 
    const caption = req.body.caption
    const img_src =
    await s3.uploadFile(req.file)

//save details to database 
console.log(req.user)
database.createPost(img_src, caption, req.user.user_id, (error, insertId) => {
    if (error) {
        res.send({error: error.message})
        return
    }
    res.send({
        id: insertId, 
        img_src, 
        caption,
    })
})
})



app.delete('/api/Users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    database.deleteUsers(id, (error) => {

        if (error) {
            res.send({ error })
            return
        }

        res.send({ Users: { id} })
    })
})
//Express allows us to add query parameters to a url by adding a semi colon before the name of the parameter. So anything that we put in the url after /items/ will be accessible through req.params.id



app.patch('/api/Users/:id', (req, res) => {

    const id = req.params.id
  
    const data = req.body
    console.log(data)
  
    database.completeUsers(id, data, (error) =>{
      if(error) {
        res.send({error})
        return
      }
      
      res.send({Users:{id:id,...data}})
    })
  })
  
  

app.post('/images', (req, res) => {

  res.send("🤗")
})

app.listen(8080, () => console.log("listening on port 8080"))