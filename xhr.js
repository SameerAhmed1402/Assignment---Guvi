//require the library xhr2
let XMLHtppRequest =require('xhr2');
//create an object to the XMLHttprequest class
let xhr= new XMLHtppRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload= function(){
   // console.log(xhr.responseText);
   let user= JSON.parse(xhr.responseText);
   // let userNames=[];

   for(a of user){
  // userNames.push(a['region']);
   console.log(a['name']);
  console.log(a['region']);
   console.log(a['subregion']);
   console.log(a['population']);
   }
   
   
}

xhr.send();
