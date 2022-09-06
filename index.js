      import { CourierClient } from "@trycourier/courier";
      
      const courier = CourierClient(
        { authorizationToken: "pk_prod_QK1M6F3K7Z4QRFQ4VFBHRQEWV61D"});
      
      const { requestId } = await courier.send({
        message: {
          content: {
            title: "Welcome to Courier!",
            body: "Want to hear a joke? {{joke}}"
          },
          data: {
            joke: "Why was the JavaScript developer sad? Because they didn't Node how to Express themselves"
          },
          to: {
            email: "bizzicole87@gmail.com"
          }
        }
      });