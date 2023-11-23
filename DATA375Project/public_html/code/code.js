window.onload = () => {
    var reader = new FileReader(),
    fileSelect = document.getElementById("fileSelect");

    fileSelect.onchange = () => reader.readAsText(fileSelect.files[0]);

    reader.onloadend = () => {
        let csv = reader.result;
        document.getElementById("text").innerText = csv;
    }
}

function dims(){
    var val = document.getElementById("plotSelect").value;
    if (val == "scatter3"){
        document.getElementById("dim").innerHTML = '<br><label for="x">x:</label>' + 
        '<input id="x" type="text" /><br><br>' +
        '<label for="y">y:</label>' +
        '<input id="y" type="text" /><br><br>' +
        '<label for="z">z:</label>' +
        '<input id="z" type="text" /><br><br>' +
        '<label for="xlab">x Label:</label>' +
        '<input id="xlab" type="text" /><br><br>' +
        '<label for="ylab">y Label:</label>' +
        '<input id="ylab" type="text" /><br><br>' +
        '<label for="zlab">z Label:</label>' +
        '<input id="zlab" type="text" /><br><br>' +
        '<label for="title">Title:</label>' +
        '<input id="title" type="text" /><br>';
    }
    else if (["box", "hist", "pie"].includes(val)){
        document.getElementById("dim").innerHTML = '<br><label for="x">x:</label>' + 
        '<input id="x" type="text" /><br><br>' +
        '<label for="xlab">x Label:</label>' +
        '<input id="xlab" type="text" /><br><br>' +
        '<label for="title">Title:</label>' +
        '<input id="title" type="text" /><br>';
    }
    else{
        document.getElementById("dim").innerHTML = '<br><label for="x">x:</label>' + 
        '<input id="x" type="text" /><br><br>' +
        '<label for="y">y:</label>' +
        '<input id="y" type="text" /><br><br>' +
        '<label for="xlab">x Label:</label>' +
        '<input id="xlab" type="text" /><br><br>' +
        '<label for="ylab">y Label:</label>' +
        '<input id="ylab" type="text" /><br><br>' +
        '<label for="title">Title:</label>' +
        '<input id="title" type="text" /><br>';
    }
}

function cleanOperation(){
    var val = document.getElementById("cleanSelect").value;
    if (val == "removeCol"){
        document.getElementById("cleanDF").innerHTML = '<br>' +
        '<label for="remCol">Remove Colums (Seperate by ","):</label>' +
        '<input id="remCol" type="text" />';
    }
    else if (val == "removeRow"){
        document.getElementById("cleanDF").innerHTML = '<br>' +
        '<label for="remRow">Remove Rows (Seperate by ","):</label>' +
        '<input id="remRow" type="text" />';
    }
    else if (val == "removeNA"){
        document.getElementById("cleanDF").innerHTML = '';
    }
    else if (val == "renameCol"){
        document.getElementById("cleanDF").innerHTML = '<br>'+
        '<label for="rename">Column to Rename:</label>' +
        '<input id="rename" type="text" /><br><br>' +
        '<label for="newName">New Column Name:</label>' +
        '<input id="newName" type="text" />';
    }
}

function show(){
    document.getElementById('disp').style.left = '0%';
}
   
function hide(){
    document.getElementById('disp').style.left = '100%';
}

function showClean(){
    document.getElementById('selectClean').style.left = '80%';
}
   
function hideClean(){
    document.getElementById('selectClean').style.left = '100%';
}