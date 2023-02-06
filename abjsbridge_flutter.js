            function fromFlutter(newTitle) {
                document.getElementById("title").innerHTML = newTitle;
             }

            function selectedFrontImage(selectedImageAsBase64) {
              document.getElementById("selectedImagePreview").src = "data:image/png;base64," + selectedImageAsBase64;
             }

             function launchCamera() {
                cameraHandler.postMessage("selectedFrontImage");
             }

            function launchGallery() {
                galleryHandler.postMessage("selectedFrontImage");
             }

            function launchImageScan() {
                scanHandler.postMessage("Hello from JS");
             }

            function launchLivenessCheck() {
                livenesseHandler.postMessage("Hello from JS");
             }
