(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey="7802fdac76b25899c2b33d356adda825b0ab133e"

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
function Github(user) {
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    $('#name').text(response.name );
    $('#name').append('<p>'+'<img src="'+response.avatar_url+'">'+'</p>');
    $('#name').append('<p>'+response.public_repos+'</p>');
    // console.log(response.avatar_url);
    // console.log(response.public_repos);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
function repos(user) {
  $.get('https://api.github.com/users/'+user+'/repos?access_token=' + apiKey).then(function(response){
    for(var i=0; i<response.length;i++){
      $('table').append('<tr><td>'+response[i].name+'</td><td>'+response[i].description+'</td></tr>');
      //console.log(response[i].name);
      //console.log(response[i].description);
    }


  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}


exports.githubModule = Github;
exports.reposModule = repos;

},{"./../.env":1}],3:[function(require,module,exports){
// var user;
var Github = require('./../js/github.js').githubModule;
var repos = require('./../js/github.js').reposModule;

$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    var user = $('#username').val();
    Github(user);
    repos(user);
    // $('#serch').text("You serched for"+" "+ user);
    console.log(user);
    });
  });

},{"./../js/github.js":2}]},{},[3]);
