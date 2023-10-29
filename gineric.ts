
//Джинерики
function entity<T>(arg: T): T{
 return arg
}

entity<number>(1);
entity<string>('number');

class User<T>{
    private name: T
   constructor(name: T){
   }
   getInfo(): T{
    return this.name
   }
}

const entity2 =<T>(n: T): T=>{
    return n
}

entity2<string>('dd')
entity2<number>(1)


new User<string>('god');
new User<number>(1);

interface IPair<K, V>{
    key: K
    value: V
}

const pair1: IPair<string,number>={
    key: 'dd',
    value: 2,
}

const pair2: IPair<string, string>={
    key: 'dd',
    value: 'd',
}

