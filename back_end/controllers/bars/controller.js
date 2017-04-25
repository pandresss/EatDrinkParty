const edpBars = require('../../models/edpbars');

const controller = {};

controller.index = (req, res) => {
  console.log('hit controller');
  edpBars
    .findAll()
    .then((response) => {
      console.log(response);
      res.json(response);
    });
}

controller.create = (req, res) => {
  console.log("controller.create", req.body);
  const body = req.body;
  const name = body.name;
  const featured_image = body.image;
  const locality = body.location;
  const latitude = body.lat;
  const longitude = body.lng;
  const cuisine = body.cuisine;

  edpBars
    .create(name, locality, latitude, longitude, featured_image, cuisine)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log('Error', err));
};

controller.destroy = (req, res) => {
  console.log("destroy ====> ", req.body);
  const id = req.body.id;

  edpBars
    .destroy(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log("err", err));
}

module.exports = controller;
