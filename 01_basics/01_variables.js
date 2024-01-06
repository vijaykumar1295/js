const accountId = 1133
let accountEmail = "vijay@gmail.com"
var accountPassword = "12345"
accountCity="Patna"
let accountState

//accountId = 2 // Not allowed

console.log(accountId)

/*
 prefer not to use var 
 because of issue in block scope and functional scope
*/

accountEmail = "kumar@gmail.com"
accountPassword = "121212"
accountCity = "pat"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])