const express = require("express");
const mongoose = require("mongoose");

const app = express();


app.use(express.json())
app.use(require("./routes/user.route"))
app.use(require("./routes/categorie.route"))
app.use(require("./routes/drug.route"))
app.use(require("./routes/basket.router"))

mongoose
  .connect("mongodb+srv://fringle:12345@cluster0.wgisrd8.mongodb.net/Apteka", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(1888, () => {
  console.log(`Для подключения перейдите на хост http://localhost:${1888}`);
});
