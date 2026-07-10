export async function verifyTurnstile(
  token: string,
  secret: string,
  remoteip?: string
): Promise<boolean> {

  const body = new URLSearchParams();

  body.append("secret", secret);
  body.append("response", token);

  if (remoteip) {
    body.append("remoteip", remoteip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body
    }
  );

  const result = await response.json();

  return result.success === true;
}