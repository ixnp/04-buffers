'use stric'

const fs = require('fs');
const util = require("util");
const readFile = util.promisify(fs.readFile);

var streamArr =[]

function buffAppend(str){
    var buf = Buffer.alloc(str.length);
    buf.fill(str);
    // console.log(buf.length)
    return str;
}

//arr.splice(1,0, item )  1 is the index 0 is the amount
// const index = fruits.findIndex(fruit =>fruit === "blue")

function findIDX(arr, key){
let idx = arr.findIndex(place => place === key);
console.log('index of ', key, ' is ', idx);
}

function buffStr(arr){
    // arr.forEach( idx =>{
    //     // console.log(String.fromCharCode(idx))
    //     console.log(idx);

    // })


    arr.push('</article>')
    arr.unshift('<article>')

    arr.splice(2494,0,'<h1>')
    arr.splice(2517,0,'</h1>')

    //second heading
    arr.splice(3406,0,'<h1>')
    arr.splice(3431,0,'</h1>')

    //third heading
    arr.splice(4202,0,'<h1>')
    arr.splice(4236,0,'</h1>')

    //forth heading
    arr.splice(4924,0,'<h1>')
    arr.splice(4941,0,'</h1>')

       //fifth heading
    arr.splice(5569,0,'<h1>')
    arr.splice(5597,0,'</h1>')


    //sixth heading
    arr.splice(5597,0,'')
    arr.splice(6259,0,'</h1>')

    // findIDX(arr, 'heeeeeeeeer');


     console.log(arr.join());   //prints array as a string


}

readFile("./files/pair-programming.txt")
  .then((data, error) =>{
    buffAppend(data)
    
    data.forEach(element => {
        streamArr.push(String.fromCharCode(element))
    })

    buffStr(streamArr);
    
    
  } )

  .catch(error => console.log(error));



  