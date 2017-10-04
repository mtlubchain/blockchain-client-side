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
    }
    app.services.BlockService = BlockService;
}) (App);