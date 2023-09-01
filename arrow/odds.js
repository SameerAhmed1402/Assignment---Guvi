let a=[1,2,3,4,5]
let odd = (a) => {
    for(let i=0;a[i]<a.length;i++){

    if(a[i]%2!=0){
        console.log(a[i]);
    }
}};

odd(a);