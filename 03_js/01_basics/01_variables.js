const accountId = 144553
let accountEmail = "ykpatel1903@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //never use this 
let accountState; //undifined

// accountId = 2 // not allowed 

//var have scope problem so use only const and let 

accountEmail ="nothing@google.com"
accountPassword = "2112345"
accountCity ="ahmedabad"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* prefer not to use var
beause of issue in block scope and functional scope
*/