-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
Drop table if exist beers

Create table beers (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    
)