// polymorphisum
class Calculator {
    // additionA(x,y){
    //     console.log(x+y)
    // }
    // additionA(x,y,z){
    //     console.log(x+y+z)
    // }
    // additionA(x,y,z,a){
    //     console.log(x+y+z+a)
    // }
     //over loading -- same class , same method name , different signature
    additionA(x = undefined, y = undefined, z = undefined, a = undefined) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if(x != undefined && y != undefined){
            console.log(x + y)
        }
    }
}

let cal = new Calculator()
cal.additionA(12, 4)
cal.additionA(12, 4, 3)
cal.additionA(12, 4, 3, 5)

// different class , same method name, same signature overriding

class WorldBank{
    save(){
        console.log('I am world bank save method')
    }
}