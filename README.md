![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/FIL708/shelter?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/FIL708/shelter?color=%23238636&style=for-the-badge)
![GitHub closed issues](https://img.shields.io/github/issues-closed/FIL708/shelter?color=%23A371F7&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/FIL708/shelter?style=for-the-badge)

# Shelter - Pet Adoption App - IN PROGRESS

## Table of Contents

- [Shelter - Pet Adoption App - IN PROGRESS](#shelter---pet-adoption-app---in-progress)
  - [Table of Contents](#table-of-contents)
  - [1. Description](#1-description)
  - [2. Links:](#2-links)
  - [3. Stack:](#3-stack)
  - [4. Installation ( development ):](#4-installation--development-)
  - [5. Configuration:](#5-configuration)
  - [6. Development](#6-development)
  - [7. Database:](#7-database)
  - [8. Production:](#8-production)
  - [9. REST API](#9-rest-api)

## 1. Description

IN PROGRESS

## 2. Links:

- [Design](https://www.figma.com/file/gddkQdzVP0pw7dIb1oNa5C/animal-shelter?node-id=20%3A105&t=7muUg5TZjm3H3sBN-1)
- [Database diagram](https://drawsql.app/teams/estate/diagrams/shelter)

## 3. Stack:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Passport Badge](https://img.shields.io/badge/Passport-34E27A?logo=passport&logoColor=000&style=for-the-badge)
![Handlebars.js Badge](https://img.shields.io/badge/Handlebars.js-000?logo=handlebarsdotjs&logoColor=fff&style=for-the-badge)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

## 4. Installation ( development ):

`yarn prepare`
<br>
`yarn install`

## 5. Configuration:

Create `default.json` file in ./server/config folder with:

```json
{
    "port": 3500,
    "sessionKey": "YOUR SESSION KEY",
    "googleClientID": "YOUR GOOGLE CLIENT ID",
    "googleClientSecret":"YOUR GOOGLE CLIENT SECRET",
    "facebookID":"YOUR FACEBOOK ID",
    "facebookSecret": "YOUR FACEBOOK SECRET"

    <!-- For testing emails -->
    "smtp": {
        "host": "smtp.ethereal.email",
        "port": 587,
        "secure": false,
        "auth": {
          "user": "marques.becker8@ethereal.email",
          "pass": "VpnzUF55wFAZGgKurW"
        }
    }
}
```

## 6. Development

> `yarn start:client` <br> `yarn start:server`

## 7. Database:

- **development**: SQLite
- **production**: PostgreSQL
  <br>

> `yarn db:migrate` <br> `yarn db:seed`

## 8. Production:

For running in production:
<br>

> `docker-compose up`

To add example data run in container terminal:

> `yarn db:seed`

## 9. REST API

<details id="status">
<summary style="font-size:20px; font-weight: 500; margin-bottom: 12px">1. Status</summary>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/status</strong>

> [!NOTE]  
> Get crucial details about the server's location and the profile of the currently logged-in user.

<strong style="margin-left: 7px">Output:</strong>

- status
- server URL
- user profile

<br>

<details>
<summary style="margin-left: 7px; font-weight: 700">Output example:</summary>

```json
{
  "status": "Authenticated",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "role": "admin",
    "email": "example@example.com",
    "phone": "111111111",
    "avatar": "https://example.com",
    "birthday": "2023-07-12T00:00:00.000Z",
    "createdAt": "2023-07-09T21:46:33.970Z",
    "updatedAt": "2023-07-22T22:20:39.412Z",
    "addressId": 1
  },
  "serverUrl": "http://localhost:3500"
}
```

</details>

---

</details>

<details id="adoption">
<summary style="font-size:20px; font-weight: 500; margin-bottom: 12px">2. Adoption</summary>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/adoption</strong>

> [!NOTE]  
> This route provides a list of pets available for adoption.

<strong style="margin-left: 7px">Output:</strong>

- array of all adoptions
- data in each adoption record includes:
  - id
  - name
  - short description
  - number of likes
  - number of views
  - gender
  - age
  - weight
  - species
  - created date
  - address
  - photo

<br>

<details>
<summary style="margin-left: 7px; font-weight: 700">Output example:</summary>

```json
[
  {
    "id": 1,
    "name": "Rocky",
    "shortDescription": "Some description...",
    "likes": 0,
    "views": 112,
    "gender": "male",
    "age": 11,
    "weight": 32,
    "species": "dog",
    "createdAt": "2023-07-09T21:46:33.978Z",
    "address": {
      "id": 1,
      "city": "Warsaw",
      "country": "Poland"
    },
    "photos": [
      {
        "url": "https://photo/1"
      }
    ]
  },
  {
    "id": 2,
    "name": "Luna",
    "shortDescription": "Some description...",
    "likes": 0,
    "views": 8,
    "gender": "female",
    "age": 5,
    "weight": 17,
    "species": "dog",
    "createdAt": "2023-07-09T21:46:33.979Z",
    "address": {
      "id": 1,
      "city": "Warsaw",
      "country": "Poland"
    },
    "photos": [
      {
        "url": "https://photo/2"
      }
    ]
  }
]
```

</details>

<br>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/adoption/:id</strong>

> [!NOTE]  
> This route retrieves specific adoption details based on the provided adoption ID.

<strong style="margin-left: 7px">Output:</strong>

- object with all data about specific adoption
- data in specific adoption record includes:
  - id
  - name
  - short description
  - number of likes
  - number of views
  - gander
  - age
  - weight
  - species
  - created date
  - address
  - list of photos
  - list of opinion with author data

<br>

<details>
<summary style="margin-left: 7px; font-weight: 700">Output example:</summary>

```json
{
  "id": 1,
  "name": "Rocky",
  "description": "Some long description",
  "shortDescription": "Some short description.",
  "likes": 0,
  "views": 112,
  "gender": "male",
  "age": 11,
  "weight": 32,
  "species": "dog",
  "createdAt": "2023-07-09T21:46:33.978Z",
  "address": {
    "id": 1,
    "city": "Warsaw",
    "country": "Poland"
  },
  "photos": [
    {
      "id": 1,
      "url": "https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg",
      "adoptionId": 1
    },
    {
      "id": 2,
      "url": "https://cdn.galleries.smcloud.net/t/galleries/gf-3YpJ-Szag-K4Gg_dog-niemiecki-1920x1080-nocrop.jpg",
      "adoptionId": 1
    }
  ],
  "opinions": [
    {
      "id": 1,
      "body": "Some opinion body",
      "createdAt": "2023-07-09T21:46:34.009Z",
      "updatedAt": "2023-07-09T21:46:34.009Z",
      "adoptionId": 1,
      "userId": 1,
      "user": {
        "firstName": "Joe",
        "lastName": "Doe",
        "avatar": "https://photo/3"
      }
    }
  ]
}
```

</details>

---

</details>

<details id="photo">
<summary style="font-size:20px; font-weight: 500; margin-bottom: 12px">3. Photo</summary>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/photo</strong>

> [!NOTE]  
> A photo route showcases a variety of captivating photographs, focusing on pets and events

<strong style="margin-left: 7px">Output:</strong>

- array of photos
- each photo record includes:
  - id
  - url
  - array of tags

<br>

<details>
<summary style="margin-left: 7px; font-weight: 700">Output example:</summary>

```json
[
  {
    "id": 1,
    "url": "https://photo/1",
    "adoptionId": 1,
    "tags": [
      {
        "name": "main"
      },
      {
        "name": "dog"
      }
    ]
  },
  {
    "id": 2,
    "url": "https://photo/2",
    "adoptionId": 1,
    "tags": [
      {
        "name": "cat"
      }
    ]
  }
]
```

</details>

---

</details>

<details id="auth">
<summary style="font-size:20px; font-weight: 500; margin-bottom: 12px">4. Auth</summary>

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong>
<strong style="letter-spacing:1px; font-size: 18px">/api/auth/login</strong>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/auth/logout</strong>

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong>
<strong style="letter-spacing:1px; font-size: 18px">/api/auth/register</strong>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/auth/google</strong> 

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/auth/facebook</strong>

---

</details>

<details id="opinion">
<summary style="font-size:20px; font-weight: 500; margin-bottom: 12px">5. Opinion</summary>

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong>
<strong style="letter-spacing:1px; font-size: 18px">/api/opinion/:id</strong>

<img src="https://img.shields.io/badge/Logged%20In-Required-40a7e3?labelColor=dark grey&style=flat" alt="Logged In" />

<br>

> [!NOTE]  
> The post route ignites fresh perspectives about a specific pet, fostering discussions that shape new opinions within the community.

<strong style="margin-left: 7px">Input:</strong>

```json
{
  "body": "Opinion content"
}
```

<strong style="margin-left: 7px">Output:</strong>

```json
{
  "message": "Opinion successfully created",
  "opinion": {
    "id": 34,
    "body": "Opinion content",
    "adoptionId": "1",
    "userId": 1,
    "updatedAt": "2023-08-16T08:39:29.816Z",
    "createdAt": "2023-08-16T08:39:29.816Z",
    "user": {
      "firstName": "Joe",
      "lastName": "Doe",
      "avatar": "https://photo/1"
    }
  }
}
```

<br>

<strong style="background-color:#ab7413;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">PUT</strong>
<strong style="letter-spacing:1px; font-size: 18px">**/api/opinion/:id**</strong>

<img src="https://img.shields.io/badge/Logged%20In-Required-40a7e3?labelColor=dark grey&style=flat" alt="Logged In" />

<br>

> [!NOTE]  
> This endpoint is a feature that allows the author user to update their existing opinion about a pet available for adoption.

> [!IMPORTANT]  
> Please note that only users with an admin role are permitted to update all opinions for all pets.

<strong style="margin-left: 7px">Input:</strong>

```json
{
  "body": "Opinion content"
}
```


<strong style="margin-left: 7px">Output:</strong>

```json
{
  "message": "Opinion successfully updated"
}
```

<br>

![DELETE](https://img.shields.io/badge/delete-9c3214?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/opinion/:id</strong>

<img src="https://img.shields.io/badge/Logged%20In-Required-40a7e3?labelColor=dark grey&style=flat" alt="Logged In" />

<br>

> [!NOTE]  
> This endpoint allows authorized users to remove a specific opinion associated with a pet.

> [!IMPORTANT]  
> Please note that only users with an admin role are permitted to delete all opinions for all pets.

<strong style="margin-left: 7px">Output:</strong>

```json
{
  "message": "Opinion successfully deleted"
}
```
---

</details>

<details id="forgot">
<summary style="font-size:20px; font-weight: 500; margin-bottom: 12px">6. Forgot</summary>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/forgot/:id</strong>

> [!NOTE]  
> This route is typically used to verify whether a specific reset password session is still valid (not expired) and whether it exists in the system.

<strong style="margin-left: 7px">Output:</strong>

>  Provides information about an existing password reset session, which include a unique session identifier (ID) associated with the session. 
> 
```json
{
  "id": 1
}
```

<br>

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong>
<strong style="letter-spacing:1px; font-size: 18px">/api/forgot/:id</strong>

> [!NOTE]  
> Route that allows users to reset their password, updates the new password in the database, and deletes the associated password reset session.

<strong style="margin-left: 7px">Input:</strong>

> Includes the new password chosen by the user and the session ID associated with the password reset.

```json
{
  "id": 1,
  "password": "123456"
}
```

<strong style="margin-left: 7px">Output:</strong>

```json
{ 
  "message": "Password has been successfully reset"
}
```

<br>

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong>
<strong style="letter-spacing:1px; font-size: 18px">/api/forgot</strong>

> [!NOTE]  
> Initiates the process of resetting a forgotten password by creating a password reset session and sending a password reset link via email to the user.


<strong style="margin-left: 7px">Input:</strong>

> The email address associated with the user's account for which they have forgotten the password.

```json
{
  "email": "user@user.com"
}
```

<strong style="margin-left: 7px">Output:</strong>

```json
{
  "message": "Email successfully sended"
}
```

---

</details>

<details id="user">
<summary style="font-size:20px; font-weight: 500; margin-bottom: 12px">7. User</summary>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/user</strong>

<img src="https://img.shields.io/badge/Admin-Required-ff931c?labelColor=dark grey&style=flat" alt="Admin" />

<br>

> [!NOTE]  
> An endpoint that provides a list of registered users for an application.

> [!IMPORTANT]  
> Please note that only users with an admin role are permitted to obtain users data.

<strong style="margin-left: 7px">Output:</strong>

```json
[
    {
        "id": 1,
        "firstName": "Joe",
        "lastName": "Doe",
        "role": "admin",
        "email": "jon.doe@gmail.com",
        "phone": "111111111",
        "avatar": "https://avatar/1",
        "birthday": "2023-07-12T00:00:00.000Z",
        "createdAt": "2023-07-09T21:46:33.970Z",
        "updatedAt": "2023-07-22T22:20:39.412Z",
        "addressId": 8
    },
    {
        "id": 2,
        "firstName": "John",
        "lastName": "Adams",
        "role": "user",
        "email": "john@gmail.com",
        "phone": "123123123",
        "avatar": "https://avatar/2",
        "birthday": null,
        "createdAt": "2023-07-09T21:46:33.970Z",
        "updatedAt": "2023-07-09T21:46:33.970Z",
        "addressId": 1
    }
]
```

<br>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/user/:id</strong>

<img src="https://img.shields.io/badge/Logged%20In-Required-40a7e3?labelColor=dark grey&style=flat" alt="Logged In" />

<br>

> [!NOTE]  
> An endpoint granting access to user data.

>  [!IMPORTANT]  
> Please note that only users with an admin role and data owners are permitted to obtain user data.

<strong style="margin-left: 7px">Output:</strong>

<br>

<strong style="background-color:#ab7413;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">PUT</strong>
<strong style="letter-spacing:1px; font-size: 18px">/api/user/:id</strong>

<img src="https://img.shields.io/badge/Logged%20In-Required-40a7e3?labelColor=dark grey&style=flat" alt="Logged In" />

<br>

> [!NOTE]  
> An endpoint for updating user data.

>  [!IMPORTANT]  
> Please note that only users with an admin role and data owners are permitted to update user data.

<strong style="margin-left: 7px">Input:</strong>

<strong style="margin-left: 7px">Output:</strong>

<br>

![DELETE](https://img.shields.io/badge/delete-9c3214?style=for-the-badge)
<strong style="letter-spacing:1px; font-size: 18px">/api/user/:id</strong>

<img src="https://img.shields.io/badge/Logged%20In-Required-40a7e3?labelColor=dark grey&style=flat" alt="Logged In" />

<br>

> [!NOTE]  
> An endpoint for deleting user accounts.

> [!IMPORTANT]  
> Please note that only users with an admin role and data owners are permitted to update user data.

<strong style="margin-left: 7px">Output:</strong>

```json
{ "messages": "User ID:1 successfully deleted" }
```

---

</details>

![Get](https://img.shields.io/badge/get-2c691d?style=for-the-badge)
![POST](https://img.shields.io/badge/post-2c609c?style=for-the-badge)
![PUT](https://img.shields.io/badge/put-ab7413?style=for-the-badge)
![DELETE](https://img.shields.io/badge/delete-9c3214?style=for-the-badge)

