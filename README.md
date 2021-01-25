# PRESUPUESTADOR-SERVER-FINAL

## Dependencies

* PostgreSQL 12 
* NodeJS 10
* A modern version of npm or yarn
* pm2

## Installation

First, we need to create the PostgreSQL database to be used by the application, log in to psql and connect to postgres mantainance database as user postgres with the following command: 

```bash
sudo -u postgres psql
```

Now, we need to execute the following statements (replacing mock database_user, database_password, and database_name with proper values):

```sql
CREATE USER database_user WITH PASSWORD 'database_password';
CREATE DATABASE database_name;
GRANT ALL PRIVILEGES ON DATABASE database_name to database_user;
```

## Configuring the application

To properly configure the application, you must execute `index.js` with the following environment variables set:

```bash
DB_USER
DB_PASS
DB_NAME
```

To achieve this you can create a `.env` file you can place on the application's root path, it should be defined as follows:

```bash
DB_USER=database_user
DB_PASS=database_password
DB_NAME=database_name
PORT=application_port
```

## Seeding the application

The application will create the tables it needs automatically upon execution, however the initial seeds for the application must be loaded separately:

```
user@host:~$ node index.js
info: Feathers application started on http://localhost:3030
^C
user@host:~$ npx sequelize db:seed:all

Sequelize CLI [Node: 10.19.0, CLI: 6.2.0, ORM: 6.3.5]

Loaded configuration file "config/config.js".
Using environment "development".
== 05_demo-categories: migrating =======
== 05_demo-categories: migrated (0.012s)

== 10_demo-clients: migrating =======
== 10_demo-clients: migrated (0.006s)

== 20_demo-products: migrating =======
== 20_demo-products: migrated (0.015s)

== 25_demo-productcategories: migrating =======
== 25_demo-productcategories: migrated (0.020s)

== 30_demo-users: migrating =======
== 30_demo-users: migrated (0.003s)

== 40_demo-estimates: migrating =======
== 40_demo-estimates: migrated (0.004s)

== 50_demo-estimateitems: migrating =======
== 50_demo-estimateitems: migrated (0.005s)
```

## Adding to pm2

```
pm2 start index.js
```