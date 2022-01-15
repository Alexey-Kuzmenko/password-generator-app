
let keyword = prompt('Write your keyword')
let passwordLength = prompt('Write length of password')



function getKeyword(keyword) {
    return console.log(keyword);
}
getKeyword(keyword)

function getLength(passlength) {
    return console.log(Number(passlength));
}

getLength(passwordLength)


function getPassword(length) {
    let password = ''
    for (i = 0; i < length; i++) {
        password += i
    }
    return console.log(password);
}

getPassword(10);


// TODO: Create function wich return random id
// function getPassword(length, letters, tokens) {
//     let password = ''
//     password = + letters + tokens[Math.floor(Math.random() * length)]
//     return console.log(password);
// }


// getPassword(passwordLength, ['a,b, c, d, e'], ['@', '#'])