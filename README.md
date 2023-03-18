# FoodieBot Documentation :robot:
## Introduction

FoodieBot is a chatbot built to simplify the process of ordering food items from a restaurant. The chatbot is built on Node.js and Socket.io which enables it to run in real-time and allow for seamless communication between the server and the clients.

## Features
OrderBot is designed to provide the following features:

- Order items from a restaurant
- Display the order
- Check out the order
- View the order history

## Technologies :computer:
The following technologies are used in building OrderBot:

- [Node.js](https://nodejs.org/en/docs)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## How to use :thinking:
To use OrderBot, you need to follow the steps below:

- Install Node.js on your computer
- Clone the repository or download the zip file
```bash
git clone git@github.com:jhhornn/FoodieBot.git
```
- Open the project folder in your editor
- Run `npm install` to install all dependencies
- Rename `.env.example` to .env
- Replace the placeholders in the `.env` file with your own configurations
- Run `npm start` to start the server
- Open your web browser and navigate to `http://localhost:3000` to start using the chatbot

## Chatbot Functionality
### Communication
FoodieBot is built on Socket.io which allows for real-time communication between the server and the client. When a client connects to the server, the server sends a welcome message to the client. When a client sends a message, the server receives the message, processes it, and sends a response to the client.

### Order Management
FoodieBot enables clients to order food items from a restaurant. When a client sends a message to the chatbot, the message is processed, and a response is sent back to the client. The order history makes use of the client side localStorage for storage. This is was done to make the orderHistory persistent across all opened tabs.

 The chatbot is designed to accept specific input from the client, which includes:

- **1** - To view the order
- **item number and quantity** - To order a food item
- **99** - To checkout the order
- **97** - To view the current order
- **98** - To view the order history
- **0** - To cancel the order

### Order History :chart_with_upwards_trend:
OrderBot also allows clients to view their order history. The chatbot is designed to accept a specific input from the client, which includes:

- **98,year,month** - To view the order history for a specific month and year

## Conclusion :clap:
FoodieBot is a chatbot that simplifies the process of ordering food items from a restaurant. It is designed to be user-friendly and easy to use. If you have any questions or issues with OrderBot, please contact the [me](https://twitter.com/jhhornn).