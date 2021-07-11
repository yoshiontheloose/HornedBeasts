# Basic App

## Lab 01: Horned Beasts

By the end of this week, you will create an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.

Today we will just be focusing on the component structure of the application. You will create a new React application using create-react-app and fill it with components. Refer to ‘Feature Tasks’ to see exactly which components to build and where to display them.

Feature Tasks
First, create a React application using create-react-app as demonstrated in class. Connect this application to a GitHub repo by doing the following steps:

create a new repo on GitHub
in the root of your React application, run the following command: git remote add origin <url-to-your-gitHub-repo>
A-C-P
Create a branch and begin your work.
Your App component should render a Header, Footer and Main component, each of which is defined in their own files.

Your Header component needs to have an <h1> with a title.

Your Footer component needs to contain your name as the author.

The Main component needs to render at least two copies of a component called HornedBeasts.

The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.

The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

NOTE: Rendering an image in React is tricky. Try to figure out how to do this on your own and we will go over it tomorrow
