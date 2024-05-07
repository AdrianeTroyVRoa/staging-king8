const { createUser, getUserById } = require("../prisma/queries/userQueries");

async function example() {
  const newUser = await createUser({
    email: "john@example.com",
    mobile_num: "9123456789",
    first_name: "Harold",
    last_name: "Romer",
    password: "87tyhajd",
    role: "CUSTOMER",
  });
  const user = await getUserById(newUser.id);
  console.log(user);
}

example();
