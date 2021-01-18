function myInfo() {
    let age = prompt('How old are you, darling?');
    let gender = prompt('Which gender do you identify yourself with?');
    let city = prompt('Which city do you live in?');
    let check = confirm("You are " + age + ", you identify yourself as " + gender + " and you live in " + city);
    if (check !== true){
        return(myInfo());
    }
}
myInfo();
