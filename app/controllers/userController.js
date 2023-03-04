const { Queue, Worker } = require('bullmq');
const path = require('path');
// Create a new connection in every instance
const myQueue = new Queue('foo', {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});
const workerFile = path.join(__dirname, 'worker.js');
new Worker('foo', workerFile,  {
  concurrency: 1,
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

exports.error = async (req, res, next) => {
  try {
    let user = false;
    if (!user) {
      throw new Error('Cannot divide by zero');
    }

    return res.send({
      message: 'test',
      data: user,
    });
  } catch (error) {
    return res.send({ message: 'hhhhh' });
  }
};

exports.index = async (req, res, next) => {
  try {
    let t = new Date().getMilliseconds();
    await myQueue.add(t, { message: 'halo' });
    return res.send({
      message: 'test',
    });
  } catch (error) {
    return next(error);
  }
};
