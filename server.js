  
//This will be the main file for the app that will be responsible for managing all of the HTTP requests.

const database = require('./mysqlDatabase')

const express = require('express')

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

app.post('/api/Users', (req, res) => {
    const Users = req.body

    database.createItem(Users, (error, UsersId) => {

        if (error) {
            res.send({ error })
            return
        }

        Users.id = UsersId

        res.send({ Users })
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
  
  
  
app.listen(8080, () => {
  console.log("The server is listening on port 8080")
})