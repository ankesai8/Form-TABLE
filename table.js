function add(){
    var table= document.getElementById("data");
    var newrow= table.insertRow(1);
    var cell1= newrow.insertCell(0);
    cell1.innerHTML=document.getElementById("fname").value;
    var cell2= newrow.insertCell(1);
    cell2.innerHTML=document.getElementById("lname").value;
    var cell3= newrow.insertCell(2);
    cell3.innerHTML=document.getElementById("address").value;
    var cell4= newrow.insertCell(3);
    cell4.innerHTML=document.getElementById("Pincode").value;
    var cell5= newrow.insertCell(4);
    cell5.innerHTML=document.getElementById("Gender").value;
    let food = () =>{
    let s=[];
    if(document.getElementById("Dosa").checked == true)  s.push("Dosa");
    if(document.getElementById("Idli").checked == true) s.push("Idli");
    document.getElementById("Pizza").checked == true ? s.push("Pizza"):s;
    document.getElementById("Burger").checked == true ? s.push("Burger"):s;
    document.getElementById("Fried rice").checked == true ? s.push("Fried rice"):s;
    return s;
    };
    var cell6= newrow.insertCell(5);
    cell6.innerHTML= food();
    var cell7= newrow.insertCell(6);
    cell7.innerHTML=document.getElementById("State").value;
    var cell8= newrow.insertCell(7);
    cell8.innerHTML=document.getElementById("Country").value;
    document.getElementById("form").reset();
}
function Validation()  
{  
    var checkboxes = document.getElementsByName("food");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems<2)  
    {  
        alert("you should atleast select two");  
        return false;  
    }
    if(numberOfCheckedItems>=2){
        add();
    }
}  
