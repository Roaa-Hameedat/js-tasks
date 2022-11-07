function employeesInfo(x){
document.write( "Name is :" + x.firstName +"<br>");
document.write("Age is :"+x.age +"<br>");
document.write("Salary is :" + x.salary +"<br>");
}


const personal= {firstName: "Roaa", lastName:"Hameedat", age: 24, salary:10000000};

employeesInfo(personal);