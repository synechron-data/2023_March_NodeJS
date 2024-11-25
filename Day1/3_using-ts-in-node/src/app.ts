import { Employee } from "./lib";

let e1: Employee = new Employee("Manish");
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());