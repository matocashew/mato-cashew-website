export async function verifyTurnstile(

  token: string,

  secretKey: string

): Promise<boolean> {

  try {

    const formData = new FormData();

    formData.append("secret", secretKey);

    formData.append("response", token);

    const response = await fetch(

      "https://challenges.cloudflare.com/turnstile/v0/siteverify",

      {

        method: "POST",

        body: formData

      }

    );

    const result = await response.json() as {

      success: boolean;

      "error-codes"?: string[];

    };

    console.log("Turnstile Result:", result);

    return result.success;

  } catch (error) {

    console.error("Turnstile Error:", error);

    return false;

  }

}