
function ageInDays(){
    let birthYear = prompt('Enter your birth year');
    if (!this.birthYear){
        alert('Please specify a Birth year');
    }
    let date = new Date();
    let ageInDayss = (date.getFullYear() - birthYear) * 365;
    let h1 = document.createElement('h1');
    let result = document.createTextNode('You are '+ ageInDayss+' Days.');
    h1.setAttribute('id', 'ageInDays');
    h1.append(result);
    document.getElementById('flex-box-result').appendChild(h1);
    //console.log(ageInDayss); 
}

function reset() {
    document.getElementById('ageInDays').remove();
}
