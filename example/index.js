const { export2Csv, import2Csv } = require('import-export-csv');


const header = ['car', 'price', 'color'];
const row = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }, {
    "car": "Porsche1",
    "price": 600001,
    "color": "green1"
  }
  
];

let data = {
    header,
    row
} 

options = {
    fileName: 'cardetails'
}
 
export2Csv(data, options).then((result)=>{
    console.log(result);
}).catch((error)=> {
    console.log(error)
})

