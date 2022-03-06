/** class
 *
 * - js에서 interfacae처럼 쓸 수 있는 방법
 */

class Human {
  // 어떤 속성을 가지고 있는지, 그 속성이 어떤 권한을 가지는지 작성
  // public은 밖에서 접근 가능하지만, private는 밖에서 접근할 수 없음(접근 시 ts에서 오류 발생)
  public name: string;
  public age: number;
  public gender: string;

  // constructor: 클래스가 시작할 때마다(=해당 클래스로 객체를 만들 때마다) 시작됨
  constructor(name: string, age: number, gender: string) {
    this.name = name; // 해당 클래스의 name 속성은 생성자의 name과 동일함
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female");

const sayHi2 = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi2(lynn));
