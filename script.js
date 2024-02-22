function create_lable(tagname,attrib,attribvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrib,attribvalue);
    ele.innerHTML=content;
    return ele;
}
function brk(){
    var br = document.createElement("br")
    return br;
}
function create_input(tagname,attr1name,attr1value,attr2name,attr2value){
    var ele = document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    return ele;
}

var lable_email = create_lable("lable","for","email","EMAIL");
var email_br1 = brk();
var input_email = create_input("input","type","input","id","email");
var email_br2 = brk();
var lable_fisrt = create_lable("lable","for","firstName","FIRSTNAME");
var first_br1 = brk();
var input_first = create_input("input","type","input","id","firstName");
var first_br2 = brk();
var lable_middle = create_lable("lable","for","middleName","MIDDLENAME");
var middle_br1 = brk();
var input_middle = create_input("input","type","input","id","middleName");
var middle_br2 = brk();
var lable_last = create_lable("lable","for","lastName","LASTNAME");
var last_br1 = brk();
var input_last = create_input("input","type","input","id","lastName");
var last_brbtn = brk();
var button = document.createElement("button")
button.setAttribute("type","button")
button.innerHTML="click me"
button.addEventListener("click",loguser)
document.body.append(lable_email,email_br1,input_email,email_br2,lable_fisrt,first_br1,input_first,first_br2,lable_middle,middle_br1,input_middle,middle_br2,lable_last,last_br1,input_last,last_brbtn,button);

function loguser(){
    var  email = document.getElementById("email").value
    var firstname = document.getElementById("firstName").value
    var middlename = document.getElementById("middleName").value
    var lastname = document.getElementById("lastName").value
    var lognames = document.createElement("div")
    lognames.innerHTML=`EMAIL : ${email} FIRSTNAME : ${firstname} MIDDLENAME : ${middlename} LASTNAME : ${lastname}`
    document.body.append(lognames);
}