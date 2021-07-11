const imgInput = document.getElementById('inspo-file');
const previewContainer = document.getElementById('imagePreview');
const imageUploaded = previewContainer.querySelector('#image-preview__image');
const defaultText = previewContainer.querySelector('.image-preview__default-text');
const photo2 = document.getElementById("img-preview-2");
const photo3 = document.getElementById("img-preview-3");
const inspo = [];

imgInput.addEventListener('change', function () {
    const file = this.files[0];
    const name = file.name;
    if (file) {
        // Reader will read the file as a data url. Once we have the url we can set the src of the img tag to the url.
        const reader = new FileReader();
        imageUploaded.style.display = "block";
        defaultText.style.display = "none";

        // Tell the reader to read the file and once the reader has finished loading, we then push that url to the src. This points to the file reader itself in this situation. 'Result' holds the data url.
        reader.addEventListener("load" , function () {
            imageUploaded.setAttribute('src', this.result);
            if (name == "heic") {
                console.log('NOPE');
            }
        });

        reader.readAsDataURL(file);
    } else {
        imageUploaded.style.display = null;
        defaultText.style.display = null;
    }
    inspo.push(file);
});

// function addUploader() {
//     const newInput = document.createElement('input');
//     newInput.type = 'file';
//     const newImage = document.createElement('img')
// }