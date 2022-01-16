// uses router and fs for downloading the resume and profile pic

// for downloading file we can also directly use res.download(filePath) provided by express
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/resume/:file", (req, res) => {
  // const address = path.join(__dirname, `../public/${req.params.file}`);
  // fs.F_OK - File is visible to the calling process. 
  //This is useful for determining if a file exists, but says nothing about rwx permissions
  console.log("want to download resume")

  // fs.access(address, fs.F_OK, (err) => {
  //   if (err) {
  //     res.status(404).json({
  //       message: "File not found   "+address,
  //     });
  //     return;
  //   }
  //   res.sendFile(address);
  // });
  res.sendFile(`${req.params.file}`)
});

router.get("/profile/:file", (req, res) => {
  // const address = path.join(__dirname, `../public/${req.params.file}`);
  // fs.access(address, fs.F_OK, (err) => {
  //   if (err) {
  //     res.status(404).json({
  //       message: "File not found",
  //     });
  //     return;
  //   }
  //   res.sendFile(address);
  // });
  res.sendFile(`${req.params.file}`);
});

module.exports = router;
