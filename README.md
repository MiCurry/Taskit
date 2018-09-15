# Taskit
Github repo for the Diversity hack-a-thon in Austin!

# Dependencies
*. Node.js
*. Express

# Starting the App

```
# After you clone the repo and have everything installed run:
nodemon
```
Boom! You're done!


# Schemas

## User
| Name     | Access Name | Type                 |
|----------|-------------|----------------------|
| User id  |             | int                  |
| User Name| name        | string               |
| Role     | role        | string               |
| Password |             | string               |
| User Pin | pin         | string               |
| Phone #  | phone       | string               |


## Task

| Name           | Access Name  | Type                 |
|----------------|--------------|----------------------|
| Task Id        |              | int                  |
| Creator        | creator      | UID                  |
| Task Name      | name         | String               |
| Task Type      | type         | String               |
| Priority       | priority     | String               |
| Assigned Users | users        | List of Foriegn Keys |
| Comments       | comments     | List of Long Chars   |


## Event

| Name              | Access Name | Type                   |
|-------------------|-------------|------------------------|
| Event id          |             | Int                    |
| Event Name        | name        | String                 |
| Event Date        | date        | Date                   |
| Event Creator     | creator     | User ID                |
| Event Comments    | comments    | List of Long Chars     |
| Event Description | description | User ID                |
| Event Tasks       | tasks       | Task Foreign Keys      |
