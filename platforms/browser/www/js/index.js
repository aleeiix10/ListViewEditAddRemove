/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

let botonAdd = $("#afegir").click(function() {
    let pro = prompt("Escribe el nombre de la tarea que quieres añadir:");
    var elem = $("ul").append("<li><a href='#page1'>"+pro+"<button class='botonNuevo' style='border:0px;background-color:black;color:white;float:right'>Delete</button></a></li>");
    $("a", elem).click(editar);
    $("ul").listview( "refresh" );
    $('ul li button').click(function(e){
        var tar = e.target || e.srcElement;
        $(tar.parentElement.parentElement).remove();
        return false;
    });
});

var targetElem = null;
function editar(e){
    var tar = e.target || e.srcElement;
    targetElem = tar;
    
    var text = $(targetElem)
    .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();
    $("#editName").val(text);

}

$("[id='btnEditar']").click(function (){
    var editTaskList = $("#editName").val();
    botoStr = "<button class='botonNuevo' style='border:0px;background-color:black;color:white;float:right'>Delete</button>";
    $(targetElem).html(editTaskList+botoStr);
    document.location= "/#";
    $('ul li button').click(function(e){
        var tar = e.target || e.srcElement;
        $(tar.parentElement.parentElement).remove();
        return false;
    });
});