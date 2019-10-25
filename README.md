# react-bot-widget

This project was developed to demonstrate work of BotWidget React component. 

## About BotWidget

BotWidget is a simple React component built upon [customizable React module](https://github.com/Wolox/react-chat-widget).
The added functionality includes performing API calls to the bot/message server to perform communication with the user.
There are two types of messages:
- The quick button menu call;
- Simple message sending.

### Quick button menu call

When the BotWidget is created, the api call is made (which is defined though the buttonUrl prop). The key-value array of type [{button: "button name", representation: [{label: "label", value: "value"}, ... ]}] must be returned. 
There is an [example](https://github.com/darya-makarenko/react-bot-widget/blob/master/demo-server/myapp/app.js) of how to define quick buttons on the server side. 

### Simple messaging

When the entered message is not a quick button call, the messageUrl (the appropriate prop of BotWidget component) API call (by POST method) is made. The server must classify message type and decide what text must be returned by its inner logic. The result of the query must be an object with field {"message": "message text"}. Follow the link rom the previous point to see the example of the server answer.

## BotWidget customization

The following props can be applied:
- title : BotWidget's window title;
- subtitle : BotWidget's window subtitle;
- senderPlaceHolder: placeholder message in the text input;
- timeout: milliseconds value to perform fake printing time from bot;
- welcomeMessage: the very first message from bot;
- messagesUrl: server entrypoint, see Simple Messaging;
- buttonsUrl: server entrypoint, see Quick Button menu call.

There is an [example](https://github.com/darya-makarenko/react-bot-widget/blob/master/src/App.js) of using BotWidget component.

## Problems

The initial realisation plan included making the component [Draggable](https://github.com/mzabriskie/react-draggable), but if making so, it blocks user input and can't dispatch user button events properly. My suggestion is that the answer lies in css-styles mismatch.

## To start this demo
Please, follow the next steps:
- !Skip this step in case you have your own server! 

Go to the "react-bot-widget/demo-server/myapp/" folder and open cmd. Enter "nodemon app.js" to start the demo-server. 
- Go to the root folder and open cmd. Then enter "npm install" > "npm start".

NB: I assume that you have npm installed. If not, please, follow the [guide](https://www.npmjs.com/get-npm).

## Create React App Info 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Some of Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
