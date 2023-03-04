module.exports = async (job) => {
  console.log('start', job.name);
  for (let i = 0; i < 5_000_000_000; i++) {
    // do something here
  }
  console.log('end', job.name)
};
