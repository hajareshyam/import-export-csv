# Follow the following steps to export data in CSV File (Working on import data functionality)

- Step 1 - install the import-export-csv packages by  typeing the following command

    `$ npm i import-export-csv`

- Step 2 - Add required packages and read HTML template

    ```javascript
    // Required package
  const { export2Csv } = require('import-export-csv');
    ```

- Step 3 - Preapare Data for CSV like header and row data

    ```javascript
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
    }];

    let data = {
        header,
        row
    }
    // Filename
    options = {
        fileName: 'carDetails'
    }
    ```

- Step 4 - After setting all parameters just pass data and option parameter to export2Csv function and thats done

    ```javascript
    export2Csv(data, options).then((result)=>{
        console.log(result);
    }).catch((error)=> {
        console.log(error)
    })
    ```


## Ask

If you found any dificaulty in this application then please refer my github exmple

- https://github.com/hajareshyam/import-export-csv

### End
