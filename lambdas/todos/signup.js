const db = require("/opt/nodejs/signup/models");
//const dynamoose = require('/opt/nodejs/node_modules/dynamoose');
const util = require('/opt/nodejs/node_modules/util')
const User = db.user;
const Role = db.role;

var bcrypt = require("/opt/nodejs/node_modules/bcryptjs");
const normalizeEvent = require('/opt/nodejs/normalizer');
const response = require('/opt/nodejs/response');
const middlewares = require('/opt/nodejs/signup/middlewares');
const verifySignUp = middlewares.verifySignUp

exports.handler = async (event) => {
  try {
  //console.log('Received event', event);
  //console.log('Context', context);

  const { data } = normalizeEvent(event);
    const user = new User({
      username: data.username,
      email: data.email,
      password: bcrypt.hashSync(data.password, 8),
      roles: data.roles
    });
console.log("Data content: " + user.roles )
/* const test =  User.create(user, (err, user) => {
    console.log("**Inside user save**")
    if (err) {
      // res.status(500).send({ message: err });
      return response(500, err);
    }

    if (data.roles) {
      Role.find(
        {
          name: { $in: data.roles }
        },
        (err, roles) => {
          if (err) {
           // res.status(500).send({ message: err });
            return response(500, err);
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
             // res.status(500).send({ message: err });
              return response(500, err);
            }

            // res.send({ message: "User was registered successfully!" });
           return response(201, "User was registered successfully!")
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          // res.status(500).send({ message: err });
          return response(500, err);
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
           // res.status(500).send({ message: err });
            return response(500, err);
          }

         // res.send({ message: "User was registered successfully!" });
         return response(201, "User was registered successfully!")
        });
      });
    }
  });
  console.log("**Test**: " + test) */
  const queryUser = await User.query("username").eq(user.username).count().exec();
  console.log("Query User test: " + util.inspect(queryUser, false, null, true /* enable colors */))
  if(queryUser.count > 0){
    return response(500, "Failed! Username is already in use!")
  }
  const queryEmail = await User.query("email").eq(user.email).count().exec();
  console.log("Query email test: " + util.inspect(queryEmail, false, null, true /* enable colors */))
  if(queryEmail.count > 0){
    return response(500, "Failed! Email is already in use!")
  }
    //const result = await verifySignUp.checkDuplicateUsernameOrEmail(user, queryUser, queryEmail)
   /*  if(result){
     return response(500, result);
    } */
  
    await User.create(user);
    return response(201, "User was registered successfully!");
  
}catch(error){
  console.log(error)
  return response(500, error);
}
}

