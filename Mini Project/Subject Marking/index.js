convert = () => {

    let maths = document.getElementById('ma').value;
    let science = document.getElementById('sc').value;
    let physics = document.getElementById('ph').value;
    let chemistry = document.getElementById('che').value;
    let grade = '';
    let passfail = '';

    let total_mark = parseFloat(maths) + parseFloat(science) + parseFloat(physics) + parseFloat(chemistry);
    let percentage = ((total_mark / 400)*100).toFixed(2);

    if(percentage >= 80 && percentage <= 100) {
        grade = "A";
    } else if(percentage >= 60 && percentage < 80) {
        grade = "B";
    } else if(percentage >= 40 && percentage < 60) {
        grade = "C";
    } else if(percentage >=33 && percentage < 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    if(percentage < 33) {
        passfail = 'Fail';
    } else {
        passfail = 'Pass';
    }

    if(maths == '' && science == '' && physics == '' && chemistry == ''){
        alert('All Filed is Empty...');
    }  
    else {
        document.getElementById('print_data').innerHTML = "Out of 400 your total is" + " " + total_mark  + " " + 
                                                            "and percentage is" +  " " + percentage + "%.<br>" + 
                                                            "Your Grade is" + " " + grade +  ". " + "You are" + " " + passfail + "."; 
    }
}   

// else if(maths == '' && science == '') {
//     alert('Maths and Science Filed is Empty...')
// } else if(maths == '' && physics == '') {
//     alert('Maths and Physics Filed is Empty...')
// } else if(maths == '' && chemistry == '') {
//     alert('Maths and Chemistry Filed is Empty...')
// } else if(maths == '' && science == '' && physics == '') {
//     alert('Maths, Science and Physics Filed is Empty...')
// } else if(science == '' && physics == '' && chemistry == '') {
//     alert('Science, Physics and Chemistry Filed is Empty...')
// } else if(physics == '' && chemistry == '' && maths == '') {
//     alert('Maths, Physics and Chemistry Filed is Empty...')
// } else if(chemistry == '' && maths == '' && science == '') {
//     alert('Maths, Science and Chemistry Files is Empty...')
// } else if(maths == '') {
//     alert('Maths Filed are Empty...');
// } else if (science == ''){
//     alert('Science Filed are Empty...');
// } else if (physics == '') {
//     alert('Physics Filed are Empty...');
// } else if (chemistry == ''){
//     alert('Chemistry Filed are Empty...');
// }
