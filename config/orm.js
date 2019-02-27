var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb) {
      var queryString = "SELECT * FROM " + tableName + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    insertOne: function(tableName, columnName, value, cb) {
      var queryString = "INSERT INTO " + tableName+" ("+columnName+") VALUES ('"+value+"');";
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(tableName, columnNameOne, value, columnNameTwo, id, cb) {
      var queryString = "UPDATE " + tableName+" SET "+columnNameOne+" = "+value+" WHERE "+columnNameTwo+" = "+id+" ;"
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;