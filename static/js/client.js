ready(function(){
    console.log("Client script loaded.");

    function ajaxGET(path, callback) {
        // Document is loaded now so go and fetch a resource.
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                callback(this.responseText);
                // this won't work ... discuss!!!
                //return this.responseText;
            }
        }
        xhr.open("GET", path);
        xhr.send();
    }


})

function ready(callback) {
    if (document.readyState != "loading") {
        callback();
        console.log("ready state is 'complete'");
    } else {
        document.addEventListener("DOMContentLoaded", callback);
        console.log("Listener was invoked");
    }
}
