// Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string


class calculator {
    constructor(a, b, op) {
        this.a = a
        this.b = b
        this.op = op
    }
    calculate() {
        var calculate

        if (this.op == "+") {
            calculate = this.a + this.b
        } else if (this.op == "-") {
            calculate = this.a - this.b
        } else if (this.op == "*") {
            calculate = this.a * this.b
        } else if (this.op == "/") {
            calculate = this.a / this.b
        } else {
            console.log("error");
        }

        console.log(`${this.a} ${this.op} ${this.b} = ${calculate}`);
    }
}

var operation = new calculator(3, 5, "*")
operation.calculate()


