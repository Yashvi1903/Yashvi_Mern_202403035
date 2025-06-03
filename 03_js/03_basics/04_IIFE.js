//Immediately invoked Function Expressions (IIFE)

// function chai()
// {
//     console.log(`DB CONNECTED`);
// }
// chai()


//globle scope na pollution thi kiryek pollution thay,
//to globle scope na variables na pollution ne hatava mate iife use thay

(function chai(){
    //named IIFE
     console.log(`DB CONNECTED`);
})();
//IIFE ma semi-colen lagavi to better re
//because ane kabar na hoi kiya stop thavu

//(defination)(execution)

//arrow function with IIFE

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Yashvi');

//2-IIFE eak jode lakhva hoi to semi-colen nu dhayan rakhvu