/** Interface
 *
 * object를 넘겨줄 때, 세부적으로 object 내 속성들의 type을 지정함
 */

interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "nno3onn",
  age: 26,
  gender: "female",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));
