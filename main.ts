//% block="Kinderville Pro" color=#D65B00
namespace Kinderville {
    //% block="Hello Kinderville!"
    export function helloKinderville(): void {
        basic.showString("Hello Kinderville!")
    }
    
    class Car {
        forward(): void {
            basic.showString("Forward")
        }

        backward(): void {
            basic.showString("Backward")
        }

        stop(): void {
            basic.showString("Stop")
        }
    }

    export const car = new Car()
}
