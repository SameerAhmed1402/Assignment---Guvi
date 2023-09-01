((caps)=>{
let string = ["sameer","kamalesh","pramma"];

let convertToTitleCaps = (str) => {
  return str.split(' ').map(word => {
     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
  
}
console.log(string.map(convertToTitleCaps));
})();

