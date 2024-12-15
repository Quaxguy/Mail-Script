const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Set up the transporter for email
const transporter = nodemailer.createTransport({
  service: "<SERVICE>", // e.g., "Gmail"
  host: "<SMTP_HOST>", // e.g., "smtp.gmail.com"
  port: <SMTP_PORT>, // e.g., 465 for secure or 587 for TLS
  secure: true, // Use SSL
  auth: {
    user: "<EMAIL_USER>", // Your email address
    pass: "<EMAIL_PASSWORD>", // Your email password or app-specific password
  },
});

// Function to extract the employee name and company from the email address
const extractNamesFromEmail = (email) => {
  const [userPart, domainPart] = email.split("@");
  const employeeName = userPart
    .split(/[._]/)[0]
    .replace(/^\w/, (c) => c.toUpperCase());
  const companyName = domainPart
    .split(".")[0]
    .replace(/^\w/, (c) => c.toUpperCase());
  return { employeeName, companyName };
};

// Read the file containing email addresses
const emailFilePath = path.join(__dirname, "<EMAIL_FILE>");
fs.readFile(emailFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const emailList = data.split("\n").filter((email) => email.trim() !== "");

  const sendEmail = (email, callback) => {
    const { employeeName, companyName } = extractNamesFromEmail(email.trim());
    const mailOptions = {
      from: "<EMAIL_USER>", // Sender address
      to: email.trim(), // Receiver email
      subject: `<SUBJECT_PLACEHOLDER>`, // Replace with dynamic or static subject
      html: `<HTML_BODY_PLACEHOLDER>`, // Replace with email HTML content
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Error sending email to ${email}: `, error);
      } else {
        console.log(`Email sent to ${email}: `, info.response);
      }
      if (callback) callback();
    });
  };

  const sendEmailsSequentially = (index) => {
    if (index < emailList.length) {
      sendEmail(emailList[index], () => {
        sendEmailsSequentially(index + 1);
      });
    } else {
      console.log("All emails sent!");
    }
  };

  sendEmailsSequentially(0);
});
