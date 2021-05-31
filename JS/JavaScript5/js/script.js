function createNewUser(){
    let newUser = {
        getLogin: function() {
            return console.log(this.firstName[0].toLowerCase() + this.secondName.toLowerCase()) ;
        },

        getAge: function () {
            let time = new Date();
            let currentYear = time.getFullYear();
            let inputDay = +this.birthday.substring(0, 2);
            let inputMonth = +this.birthday.substring(3, 5);
            let inputYear = +this.birthday.substring(6, 10);
            
            let birthDate = new Date(inputYear, inputMonth-1, inputDay);
            let birthYear = birthDate.getFullYear();
            let age = currentYear - birthYear;
            if (time < new Date(birthDate.setFullYear(currentYear))) {
                age = age - 1;
            }
            return console.log(age);
        },
        getPassword: function () {

            return console.log(this.firstName[0].toUpperCase() + this.secondName.toLowerCase() + this.birthday.substring(6,10));
        }
    };
    newUser.firstName = prompt("Напишіть своє ім'я");
    newUser.secondName = prompt("Напишіть своє прізвище");
    newUser.birthday = prompt("Напишіть дату свого народження: ");
    newUser.getAge();
    newUser.getPassword();

    return newUser;
}
createNewUser();