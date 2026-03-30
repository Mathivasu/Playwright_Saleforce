import * as fs from 'fs';
import csv from 'csv-parser';

export async function readdata(filePath:string): Promise<any[]>{
return new Promise((resolve,reject) =>{
    //This creates an asynchronous function that reads data from a file and returns the result later using a Promise.
const data: any[] = [];
//“Read the CSV file and send its data to the CSV parser to convert each row into a JavaScript object.”
fs.createReadStream(filePath).pipe(csv())
//Whenever a row is read from the CSV file, it is added to the data array.
.on('data',(row) =>{
data.push(row);
})

//When the file reading is finished, return the collected data and complete the Promise.
.on('end',()=>{
    resolve(data);
})
.on('error',(error) =>{
    reject(error);
})
});
}