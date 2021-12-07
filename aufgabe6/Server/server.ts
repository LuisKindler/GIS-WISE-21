import * as http from "http";

namespace Server {
    const hostname: string = "127.0.0.1"; //localhost
    const port: number = 3000; //Port

    const server: http.Server = http.createServer( //Server definiert
        (request: http.IncomingMessage, response: http.ServerResponse) => {

            response.statusCode = 200; //definieren statuscode
            response.setHeader("Content-Type", "text/plain");
            response.setHeader("Access-Control-Allow-Origin", "*"); // wo response erreichbar ist

            //Routing
            let url: URL = new URL(request.url || "", `http://${request.headers.host}`); //URL object definiert

            switch (url.pathname) { //welcher path will erreicht werden?
                case "/":
                    response.write("Hello World");
                    break;
                case "/greetings":
                    let name: string = url.searchParams.get("name");
                    console.log(name);
                    response.write("Hallo " + name + " , schoen dich zu sehen!");
                    break;
                default:
                    response.statusCode = 404;
            }
            response.end();
        }
    );

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    }); //der Server soll lauschen


}