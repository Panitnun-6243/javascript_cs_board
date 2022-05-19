const express = require("express"); //import express
const app = express(); //สร้างobject app
const hbs = require("hbs"); //import hbs
app.use(express.urlencoded({ extended: true })); //เพื่อให้รับค่าข้อมูลเเบบฟอร์มจากpost manได้
app.set("view engine", "hbs"); //สร้างtemplate htmlที่ไม่ใช่ไฟล์ html (handlebars)
hbs.registerPartials(__dirname + "/views/partials"); //เพื่อบอกhandlebarsให้ไปหาตามpathว่าไฟล์ไหนบ้างที่จะเป็นcomponentเล็กๆที่มีอยู่ในทุกหน้า

const allPosts = [{
    id: 1,
    content: "My name is Tan",
    from: "Tan",
    createdAtText: "20 April 2022",
    commentsCount: 2,
}, {
    id: 2,
    content: "My name is Jenny",
    from: "Jenny",
    createdAtText: "20 April 2022",
    commentsCount: 1,
}, ];
const allComments = [{
        content: "Good name",
        from: "Jenny",
        createdAtText: "21 April 2022",
    }, {
        content: "See you soon, guy",
        from: "Michael",
        createdAtText: "22 April 2022",
    }]
    //request = ข้อมูลที่userส่งมาให้เรา, response = สิ่งที่เราต้องการเเสดงผลตอบกลับuser
    //get ใช้อ่านข้อมูล postใช้เพิ่ม อัปเดต ลบข้อมูล
app.get("/", (request, response) => {
    response.render("home", { allPosts }); //เเสดงผลให้userเห็น + ส่งpropsเข้าไป
});

app.get("/p/new", (request, response) => {
    response.render("postNew");
});

app.post("/p/new", (request, response) => {
    console.log(request.body); //รับค่าข้อมูลในรูปเเบบฟอร์ม
    const { title, content } = request.body; //ถ้าไม่มีค่าจะเป็นundefined ใส่ดักไว้ให้เป็นobjectเปล่าๆเเทน undefined
    response.send(
        `Submit the form with title = ${title} and content = ${content}`
    ); //เเสดงผลหลังส่งค่าเข้าไป
});

app.get("/p/:postId", (request, response) => {
    const { postId } = request.params; //ใส่ข้อมูลเป็นเลขหลังurl
    response.render("post", { postId, allComments });
});

app.listen(9753, () => {
    console.log("Web is starting now at http://localhost:9753");
}); //เปิดport