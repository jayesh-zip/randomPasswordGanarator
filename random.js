const passwordBox = document.getElementById("password")
const length = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "~`!@#$%^&?/><,.;':[]{}()-=_+*/"

const allCase = upperCase + lowerCase + number + symbol

function generatePasswordBySet(set) {
    return set[Math.floor(Math.random() * set.length)]
}

function createPassword() {
    let password = ""
    for(let i=0; i<length; i++) {
        password += generatePasswordBySet(allCase)
    }
    passwordBox.value = password
}

// function createPassword() {
//     let password = ""
//     for(let i=0; i<length/4; i++) {
//         password += upperCase[Math.floor(Math.random() * upperCase.length)]
//         password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
//         password += number[Math.floor(Math.random() * number.length)]
//         password += symbol[Math.floor(Math.random() * symbol.length)]
//     }
//     passwordBox.value = password
// }

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}