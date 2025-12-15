// var brevo = require("sib-api-v3-sdk");
// let defaultClient = brevo.ApiClient.instance;

// let apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey =
//   "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";
// let sendSmtpEmail = new brevo.SendSmtpEmail();
// let apiInstance = new brevo.TransactionalEmailsApi();
// const SendMailTransporter = async (data) => {
//   const defaultTemplate = `
//   <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
//   <img width='300' height='100' src='http://139.59.93.61/Beaconerlogo.png' alt='TAX Logo' />
//       </div>
//       <p>Dear Admin,</p>
//       <p>I hope this message finds you well.</p>
//       <p><strong>Details:</strong><br> ${data.description}</p>
//       <p>You can contact me at:</p>
//       <ul>
//         <li><strong>Name:</strong> ${data.name}</li>
//         <li><strong>Email:</strong> ${data.email} </li>
//         <li><strong>Phone:</strong> ${data.phone} </li>
//       </ul>
//       <p>Looking forward to your response.</p>
//       <p>Best regards,<br> ${data.name}</p>
// `;
//   try {
//     sendSmtpEmail.subject = data.subject;
//     sendSmtpEmail.sender = {
//       name: "Beconer",
//       email: "himanshu.joshi@beaconer.io",
//     };
//     sendSmtpEmail.htmlContent = defaultTemplate;
//     sendSmtpEmail.to = [{ email: "bhavdeepbtridhyatech@gmail.com" }];
//     await apiInstance.sendTransacEmail(sendSmtpEmail);

//     return true;
//   } catch (error) {
//     if (error.response) {
//       console.log("email send error", error);
//       return false;
//     }
//   }
// };
// export default function handler(req, res) {
//   SendMailTransporter(req.body);
//   res.status(200).json({ message: "Hello, Next.js API!" });
// }

// const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const SendMailTransporter = async (data) => {
//   const defaultTemplate = `
//     <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
//       <img width='300' height='100' src='http://139.59.93.61/Beaconerlogo.png' alt='Beaconer Logo' />
//     </div>
//     <p>Dear Admin,</p>
//     <p>I hope this message finds you well.</p>
//     <p><strong>Details:</strong><br> ${data.description}</p>
//     <p>You can contact me at:</p>
//     <ul>
//       <li><strong>Name:</strong> ${data.name}</li>
//       <li><strong>Email:</strong> ${data.email}</li>
//       <li><strong>Phone:</strong> ${data.phone}</li>
//     </ul>
//     <p>Looking forward to your response.</p>
//     <p>Best regards,<br> ${data.name}</p>
//   `;

//   const msg = {
//     to: "bhavdeepbtridhyatech@gmail.com", // Recipient email
//     from: {
//       name: "Beaconer",
//       email: "himanshu.joshi@beaconer.io", // Verified sender email in SendGrid
//     },
//     subject: data.subject,
//     html: defaultTemplate,
//   };

//   try {
//     await sgMail.send(msg);
//     return true;
//   } catch (error) {
//     console.error("Email send error:", error);
//     return false;
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const success = await SendMailTransporter(req.body);
//     if (success) {
//       return res.status(200).json({ message: "Email sent successfully!" });
//     } else {
//       return res.status(500).json({ message: "Failed to send email" });
//     }
//   } else {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
// }
const sgMail = require("@sendgrid/mail");

// Set SendGrid API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SendMailTransporter = async (data) => {
  const defaultTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <img width='200' height='70' src='https://staging.beaconer.io/Beaconerlogo.png' alt='Beaconer Logo' />
    </div>
    <p>Dear Admin,</p>
    <p>I hope this message finds you well.</p>
    <p><strong>Details:</strong><br> ${data.description}</p>
    <p>You can contact me at:</p>
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
    </ul>
    <p>Looking forward to your response.</p>
    <p>Best regards,<br> ${data.name}</p>
  `;

  const msg = {
    to: "Contact@beaconer.io",
    from: {
      name: "Beaconer",
      email: "himanshu.joshi@beaconer.io",
    },
    cc: ["Nagaraj.kuppuswamy@beaconer.io", "Himanshu.joshi@beaconer.io"],
    subject: data.subject,
    html: defaultTemplate,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const success = await SendMailTransporter(req.body);
    if (success) {
      return res.status(200).json({ message: "Email sent successfully!" });
    } else {
      return res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
