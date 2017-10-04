(function (app) {
    const BlockService = app.services.BlockService;
    // const Block = require('./block.js');
    // const SingleBlockView = app.views.SingleBlockView;

    class BlockChainController {
        constructor() {
            console.log('hello from controller');
            this.blockService = new BlockService();
            // this.singleBlockView = new SingleBlockView();
        }
    }

    app.controllers.BlockChainController = BlockChainController;

}) (App);