function askName(){
    var nameReturn =document.getElementById('ask-name');
    var name = prompt('Please enter your name', 'HERE')
    if (name == ''){
        alert('No name entered, please try again');
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Nice to meet you!';

}
}


function askquestion() {
    var q = prompt('How much wood would a wood chuck chuck if a wood chuck could chuck wood?')
    if(q != null){
        document.getElementById('question').innerHTML = 'Yikes!' + q + ' is a lot of wood!'
    }
}