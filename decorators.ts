function LogClass( constructor: FunctionConstructor) {
    console.log(constructor.name)
}

// @LogClass
class Plane {
    constructor(id: number){}
}