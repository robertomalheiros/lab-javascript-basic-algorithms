// Iteration 1: Names and Input
const hacker1 = 'Fulano'
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'Beltrano'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
//3.1
let nome_driver = ''
for(let i = 0; i < hacker1.length; i++) {
    nome_driver += hacker1[i].toUpperCase()+" "
}
console.log(nome_driver)

//3.2
let nome_navi = ''
for(let i = hacker2.length - 1; i > 0; i--) {
    nome_navi += hacker2[i-1] 
}
console.log(nome_navi)

//3.3
const a = hacker1.toLocaleLowerCase()
const b = hacker2.toLocaleLowerCase()
const comp = a.localeCompare(b)

if (comp == -1) {
    console.log(`The driver's name goes first.`)
} else if(comp == 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if( comp == 0) {
    console.log('What?! You both have the same name?')
} else {
    console.log('Invalid name!')
}

//BÔNUS 1
