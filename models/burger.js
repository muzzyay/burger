var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(value, cb) {
    orm.insertOne("burgers", "burger_name", value, function(res) {
      cb(res);
    });
  },

  updateOne: function(id, cb) {
    orm.updateOne("burgers", "devoured", true, "id", id, function(res) {
      cb(res);
    });
  },

  deleteOne: function(id, cb){
    orm.deleteOne("burgers", "id", id, function(res){
      cb(res);
    })
  }
  
};


module.exports = burger;