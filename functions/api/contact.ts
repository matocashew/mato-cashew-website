import { verifyTurnstile } from "./turnstile";
import { validateForm } from "./validation";
import type { ContactFormData } from "./types";
import { sendEmails } from "./resend";

export const onRequestPost = async (context: any) => {

  try {

    const body = await context.request.json() as ContactFormData;

    const errors = validateForm(body);

    if (errors.length > 0) {

      return Response.json(
        {
          success: false,
          errors
        },
        {
          status: 400
        }
      );

    }

    const isValid = await verifyTurnstile(
      body.turnstileToken,
      context.env.TURNSTILE_SECRET_KEY
    );

    if (!isValid) {

      return Response.json(
        {
          success: false,
          message: "Turnstile verification failed."
        },
        {
          status: 403
        }
      );

    }

    await sendEmails(

    context.env.RESEND_API_KEY,

    body

    );

    return Response.json({

    success: true,

    message: "Your inquiry has been sent successfully."

    });

  } catch (err) {

    console.error(err);

    return Response.json(
      {
        success: false,
        message: "Internal Server Error"
      },
      {
        status: 500
      }
    );

  }

};