"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var Server;
(function (Server) {
    const hostname = "127.0.0.1"; //localhost
    const port = 3000; //Port
    const server = http.createServer(//Server definiert
    (request, response) => {
        response.statusCode = 200; //definieren statuscode
        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Access-Control-Allow-Origin", "*"); // wo response erreichbar ist
        //Routing
        let url = new URL(request.url || "", `http://${request.headers.host}`); //URL object definiert
        switch (url.pathname) { //welcher path will erreicht werden?
            case "/":
                response.write("Server erreichbar");
                break;
            case "/convertDate":
                let date = url.searchParams.get("date");
                console.log(date);
                response.write("Date: " + date);
                break;
            default:
                response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    }); //der Server soll lauschen
})(Server || (Server = {}));
//# sourceMappingURL=server.js.map