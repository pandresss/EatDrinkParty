DROP TABLE IF EXISTS edpBars;

CREATE TABLE edpBars(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  locality VARCHAR (255) NOT NULL,
  latitude VARCHAR (255) NOT NULL,
  longitude VARCHAR (255) NOT NULL,
  featured_image VARCHAR (255) NOT NULL,
  cuisine VARCHAR (255) NOT NULL
);

INSERT INTO edpBars (name, locality, latitude, longitude, featured_image, cuisine) VALUES
(
  'Metropolitan Room',
  'West 22nd Street, Gramrcy-Flatiron',
  '40.7415600000',
  '-73.9919700000',
  'https://b.zmtcdn.com/data/pictures/2/18072912/69bd5f41f8470dfd80a81f0b39385681_featured_v2.jpg',
  'American'
);
