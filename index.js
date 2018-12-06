var http = require('http');
var starwars = require('starwars');
var port = 80

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});  
    response.write("<head><link href='https://fonts.googleapis.com/css?family=Actor' rel='stylesheet'><style>body {font-family: 'Actor';font-size: 22px;color:yellow;background-color:black;}</style></head>")  
    response.write("<h1 align=center><a href='javascript:location.reload(true)'><img src=https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg alt=StarWars class=StarWarsLogo width=500px'/></a></h1>");
    response.write("<h2 align=center>" + starwars() + "</h2>");
    response.end();

});

server.listen(port);

console.log("hello!")
console.log("Server running at http://localhost:%d", port);
