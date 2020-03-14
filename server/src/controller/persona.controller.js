"use strict"
const express = require('express'),
  router = express.Router(),
  personaModel = require('../model/persona.model')


router.get('/', async (req, res, next) => {
  let data = await personaModel.getPersonas()
  res.status(200).json(data)
})


router.get('/:id', async (req, res, next) => {
  let id = req.params.id
  let data = await personaModel.getPersona(id)
  res.status(200).json(data)
})

router.post('/add', async (req, res, next) => {
  let body = req.body
  let data = await personaModel.createPersona(body)
  res.status(201).json(data)
})


router.put('/update/:id', async (req, res, next) => {
  let body = req.body
  let id = req.params.id
  let data = await personaModel.UpdatePersona(id, body)

  res.status(200).json(data)

})
router.delete('/:id', async (req, res, next) => {
  let id = req.params.id
  let data = await personaModel.deletePersona(id)
  res.status(200).json(data)
})

module.exports = router