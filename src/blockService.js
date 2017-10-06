(function (app) {
    class BlockService {
        constructor() {
            this.getUrl = 'http://localhost:3000/blockchain';
            this.postUrl = 'http://localhost:3000/mineBlock';
        }
        fetch(renderCallback) {
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('GET',this.getUrl);
            xhr.addEventListener('load', (res) => {
                renderCallback(xhr.response);
            });
            xhr.send();
        }

        add(item, renderCallback) {
            let xhr = new XMLHttpRequest();
            xhr.responseType - 'json';
            xhr.open('POST', this.postUrl);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.addEventListener('load', (res) => {
                renderCallback(res);
            });
            xhr.send(JSON.stringify(item));
        }
    }
    app.services.BlockService = BlockService;
}) (App);