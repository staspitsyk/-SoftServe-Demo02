const nodemailer = require('nodemailer');

async function sendMail() {
    // const testEmailAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'softservedemomailer@gmail.com',
            pass: 'somehardpassword'
        }
    });

    const result = await transporter.sendMail({
        from: '"Node js <softservedemomailer@gmail.com>',
        to: 'staspitsyk@gmail.com',
        subject: 'Message from Node js',
        text: 'This message was sent from Node js server.',
    });

    console.log(result);
}

module.exports = sendMail;