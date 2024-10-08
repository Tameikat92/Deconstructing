function getUserInfo(){
    return ["John","Doe"]
};

const [firstName,lastName,age=30] =getUserInfo()

console.log(age);



const employee = {
    fullName: "JohnDoe",
    position:'Developer',
    contact: {
        email: 'john.doe@yahoo.com',
        phone: "2183308004"
    }


};
const {fullName: empName, position, contact: {email,phone}} = employee;


console.log(empName);  // Output: "John Doe"
console.log(position); // Output: "Developer"
console.log(email);    // Output: "john.doe@example.com"
console.log(phone);

/*
    Renaming properties:
        fullName: empName → creates a variable empName with the value of fullName ("John Doe").

    Extracting nested properties:
        contact: { email } → accesses contact and extracts email ("john.doe@example.com").

    Output:
        empName: "John Doe"
        position: "Developer"
        email: "john.doe@example.com"

The original object is not modified. This syntax just creates new variables with the specified values.
*/