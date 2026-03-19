/* จะมีการใช้ keyword function + ฝึกเขียนแบบมีชื่อก่อน (ที่จริงไม่จำเป็นต้องมีก็ได้ แค่เรียก function มา 
๋JS รู้ทันทีหมายถึงอะไร

classic: 'function' keyword
function name
bracket () syntax
bracket {} syntax
'return' keyword
*/

function greet(name, role2) {
  //ไม่มี errors แล้วพอเขียนถึง {} นี่คือการประกาศถูกต้องตาม syntax แม้ยังไม่มี logic แต่ก็ไม่มี error
  // function greet() {} แบบไม่ติดกันก็ทำได้นะ เป็น convention มี space ให้อ่านง่าย

  /* พื้นที่ก่อน return สามารถเขียน function logic ตรงนี้ได้
set return value to this function เช่น if else กี่ชั้นก็ได้ แต่สุดท้ายก็ต้องกำหนดให้ชัดเจนว่าค่าสุดท้ายควรคายอะไรออกมา
เช่น */

  const role = "Coder";

  return `Hello, My name is ${name}. I work as ${role} but at night I am a ${role2}.`;
}

// พอเรียกใช้ก็บอกว่า return คืนค่าอะไรเมื่อ func ทำงานเสดแล้ว เช่น string

greet();
//เรียก function มาใช้เลย ไม่มี space

/* รัน code js ด้วย node ใน terminal : node delarative-function.js (ชื่อไฟล์)
คำถาม ทำไมต้องใช้ node? A: node ช่วยให้คอมเข้าใจภาษา JS node = engine ในบราวเซอร์
ทำไมพอสั่ง return แค่นี้ไม่เห็นโชว์แสดงผลเลย เพราะนี่คือการเก็บใส่กล่องยังไม่ถูกเปิดใช้งาน
เมื่อประกาศ function แบบนี้ยังไม่มีอะไรเกิด / แต่ถ้าสั่ง node ชื่อไฟล์ จะเป็นการรันโปรแกรม ประกาศว่า
ตอนนี้มี func ชื่อ great ถ้ามี function นี้ใช้งานภายหลังให้คืนค่า func นี้เป็น "Hello World"

ดังนั้นจึงต้องบอกว่า นอกจะประมวลไป ตอนนี้ปริ้นให้เราดูด้วยนะ */

console.log(greet("neeti", "hacker"));

//ค่าต้องตามลำดับด้วยกับตอนที่ตั้ง function

/* นี่คือแบบ standard function มีชื่อ ถ้าเป็นแบบ arrow??
แล้้วถ้าไม่มีชื่อจะเรียกใช้ยังไง ตอบคือมักเขียนแบบ argument call-back function
คือ function ที่ไม่มีชื่อมักใช้ใน func ที่ไม่มีชื่อ - เป็นการจัดโค้ดใน envi ที่มีชื่ออะไรต่างๆไว้แล้ว
และมันเอาไปใช้ที่อื่นไม่ได้ */

/* code from k.neeti

function greet(name, role2) {
  // write function logic here
  const role = "Coder";
  // set return value of this function
  return `Hello, my name is ${name}. I work as a ${role} but at night I am a ${role2}.`;
}

// template literal a.k.a 'backtick'

// 'function' keyword
// function name
// bracket () syntax
// bracket {} syntax
// 'return' keyword

greet(); // calling this function returns "Hello world!"

console.log(greet("Neeti", "Hacker"));

// function(){}

*/
