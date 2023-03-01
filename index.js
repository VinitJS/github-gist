process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const main = require('./app');

async function server() {
    const port = process.env.PORT;
    const app = await main;
    const server = app.listen(port, () => {
        console.log(`Application is running on port ${port}`);
    });
    
    process.on('unhandledRejection', err => {
        console.log('UNHANDLED REJECTION!!!  shutting down ...');
        console.log(err.name, err.message);
        server.close(() => {
            process.exit(1);
        });
    });
}

server();