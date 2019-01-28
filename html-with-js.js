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
//needs to change
function findIDX(arr, key){
    // let  idx = arr.findIndex()
let idx = arr.findIndex(place => place === key);
console.log('index of ', key, ' is ', idx);
}

function buffStr(arr){
    // arr.forEach( idx =>{
    //     // console.log(String.fromCharCode(idx))
    //     console.log(idx);

    // })


    //needs another
    arr.splice(1,0,'<article>');
        arr.splice(2,0,'<h1>');
        arr.splice(34,0,'</h1>');

        arr.splice(431,0,'<h1>');
        arr.splice(507,0,'</h1>');

        arr.splice(635,0,'</li>');
        arr.splice(637,0,'<li>');
        arr.splice(757,0,'</li>');
    arr.splice(759,0,'</ul>');

        // </li></ul>

        // arr.splice(756,0,'</li></ul>');

    arr.splice(761,0,'<h2>');
    arr.splice(793,0,'</h2>');
    
    arr.splice(795,0,'<ul>');
            arr.splice(796,0,'<li>');
            arr.splice(912,0,'</li>');

            arr.splice(913,0,'<li>');
            arr.splice(1006,0,'</li>');

            arr.splice(1008,0,'<li>');
            arr.splice(1146,0,'</li>');


            arr.splice(1148,0,'<li>');
            arr.splice(1254,0,'</li>');

            arr.splice(1256,0,'<li>');
            arr.splice(1399,0,'</li>');

            arr.splice(1401,0,'<li>');
            arr.splice(1544,0,'</li>');

    arr.splice(1546,0,'</ul>');

    
    arr.splice(1548,0,'<h2>');
    arr.splice(1566,0,'</h2>');

    arr.splice(1568,0,'<ul>');
            arr.splice(1569,0,'<h2>');
            arr.splice(1758,0,'</h2>');

            arr.splice(1760,0,'<ul>');

            arr.splice(1761,0,'<li>');
            arr.splice(1812,0,'</li>');

            arr.splice(1814,0,'<li>');
            arr.splice(1871,0,'</li>');

            arr.splice(1872,0,'<li>');
            arr.splice(1936,0,'</li>');

            arr.splice(1938,0,'<li>');
            arr.splice(1983,0,'</li>');


            arr.splice(1985,0,'</ul>');//end list
            

    arr.splice(1987,0,'<h3>');
    arr.splice(2032,0,'</h3>');

    arr.splice(2033,0,'<ul>');


            arr.splice(2035,0,'<li>');
            arr.splice(2088,0,'</li>');

            arr.splice(2089,0,'<li>');
            arr.splice(2120,0,'</li>');

            arr.splice(2122,0,'<li>');
            arr.splice(2184,0,'</li>');




    arr.splice(2186,0,'</ul>');//end list


            // </h3><ul><li>











        //     arr.splice(506,0,'</li>');

        // arr.splice(636,0,'</li></ul>');



        // arr.splice(506,0,'</h2><ul>');

        
        //</li></ul>
        

        



    findIDX(arr, '*');


    //  console.log(arr.join());   //prints array as a string

     let result = '';
     arr.forEach( (idx)=>{
 result = result + idx;
     })

     console.log(result)
     return result;
}


function toNewBuffer(str){
    let resultBuff = new Buffer();
for (let i in str){
    resultBuff.push(str);
}

}




readFile("./files/pair-programming.txt")
  .then((data, error) =>{
    buffAppend(data)
    
    data.forEach(element => {
        streamArr.push(String.fromCharCode(element))
    })
    // buffStr(streamArr)

    // console.log(typeof(  buffStr(streamArr)  )  );

    fs.writeFile('index.html', buffStr(streamArr), function (err) {
        if (err) throw err;
      })
    
    
  } )

  .catch(error => console.log(error));



  