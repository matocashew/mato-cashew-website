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

  console.log("Sending emails...");

  const [

    adminResult,

    autoReplyResult

  ] = await Promise.all([

    resend.emails.send({

      from: "Mato Cashew <noreply@updates.matocashew.com>",

      to: ["info@matocashew.com"],

      replyTo: data.email,

      subject: `[Mato Cashew] ${data.inquiry} - ${data.name}`,

      html: buildAdminEmail(data)

    }),

    resend.emails.send({

      from: "Mato Cashew <noreply@updates.matocashew.com>",

      to: [data.email],

      subject: "Thank you for contacting Mato Cashew",

      html: buildAutoReply(data)

    })

  ]);

  console.log("Admin Email:", adminResult);

  console.log("Auto Reply:", autoReplyResult);

  return {

    adminResult,

    autoReplyResult

  };

}