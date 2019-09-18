# MyTreasureMap-Server

Angular 8 User Registration and Login Example with Webpack 4

Full tutorial with example available at https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial
# Use this project
  - Fork/Clone
  - Install dependencies - npm install
  - Create local PostgresQl database
  - Run the server.js with node
  
# Token-Based Authentication with Node
JSON Web Tokens (JWT) is becoming very popular these days than the traditional authentication uses cookies and sessions.
JSON web tokens are text strings that can be used by client and server to authenticate and share information easily.

![image2](https://miro.medium.com/max/3420/1*3yU_Zbhj9zDZwboFLHS1rg.png)

We can summarise abose picture into follwing
-A client sends username/password combination to the server
-The server validates the authentication
-If authentication is successful, the server creates a JWT token else establishes an error response
-On successful authentication, the client gets JWT token in the response body
-Client stores that token in local storage or session storage.
-From next time, the client for making any request supplies the JWT token in request headers like this. Authorization: Bearer <jwt_token>
-Server upon receiving the JWT validates it and sends the successful response else error.

# Database Tables

  # account Table
  
|   Id  | firstname | lastname |   email     | username |   password    |
| ----- | --------- |--------- | ----------- | -------- | ------------- |
|Pri.Key|Content Cel| Content  |Content Cell | Content  |    Hash       |

 # maps Table
  
| Id  | name |  latitude |  longitude | comment |  
| --- | ---- | --------- | ---------- | --------|
|Contt|Conten|  Content  |   Content  | Content |

  # usermap Table
  
|     Id    |  userID   |   mapID   |
| --------- | --------- |---------- | userID column in the usermap table references to the id column of the  table.
|Primary Key|foreign key| Content   |

