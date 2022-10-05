# Ecommerce
Building ecommerce services

# Overview
This is a working draft of specification for Ecommerce system build by microservices. 
The system has been working round some underlying features during 7 days in rush, but overall I did epxress my idea about how to build ecommerce system with high traffic and easy to expand horizontally.
As well as loose couple and high cohesion of interaction between services.
# Getting Started
### How to setup and config
Make sure you already installed **Docker and Docker Compose** on your machine.
Navigate to `microservices folder`
RUN `docker-compose up -d` 
At first time, it will take time to build containers and other involving.

After all services are up, we need to create databases.
### Product Service
#### Database: 
RUN `docker-compose exec product-service sequelize-cli db:create --config config/database.json`

#### Tables:
RUN `docker-compose exec product-service sequelize-cli db:migrate --config config/database.json`

#### Seeders:
RUN `docker-compose exec product-service sequelize-cli db:seed:all --config config/database.json`

### Order Service
#### Database:
RUN `docker-compose exec order-service sequelize-cli db:create --config config/database.json`

#### Tables:
RUN `docker-compose exec order-service sequelize-cli db:migrate --config config/database.json`

### NOTICE: 
#### Port has been exposed:

* **Product Service:** 8080

* **Order Service:** 8081

* **RabbitMQ:** 15672

We can also access to rabbit browser to see whether message has been queued by enter address http://localhost:15672/ with username and password are **guest**
Great! We have finished some stuff, let's go and play around.

Let me know a product catalog and its products with id equal 1:
```
curl -X POST "http://localhost:8080/graphql" \
-H "Content-Type: application/json" \
-d '{"query": "{catalog(id:1){name,description,products{name}}}"}'
```

Or I need to create an order:

```
curl -X POST "http://localhost:8081/graphql" \
-H "Content-Type: application/json" \
-d '{"query": "mutation {createOrder(total:100, status: PENDING,customer_account_id:1,orderlines:[{price:45,quantity:1,discount:0,unit:\"kg\",subtotal:45, product_description_id:1}]){total,status,orderlines{price,discount,unit,quantity}}}"}'
```

# Architecuture
### 1. Component Diagram
![alt text](https://github.com/hamony/ecommerce/blob/main/system-design/Component-Ecommerce.svg?raw=true)
### 2. Sequence Diagram (Process Order)
![alt text](https://github.com/hamony/ecommerce/blob/main/system-design/SequenceProcessOrder.svg?raw=true)
### 3. ER (Product Catalog)
![alt text](https://github.com/hamony/ecommerce/blob/main/system-design/ER-ProductCatalog.svg?raw=true)
### 4. ER (Order Manager)
![alt text](https://github.com/hamony/ecommerce/blob/main/system-design/ER-OrderManager.svg?raw=true)
### 5. ER (Inventory)
![alt text](https://github.com/hamony/ecommerce/blob/main/system-design/ER-Inventory.svg?raw=true)
# Design pattern
- Singleton
- Proxy pattern
# Technical stack
- Node.js
- Docker && Docker Compose
- RabbitMQ
- GraphQL
- Mysql

# Testing
- Run `docker-compose exec product-service npm test`

# Lib Included
- express-graphql
- graphql-scalars
- mysql2
- sequelize
- mocha
# Dockers
#### 1. Observability
  * grafana 
  * prometheus
#### 2. Message Broker
  * rabbitmq
#### 3. Database Management System
  * mysql
#### 4. Services
  * Product Catalog
  * Order Manager

# Contact
I'm a software engineer, please contact me via email: [khoa.zamioza@gmail.com](mailto:khoa.zamioza@gmail.com)  if you have any concern or want to hire me.
