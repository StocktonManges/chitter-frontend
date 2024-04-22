# Chitter

## Front End

Chitter is a very basic version of Twitter where people can create an
account with an encrypted password, look at other peoples' posts and publish their own.

All posts are available to view and search on the home page without
logging in. However, posts can only be created when a user creates an
account. A new user's credentials are sent to the backend where the password is
encrypted using the bcrypt node package to add security.

I utilized the useContext React hook to make providers of various
functions and variables and coupled that with session storage to
dynamically render elements throughout the app after a user logs in.

## Backend

The backend is built using the Prisma, Express and bcrypt node packages
for enabling CRUD operations, exposing endpoints and encrypting user
passwords.

The database itself uses the SQLite engine and I used the nodemon package to run the backend on a local server during development.
