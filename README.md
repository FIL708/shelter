![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/FIL708/shelter?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/FIL708/shelter?color=%23238636&style=for-the-badge)
![GitHub closed issues](https://img.shields.io/github/issues-closed/FIL708/shelter?color=%23A371F7&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/FIL708/shelter?style=for-the-badge)

# Shelter - Pet Adoption App - IN PROGRESS

## Content

1. [Description](#1-description)
2. [Links](#2-links)
3. [Stack](#3-stack)
4. [Installation](#4-installation--development)
5. [Configuration](#5-configuration)
6. [Development](#6-development)
7. [Database](#7-database)
8. [Production](#8-production)
9. [REST API](#9-rest-api)
   - [Status](#status)
   - [Adoption](#adoption)
   - [Photo](#photo)
   - [Auth](#auth)
   - [Opinion](#opinion)
   - [Forgot](#forgot)
   - [User](#user)

## 1. Description

IN PROGRESS

## 2. Links:

- [Design](https://www.figma.com/file/gddkQdzVP0pw7dIb1oNa5C/animal-shelter?node-id=20%3A105&t=7muUg5TZjm3H3sBN-1)
- [Database diagram](https://drawsql.app/teams/estate/diagrams/shelter)
- [test](#adoption)

## 3. Stack:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

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

> `yarn start:client`
> <br>
> `yarn start:server`

## 7. Database:

**development**: SQLite **production**: PostgreSQL
<br>

> `yarn db:migrate`
> <br>
> `yarn db:seed`

## 8. Production:

For running in production:
<br>

> `docker-compose up`

To add example data run in container terminal:

> `yarn db:seed`

## 9. REST API

<details id="status">
<summary style="font-size:18px; font-weight: 500; margin-bottom: 12px">1. Status</summary>

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px;border-radius:2px">GET</strong>
**/api/status**

#### Get crucial details about the server's location and the profile of the currently logged-in user

> Output:

- status
- server URL
- user profile

<br>

> Output example:

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

<details id="adoption">
<summary style="font-size:18px; font-weight: 500; margin-bottom: 12px">2. Adoption</summary>

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/adoption**

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/adoption/:id**

</details>

<details id="photo">
<summary style="font-size:18px; font-weight: 500; margin-bottom: 12px">3. Photo</summary>

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/photo**

</details>

<details id="auth">
<summary style="font-size:18px; font-weight: 500; margin-bottom: 12px">4. Auth</summary>

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong> **/api/auth/login**

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/auth/logout**

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong> **/api/auth/register**

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/auth/google**

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/auth/facebook**

</details>

<details id="opinion">
<summary style="font-size:18px; font-weight: 500; margin-bottom: 12px">5. Opinion</summary>

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong> **/api/opinion/:id**

<strong style="background-color:#ab7413;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">PUT</strong> **/api/opinion/:id**

<strong style="background-color:#9c3214;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">DELETE</strong> **/api/opinion/:id**

</details>

<details id="forgot">
<summary style="font-size:18px; font-weight: 500; margin-bottom: 12px">6. Forgot</summary>

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/forgot**

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/forgot/:id**

<strong style="background-color:#2c609c;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">POST</strong> **/api/forgot/:id**

</details>

<details id="user">
<summary style="font-size:18px; font-weight: 500; margin-bottom: 12px">7. User</summary>

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/user**

<strong style="background-color:#2c691d;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">GET</strong> **/api/user/:id**

<strong style="background-color:#ab7413;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">PUT</strong> **/api/user/:id**

<strong style="background-color:#9c3214;margin:0 6px 0 0px;padding:2px 4px; border-radius:2px">DELETE</strong> **/api/user/:id**

</details>
