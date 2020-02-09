//exercice 2 :
//Calculatrice

export function add(x: number, y: number): number {
  return x + y;
}
export function minus(x: number, y: number): number {
  return x - y;
}
export function divide(x: number, y: number): number {
  return x / y;
}
export function multiply(x: number, y: number): number {
  return x * y;
}

// Create a calculatrice
export class Calculatrice {
  commands = Array<Command>();

  do(cmd:string): void {
    
    if (!(cmd.startsWith("+") ||
        cmd.startsWith("-") ||
        cmd.startsWith("/") ||
        cmd.startsWith("*")) 
        ) {
      cmd = "+"+cmd;
    }

    let operator = cmd[0];
    let num = Number(cmd.slice(1));

    var c = new Command(operator, num);

    switch (c.operator) {
      case '+':
      case '-':
        this.commands.push(c);
        break;
      case '*':
      case '/':
        let last = this.commands.pop();
        let command = last.compute(c);
        this.commands.push(command);
        break;
    }
  }

  print(): number {
    let result = 0;
    this.commands.forEach(c =>  {
      result += c.getNumber()
    })

    return result;
  }
}

class Command {
  operator: string;
  num1: number;
  
  constructor(op: string, num: number) {
    this.operator = op;
    this.num1 = num;
  }
  getNumber(){
    return Number(this.operator+this.num1)
  }
  compute(c: Command): Command {
    const num2 = c.num1;
    let num;
    switch (c.operator) {
      case '+':
        num = add(this.num1, num2);
        break;
      case '-':
        num = minus(this.num1, num2);
        break;
      case '*':
        num = multiply(this.num1, num2);
        break;
      case '/':
        num = divide(this.num1, num2);
        break;
    }

    return new Command(this.operator, num);
  }
}


