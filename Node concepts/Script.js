// Topics: multer middleware,file filter and file size limit in multer

// multer middleware

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const multer = require("multer");

// app.use(cors()); // different servers nunchi vachina block cheyakunda e cors chustadi
// const ds = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({
//   storage: ds, // ekkada manam oka obj ni evali anthy
//   //em store cheyali ekkda store cheyali ani evali
// }); // single('file') file anedi just oka key frontend nunhi vachey file
// app.post("/upload", upload.single("avatar"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("No file uploaded");
//   }
//   res.send("File uploaded successfully");
// });
// app.listen(3500, () => {
//   console.log("server is running on port 3500");
// });

//file filter and file size limit in multer

// const express = require("express");
// const multer = require("multer");

// const cors = require("cors");

// const app = express();

// app.use(cors());

// const ds = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const filter = (req, file, cb) => {
//   const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type"));
//   }
// };

// const upload = multer({
//   storage: ds,
//   fileFilter: filter,
//   limits: {
//     fileSize: 1 * 1024 * 1024, // 1 MB
//   },
// }).single("file");

// app.listen(3000, () => {
//   console.log("server running at port no 3000");
// });

// app.post("/upload", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       if (err instanceof multer.MulterError) {
//         if (err.code == "LIMIT_FILE_SIZE")
//           res.status(400).send({
//             code: "large",
//             message: "File is large ,only upload files less than 1MB",
//           });
//         else {
//           res.status(400).send({
//             code: "unknown",
//             message: "Error while uploading",
//           });
//         }
//       } else {
//         res.status(400).send({
//           code: "invalid type",
//           message: "Invalid file type only allowed jpeg,jpg",
//         });
//       }
//     } else {
//       res.send({
//         code: "success",
//         message: "uploaded successfully",
//       });
//     }
//   });
// });

// to call or send multiple files we use array instead of single

// const upload = multer({
//   storage: ds,
//   fileFilter: filter,
//   limits: {
//     fileSize: 1 * 1024 * 1024, // 1 MB
//   },
// }).array('file')  //.single("file");

// in frontend
// <input type="file" multiple id="attachments" class="form-control col" />

// const files = attachments.files;
//  if (files.length>0) {
//         const formData = new FormData();
//for(int i=0;i<files.length;i++)
// {
//   formData.append("file", files[i]);
// }
//   let res = await fetch("http://localhost:3000/upload", {
//       method: "POST",
//       body: formData,

// })

// let msg =await res.json();
// console.log(messge);



// otp verification task

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var nm = require('nodemailer');
let savedOTPS = {

};
var transporter = nm.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'madugulajhanu06@gmail.com',
            pass: 'kwuy dgsc qjaa bipz'
        }
    }
);
app.post('/sendotp', (req, res) => {
    let email = req.body.email;
    let digits = '0123456789';
    let limit = 4;
    let otp = ''
    for (i = 0; i < limit; i++) {
        otp += digits[Math.floor(Math.random() * 10)];

    }
    var options = {
        from: 'yourmail@gmail.com',
        to: `${email}`,
        subject: "Testing node emails",
        html: `<p>Enter the otp: ${otp} to verify your email address</p>`

    };
    transporter.sendMail(
        options, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send("couldn't send")
            }
            else {
                savedOTPS[email] = otp;
                setTimeout(
                    () => {
                        delete savedOTPS.email
                    }, 60000
                )
                res.send("sent otp")
            }

        }
    )
})

app.post('/verify', (req, res) => {
    let otprecived = req.body.otp;
    let email = req.body.email;
    if (savedOTPS[email] == otprecived) {
        res.send("Verfied");
    }
    else {
        res.status(500).send("Invalid OTP")
    }
})

app.listen(4000, () => {
    console.log("started")
})


