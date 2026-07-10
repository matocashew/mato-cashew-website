export const onRequestPost = async (context: any) => {

  try {

    const body = await context.request.json();

    return Response.json({

      success: true,

      received: body

    });

  } catch {

    return Response.json(

      {

        success: false,

        message: "Invalid JSON"

      },

      {

        status: 400

      }

    );

  }

};