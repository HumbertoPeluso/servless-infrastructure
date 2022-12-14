const dynamoose = require("/opt/nodejs/node_modules/dynamoose");

const Role = dynamoose.model(
  "Role",
  new dynamoose.Schema({
    name: String
  }), {
    create: true,
    throughput: "ON_DEMAND"
  }
);

module.exports = Role;