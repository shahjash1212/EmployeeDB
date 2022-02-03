let id = "";

selectDB();
localStorage.clear();


function manageDB() {
    let name = document.getElementById('inputname').value;
    let salary = document.getElementById('inputsalary').value;
    let phoneno = document.getElementById('inputphoneno').value;

    var array =

    document.getElementById('nameerror').innerHTML = " ";
    document.getElementById('phoneerror').innerHTML = " ";
    document.getElementById('salaryerror').innerHTML = " ";


    if (name == '') {
        document.getElementById('nameerror').innerHTML = "** Enter name";
    }
    if(salary == '') {
        document.getElementById('salaryerror').innerHTML = "** Enter Salary";
    }
    if(phoneno == '') {
        document.getElementById('phoneerror').innerHTML = "** Enter PhoneNO";
    } 
    


    else {
        if (id == '') {
            let arr = JSON.parse(localStorage.getItem('curd'));
            console.log(arr);
            if (arr == null) {
                console.log();

               
                
                localStorage.setItem('curd', JSON.stringify(data1));
               
                document.getElementById('msg').innerHTML="added";
               
            }
            else {
                console.log("Dassdadasdasdasd");
                console.log(arr);

               arr.push(name);
               arr.push(salary);
               arr.push(phoneno);
               console.log(arr);
                localStorage.setItem('curd', JSON.stringify(arr));
                document.getElementById('msg').innerHTML="added";
            }
        }
        else {
          
        }
        selectDB();
    }
}


function selectDB() {
    let arr = JSON.parse(localStorage.getItem('curd'));
    if(arr!=null){
        
        let html ='';
        let id =1;
        for(let k in arr){
            html=html+"<tr><td>${id}</td><td>$</td><td>${arr[k+1]}</td><td>${arr[k+2]}</td></tr>"
        }
        document.getElementById("root").innerHTML=html;
        id++;
    }
    else{

    }
    
}
function editDB() {

}
function deleteDB() {

}
