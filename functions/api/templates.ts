import type { ContactFormData } from "./types";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function buildAdminEmail(data: ContactFormData): string {

  return `
  <!DOCTYPE html>
  <html>
  <body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:30px;">

    <div style="max-width:700px;margin:auto;background:#fff;padding:30px;border-radius:10px;">

      <h2 style="color:#0D5C3A;">
        New Contact Form Submission
      </h2>

      <table style="width:100%;border-collapse:collapse;">

        <tr>
          <td><strong>Name</strong></td>
          <td>${escapeHtml(data.name)}</td>
        </tr>

        <tr>
          <td><strong>Company</strong></td>
          <td>${escapeHtml(data.company || "-")}</td>
        </tr>

        <tr>
          <td><strong>Country</strong></td>
          <td>${escapeHtml(data.country)}</td>
        </tr>

        <tr>
          <td><strong>Email</strong></td>
          <td>${escapeHtml(data.email)}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${escapeHtml(data.phone || "-")}</td>
        </tr>

        <tr>
          <td><strong>Inquiry</strong></td>
          <td>${escapeHtml(data.inquiry)}</td>
        </tr>

        <tr>
          <td><strong>Estimated Volume</strong></td>
          <td>${escapeHtml(data.volume || "-")}</td>
        </tr>

      </table>

      <hr style="margin:25px 0;">

      <h3>Message</h3>

      <p style="white-space:pre-line;">
        ${escapeHtml(data.message)}
      </p>

    </div>

  </body>
  </html>
  `;

}

export function buildAutoReply(data: ContactFormData): string {

  return `
  <!DOCTYPE html>
  <html>
  <body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:30px;">

    <div style="max-width:700px;margin:auto;background:#fff;padding:30px;border-radius:10px;">

      <h2 style="color:#0D5C3A;">
        Thank you for contacting Mato Cashew
      </h2>

      <p>Dear ${escapeHtml(data.name)},</p>

      <p>

        Thank you for contacting us.

        We have received your inquiry and our team will respond as soon as possible.

      </p>

      <p>

        If your inquiry is urgent, you may also contact us via WhatsApp.

      </p>

      <br>

      <p>

        Best regards,

      </p>

      <strong>Mato Cashew</strong>

    </div>

  </body>
  </html>
  `;

}