let userRole = "manager";
let accessLevel;

if (userRole === " admin"){
    accessLevel = "full acess gurantee";
} else if (userRole === "manager"){
    accessLevel = "limited access granted";
} else {
    accessLevel = "no access";
}

console.log("access level", accessLevel);


let isLoggedIn= false;
let userMessage

if (isLoggedIn){
    if(userRole === "no admin"){
        userMessage = "welcome admin";
    } else{
        userMessage = "welcome, user";
    }

    } else{
        userMessage = "please log in to access";
    }

    console.log("user message:", userMessage)

    let isAuthenticate = "true";
    let authenticationStatus = isAuthenticate ? "authenticate" : "not authenticate";

    console.log("status", authenticationStatus)