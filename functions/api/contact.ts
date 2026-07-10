export const onRequestPost = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Contact API is working."
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};