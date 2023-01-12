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
$("#add").click(function() {
    let pro = prompt("How do u want to say to new element?");
    $("ul").append("<li><a href='#page1'>"+pro+"<button class='botonNuevo'>Delete</button></a></li>");
    $("ul").listview( "refresh" );
    $('ul li button').click(function(e){
        var caller = e.target || e.srcElement;
        $(caller.parentElement).remove();
  
    });
});
$('ul li a').click(function(e){
    var caller = e.target || e.srcElement;
    console.log(caller);
    $("#btnEditar").click(function () {
        
        var text = $("#editar");
        $(caller.parentElement).text(text);
    });
});







