// 1
const mysql = require('mysql')

// 2
const dbDetails = {
  connectionLimit : 10,
  host     : process.env.MYSQL_HOST || '	xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : process.env.MYSQL_USERNAME || 'p1toy5a5thu79on7',
  password : process.env.MYSQL_PASSWORD || 'x8p62415oyd9js7w',
  database : process.env.MYSQL_DATABASE || 'v9n9p0ufoy9a9mt8'
}
const connection = mysql.createConnection(dbDetails)
//host for '%'? instead of 'localhost'?

// 3
function allTasks(callback) {
    const query = `
      SELECT * 
      FROM users
    `
    connection.query(query, null, (error, results, fields) => {
      callback(error, results)
    })
  }
exports.allTasks = allTasks

function createTask(user, callback) {
    const query = `
      INSERT INTO users (FirstName, LastName, Email, Password, UserName, Birthday, FavoritePlant)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const params = [user.FirstName, user.LastName, user.Email, user.Password, user.UserName, user.Birthday, user.FavoritePlant]
    connection.query(query, params, function (error, result, fields) {
      callback(error, result)
    })
    console.log("post message", createTask);
  }  
exports.createTask = createTask

function deleteTask(taskId) {

}
exports.deleteTask = deleteTask

function completeTask(taskId, data) {

}
exports.completeTask = completeTask