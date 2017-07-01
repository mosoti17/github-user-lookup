// var user;
var Github = require('./../js/github.js').githubModule;
var repos = require('./../js/github.js').reposModule;

$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    var user = $('#username').val();
    Github(user);
    repos(user);
     $('#serch').text("You serched for"+" "+ user);
    console.log(user);
    });
  });
