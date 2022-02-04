# Booksapp

Start the server
  ```bash
  cd booksapp
  npm start
  ```
Use postman or similar apllication
Routes:
- http://localhost:3000/api/        - [GET]     - Body:empty        - get all users details
- http://localhost:3000/api/        - [POST]    - Body: id          - update isPaymentMade and referred users' totalEarnings
- http://localhost:3000/api/:id     - [GET]     - Body: empty       - get specific user details
- http://localhost:3000/api/:id     - [DELETE]  - Body: empty       - delete user
- http://localhost:3000/api/create  - [POST]    - Body: user object - create new user
  
