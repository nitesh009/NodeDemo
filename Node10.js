


//Before Node 10,  we use error handling in below mentioned way:

try {
	// do stuff
} catch(err) {
	if(err.message === 'Expected error message'){
		// handle specific error
	} else {
		// general error handler
	}
}

//Now in Node 10, we use error handling in below mentioned way:

try {
	// do stuff
} catch(err) {
	if(err.message === 'ERR_ERROR_CODE'){
		// handle specific error
	} else {
		// general error handler
	}
}


// use of Hapi and http2

const fs = require('fs');

const Hapi = require('hapi');

const http2 = require('http2');


const server = new Hapi.Server()

server.connection({
	listener: http2.createServer(),
	host:'localhost',
	port: 3000
})


server.route({
	method: 'GET',
	path:'/root',
	handler: function (request,reply) {
		return reply ('Welcome to Node 10');
	}
})

server.start((err) => {
	if(err) conosle.log(err)
		conosle .log(`Started ${server.connections.length} connnections`)
})



// use of fs/promises to avoid callbacks

const fs = require('fs');

const fsPromises = require('fs/promises');

console .log(fs.readFileSync('temp.text','utf8'));

// prints Node.js


async function doTruncate() {

	const fd = await fsPromises.open('temp.txt','r+');

	await fsPromises.ftruncate(fd, 4);

    console .log(fs.readFileSync('temp.text','utf8'));

	// prints Node
}

doTruncate.catch(console.err);



