/*
Name: Cole Stokes
This file provides JavaScript code to modify the HTML document.
*/

// Diplays fields for plotting depending on the dimensions of the plot.
function plot_operations(){
    var val = document.getElementById("plot_select").value;

    // 3d.
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

    // 1d.
    else if (["box", "hist", "pie"].includes(val)){
        document.getElementById("dim").innerHTML = '<br><label for="x">x:</label>' + 
        '<input id="x" type="text" /><br><br>' +
        '<label for="xlab">x Label:</label>' +
        '<input id="xlab" type="text" /><br><br>' +
        '<label for="title">Title:</label>' +
        '<input id="title" type="text" /><br>';
    }

    // 2d.
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

// Displays fields based on the cleaning operation selected.
function clean_operation(){
    var val = document.getElementById("clean_select").value;

    if (val == "remove_col"){
        document.getElementById("clean_DF").innerHTML = '<br>' +
        '<label for="rem_col">Remove Colums (Seperate by ","):</label>' +
        '<input id="rem_col" type="text" />';
    }

    else if (val == "remove_row"){
        document.getElementById("clean_DF").innerHTML = '<br>' +
        '<label for="remRow">Remove Rows (Seperate by ","):</label>' +
        '<input id="remRow" type="text" />';
    }

    else if (val == "remove_na"){
        document.getElementById("clean_DF").innerHTML = '';
    }

    else if (val == "rename_col"){
        document.getElementById("clean_DF").innerHTML = '<br>'+
        '<label for="rename">Column to Rename:</label>' +
        '<input id="rename" type="text" /><br><br>' +
        '<label for="new_name">New Column Name:</label>' +
        '<input id="new_name" type="text" />';
    }
}

// Shows the plot display.
function show(){
    document.getElementById('disp').style.left = '0%';
}

// Hides the plot display.
function hide(){
    document.getElementById('disp').style.left = '100%';
}

// Shows cleaning bar.
function show_clean(){
    document.getElementById('select_clean').style.left = '80%';
}
   
// Hides cleaning bar.
function hide_clean(){
    document.getElementById('select_clean').style.left = '100%';
}