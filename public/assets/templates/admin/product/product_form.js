let imgViewer = document.getElementById("my-form-img-preview");
let imgViewerContainer = document.querySelector(".my-form-img-preview-container");
let productImgInput = document.getElementById("produit_form_imageFile");

function previewImage(data){
    let input = data.target;
    let file = input.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        let base64 = reader.result;
        if(!imgViewer){
            imgViewerContainer.innerHTML = `<img class="my-form-img-preview" id="my-form-img-preview" src="${base64}" alt="Image preview" />`;
        }
        else{
            imgViewer.src = base64;
        }
    };
}

if(productImgInput){
    productImgInput.addEventListener("change", previewImage);
}
