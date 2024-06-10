# Flow Distribution Algorithm

## Overview

This project implements a flow distribution algorithm in Node.js for connecting users with astrologers. The goal is to ensure that each astrologer gets an equal proportion of chances to connect with users while providing flexibility to adjust the flow for top astrologers.


## Requirements

1. Design a flow distribution algorithm that allocates users to astrologers fairly.
2. Implement a mechanism to toggle the flow for top astrologers.
3. Ensure the algorithm can handle a daily flow of 2000-3000 users and a pool of 500 astrologers efficiently.
4. Provide documentation explaining the logic and usage.
5. Write test cases to validate the functionality.

## Technology Stack

- Node.js
- Express.js
- Jest

## Project Structure

```plaintext
.
├── controllers
│   ├── astrologerController.js
│   ├── userController.js
│   └── deleteController.js
├── models
│   ├── Astrologer.js
│   └── User.js
├── routes
│   ├── astrologerRoutes.js
│   ├── userRoutes.js
│   └── deleteRoutes.js

## Usage
API Endpoints
Add Astrologer: POST /astrologers
Add User: POST /users
Distribute Users: POST /distribute
Toggle Astrologer: POST /astrologers/:id/toggle
Delete All Data: DELETE /delete
├── services
│   └── distributionService.js
├── tests
│   └── distributionService.test.js
├── index.js
└── package.json


## Documentation
The code is well-documented with comments explaining the logic behind the algorithm and how to interact with the API endpoints. Detailed documentation is provided in the project files.

## Conclusion
This project ensures fair and balanced distribution of users among astrologers while providing flexibility to adjust the flow for top astrologers. The algorithm is scalable and efficient, handling a daily flow of 2000-3000 users and a pool of 500 astrologers. The implementation includes RESTful API endpoints, comprehensive documentation, and unit tests to validate the functionality.
