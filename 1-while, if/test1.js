// suskaiciuoti visu skaiciu nuo 1 iki 100 kurie dalinasi is 3 suma

var sk = 1;
var iki = 100;
var suma = 0;
while (sk <= iki){
    if (sk % 3 === 0) {
        //console.log(sk);
        suma = suma + sk;
    }
    sk = sk + 1;
}
console.log(suma);