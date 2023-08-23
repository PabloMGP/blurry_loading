# blurry_loading
A small script that I created to share with everyone. The page starts with a blurred background that gradually fades out as the load text reaches 100. The animation is achieved through a combination of JavaScript and CSS, offering a smooth visual transition.

## Features
Blurred Background: The page begins with a blurred background using the CSS filter property.

Smooth Loading Animation: The loading counter incrementally increases, and the blur effect gradually reduces in intensity, providing a smooth animation.

## How It Works
The core of the animation lies in the JavaScript code (script.js). The blurring function dynamically updates the loading counter and adjusts the blur effect and opacity of the elements accordingly. The scale function helps map the load range to the opacity range, so that as the load increases, the opacity of the numbers decreases until fading away.

## Usage
Open the index.html file in your web browser to view the animation.

## Customization
Feel free to copy/modify the blurring function's parameters and interval timing to achieve your desired animation speed and effects for your own uses.