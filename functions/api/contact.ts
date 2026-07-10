export const onRequestPost = async (context: any) => {

  return Response.json({

    success: true,

    hasResendKey: !!context.env.RESEND_API_KEY,

    hasTurnstileKey: !!context.env.TURNSTILE_SECRET_KEY

  });

};