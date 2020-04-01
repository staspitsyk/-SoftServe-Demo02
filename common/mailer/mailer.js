const nodemailer = require('nodemailer');

async function sendMail({ products, totalPrice }, { name, phone, email }, orderAnimalsIds) {
    orderAnimalsIds = orderAnimalsIds.toString();
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
        from: 'Node js <softservedemomailer@gmail.com>',
        to: 'softservedemomailer@gmail.com',
        subject: 'Message from Node js',
        text: `Customer ${name}
        bought ${products} amount of products
        Products Ids: ${orderAnimalsIds}
        total price: ${totalPrice}. 
        Contacts phone number: ${phone}
        email: ${email}`,
    });

}

module.exports = sendMail;