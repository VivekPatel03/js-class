// arithmetic operator(+,-,*,/,%)
// assignment operator(=)

let a = 5;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

a = a+10;
// a+=5;
console.log(a);

b = b-5;
// b-=2
console.log(b);

console.log(a**b)

// comparison opertors(>,<,<=,>=,==,===,!=,!==)

console.log(a<b)
console.log(a>b)
console.log(a>=b)
console.log(a<=b)
console.log(typeof(a))
console.log("5"==5)//LOOS equality compair only value.
console.log("5"===5)//strict equality compair value and datatypes both.
console.log(50!=5)
console.log(a!==b)

// ternary operators(syntax= (condition)?"true":"false";)

let age = 5;
let status1 = (age > 18)?'I can vote' :'I cannote vote';

console.log(status1);

// logical Operators(AND, OR , NOT)
// (&&,||,!)

let ans = (true && false && true);
// let ans = (true && true && true);
console.log(ans)

// let vk = (true || false || false)

// let vk= !(true);
let vk= !(false);

console.log(vk)

// Working with non-Booleans:-
// Falsey & Truthy Concept..
// Falsey(Undifined, null, 0, false, NaN, '' )
// Truthy(anything which is not falsey)

let ak = (false || 'vivek')
console.log(ak)

// bitwise Operators(&,|,~,<<,>>,^)

console.log(2 | 5)
console.log(2^2)
console.log(5<<1)
console.log(5>>1)
console.log(~2)




