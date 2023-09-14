Node API Documentation
Introduction
Welcome to the Node API documentation. This API allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection of persons.

Base URL
The base URL for all API endpoints is http://localhost:3000 if you're running it locally. Replace it with your server's URL if deployed on a remote server.

Endpoints
1. Get All Persons
Endpoint: /persons

Method: GET

Description: Retrieves a list of all persons.

Sample Request:
GET /persons
Sample Response (200 OK):
[
  {
    "_id": "5fcec16ed1bcee603ec0db92",
    "name": "John Doe"
  },
  {
    "_id": "5fcec17bd1bcee603ec0db93",
    "name": "Jane Smith"
  }
]


2. Get One Person
Endpoint: /persons/:id

Method: GET

Description: Retrieves information about a specific person by their ID.

Sample Request:

GET /persons/5fcec16ed1bcee603ec0db92
Sample Response (200 OK):
{
  "_id": "5fcec16ed1bcee603ec0db92",
  "name": "John Doe"
}



3. Create a New Person
Endpoint: /persons

Method: POST

Description: Creates a new person.

Sample Request:
POST /persons
Content-Type: application/json

{
  "name": "Alice Johnson"
}
Sample Response (201 Created):
{
  "_id": "5fcec18bd1bcee603ec0db94",
  "name": "Alice Johnson"
}


4. Update Info of One Person
Endpoint: /persons/:id

Method: PATCH

Description: Updates the information of a specific person by their ID.

Sample Request:
PATCH /persons/5fcec16ed1bcee603ec0db92
Content-Type: application/json

{
  "name": "John Doe Jr."
}
Sample Response (200 OK):
{
  "_id": "5fcec16ed1bcee603ec0db92",
  "name": "John Doe Jr."
}


5. Delete Info of One Person
Endpoint: /persons/:id

Method: DELETE

Description: Deletes the information of a specific person by their ID.

Sample Request:
DELETE /persons/5fcec16ed1bcee603ec0db92
Sample Response (204 No Content):

No content is returned in the response.



Limitations
This API assumes a MongoDB database is used for storage.
Error handling for invalid requests is minimal.
Local Setup Instructions
To set up and run the API locally, follow these steps:

Clone the repository from GitHub:
git clone https://github.com/Amin0001/Node-API.git
Install dependencies:
npm install
Configure MongoDB: Update the MongoDB connection URL in server.js to point to your MongoDB instance.

Start the server:
npm start
The API will be available at http://localhost:3000.
