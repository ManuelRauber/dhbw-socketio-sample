# DHBW socket.io sample

This sample was done for a socket.io presentation with a chat sample live coding at the Cooperative State University Baden-Wuerttemberg Heilbronn.

Slides can be viewed at [Speaker Deck](https://speakerdeck.com/manuelrauber/dhbw-socket-dot-io).

## Prerequisites

* Install [Node.js](https://nodejs.org).
* After installing Node.js, execute `npm i` in the root of this repository to install socket.io dependency.

## Run it

To run the sample you need to start both client and server:

* `npm run start-server` starts a server on `http://localhost:3000`.
* `npm run start-client` starts a static file server on `http://localhost:8080`.

After starting both, go point two browsers to `http://localhost:8080`. They connect to the WebSocket server allowing to send very simple chat messages. Enjoy!

## Further reading

* [Node.js Documentation](https://nodejs.org/en/docs/)
* [WebSockets (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [WebSockets (WebSocket.org)](http://www.websocket.org/)
* [WebSockets (HTML5 Rocks)](http://www.html5rocks.com/en/tutorials/websockets/basics/)
* [WebSockets (Wikipdia)](https://en.wikipedia.org/wiki/WebSocket)
* [JavaScript: socket.io](http://socket.io/)
* [C#: ASP.NET SignalR](http://www.asp.net/signalr)
* [Java: Java-WebSockets](https://github.com/TooTallNate/Java-WebSocket)
* [Python: Autobahn](http://autobahn.ws/)
* [PHP: Ratchet](http://socketo.me/)
* [Ruby: WebSocket-ruby](https://github.com/imanel/websocket-ruby)