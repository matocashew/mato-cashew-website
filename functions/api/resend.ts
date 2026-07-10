import { Resend } from "resend";

import type { ContactFormData } from "./types";

import {

  buildAdminEmail,

  buildAutoReply

} from "./templates";

export async function sendEmails(

  apiKey: string,

  data: ContactFormData

) {

  const resend = new Resend(apiKey);

  // Email to Mato Cashew

  await resend.emails.send({

    from: "Mato Cashew <noreply@updates.matocashew.com>",

    to: ["info@matocashew.com"],

    replyTo: data.email,

    subject: `New ${data.inquiry} from ${data.name}`,

    html: buildAdminEmail(data)

  });

  // Auto Reply

  await resend.emails.send({

    from: "Mato Cashew <noreply@updates.matocashew.com>",

    to: [data.email],

    subject: "Thank you for contacting Mato Cashew",

    html: buildAutoReply(data)

  });

}