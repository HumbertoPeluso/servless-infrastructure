//const sdk = require("aws-sdk");
const dynamoose = require('/opt/nodejs/node_modules/dynamoose');
const util = require('/opt/nodejs/node_modules/util')
//const credentials = require("../config/db.config")
dynamoose.Promise = global.Promise;

const db = {};

db.dynamoose = dynamoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

 /* const ddb = new db.dynamoose.aws.ddb.DynamoDB({
    "accessKeyId": credentials.AWS_ACCESS_KEY_ID,
    "secretAccessKey": credentials.AWS_SECRET_ACESS_KEY,
    "region": credentials.AWS_REGION
});

db.dynamoose.aws.ddb.set(ddb);  */

 /* console.log("test region: " + credentials.AWS_REGION)
console.log("Teste Dynamodb: " + db.dynamoose.aws.ddb) */

const RoleTable = new db.dynamoose.Table("Role", [db.role]);
console.log("Table creation test: " + util.inspect(RoleTable, false, null, true /* enable colors */))
//const UserTable = new db.dynamoose.Table("User", [db.user]);

 /* RoleTable.create((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Successfully created Role table");
    }
}); */

// RoleTable.create();

 /* UserTable.create((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Successfully created User table");
    }
});  */

module.exports = db;