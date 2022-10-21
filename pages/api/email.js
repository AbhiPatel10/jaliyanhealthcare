// import { SMTPClient } from 'emailjs';
const nodeMailer = require("nodemailer");

import CONFIG from '../../helper/config'


export default async function handler(req, res) {
    const transporter = nodeMailer.createTransport({
        host: 'smtp-mail.outlook.com',
        auth: {
          user: CONFIG.EMAIL,
          pass: CONFIG.PASSWORD
        }
      });

    // const client = new SMTPClient({
    //     user: CONFIG.EMAIL,
    //     password: CONFIG.PASSWORD,
    //     host: 'smtp-mail.outlook.com',
    //     ssl: true
    // });

    try {


        const emailsend = await transporter.sendMail(
            {
                text: `Just for testing purpose`,
                from: CONFIG.EMAIL,
                to: 'abhipatel1035@gmail.com',
                subject: 'testing emailjs',

            }
        )
        console.log("emailsend", emailsend)
        res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
    }
    catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }

}