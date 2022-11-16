const http=require("http");
// createserver method - creates an http server
// www.google.com/ineuron
const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.write("Hello, This a response from the http server");
        res.end();
    }
    if (req.url === '/ineuron/courses'){
        res.write(JSON.stringify(['Blockchain', 'Data Science', 'Full Stack Java Development']));
        res.end();
    }

});

server.listen(3000);

console.log("Listening on port 3000");