// console.log("dom-loops")

// const ageCheck = (age) => {
//     if (age < 21){
//         console.log("No drinks for you!")
//     } else {
//         console.log("Party on")
//     }
// }

// ageCheck(12)
// ageCheck(21)

// const lengthOutput = (strang) => {
//     return strang.length
// }

// console.log(lengthOutput([1,2,3,4,5,6,7]))

// const quoteFinder = (testString) => {
//     return "winter is coming".indexOf(testString)
// }

// console.log(quoteFinder('is'))

const employee = {
    firstName: 'Ryan',
    lastName: 'McNair',
    role: 'student',
    accountNumber: '1-123456789',
    isManager: false,
    title: ['Typist', 'Professional napper']
    accolade: {
        title: 'Employee of the Year'
        dateEarned: '1/2/2020'
        expires: '12/21/2020'
        isCool: true
    }
}

// console.log(employee.firstName)
// const keyToCheck = 'accolade'

// console.log(employee[keyToCheck])

function empName = (name) {
    if (name.firstName[0] === "R"){
        name.status = "VIP"
    } else {
        name.status = "Peasant" 
    }
}