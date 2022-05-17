const express = require("express"); //import express
const app = express(); //สร้างobject app
app.use(express.urlencoded({ extended: true })); //เพื่อให้รับค่าข้อมูลเเบบฟอร์มจากpost manได้
//request = ข้อมูลที่userส่งมาให้เรา, response = สิ่งที่เราต้องการเเสดงผลตอบกลับuser
//get ใช้อ่านข้อมูล postใช้เพิ่ม อัปเดต ลบข้อมูล
app.get("/", (request, response) => {
  const { q, sortBy } = request.query; //รับข้อมูลเข้าทางurl ต่อท้ายด้วย?q='pudding'&sortBy='sth'
  response.send("Hello bitch!, I want to eat " + q); //เเสดงผลให้userเห็น
});

app.get("/p/new", (request, response) => {
  response.send("Add new post");
});

app.post("/p/new", (request, response) => {
  console.log(request.body); //รับค่าข้อมูลในรูปเเบบฟอร์ม
  const { title, content } = request.body ?? {}; //ถ้าไม่มีค่าจะเป็นundefined ใส่ดักไว้ให้เป็นobjectเปล่าๆเเทน undefined
  response.send(
    `Submit the form with title = ${title} and content = ${content}`
  ); //เเสดงผลหลังส่งค่าเข้าไป
});

app.get("/p/:postId", (request, response) => {
  const { postId } = request.params; //ใส่ข้อมูลเป็นเลขหลังurl
  response.send(`Hello bicth again!, this post is id = ${postId} `);
});

app.listen(9753, () => {
  console.log("Web is starting now at http://localhost:9753");
}); //เปิดport
