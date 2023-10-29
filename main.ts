//function 

type ChanellDef ={
    nameUser: string
}


function chanell(nameUser: string): ChanellDef{
    return { nameUser}
}

const GetChanell = (nameUser: string):ChanellDef =>{
    return {nameUser}
}

const sam = (...num: number[])=>{
    return num
}

//перегрузки 
function getCar(name: string): string
function getCar(name: string, price: number): string

function getCar(name: string,price?: number): string{
return price ? `Название ${name}. Цена ${price}`: ` Название${name}`
}

//Объединение Интерфейсов
type TypeInteFace ={
    name: string
    email: string
}

type TypeInterFace2 ={
    adress: string
}& TypeInteFace

// enum

enum EnumRoles{
    ADMIN, GUEST, USER
}

type TypeRol ={
    rol: EnumRoles
}| TypeInteFace

let GerUser: TypeRol ={
    rol: EnumRoles.USER
}

// Утилити Типы

interface ICar{
    name: string
    id: number
    yearBilt: number
}

interface ICARUpdeit extends Omit<ICar, 'id'>{

}
 
const carRename: ICar={
    name: "Mercedes",
    id:20,
    yearBilt: 2036,
}

const setCar: ICARUpdeit={
   name: 'BMW',
   yearBilt: 2024,
}

interface IPicaby {
  name: string
  id: number
  email: string
}

interface Picaby2 extends Pick<IPicaby, "id">{

}
interface IPicaby3 extends Partial<IPicaby>{

}


const renMarc: Picaby2 ={
   id: 20
}

const tdd: IPicaby3={

}

type TypeIsnamber<T> = T extends number ? 'yes': 'No';

type Type1 =TypeIsnamber<number>
type Type2 =TypeIsnamber<string>


