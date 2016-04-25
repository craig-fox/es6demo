# es6demo
Demo app showing React and Redux in action

### Description
Displays a page with a company name input box, and three buttons entitled
'Submit Name', 'Clear Name' and 'Back to Previous Name' on it. Below that is
a label displaying what the company name is. A blank result causes the name to be
displayed as 'empty'.

###Installation
`git clone https://github.com/craig-fox/es6demo.git` to obtain the code
`npm install` to install the node modules

`grunt build` to generate the build/bundle.js es5 file.

Launch a server to view the page. If a server isn't present, install the
`http-server` module with `npm install http-server -g` (Remove the -g if you do not want
http-server installed globally), and launch it by
typing http-server. The page can then be viewed at localhost:8080

###Purpose
To demonstrate a simple application written in ES6 Javascript using
the React and Redux tools.


###Usage
To submit a new company name, type a value in the Company Name text box
and click the Submit Name button. The label at the bottom will now display
your chosen company name.

To clear the company name, submit a value as above, then click the
Clear Name button. This will erase the previously submitted name, and the
bottom label will display the company name as 'empty'.

To go back to the previous name, submit two different names in a row, then click
the Back To Previous Name button. This will cause the first name
chosen to display in the bottom label. Clicking this button more than once
in succession will revert to the second-to-last and last name
submitted successively.

###Tests
There are Mocha scripts inside the test folder for running tests
on the action and reducer files. These can be run with `npm test`. I've
not yet written tests for the component.

###For the Future
Writing a component test script, as mentioned above. Also, the sole
component, Company, handles all the interactions with the Redux
store. This should be split into a container and presentation component
(a container component, **ViewCompany**, has been sketched out but not
integrated yet).

Also, I intend to move the build and watch functionality out of the Grunt script and
into package.json, placing everything under npm's control and
thus removing the need for Grunt,