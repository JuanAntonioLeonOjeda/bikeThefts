# Bike Thefts API

### Auth Endpoints

| METHOD | ENDPOINT      | TOKEN | ROLE     | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------- | ----- | -------- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup  | -     | -        | User Sign Up          | fullName, email, password, confirm_password                 | token   |
| POST   | /auth/login   | -     | -        | User Login            | email, password                                             | token   |
| POST   | /auth/officer | YES   | Director | Crete Officer         | fullName, email, password, confirm_password, department     | email   |
| POST   | /auth/director| YES   | Admin    | Crete Director        | fullName, email, password, confirm_password, department     | email   |

### Users Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /users                    | YES   | Admin | Get all users                | -                          | [{ users }]                          |
| GET    | /users/me                 | YES   | -     | Get own profile              | user_id                    | { user }                             |
| GET    | /users/:userId            | YES   | Admin | Get one user                 | user_id                    | { user }                             |
| PUT    | /users/me                 | YES   | -     | Update own profile           | user_id                    | { user }                             |
| DELETE | /users/:userId            | YES   | Admin | Remove user profile          | user_id                    | "Profile deleted"                    |
| GET    | /users/me/open            | YES   | -     | Get user's open case         | user_id                    | {case} / "You have no opened cases"  |
| GET    | /users/me/cases           | YES   | -     | Get all user past cases      | user_id                    | [{ cases }]                          |
| POST   | /users/me/password        | YES   | -     | Change own password          | old_password, new_password | "Password updated"                   |


### Cases Endpoints

| METHOD | ENDPOINT      | TOKEN | ROLE    | DESCRIPTION     | POST PARAMS                                                          | RETURNS                    |
| ------ | ------------- | ----- | ------- | --------------- | ---------------------------------------------------------------------| -------------------------- |
| GET    | /case         | YES   | Admin   | Get all cases   |                                                                      | [{ cases }]                |
| GET    | /case/:id     | YES   | Admin   | Get one case    | case_id                                                              | { case }                   |
| PUT    | /case/:id     | YES   | Admin   | Update case     | case_id                                                              | "Case updated", { case }   |
| DELETE | /case/:id     | YES   | Admin   | Remove case     | case_id                                                              | "Case deleted"             |
| POST   | /me/case      | YES   | Owner   | Open case       | license_num, color, type, theftDate, theft_description, theft_adress | "Case opened", { case }    |
| PUT    | /me/case/close| YES   | Officer | Close case      |                                                                      | "Case closed", { case }    |


### Department Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE     | DESCRIPTION                 | POST PARAMS      | RETURNS                             |
| ------ | ------------------------- | ----- | -------- | --------------------------- | ---------------- | ----------------------------------- |
| GET    | /department               | YES   | Admin    | Get all departments         | -                | [{ departments }]                   |
| POST   | /department               | YES   | Admin    | Create one department       | name, director   | "Deparment created", { department } |
| GET    | /department/:id           | YES   | Admin    | Get one department          | department_id    | { department }                      |
| PUT    | /department/:id           | YES   | Admin    | Update one department       | department_id    | "Deparment updated", { department } |
| DELETE | /department/:id           | YES   | Admin    | Remove one department       | department_id    | "Department deleted"                |
| GET    | /department/me/officers   | YES   | Director | Get department's officers   | department_id    | [{ officers }]                      |
| GET    | /department/me/open       | YES   | Director | Get department's open cases | department_id    | [{ cases }]                         |
| GET    | /department/me/cases      | YES   | Director | Get department's past cases | department_id    | [{ cases }]                         |
| POST   | /department/me/:officerId | YES   | Director | Add department's officers   | officer_id       | "Officer added", [{ officers }]     |
| DELETE | /department/me/:officerId | YES   | Director | Remove department's officers| officer_id       | "Officer removed", [{ officers }]   |

### Bikes Endpoints

| METHOD | ENDPOINT          | TOKEN | ROLE     | DESCRIPTION                      | POST PARAMS| RETURNS                  |
| ------ | ----------------- | ----- | -------- | ---------------------            | ---------- | ------------------------ |
| GET    | /bike             | YES   | Admin    | Get all bikes                    | -          | [{ bikes }]              |
| GET    | /bike/:id         | YES   | Admin    | Get one bike                     | bike_id    | { bike }                 |
| PUT    | /bike/:id         | YES   | Admin    | Update one bike                  | bike_id    | "Bike updated", { bike } |
| DELETE | /bike/:id         | YES   | Admin    | Remove one bike                  | bike_id    | "Bike deleted"           |
| GET    | /bike/me/open     | YES   | -        | Get user's bike from open case   | case_id    | { bike }                 |
| PUT    | /bike/me/open     | YES   | Owner    | Update user's bike from open case| case_id    | "Bike updated", { bike } |