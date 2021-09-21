const mongoose = require('mongoose');

const dbURL = `mongodb+srv://naznin:naznin1234@simple-blog.896vd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
if (!dbURL) {
  console.error('Mongo URL not set in env file or config.js');
  return new Error('Mongo URL not set in env file or config.js');
}
mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  },
  (error) => {
    if (error) {
      console.error(`FAILED to connect using mongoose. ${error}`);
    } else {
      console.info(`Connected to DB server. ( ${dbURL} )`);
    }
  }
);

module.exports = mongoose;