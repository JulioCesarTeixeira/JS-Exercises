let user = prompt('Hey, whats your name?');
let cake = prompt('Hey ' + user + ', would you like some cake? Type Yes or No');

if (cake === "Yes" || "yes") {
    alert('Congratulations ' + user + ', enjoy your cake!');
} else {
    alert('More cake for me then :p !');
}