
//Class
class Car{
    public name: string
     public price: number
    constructor( name: string, price: number){
    }

   protected getinfo(): string {
       return `${this.name}-${this.price}`
    }
}

class Bus extends Car{
    constructor(name: string, price: number){
        super(name, price)
    }

     public test(){
       return this.getinfo
     }
}


const car = new Car('BMW', 100000);
// car.getinfo()
new Bus('Mercedes', 1000).test()



