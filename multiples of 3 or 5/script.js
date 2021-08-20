// Atspausdinti skaiciu suma kurie dalinasi is 3 ar 5

function numbers(sk) {
    let suma = 0;
    for (let i = 1; i <= sk; i++){
        if ( i % 3 === 0 || i % 5 === 0 ){
            suma += i;
        }
    }
    console.log(suma)
}

numbers(10);


