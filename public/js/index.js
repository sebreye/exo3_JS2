console.log(premier(3)); 
console.log(premier(4)); 
console.log(trialpha(["pomme", "banane", "kiwi", "orange"]));
console.log(somchiffre(123));
console.log(somchiffre(726));
console.log(Palindrome([1, 2, 3, 2, 1]));
console.log(Palindrome([1, 2, 3, 4, 5]));













// fonctions créer
function premier(n) {
    
    if (n < 2) {
    return false;
    }
    for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        return false;
    }
    }
    return true;
}
function trialpha(mots) {
    return mots.sort();
}
function somchiffre(n) {
    let nbr = n.toString()
    let somme = 0;
    for (let i = 0; i < nbr.length; i++) {
        somme += parseInt(nbr[i], 10)
        
    }
    return somme;
}
function Palindrome(nombres) {

    for (let i = 0; i < nombres.length / 2; i++) {

    if (nombres[i] !== nombres[nombres.length - 1 - i]) {
        return false;
    }
    }
    return true;
}
