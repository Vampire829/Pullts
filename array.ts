let array: string[];
array =['1', '2', '3']

//Джинерик
let newArray: Array<number> =[1,2,3,4,]


//Не изменяемое, только для чтения
let numbers: ReadonlyArray <number>=[1,2,3,4,5]
console.log(numbers)
//НЕ меняется! Только для чтения
//  numbers[0] = 2
// numbers.shift.

//Кортежи 
type TypeCort =[number, string, null]
let userArray: TypeCort =[1, '33', null]

