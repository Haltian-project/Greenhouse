# Greenhouse Monitoring System


The project aimed to create an application that monitors the air conditions inside a greenhouse using the Thingsee Air and Environment Sensor. The app would display temperature, humidity, carbon dioxide, air pressure, light level, and alert the user if any readings were concerning. The app included a chart feature for users to view past data. The app also has a weather forecast as well as the ability to view electricity prices to help users better manage their crops in the greenhouse.

## Client Link

https://greenhouse-new-pi.vercel.app/

## Backend Link

https://greenhouse-app-server.onrender.com

## Technologies

Server-side: Node.Js

Client-side: React.js

Protocol: mqtt

Equipments: Thingsee Air, Enviroment sensors and Gateway

Database: MongoDB

Coding: Visual studio code

Deployment: Vercel, Render

## Main Features
1. Displays air conditions in the greenhouse. Includes temperature, humidity, carbon dioxide, air pressure and light level.
2. An alert is sent when a condition in the environment exceeds a threshold. User can set the threshold by themselves.
3. The Charts feature enables users to view historical data in a line graph format.
4. Outside air condition display.
5. Weather forecasting and presented as a line graph.
6. Real-time electricity prices are displayed and presented as a line graph.
7. Backlog for values ​​from which you can view changes in the greenhouse

# Project Structure

The project is divided into two main parts:

- `frontend/`: This directory contains the React application that provides the user interface for the monitoring system.
- `server/`: This directory contains the Node.js server that handles communication with the MQTT broker and provides an API for the frontend.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/greenhouse.git

2. Install the dependencies for the serve

   cd greenhouse/server
   npm install  

3. Install the dependencies for the frontend

    cd greenhouse/server
    npm install

Running the Application

1. Start the serve:

   cd greenhouse/server
   npm run start

2. In a new terminal window, start the frontend: 

   cd greenhouse/frontend
   npm run start:frontend  

## Team

- **[Bao Tran](https://github.com/tranxbao)**

- **[Tuukka Huru](https://github.com/TuukkaHuru)**

- **[Osman Akbaba](https://github.com/OsmanAkbaba)**

- **[Ziqi Li](https://github.com/ZiqiLi28)**
