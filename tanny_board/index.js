const express = require("express"); //import express
const app = express(); //สร้างobject app
const hbs = require('hbs')//import hbs
app.use(express.urlencoded({ extended: true })); //เพื่อให้รับค่าข้อมูลเเบบฟอร์มจากpost manได้
app.set("view engine", "hbs");//สร้างtemplate htmlที่ไม่ใช่ไฟล์ html (handlebars)
hbs.registerPartials(__dirname + "/views/partials")//เพื่อบอกhandlebarsให้ไปหาตามpathว่าไฟล์ไหนบ้างที่จะเป็นcomponentเล็กๆที่มีอยู่ในทุกหน้า
//request = ข้อมูลที่userส่งมาให้เรา, response = สิ่งที่เราต้องการเเสดงผลตอบกลับuser
//get ใช้อ่านข้อมูล postใช้เพิ่ม อัปเดต ลบข้อมูล
app.get("/", (request, response) => {
  const { q, sortBy } = request.query; //รับข้อมูลเข้าทางurl ต่อท้ายด้วย?q='pudding'&sortBy='sth'
  response.render('home', {q,sortBy}) //เเสดงผลให้userเห็น
});

app.get("/p/new", (request, response) => {
  response.render('postNew')
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
  response.render('post', {postId})
});

app.listen(9753, () => {
  console.log("Web is starting now at http://localhost:9753");
}); //เปิดport
