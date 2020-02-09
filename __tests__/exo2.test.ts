import { add, minus, divide, multiply, Calculatrice } from '../src/exo2';

it('Add_return_x_plus_y', () => {
  //Arrange
  const x = 1;
  const y = 2;

  //Act
  const result = add(x, y);

  //Assert
  expect(result).toBe(3);
});

it('Minus_return_x_minus_y', () => {
  //Arrange
  const x = 1;
  const y = 2;

  //Act
  const result = minus(x, y);

  //Assert
  expect(result).toBe(-1);
});

it('divide_return_x_divide_y', () => {
  //Arrange
  const x = 1;
  const y = 2;

  //Act
  const result = divide(x, y);

  //Assert
  expect(result).toBe(0.5);
});

it('multiply_return_x_multiply_by_y', () => {
  //Arrange
  const x = 1;
  const y = 2;

  //Act
  const result = multiply(x, y);

  //Assert
  expect(result).toBe(2);
});

describe('Calculatrice', () => {
  it('Print_+5-1/2*3', () => {
    //Arrange
    const calc = new Calculatrice();
    calc.do("5");
    calc.do("-1");
    calc.do("/2");
    calc.do("*3");

    //Act
    const result = calc.print();

    //Assert
    expect(result).toBe(3.5);
  });

  it('Print_+56-21/29*16', () => {
    //Arrange
    const calc = new Calculatrice();
    calc.do("56");
    calc.do("-21");
    calc.do("/9");
    calc.do("*16");

    //Act
    const result = calc.print();

    //Assert
    expect(result).toBe(18.666666666666664);
  });
});
