let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
   accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = " No access granted";
} 
   console.log("access Level:", accessLevel);

   let isloggedIn = true;
   let userMessage;

   if (isloggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
       userMessage = " Welcome, User!"; 
    } 
} else  {
        userMessage = "Please log in to access the system.";
    }
    
    console.log("user Message", userMessage);

    let userType = "subscriber";
    let userCategory;

    switch (userType) {
        case "admin":
            userCategory = "Administrator";
            break;
        case "manager":
            userCategory = "Manager";
        case "subscriber":
            userCategory = "Subscriber";
            break;
        default:
            userCategory = "Unknown";
    }
    console.log("User Catogory", userCategory);

    let isAuthenticated = true;
    let authenticatedStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
    console.log("Authentication Status", authenticatedStatus);