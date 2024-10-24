//const mysql=require('mysql')
const conection= mysql.createConnection({
    host:'localhost',
    user:'c2340404_stsis',
    password:'siwoni19BI',
    database:'c2340404_stsis'
})

conection.connect((err)=>{
    if(err) throw err
    console.log('la conexion funciona')})

conection.query('SELECT `Zona` , COUNT(*) AS cant FROM `escuelasFP` GROUP BY `Zona`',(err,rows) =>{
    if(err) throw err
    console.log(rows)
    console.log(rows[1].Zona)
    console.log(rows[1].cant)
    
})

conection.end()
