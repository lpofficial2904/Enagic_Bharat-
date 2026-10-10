import nodemailer from "nodemailer";

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO_EMAIL"];

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeField(value) {
  return String(value ?? "").trim();
}

function validateLead(lead) {
  const errors = {};
  const phoneDigits = lead.phone.replace(/\D/g, "").slice(-10);

  if (lead.name.length < 3 || !/^[a-zA-Z\s.'-]+$/.test(lead.name)) {
    errors.name = "Please enter a valid full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
    errors.phone = "Please enter a valid 10 digit Indian mobile number.";
  }

  if (!/^[1-9]\d{5}$/.test(lead.pincode)) {
    errors.pincode = "Please enter a valid 6 digit pincode.";
  }

  if (lead.city.length < 8) {
    errors.city = "Please enter a complete address.";
  }

  if (!lead.timeSlot) {
    errors.timeSlot = "Please choose a preferred time slot.";
  }

  if (lead.message.length < 5) {
    errors.message = "Please enter a short message.";
  }

  return errors;
}

function renderDetail(label, value) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #eee7dc;">
        <div style="font-size:11px;line-height:16px;letter-spacing:1.6px;text-transform:uppercase;color:#9c8d79;font-weight:700;">${escapeHtml(label)}</div>
        <div style="margin-top:5px;font-size:15px;line-height:23px;color:#221f1a;font-weight:600;">${escapeHtml(value)}</div>
      </td>
    </tr>
  `;
}

function buildEmailTemplate(lead) {
  const safePhone = lead.phone.replace(/[^\d+]/g, "");
  const details = [
    ["Full Name", lead.name],
    ["Email Address", lead.email],
    ["Phone Number", lead.phone],
    ["Full Address", lead.city],
    ["Pincode", lead.pincode],
    ["Preferred Time", lead.timeSlot],
    ["Customer Message", lead.message],
  ]
    .map(([label, value]) => renderDetail(label, value))
    .join("");

  return `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#f4f0e8;font-family:Arial,Helvetica,sans-serif;color:#221f1a;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f0e8;padding:28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;overflow:hidden;border-radius:24px;background:#ffffff;border:1px solid #e5dccd;box-shadow:0 24px 70px rgba(33,29,22,.12);">
                <tr>
                  <td style="padding:34px 34px 30px;background:#191714;color:#ffffff;">
                    <div style="font-size:11px;line-height:16px;letter-spacing:2.4px;text-transform:uppercase;color:#d8b678;font-weight:800;">Enagic Bharat</div>
                    <h1 style="margin:12px 0 0;font-size:30px;line-height:38px;font-weight:700;">New demo request received</h1>
                    <p style="margin:12px 0 0;font-size:15px;line-height:24px;color:rgba(255,255,255,.68);">A customer has requested a personal Kangen Water demonstration. Please follow up during the preferred slot.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:26px 34px 8px;background:#fffaf2;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:16px;border-radius:18px;background:#ffffff;border:1px solid #eee4d5;">
                          <div style="font-size:11px;line-height:16px;letter-spacing:1.5px;text-transform:uppercase;color:#9c8d79;font-weight:800;">Lead</div>
                          <div style="margin-top:6px;font-size:20px;line-height:28px;color:#221f1a;font-weight:800;">${escapeHtml(lead.name)}</div>
                        </td>
                        <td width="14"></td>
                        <td style="padding:16px;border-radius:18px;background:#ffffff;border:1px solid #eee4d5;">
                          <div style="font-size:11px;line-height:16px;letter-spacing:1.5px;text-transform:uppercase;color:#9c8d79;font-weight:800;">Preferred Time</div>
                          <div style="margin-top:6px;font-size:20px;line-height:28px;color:#8b1e2d;font-weight:800;">${escapeHtml(lead.timeSlot)}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 34px 6px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <a href="tel:${escapeHtml(safePhone)}" style="display:inline-block;padding:13px 18px;border-radius:999px;background:#8b1e2d;color:#ffffff;text-decoration:none;font-size:14px;font-weight:800;">Call customer</a>
                        </td>
                        <td width="10"></td>
                        <td>
                          <a href="mailto:${escapeHtml(lead.email)}" style="display:inline-block;padding:13px 18px;border-radius:999px;background:#efe5d4;color:#221f1a;text-decoration:none;font-size:14px;font-weight:800;">Reply by email</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 34px 32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${details}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 34px;background:#f7f2e9;border-top:1px solid #eee4d5;">
                    <p style="margin:0;font-size:12px;line-height:20px;color:#8c806f;">This email was generated from the Enagic Bharat website contact form.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const missingEnv = getMissingEnv();
  if (missingEnv.length > 0) {
    console.error("Missing contact email environment variables:", missingEnv.join(", "));
    return response.status(500).json({
      success: false,
      message: "Email service is not configured",
    });
  }

  const {
    name,
    email,
    phone,
    city,
    pincode,
    timeSlot,
    message,
  } = request.body ?? {};

  const lead = {
    name: normalizeField(name),
    email: normalizeField(email),
    phone: normalizeField(phone),
    city: normalizeField(city),
    pincode: normalizeField(pincode),
    timeSlot: normalizeField(timeSlot),
    message: normalizeField(message),
  };

  const missingFields = Object.entries(lead)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingFields.length > 0) {
    return response.status(400).json({
      success: false,
      message: `Missing required fields: ${missingFields.join(", ")}`,
    });
  }

  const validationErrors = validateLead(lead);
  if (Object.keys(validationErrors).length > 0) {
    return response.status(400).json({
      success: false,
      message: "Please correct the highlighted details.",
      errors: validationErrors,
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: String(process.env.SMTP_SECURE ?? "").toLowerCase() === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
  try {
    const info = await transporter.sendMail({
      from: `"Enagic Bharat Website" <${fromEmail}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: lead.email,
      subject: `New Enagic Bharat demo request from ${lead.name}`,
      text: [
        "New Enagic Bharat demo request",
        "",
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        `Address / City: ${lead.city}`,
        `Pincode: ${lead.pincode}`,
        `Preferred Time: ${lead.timeSlot}`,
        `Message: ${lead.message}`,
      ].join("\n"),
      html: buildEmailTemplate(lead),
    });

    console.info("Contact email sent:", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return response.status(200).json({
      success: true,
      message: "Email sent successfully",
      ...(process.env.NODE_ENV === "development"
        ? {
            delivery: {
              accepted: info.accepted,
              rejected: info.rejected,
              response: info.response,
            },
          }
        : {}),
    });
  } catch (error) {
    console.error("Contact email failed:", error);
    return response.status(500).json({
      success: false,
      message: "Email Failed",
    });
  }
}
