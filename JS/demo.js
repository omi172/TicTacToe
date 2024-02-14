// import {dataSource} from './data';


console.log("hello");
const user = {
    name : 'Amit Roy',
    age : 28,
    greet(){
        console.log(this.name + " age is " + this.age);
    }
}
console.log(user);
user.greet();
const hobbies = ["Sports","Cooking"];
const newHobbies =["Reading"];
const mergeHobbies = [...hobbies,...newHobbies];
console.log(mergeHobbies);
const extendedUser = {
    isAdmin : true,
    ...user
}
console.log(extendedUser);