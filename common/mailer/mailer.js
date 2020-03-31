const nodemailer = require('nodemailer');

async function sendMail({ products, totalPrice }, { name, phone, email }) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'softservedemomailer@gmail.com',
            pass: 'somehardpassword'
        }
    });

    const result = await transporter.sendMail({
        from: '"Node js <softservedemomailer@gmail.com>',
        to: 'softservedemomailer@gmail.com',
        subject: 'Message from Node js',
        text: `Customer ${name} bought ${products} amount of products, total price: ${totalPrice}. Contacts phone number: ${phone}, email: ${email}.`,
    });

    console.log(result);
}

module.exports = sendMail;