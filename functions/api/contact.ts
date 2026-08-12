import {
  verifyTurnstile
} from "./turnstile";

import {
  validateForm
} from "./validation";

import {
  sendEmails
} from "./resend";

import type {
  ContactFormData
} from "./types";

export const onRequestPost =
  async (context: any) => {

    try {

      const body =
        await context.request.json() as ContactFormData;

      const errors =
        validateForm(body);

      if (errors.length > 0) {

        console.warn(
          "Contact validation failed."
        );

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

      const turnstileValid =
        await verifyTurnstile(
          body.turnstileToken,
          context.env
            .TURNSTILE_SECRET_KEY
        );

      if (!turnstileValid) {

        console.warn(
          "Contact Turnstile verification failed."
        );

        return Response.json(
          {
            success: false,
            message:
              "Security verification failed."
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

      return Response.json(
        {
          success: true,
          message:
            "Your inquiry has been sent successfully."
        },
        {
          status: 200
        }
      );

    } catch (error) {

      console.error(
        "Contact API error:",
        error
      );

      return Response.json(
        {
          success: false,
          message:
            "Internal Server Error"
        },
        {
          status: 500
        }
      );
    }
  };