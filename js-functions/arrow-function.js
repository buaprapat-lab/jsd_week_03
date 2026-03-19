//arrow-function.js
// arrow function was introduced in ES6, ECMAScript, ES6 => ECMAScript 2015
/* ที่จริง Oracle ที่ชื่อลิขสิทธิ์ของเขา แต่ใจดีให้ใช้แพร่หลาย
พอมีบริษัทอื่นมีพัฒนาต่อเลยตั้งชื่ออีกแบบ ชื่อที่ไม่โดนเรื่อวลิขสิทธิ์ ซึ่งหมายถึง JS เหมือนกัน
*/

//anonymous arow function

const getData = () => {};

//การประกาศมักประกาศแบบเอาไปเก็บในตัวแปร

const greetUser = (name) => {
  return `Hello, my name is ${name}!`;
};

//เรียกใช้ รัน greetUser แล้วรับค่า Neeti เข้าไป เรายังไม่เห็น เสร็จก่อนค่อยไปรัน console.log
greetUser("Neeti");

//เรียกใช้ให้เห็นใน terminal
console.log(greetUser("Neeti"));

/* การเอา logic เข้ามาใส่ใน arrow function ทำยัังไงดี? */
