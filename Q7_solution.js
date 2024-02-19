// Q7. Build a program that utilizes a Map to store user information (name, age, email) and allows adding, updating, and deleting user records.

const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };

  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;

    console.log(`User ${name}'s details Successfully updated`);
  } else {
    console.log("Failed to update");
  }
}

function deleteUser(name) {
  if (userMap.has(name)) {
    userMap.delete(name);
    console.log(`User ${name} Successfully Deleted`);
  } else {
    console.log("Failed to Delete, as Name not found!");
  }
}

addUser("sukumar", 45, "sukumar45@example.com");
addUser("sonakshi", 23, "sonakshi23@hotmail.com");

updateUser("sukumar", 43, "sukumar43@example.com");

deleteUser("sonakshi");

console.log(userMap);
