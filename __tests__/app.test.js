const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test beer routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/beers should return list of beers', async () => {
    const res = await request(app).get('/beers');

    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Curve Ball',
        style: 'Blonde Ale',
        brewery: 'Pyramid Brewing Co.',
        location: 'Portland, Oregon',
        hops: 'Nugget',
        ABV: '5%',
      },
      {
        id: '2',
        name: 'Hop Venon',
        style: 'Double IPA',
        brewery: 'Boneyard Beer',
        location: 'Bend, Oregon',
        hops: 'Simcoe, Centennial, Chinook, CTZ',
        ABV: '9%',
      },
      {
        id: '3',
        name: 'Plunderphonics',
        style: 'American Imperial Stout Aged in Bourbon Barrels',
        brewery: 'Breadkside Brewery',
        location: 'Portland, Oregon',
        hops: 'Blend',
        ABV: '12.3%',
      },
      {
        id: '4',
        name: 'Batsquatch',
        style: 'Hazy IPA',
        brewery: 'Rogue',
        location: 'Oregon',
        hops: 'Mosaic, El Dorado, Belma',
        ABV: '6.7%',
      },
      {
        id: '5',
        name: 'Gumberoo',
        style: 'West Coast IPA',
        brewery: 'Rogue',
        location: 'Oregon',
        hops: 'Mosaic, Simcoe, Belma',
        ABV: '6.8%',
      },
      {
        id: '6',
        name: 'Starburst IPA',
        style: 'IPA',
        brewery: 'Ecliptic Brew Co.',
        location: 'Portland, Oregon',
        hops: 'Amarillo, Azacca, Centennia, Citra, Mosiac, Simcoe',
        ABV: '7.8%',
      },
      {
        id: '7',
        name: 'Ultimate Golden Ale',
        style: 'Golden/ Blonde Ale',
        brewery: 'Omission Brewing',
        location: 'Portland, Oregon',
        hops: 'Citris',
        ABV: '4.2%',
      },
    ]);
  });

  it('/beers/:id should return beer details', async () => {
    const res = await request(app).get('/beers/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Curve Ball',
      style: 'Blonde Ale',
      brewery: 'Pyramid Brewing Co.',
      location: 'Portland, Oregon',
      hops: 'Nugget',
      ABV: '5%',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
