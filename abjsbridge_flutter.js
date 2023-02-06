function fromFlutter(newTitle) {
    document.getElementById("title").innerHTML = newTitle;
}

function selectedFrontImage(selectedImageAsBase64) {
    document.getElementById("selectedImagePreview").src = "data:image/png;base64," + selectedImageAsBase64;
}

function launchCamera(callback) {
    cameraHandler.postMessage(callback);
}

function launchGallery() {
    galleryHandler.postMessage(callback);
}

function launchImageScan() {
    scanHandler.postMessage("Hello from JS");
}

function launchLivenessCheck() {
    livenesseHandler.postMessage("Hello from JS");
}

class ABJSBridge {
    static call(functionName, requestBody, callbackName) {
        var javaScriptMessage = {
           body: requestBody,
           callback: callbackName.name
        }
        if(functionName == "abSmeGetMobileAgent") {
            //console.log("functiona Name")
            //console.log(callbackName.name)
            //console.log(JSON.stringify(javaScriptMessage))
            mobileAgent.postMessage(JSON.stringify(javaScriptMessage));
        }
    }
}
