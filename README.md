This application is written by Abdullah O Alharbi, Dylan Mays, and Walker Ericsson.

In order to run this web application on a server, Node.js must be installed. Additionally, the
following Node modules are required:
    body-parser
    bcrypt
    http
    express
    express-fileupload
    express-session
    mongodb
    path
    read-excel-file

This is a mobile web application for the W.C. Handy Music Festival. Users can search for events of many different types
of musical events being held at the festival and add them to a personal schedule to help them plan out their
attendance. The front-end portion is written in HTML and JavaScript. The server/backend is written with
Node.js. The database containing the events, users, and administrators is a document database written with
MongoDB, which sends results to the server when queried for results.

AJAX and jQuery are used to make this a single-page web application. The website also uses a responsive design,
meaning that the size and structure of elements on the page change depending on window size or size of screen on
the device being used (desktop, laptop, tablet, phone, etc.).

Upon opening the website, the user will be presented with a search bar, six buttons for different music genres,
a button for all events, a button for users to view their personal schedule, and a login button.

When a button for a specific genre is clicked, a page of results is displayed where each event belongs to the genre
matching the button clicked. If the "All Events" button is clicked, a list of all events is displayed.

On the results page, each event is displayed with a title, time, and location. Along with these is a button to add
the event to the user's personal schedule, a button to get more information on the event, and a button to sample the
music that will be played at the event. The results page also contains a back button that, when clicked, will take the
user back to the home page.
