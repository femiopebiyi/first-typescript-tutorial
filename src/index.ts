// optional chaining

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null{
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)

console.log(customer?.birthday?.getFullYear())

console.log("femi is a good boy")
console.log('isssssaisduygdjhf')


//optional element access operator
// customers?.[0]

//optonal call

// let log: any =  null

// log?.('a')