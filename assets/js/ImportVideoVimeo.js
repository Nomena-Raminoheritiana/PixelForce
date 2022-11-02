import VimeoUpload from './modules/vimeo-upload'
/**
 * fonction appeler lorsque l'on dépose ou choisisse un fichier via le bouton addFile.
 * Pour chaque fichier, uploader le contenu et affiche le resultat quand c'est terminé.
 */
export const sendVideoToVimeo = function(options={
    selector:null,
    titre:null,
    description:null,
    progress: ()=>{},
    complete:()=>{},
    error:()=>{}}) {
    let files = $(options.selector).get(0).files;
    /* Instantiate Vimeo Uploader */
    (new VimeoUpload({
        name: options.titre,
        description: options.description,
        private: false,
        file: files[0],
        token: process.env.VIMEO_ACCESS_TOKEN,
        upgrade_to_1080: false,
        onError: function(data) {
            options.error(data);
        },
        onProgress: function(data) {
            options.progress(Math.floor(data.loaded / data.total*100))
        },
        onComplete: async function(videoId, index) {
            let url = '/videos/' + videoId;
            let pretty = null;
            if (index > -1) {
                /* Le méta data contient tout les détails du video uploadé ito n lien : https://developer.vimeo.com/api/endpoints/videos#/{video_id} */
                url = this.metadata[index].link
                pretty = JSON.stringify(this.metadata[index], null, 2)

            }
            options.complete(videoId, url, pretty);

        }
    })).upload();
};
