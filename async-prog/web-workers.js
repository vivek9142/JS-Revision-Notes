var worker = new Worker('worker.js');

worker.postMessage('hello');

addEventListener('message')