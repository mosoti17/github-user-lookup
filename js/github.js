var apiKey = require('./../.env').apiKey;
function Github(user) {
  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function(response){
  console.log(response);
   console.log(response.avatar_url);
   console.log(response.public_repos);
   console.log(response.repos_url.name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};






exports.githubModule = Github;
