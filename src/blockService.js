(function (app) {
    // const request = require('request');
    // const BlockModel = app.models.BlockModel;
    // const BlockModel = require('./blockModel.js');
    class BlockService {
        constructor() {
            console.log('hello from BlockService');
        //     this.block = new BlockModel(0,"dupa0","dzisiaj","oto moje dane","smaz hasz");
        //     console.log(block);
        }
        fetch(renderCallback) {
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('GET', 'http://localhost:3000/blockchain');
            xhr.addEventListener('load', (res) => {
                renderCallback(xhr.response);
            });
            xhr.send();
        }
    }
    app.services.BlockService = BlockService;
}) (App);