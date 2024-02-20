const express = require("express");
const path = require("path");
const body_parser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});
app.listen(3000);
