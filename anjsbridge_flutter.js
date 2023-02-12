
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
            livenessHandler.postMessage(JSON.stringify(javaScriptMessage));
        } else if(functionName == "anDisplayDialogMessage") {
            dialogHandler.postMessage(JSON.stringify(javaScriptMessage));
        } else if(functionName == "anCloseMiniApp") {
            closeMiniAppHandler.postMessage(JSON.stringify(javaScriptMessage));
        }
    }
}
