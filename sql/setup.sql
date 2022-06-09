-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
Drop table if exists beers;

CREATE table beers (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    style VARCHAR NOT NULL,
    brewery VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    hops VARCHAR NOT NULL,
    ABV VARCHAR NOT NULL
);

INSERT INTO beers (name, style, brewery,location, hops, ABV) VALUES
('Curve Ball', 'Blonde Ale', 'Pyramid Brewering Co.', 'Portland, Oregon', 'Nugget', '5%'),
('Hop Venon', 'Double IPA', 'Boneyard Beer', 'Bend, Oregon','Simcoe, Centennial, Chinook, CTZ', '9%'),
('Plunderphonics', 'American Imperial Stout Aged in Bourbon Barrels', 'Breadkside Brewery', 'Portland, Oregon', 'Blend', '12.3%'),
('Batsquatch', 'Hazy IPA', 'Rogue', 'Oregon', 'Mosaic, El Dorado, Belma', '6.7%'),
('Gumberoo', 'West Coast IPA', 'Rogue', 'Oregon', 'Mosaic, Simcoe, Belma', '6.8%'),
('Starburst IPA', 'IPA', 'Ecliptic Brew Co.', 'Portland, Oregon', 'Amarillo, Azacca, Centennia, Citra, Mosiac, Simcoe', '7.8%'),
('Ultimate Golden Ale', 'Golden/ Blonde Ale', 'Omission Brewing', 'Portland, Oregon', 'Citris', '4.2%');