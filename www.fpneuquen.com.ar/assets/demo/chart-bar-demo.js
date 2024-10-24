//Conexion
const mysql=require('mysql')
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
    





// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [rows[0].Zona, rows[1].Zona, rows[2].Zona, rows[3].Zona, rows[4].Zona, rows[5].Zona],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [12, 15, 45, 32, 23, 43],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
});
conection.end()