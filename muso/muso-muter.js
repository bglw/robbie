const WebSocket = require("ws");

// WebSocket Client Endpoint in JavaScript

var ws = new WebSocket("<websocket address (you know which webpage to get this from)>);

// Event handler for the WebSocket connection opening
ws.onopen = async (event) => {
  // ws.send("connected");

  let id = 0;
  while (true) {
    const object = {
      id: id++,
      jsonrpc: "2.0",
      method: "Group.SetMute",
      params: {
        id: "8c7ab6d2-05ea-249d-51eb-34d8da2c9ad6",
        mute: true,
      },
    };

    console.log(object);
    ws.send(JSON.stringify(object));
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }
};

// Event handler for receiving text messages
ws.onmessage = (event) => {
  console.log(event.data);
};

// Event handler for errors in the WebSocket object
ws.onerror = (err) => {
  console.log("Error ", err);
};

// Listen for the close connection event
ws.onclose = (event) => {
  console.log("Disconnected: " + event.reason);
};

// Send the message

/**
 * 1. Mute
 **/

// ws.close();

// for more Information: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
