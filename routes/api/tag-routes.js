const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [{model: Product}]
  }).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    console.log(err),
    res.status(400).json(err)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, {
    include: [{model: Product}]
  }).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    console.log(err),
    res.status(400).json(err)
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    console.log(err),
    res.status(400).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    console.log(err),
    res.status(400).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
