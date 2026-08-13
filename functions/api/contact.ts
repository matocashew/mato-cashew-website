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

      const turnstileSecret =
        context.env
          ?.TURNSTILE_SECRET_KEY;

      const resendApiKey =
        context.env
          ?.RESEND_API_KEY;

      if (
        !turnstileSecret ||
        !resendApiKey
      ) {

        console.error(
          "Contact API environment configuration is missing."
        );

        return Response.json(
          {
            success: false,
            message:
              "Service configuration error."
          },
          {
            status: 500
          }
        );
      }

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
          turnstileSecret
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
        resendApiKey,
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