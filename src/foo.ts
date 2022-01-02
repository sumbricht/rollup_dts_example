export class Foo {
    constructor(
        private foo: string
    ) {}
    
    printFoo() {
        console.log(this.foo)
    }
}