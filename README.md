# RR COURSE - 'BECOME A SOFTWARE DEVELOPER' 3RD, 5TH and 6TH WEEK PROJECTS
Welcome to my 3rd, 5th and 6th week projects for the 'Become a Software Developer' RR's course.  
* For the 3rd week: You'll find an HTML structure and CSS styles for a News Page Layout.  
* For the 5th week: You'll find an HTML structure, some CSS styles and JS validations for a Subscription form.  
* For the 6th week: You'll find JS functions for validating and sending all of the user data to the [provided server](http://curso-dev-2021.herokuapp.com/newsletter) when clicking in the button 'Subscribe'. If the data is correct, a success message is shown in a pop up modal with all of the user's information, also, the information is stored in the local sotrage. If the data is incorrect, an error message is shown in the modal.

## Description
The objective of the 3rd week project was to create a responsive layout for a News Webpage, following the [W3School Layout Pattern](https://www.w3schools.com/css/css_website_layout.asp)

The objective of the 5th week project was to create a new HTML file with the layout of a subscription form, following the aesthetics of the layout designed on the 3rd week.  
This form also is responsive, and it has validations on every input done with JS functions.
These validations were:
* Full name: Should have more than 6 letters and at least, one space in between
* Email: Should have a valid email format
* Password: At least 8 characters, with letters and numbers
* Age: An integer greater or equal to 18
* Phone: Number of at least 7 digits, it shouldn't accept blank spaces, dashes or parentheses
* Address: At least 5 characters with letters, numbers and at least a blank space in between
* City: At least 3 characters
* Postal code: At least 3 characters
* ID: Number of 7 or 8 digits

The objective of the 6th week was to create JS functions to validate the user's data when clicking in the button 'Subscribe!' and sending it to a server through an HTTP request.  If the data validation is correct, the modal should show a success message with all of the data provided by the user. Also, the information is stored in the local storage and when the user reloads the page, the user's info is pre-loaded in the form.
If the data is incorrect, the modal shouls show an error message and nothing is stored in the local storage.  

In this repo, you'll find:
* An HTML index file with the structure of the layout.
* An HTML subscription file with the structure of the subscription page.
* A 'styles' folder with 4 files:
  * 'reset.css' that normalizes all the default styles of the page 
  * 'index.css' that contains all the styles of the layout for the index.html
  * 'subscription.css' that contains all of the styles for the subscription form of 'subscription.html'
  * 'desktop.css' that has all the media queries for the desktop version of both pages.
* An 'images' folder that contains all of the images used in the page.
* A JS folder that contains the 'subscription-validation.js' file with all of the validation functions for the form's inputs and the fetch function for sending data to the server.  

The layout was designed using the concept of Mobile First. It also uses flexbox for responsivity, and it has a media query breakpoint for differentiate the mobile from the desktop version.  

### Clarifications
* If you had any ad-blocker extension installed in your browser, you won't be able to see the Ads. You'll need to stop it to see them.

## Getting Started
### Executing
You can download the project from this repository and open the 'index.html' file on your browser to see the template or you can access it clicking on its [GithubPage](https://palomaquiroz.github.io/RocketNewsProject/)

If you want to access the subscription form's GithubPage, [click here](https://palomaquiroz.github.io/RocketNewsProject/subscription)
And that's it! 😄
