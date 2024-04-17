import nodemailer, { SendMailOptions, Transporter } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

interface Attachment {
  filename: string;
  content: string | Buffer;
}

const mailer = (
  mail: string,
  subject: string,
  // text: string,
  otp: Number,
  attachments?: Attachment[]
): Promise<string> => {
  return new Promise((resolve, reject) => {

    const transporter: Transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "support@chamsswitch.com",
        pass: "yphvcagvwewrnxhp",
      },
    });

    const mailOptions: SendMailOptions = {
      from: "ChamsPay",
      to: mail,
      subject: subject,
      // text: text,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>OTP Email</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #fff;
                  border-radius: 10px;
                  overflow: hidden;
                  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background-color: #f39c12;
                  color: #fff;
                  padding: 20px;
                  text-align: center;
              }
              .content {
                  padding: 20px;
                  text-align: center;
              }
              h2 {
                  color: #333;
                  font-size: 24px;
                  margin-bottom: 20px;
              }
              p {
                  color: #555;
                  font-size: 16px;
                  line-height: 1.5;
                  margin-bottom: 20px;
              }
              .otp {
                  font-size: 36px;
                  font-weight: bold;
                  color: #f39c12;
                  margin-bottom: 30px;
              }
              .footer {
                  background-color: #f9f9f9;
                  padding: 20px;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>OTP Verification</h1>
              </div>
              <div class="content">
                  <h2>Hello there!</h2>
                  <p>Please use the following OTP to complete your verification:</p>
                  <div class="otp">${otp}</div>
                  <p>If you didn't request this, you can ignore this email.</p>
              </div>
              <div class="footer">
                  <p>&copy; 2024 WebPips. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>`,
      attachments: attachments,
    };

    transporter
      .sendMail(mailOptions)
      .then(() => {
        console.log("Mail sent successfully");
        resolve("Mail sent successfully");
      })
      .catch((error) => {
        console.error(error.message);
        resolve(error.message);
      });
  });
};

export default mailer;
