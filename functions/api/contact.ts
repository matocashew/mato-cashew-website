import { verifyTurnstile } from "./turnstile";
import { validateForm } from "./validation";
import { sendEmails } from "./resend";
import type { ContactFormData } from "./types";

export const onRequestPost = async (context: any) => {

  console.log("========== CONTACT API ==========");

  try {

    const body = await context.request.json() as ContactFormData;

    console.log("Request Body:", body);

    // Validate form
    const errors = validateForm(body);

    if (errors.length > 0) {

      console.log("Validation failed:", errors);

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

    console.log("Validation passed.");

    // Verify Turnstile
    const turnstileValid = await verifyTurnstile(
      body.turnstileToken,
      context.env.TURNSTILE_SECRET_KEY
    );

    console.log("Turnstile:", turnstileValid);

    if (!turnstileValid) {

      return Response.json(
        {
          success: false,
          message: "Security verification failed."
        },
        {
          status: 403
        }
      );

    }

    console.log("Sending emails...");

    await sendEmails(
      context.env.RESEND_API_KEY,
      body
    );

    console.log("Emails sent successfully.");

    return Response.json(
      {
        success: true,
        message: "Your inquiry has been sent successfully."
      },
      {
        status: 200
      }
    );

  } catch (error) {

    console.error("CONTACT API ERROR");
    console.error(error);

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