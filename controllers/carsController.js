const express = require('express');
const Cars = require('../models/cars');

function index(request, response, next) {
  const page = request.params.page ? request.params.page : 1;
  Movie.paginate({}, {
    page: page,
    limit: 3
  }, (err, objs) => {
    if (err) {
      response.json({
        error: true,
        message: 'no se pudo extraer los carros.',
        objs: {}
      });
    } else {
      response.json({
        error: false,
        message: 'Lista de carros',
        objs: objs
      });
    }
  });
}

function create(request, response, next) {
  const model = request.body.model;
  const description = request.body.description;
  const status = request.body.status;
  const color = request.body.color;

  let cars = new Cars();
  cars.model = title;
  cars.description = genre;
  cars.status = duration;
  cars.color = director;

  cars.save((err, obj) => {
    if (err) {
      response.json({
        error: true,
        message: 'Carro no guardado',
        objs: {}
      });
    } else {
      response.json({
        error: false,
        message: 'Carro guardado',
        objs: obj
      });
    }
  });
}

function update(request, response, next) {
  const model = request.body.model;
  const description = request.body.description;
  const status = request.body.status;
  const color = request.body.color;




}

function remove(request, response, next) {
  const id = request.params.id;
  if (id) {
    Cars.remove({
      _id: id
    }, function(err) {
      if (err) {
        response.json({
          error: true,
          message: 'Carro no eliminado',
          objs: {}
        });
      } else {
        response.json({
          error: false,
          message: 'Carro eliminado',
          objs: {}
        });
      }
    });
  } else {
    response.json({
      error: true,
      message: 'Carro no existe',
      objs: {}
    });
  }
}

module.exports = {
  index,
  create,
  update,
  remove
};
