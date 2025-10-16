function getFormvalue(){
    var firstname = $('form :input[name="fname"]').val();
    var lastname = $('form :input[name="lname"]').val();
    alert("firstname ="+firstname+", lastname ="+lastname);
    return false;
}