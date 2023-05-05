# ChatNow

## Introduction

Welcome to my awesome project! I have created a real-time chat web app that allows people to connect and chat in different rooms. It is interactive, fun, and easy to use. You can join any room you like, or create your own. You can also see who is online.
This project uses **Socket.IO**, a library that enables low-latency, bidirectional and event-based communication between the browser and the server. Socket.IO handles the WebSocket connection and the fallback to HTTP long-polling if needed. It also provides features like automatic reconnection, namespaces, rooms, and broadcasting.
I hope you enjoy using this app as much as I enjoyed making it. Feel free to explore the code and learn more about Socket.IO and how it works. If you have any feedback or suggestions, please let me know. Thank you for your interest in my project!

# Features

- Real time communication - ultra low latency 
- Informative Feedback - gives other users feedback about who joined the room and who left , which user is posting which message , along with time of the event 
- Clean and Simple UI 
- Room Support - Allow user to join any room of choice and chat in them as a private isolated group chat 

## Technologies used

### Socket.IO  
It used WebSocket for low-latency communction , if it can't connect using webSocket due to older version of broweser , it fallback to the HTTP Long-Polling which is a reliable medhtod 
-   reliability (fallback to HTTP long-polling in case the WebSocket connection cannot be established)
-   automatic reconnection
-   packet buffering
-   acknowledgments - on connect and disconnect 
-   broadcasting to all clients or to a subset of clients (what we call “Room”)
-   multiplexing

### Express as a backend server 
Express also provides a simplified interface for creating an HTTP server, which is created using the `http.createServer()` method and passing the `app` object as an argument. The resulting `server` object is then passed to the Socket.IO library to create a WebSocket server that allows real-time communication between the server and client.

Overall, the role of Express in this code is to provide a framework for handling HTTP requests and serving static files, while Socket.IO is used for real-time communication between the server and client.


## Installation instructions

downlaod the repo , navigate to the local folder of repo 

Install the dependecy 
```Bash
npm install 
```

Start the app 
```Bash
npm start 
```

it will start the server on the `http://localhost:3000/`

Login with any username of choice and select a Room from the list to join , then click join and start chating with other client in the same room

## Usage instructions

## License