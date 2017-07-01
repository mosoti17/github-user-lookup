var apiKey = require('./../.env').apiKey;
function Github(user) {
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
    $('#name').text( response.name );
    $('#name').append('<p>'+'<img src="'+response.avatar_url+'">'+'</p>');
    $('#name').append('<p>'+response.public_repos+' Repos '+'</p>');
    // console.log(response.avatar_url);
    // console.log(response.public_repos);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
function repos(user) {
  $.get('https://api.github.com/users/'+user+'/repos?access_token=' + apiKey).then(function(response){
    $('table').text('');
    $('table').append('<tr><td><h2>'+'Repo name'+'</h2></td><td><h2>'+'Repo details'+'</h2></td></tr>');
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
