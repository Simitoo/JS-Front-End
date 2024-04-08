function listOfEmployees(input){
    input.map(nameOfEmp => ({ nameOfEmp, personalNum: nameOfEmp.length }))
        .forEach(employee => console.log(`Name: ${employee.nameOfEmp} -- Personal Number: ${employee.personalNum}`));
}

console.log(listOfEmployees([
    'Silas Butler',   
    'Adnaan Buckley',   
    'Juan Peterson',  
    'Brendan Villarreal'  
    ]));