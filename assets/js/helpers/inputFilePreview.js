/**
 * fonction pour la prévisualisation d'image
 *
 * @param input
 */
export function readURL(input, cible) {
    if (input.files && input.files[0]) {
        if (isImage(input)) {
            var reader = new FileReader();
            reader.onload = function(e) {
                const res = e.target.result;
                const split1 = res.split(";")[0];
                if(split1.includes("image")){
                    $(cible).attr('src', e.target.result);
                }
            };
            reader.readAsDataURL(input.files[0]);
            return true;
        }
        return false;
    }
    return false;
}

async function isImage($file) {
    if ($file.files && $file.files[0] && $file.files[0].name.match(/\.(jpg|jpeg|png|gif|bmp|ico)$/) ) {
        return true;
    }
    return false;
}
