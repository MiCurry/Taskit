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







User 3's task list

From task select * where uid == 3;


task_list = task.get(uid=USER_ID);