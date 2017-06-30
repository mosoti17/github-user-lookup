// var user;
var Github = require('./../js/github.js').githubModule;

$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    var user = $('#username').val();
    Github(user);
    // $('#serch').text("You serched for"+" "+ user);
    console.log(user);
    });
  });
