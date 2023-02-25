const nodemailer = require('nodemailer');

const sendMail = async (req,res) => {
    let testAccount = await nodemailer.createTestAccount();

    //Connecting with SMTP 
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: { //Getting user and pass using Ethernal Email.
            user: 'columbus.zboncak22@ethereal.email',
            pass: 'xx3v6RHMtRBUFCR8cN'
        },
    });

    //Logic for sending mail
    let info = await transporter.sendMail({
        from: '"Swati Tanu" <tanu@gmail.com>', // sender address
        to: "aman@gmail.com, albert@gmail.com", // list of receivers
        subject: "Hello!", // Subject line
        text: "lorem pea sur noont..", // plain text body
        html: "<b>lorem pea sur noont..</b>", // html body
      })

      console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;