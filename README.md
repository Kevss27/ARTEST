# AR Project Description
This project involves creating a web-based Augmented Reality (AR) application. Where users will scan a QR code at a physical church, which will then display AR content showing the structure of the church and providing historical facts.

## Required Tools

- **Node.js**: This is necessary for creating a server and managing your project's dependencies. make sure to download this on your PC/Laptop
- **Express.js**: A minimalist web framework for Node.js. It's used to set up the server that hosts the AR content, and allows the application to be accessed locally on a mobile device.
- **selfsigned** Use to have https compatibility
- **A-Frame** To customize and enhance the AR scene with additional 3D objects, animations, interactions, and more if needed.
PS: Not sure for now
- **AR.js**: A library for creating AR content that can be displayed in a web browser. AR.js primarily for AR functionality, such as marker detection and displaying content based on markers. or
- **8thwall**: more advance than Ar.js and support image recognition
PS: Not for now
- **jsQR**: A JavaScript library that allows you to read QR codes. It's used to decode the QR codes scanned by users.
- **Three.js** or **Sketchup** for Graphics and animation for AR structures.

## Installation
npm init -y
npm install express 
npm install selfsigned

PS: Not yet sure
npm install jsqr

## on new device you just need install
npm intall

## How to run the web on your browser?
1. On terminal run `node server.js`
2. Open your web browser and navigate to `https://localhost:3000/ar1`

## How to run the Express.js server on your phone

1. Ensure both your development machine (where the server is running) and your mobile device are connected to the same network.

2. Find the local IP address of your development machine:
    - On Windows, open Command Prompt and type `ipconfig`. Look for the "IPv4 Address" under the network adapter you're using.

3. Start your server. In your project's root directory, open a new terminal and type `node server.js`.

4. Access the server from your mobile device. Open a web browser on your mobile device and navigate to your development machine's IP address, followed by `:3000`. For example, if your IP address is `192.168.100.2`, you would navigate to `https://192.168.100.2:3000/ar1`.
