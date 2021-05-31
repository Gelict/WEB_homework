function createNewUser() {

    this.setUserName = function(){
        userName = prompt('Введіть своє ім`я: ','');
        while (userName === ''){
            userName = prompt('Введіть своє ім`я: ','');
        }
        return userName;
    }
    
    this.setSecondName = function(){
        userSecondName = prompt('Введіть своє прізвище','');
        while (userSecondName === ''){
            userSecondName = prompt('Введіть своє прізвище: ','');
        }
        return userSecondName;
    }    

    this.getLogin = function(){
        let newLogin = this.setUserName().charAt(0).toLowerCase() + this.setSecondName().toLowerCase();
        return newLogin;
    }
}

let newUserObj = new createNewUser();
alert(`Ваш логін: ${newUserObj.getLogin()}`);