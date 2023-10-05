// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route
// 4. Create handlers
// 5. Start server

// 1. Create web server
const http = require('http');
const server = http.createServer();

// 2. Create router
const router = require('./router');

// 3. Create route
// 4. Create handlers

// 5. Start server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});