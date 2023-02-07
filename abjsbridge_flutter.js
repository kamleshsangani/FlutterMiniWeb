function fromFlutter(newTitle) {
    document.getElementById("title").innerHTML = newTitle;
}

function selectedFrontImage(selectedImageAsBase64) {
    document.getElementById("selectedImagePreview").src = "data:image/png;base64," + selectedImageAsBase64;
}

class ANJSBridge {
    static call(functionName, requestBody, callbackName) {
        var javaScriptMessage = {
           body: requestBody,
           callback: callbackName.name
        }
        if(functionName == "anGetMobileAgent") {
            mobileAgent.postMessage(JSON.stringify(javaScriptMessage));
        } else if(functionName == "anSelectCameraImage") {
            cameraHandler.postMessage(JSON.stringify(javaScriptMessage));
        } else if(functionName == "anSelectGalleryImage") {
            galleryHandler.postMessage(JSON.stringify(javaScriptMessage));
        } else if(functionName == "anRunLivenessCheck") {
            livenesseHandler.postMessage(JSON.stringify(javaScriptMessage));
        }
    }
}
