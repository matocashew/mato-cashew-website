import type { ContactFormData } from "./types";

function escapeHtml(text: string): string {

  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

}

export function buildAdminEmail(
  data: ContactFormData
): string {

  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Phnom_Penh"
  });

  return `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

</head>

<body
style="
font-family:Arial,sans-serif;
background:#f5f5f5;
padding:40px;
"
>

<div
style="
max-width:700px;
margin:auto;
background:#ffffff;
border-radius:12px;
padding:40px;
"
>

<h2
style="
color:#0D5C3A;
margin-top:0;
"
>

New Contact Form Submission

</h2>

<p>

A new inquiry has been submitted from

<strong>matocashew.com</strong>.

</p>

<table
style="
width:100%;
border-collapse:collapse;
margin-top:25px;
"
>

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
<td><strong>Inquiry Type</strong></td>
<td>${escapeHtml(data.inquiry)}</td>
</tr>

<tr>
<td><strong>Estimated Volume</strong></td>
<td>${escapeHtml(data.volume || "-")}</td>
</tr>

<tr>
<td><strong>Submitted</strong></td>
<td>${submittedAt}</td>
</tr>

</table>

<hr
style="
margin:30px 0;
"
>

<h3>Message</h3>

<p
style="
white-space:pre-line;
line-height:1.8;
"
>

${escapeHtml(data.message)}

</p>

</div>

</body>

</html>
`;

}

export function buildAutoReply(
  data: ContactFormData
): string {

  return `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

</head>

<body
style="
font-family:Arial,sans-serif;
background:#f5f5f5;
padding:40px;
"
>

<div
style="
max-width:700px;
margin:auto;
background:#ffffff;
border-radius:12px;
padding:40px;
"
>

<h2
style="
color:#0D5C3A;
margin-top:0;
"
>

Thank You for Contacting Mato Cashew

</h2>

<p>

Dear <strong>${escapeHtml(data.name)}</strong>,

</p>

<p>

Thank you for contacting Mato Cashew.

We have successfully received your inquiry.

</p>

<p>

Our team will carefully review your request and respond as soon as possible.

</p>

<p>

If your inquiry is urgent, you may also contact us via WhatsApp or email.

</p>

<hr
style="
margin:30px 0;
"
>

<p>

Best regards,

</p>

<p>

<strong>Mato Cashew</strong><br>

Premium Cambodian Cashew Kernels<br>

🌐 https://matocashew.com<br>

📧 info@matocashew.com

</p>

</div>

</body>

</html>
`;

}