# Interview Scheduler

Interview Scheduler is a Single Page Application that allows students to book interviews with the availble interviewer of their choice. Students are allowed to book appointment between 12 PM to 5 PM, every appointment is between 1 student and 1 interviewer.
The front end of this project is built with React which also makes requests to an API to fetch and store appointment data from a database.

## User Interaction and Features

-User can view MAIN PAGE at contains the days and appointments for each day.
-User can view available slots and filled slots.
-User can view Days and number of Spots Remaining on the main page sidebar
-User can create, update and delete each of their appointments.
-User will recieve errors if
-Student Name is not filled in form
-Interviewr is not selected in form
-HTTP response fails

## Screenshots


### Main View Page
!['Main View Page'](https://github.com/Nourm9/scheduler/blob/master/docs/Scheduler%20-%20Main%20Page.gif)

### Saving Appointment
!['Saving Appointment'](https://github.com/Nourm9/scheduler/blob/master/docs/Scheduler%20-%20Saving.gif)

## Deleting Appointment
!['Deleting Appointment'](https://github.com/Nourm9/scheduler/blob/master/docs/Scheduler%20-%20Delete.gif)

### Form Errors
!['Form Errors'](https://github.com/Nourm9/scheduler/blob/master/docs/Scheduler%20-%20Form%20Errors.gif)

### HTTP/API Errors
!['HTTP/API Errors'](https://github.com/Nourm9/scheduler/blob/master/docs/Scheduler%20-%20API%20Error.gif)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Project Stack

### Front-End:
-React
-JavaScript
-Axios
-JSX
-HTML and SASS,

### Back-End: 
-Express 
-Node.js
-PostgreSQL

### Testing: 
-Storybook
-Webpack Dev Server
-Jest
-Testing Library and Cypress

## Dependencies

    "axios": "^1.3.4",
    "classnames": "^2.2.6",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.4.4"
    "@babel/core": "^7.4.3",
    "@babel/preset-react": "^7.18.6",
    "@storybook/addon-actions": "^5.0.10",
    "@storybook/addon-backgrounds": "^5.0.10",
    "@storybook/addon-links": "^5.0.10",
    "@storybook/addons": "^5.0.10",
    "@storybook/react": "^5.0.10",
    "@testing-library/jest-dom": "^4.0.0",
    "@testing-library/react": "^8.0.7",
    "@testing-library/react-hooks": "^8.0.1",
    "babel-loader": "8.1.0",
    "prop-types": "^15.8.1",
    "react-test-renderer": "^16.9.0",
    "sass": "^1.53.0"
