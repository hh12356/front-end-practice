//新增数据
function addRow(){
    var table=document.getElementById("table");
    
    var length=table.rows.length;

    //插入行节点
    var newRow=table.insertRow(length);
    
    //插入列节点对象
    var nameCol=newRow.insertCell(0)
    var phoneCol=newRow.insertCell(1)
    var actionCol=newRow.insertCell(2)

    nameCol.innerHTML="未命名";
    phoneCol.innerHTML="无联系方式";
    actionCol.innerHTML="<button onclick='editRow(this)'>编辑</button><button onclick='deleteRow(this)'>删除</button>";
}

function deleteRow(button){
    var row=button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(button){
    var row=button.parentNode.parentNode;
    var name=row.cells[0];
    var phone=row.cells[1];

    var inputName=prompt("请输入名字");
    var inputPhone=prompt("请输入联系方式");

    if(inputName!=null){name.innerHTML=inputName;}
    if(inputPhone!=null){phone.innerHTML=inputPhone;}
}

