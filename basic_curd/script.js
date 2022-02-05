let id='1';
let myArr=JSON.parse(localStorage.getItem("formData")) || [];

// var getlocalStorageData = localStorage.getItem("formData");
//console.log(myArr);

for(var i=0;i<myArr.length;i++)
{
    id++;
    var obj= myArr[i];
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = obj["inname"];
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = obj["insalary"];
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = obj["inno"];
    var cell5 = newRow.insertCell(3);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='deleteData(${i})'>Delete</button>`

}


  
var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();

    myArr.push(formData);
    console.log(JSON.stringify(myArr));
    localStorage.setItem('formData',JSON.stringify(myArr));
    

    if(selectedRow === null){
        insertNewRecord(formData);
    }

    else{
        updateRecord(formData);
    }

    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["inname"] = document.getElementById("inname").value;
    formData["insalary"] = document.getElementById("insalary").value;
    formData["inno"] = document.getElementById("inno").value;

    // localStorage.setItem('local',JSON.stringify(formData));
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.inname;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.insalary;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.inno;
    var cell5 = newRow.insertCell(3);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button id onClick="deleteData(${i})">Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
   
    document.getElementById('inname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('insalary').value = selectedRow.cells[1].innerHTML;
    document.getElementById('inno').value = selectedRow.cells[2].innerHTML;
    
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.inname;
    selectedRow.cells[1].innerHTML = formData.insalary;
    selectedRow.cells[2].innerHTML = formData.inno;
    
}

//Delete the data
// function onDelete(td){
//     if(confirm('Do you want to delete this record?')){
//         row = td.parentElement.parentElement;
//         document.getElementById('storeList').deleteRow(row.rowIndex);
//     } 
// }

function deleteData(i){
    console.log(i);
	myArr=JSON.parse(localStorage.getItem('formData'));
	myArr.splice(i,1);
	
    location.reload();
    
    console.log(myArr);
	localStorage.setItem('formData',JSON.stringify(myArr));

}

//Reset the data
function resetForm(){
    document.getElementById('inname').value = '';
    document.getElementById('insalary').value = '';
    document.getElementById('inno').value = '';
  
}