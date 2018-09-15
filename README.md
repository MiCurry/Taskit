# Taskit
Github repo for the Diversity hack-a-thon in Austin!


# Schemas

## User
| Field    | Type   |
|----------|--------|
| User id  | int    |
| User Name| string |
| Role     | string |
| Password | string |
| User Pin | string |
| Phone #  | string |


## Task

| Field          | Type                 |
|----------------|----------------------|
| Task Id        | int                  |
| Creator        | String               |
| Task Name      | String               |
| Task Type      | String               |
| Priority       | String               |
| Assigned Users | List of Foriegn Keys |
| Comments       | List of Long Chars   |


## Event

| Field          | Type                   |
|----------------|------------------------|
| Event Name     | String                 |
| Event Date     | DateString             |
| Event Creator  | User ID                |
| Event Tasks    | Task Foreign Keys      |
