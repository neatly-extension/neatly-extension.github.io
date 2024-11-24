var editorExtensionId = "nnkngdchdahcagdnggplafmdhgnbldcm";

function openNeatly() {
    // Make a simple request:
    chrome.runtime.sendMessage(editorExtensionId, {action: "open-neatly"},
        function (response) {
            console.log(response)
        });
}