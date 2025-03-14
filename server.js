import  http from "node:http"

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    const headers = req.headers

    console.log({url, method, headers});
    res.write("Good")
    res.end();
})

server.listen(8080, () => {
    console.log("Server is running on port 8080")
})