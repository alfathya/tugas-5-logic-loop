// 1. Even character
function evenChar(kata){
    let genap = " "
    if (typeof kata != "string"){
        return "error bukan string"
    }
    else{
        for (let i = 0 ; i < kata.length; i++){
            if ( i % 2 == 1){
                genap += kata[i]
            }
            
        }
    } return genap
}
console.log(evenChar("pratama"))

// 2. Count Word

function wordCount(word) {
    if (typeof word != "string"){
        return "error bukan string"}
    else {
        let hitung = 1
        if (word=== ''){
        return 0}
        else{
            for (let i = 0; i < word.length; i++){
                if (word[i] == " " && word[i+1] !== ''){
                    hitung ++
                }
            }
        } 
        return hitung;
    }
}

console.log(wordCount("hello hello"))

// 3. Count Vowel And Consonant

let vowel = 0
let consonant = 0
function countVowel(huruf){
    if (typeof huruf != "string"){
        return "error bukan string"}
        for (let i = 0; i < huruf.length; i++){ 
            huruf = huruf.toLowerCase()
            if (huruf[i] == 'a' || huruf[i] == 'i' || huruf[i] == 'u' || huruf[i] == 'e' || huruf[i] == 'o' ){
                vowel += 1;}
            else{
                consonant +=1;
            }
        }   return "jumlah vokal : " + vowel + " jumlah konsonan : " + consonant   
}
console.log(countVowel(1233))

// 4. reverse word

function reverseWord(str){
    let penyimpan = "";
    if (typeof str != "string"){
        return "error bukan string"}  
    for (let i = str.length -1; i >= 0; i--){
        penyimpan += str[i]}
        
        return penyimpan;

}
console.log(reverseWord("123"))

    
// // 5. palindrome

function palindrome(word){
    if (word.length <= 2){
        return false
    }else{
        if (reverseWord(word) === word){
        return true
        }else{
            return false
        }
    }
}
console.log(palindrome("t"))

// 6. Exchange coin
function coin(koin){
    if(typeof koin != "number") return "Input bukan number"
    let kembali = "";
    while (koin > 0){
        if (koin - 1000 >= 0){
            kembali += "1000,"
            koin -= 1000
        }
        else if (koin - 500 >=0){
            kembali += "500,"
            koin -= 500
        }
        else if (koin - 200 >=0){
            kembali += "200,"
            koin -= 200
        }
        else if (koin - 100 >=0){
            kembali += "100,"
            koin -= 100
        }
        else if (koin - 50 >=0){
            kembali += "50,"
            koin -= 50
        }
        else if (koin - 20 >=0){
            kembali += "20,"
            koin -= 20
        }
        else if (koin - 10 >=0){
            kembali += "10,"
            koin -= 10
        }
        else if (koin - 5 >=0){
            kembali += "5,"
            koin -= 5
        }
        else if (koin - 1 >=0){
            kembali += "1,"
            koin -= 1
        }
    }
    return kembali;
}
console.log(coin(1528))

// 7. Asteriks loop

function bintang(n){
    let segitiga =""
    for (let i = 0; i<n; i++){
        for (let k = 0 ; k <= i; k++){
            segitiga += "*"
        }
        
        segitiga += "\n"
    }
    return segitiga
}
console.log(bintang(10))

// 8. Pyramid loop
function pyramid(n){
    let hasil = ''
    for (let i = 0; i<=n; i++){
        for (let j=n ; j > i ; j--){
        hasil += ' ';}
        for (let k = 0; k < i * 2 - 1; k++){
            hasil += "*";
        }
    hasil += "\n"
    }
    return hasil
}
    

console.log(pyramid(5))
