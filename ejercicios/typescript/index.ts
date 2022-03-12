// console.log("Hello, typescript");

// function add (a:number,b:number){
//     return a+ b;
// }

// const sum = add(2,3);
// enum Color{
//     Rojo = "Rojo",
//     Verde = "Verde"
// }
// interface Rectangulo {
//     ancho: number
//     alto: number
//     color?: Color
// }


// let rect: Rectangulo = {
//     ancho:4,
//     alto:6
// };

// function area(r:Rectangulo){
//     return r.alto * r.ancho;
// }

// const areaRect = area(rect);
// console.log(areaRect);

// rect.toString = function(){
//     return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
// }

// console.log(rect.toString());



// function add(a:number, b:number):number{
//     return a+b;
// }

// const sum = add(4,5);

// function createAdder(a:number):(number)=>number{
//     return function(b:number){
//         return b+a;
//     }
// }

// const addFour = createAdder(4)
// const fourPlus6 = addFour(6)

// function fullName(firstName:string,lastName?:string):string{
// return `${firstName} ${lastName}`    
// }

// const richard = fullName("Richard");

// console.log(richard)

enum  Color{
    Rojo="Rojo",
    Verde="Verde"
}

interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect : Rectangulo ={
    ancho:4,
    alto:6,
   //color:Color.Rojo,
    
};

function area (r:Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect)
console.log(areaRect);

rect.toString = function(){
    return this.color? `Un rectangulo ${this.color}`: `Un rectangulo`;
}

console.log(rect.toString());