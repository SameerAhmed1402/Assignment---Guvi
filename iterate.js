let book ={ 
    title:'javascript',
    author:'sameer',
    pages:300
}

for(let keys in book){
    console.log(`${keys}: ${book[keys]}`);
}
let value=(Object.values(book));
value.forEach((value) => console.log(value));
//for(let i=0;i<book.lenght;i)



    


