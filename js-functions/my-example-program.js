import readline from "readline";

/* Task 1: Function สำหรับคำนวนคะแนน (logic only)
รับค่า กาย (0-5), ใจ (0-5), แรงที่ต้องเก็บไว้ (0-2)
*/

function calculateScore(physical, mental, buffer) {
  let total = physical + mental - buffer;
  //ปรับค่าให้อยู่ในช่วง 0-10 เผื่อ user กรอกเลขจนผลลัพธ์คิดลบ หรือเกิน 10
  if (total < 0) return 0;
  if (total > 10) return 10;
  return total;
}

/* Task 2: function สำหรับส่งคำแนะนำ
 */

function getStatusAdvice(score) {
  if (score <= 2) {
    return "Status: [CRITICAL FATIGUE 🌧️] - You need immediate rest. Stop everything.";
  } else if (score <= 5) {
    return "Status: [LOW ENERGY 🍃] - Take it easy. Do light tasks only.";
  } else if (score <= 8) {
    return "Status: [GOOD VIBES 🌳] - You are doing great! Good for creative work.";
  } else {
    return "Status: [PEAK PERFORMANCE 🔥] - Full power! Time to crush your goals.";
  }
}

/* Task 3: สร้าง interface สำหรับรับส่งข้อมูลใน terminal
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(" -- Wecome to your Personal Energy Monitor --\n");

/* Task 4: เริ่มต้นถามคำถามระหว่าง HCI
 */

//Q1: physical energy level?
rl.question("Rate your physical enery (least 0-5 most):", (pInput) => {
  const p = parseInt(pInput);

  //Q2: mental energy level?
  rl.question("Rate your mental focus (least 0-5 most):", (mInput) => {
    const m = parseInt(mInput);

    //Q3: Buffer ที่ต้องเผื่อใช้แรงในอนาคต
    rl.question("Energy needed for future task (least 0-2 most):", (bInput) => {
      const b = parseInt(bInput);

      /* Task 5: Processing
       */
      const finalScore = calculateScore(p, m, b);
      const advice = getStatusAdvice(finalScore);

      /* Task 6: Output
       */
      console.log("\n----------");
      console.log(`Your Energy Level: ${finalScore.toFixed(1)} /10`);
      console.log(`${advice}`);
      console.log("----------\n");

      /* Task 7: close interface
       */

      rl.close();
    }); // <--- ปิดวงเล็บของ ข้อ 3
  }); // <--- ปิดวงเล็บของ ข้อ 2
}); // <--- ปิดวงเล็บของ ข้อ 1
