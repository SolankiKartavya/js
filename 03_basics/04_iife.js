// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log("DB CONNECTED");
}());

( (name) =>{
    //unnamed iife
    console.log(`DB CONNCTED TWo ${name}`);
}
)('fgh')
