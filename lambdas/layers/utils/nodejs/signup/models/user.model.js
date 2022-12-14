const dynamoose = require("/opt/nodejs/node_modules/dynamoose");

const User = dynamoose.model(
  "User",
  new dynamoose.Schema({
    username: {
      type: String,
      index: true
    },
    email: {
      type: String,
      index: true
    },
    password: String,
    roles: Array,
  }), {
    create: true,
    throughput: "ON_DEMAND"
  }
);

module.exports = User;