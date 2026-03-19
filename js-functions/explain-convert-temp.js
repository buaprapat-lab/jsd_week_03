/* แพลนคือเขียน softeware เล็กๆที่มีการ interaction กับ user
ด้วย interface human-computer ที่ terminal ของเรา
เปิดโปรแกรม --> พิมพ์บางอย่าง --> output ค่าประมวลผลออกมาให้เรา
เลยต้องเปิดตัว feature พิเศษของ node
ข้างใน node มีโค้ดหลายอย่าง ในหลายไฟล์ ที่เหมือนโค้ดสำเร็จรุปที่เราเอามาใช้ได้
คือ readline - build in moldule ของ node ให้เรามี HCI ได้

วันนี้ แปลงอุณหภูมิ celsius --> fahrenheit
function เดียวทำหลายอย่าง หรืออย่างเดียวก็ได้ (recom 1 func: 1 task มากกว่า)
*/

import readline from "readline";

//เรียกของบางอย่างอีกไฟล์้เข้ามาที่ไฟล์นี้ได้ ทั้งของเรา ของคนอื่นได้ ทั้งของในโปรเจค หรีือ install มาจาก internet
// redline แรกคือตัวแปร (เอาไปใช้งาน) "readline" คือชื่อไฟล์ที่ชื่อนี้

function celsiusToFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/* การตั้งชื่อแบบ camel case - best practice ของการเขียนชื่อ function
การตั้งชื่อ func ควรอ่านแล้วเข้าใจง่ายและเร็วที่สุดที่ไม่ยาวเกินไป celsius_to_farenheit ก็ได้ แต่ไม่นิยม มักทำใน phyton มากกว่า
และการตั้งแบบ camel case คล้ายใน react เพียงแต่ CelsiusTofarenhiet - Pascal case

JS ไม่ได้กำหนดว่าต้องจบว่า ; แต่เป็นการแบ่งโค้ดเราคนละชุดให้เห็นง่ายๆ
*/

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

const rl = readline.createInterface({
  //พอ . แล้วมีหลายอย่างมากให้เลือกมาก ตัวแปรนี้คือ object, createinterfce = build-in function
  //createinterface มีหลักการใช้งาน คือรับ 1 parameter, มี key ชื่อ input
  // สร้าง interfsct ที่ใช้ใน terminal
  input: process.stdin,
  output: process.stdout,
});

/* string เข้าไปเป็นคำถามให้ user รับอันแรก enter temp เข้าไปประมวลผล
โดยดีไซน์ให้รับตัวแปรชื่อ tempInput
*/

rl.question("Enter temperature", function (tempInput) {
  //คำถามที่จะส่งให้ user เห็น
  const temp = parseFloat(tempInput);

  //เก็บตัวแปรที่ส่งเข้ามาก่อน parseFloat เป็นการ convert string to a floating point-number ; string -> number
  // ไปเก็บในตัวแปรที่ชื่อ temp
  //ต้องตรวจสอบข้อมูลว่าค่าที่ส่งเข้าไปใน func เป็นชนิดที่เราต้องการ เช่น number string ตรงมั้ย

  rl.question("Enter unit (C or F):", function (unitInput) {
    const unit = unitInput.trim().toUpperCase();
    // unitInput.trim().toUpperCase - trim เพื่อ remove เว้นวรรคหน้า/หลัง string ที่ user อาจกดพลาด
    // แล้วเอาไปเก็บในตัวแปร ค่อยเรียกใช้  const unit =
    //เตรียมเสดละ มาเขียน logic ที่จะได้ result ออกมา

    let result;

    //if statememt กำหนด condition เพื่อจะใช้ในการแสดงผล

    if (unit === "C") {
      result = celsiusToFahrenheit(temp);
      console.log(`${temp}C is ${result.toFixed(2)}F`);
    }

    //ดักตอนกรอก โดยเพิ่มเงื่อนไข มีที่ให้ใส่คอนดิชัน
    else if (unit === "F") {
      result = fahrenheirToCelsius(temp);
      console.log(`${temp}F is ${result.toFixed(2)}C`);
    }

    //ตรงนี้ไม่ใช่ฟังค์ชันนะ เป็น if.. else ใน () ใส่คอนดิชัน ถ้าตรงให้รันโค้ดใน {}
    //ถ้าไม่ตรงให้รันโค้ดใน {} ของ else
    else {
      //ตัวเก็บรวบจบถ้าไม่ตรงคอนดิชันอะไรเลย
      console.log(`Invalid unit! Please enter C or F`);
    }
    //ปิด interfact โดย rl.close

    rl.close();
  });
});

/* FROM K.Neeti

import readline from "readline";

// Camel case -> celsiusToFahrenheit -> JS functions
// Pascal case -> CelsiusToFahrenheit -> React components

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your temperature:", function (tempInput) {
  const temp = parseFloat(tempInput);
  rl.question("Enter unit (C or F):", function (unitInput) {
    const unit = unitInput.trim().toUpperCase();

    let result;

    // if statement
    if (unit === "C") {
      result = celsiusToFahrenheit(temp);
      console.log(`${temp}C is ${result.toFixed(2)}F`);
    } else if (unit === "F") {
      result = fahrenheitToCelsius(temp);
      console.log(`${temp}F is ${result.toFixed(2)}C`);
    } else {
      console.log(`Invalid unit! Please enter C or F.`);
    }
    rl.close();
  });
});
*/
