(function (app) {
    const BlockService = app.services.BlockService;
    const BlockView = app.views.BlockView;

    class BlockChainController {
        constructor() {
            console.log('hello from controller');
            this.blockService = new BlockService();
            this.blockView = new BlockView();
            this.blockService.fetch(this.showBlockchain.bind(this));
        }

        showBlockchain(data) {
            this.blockView.render(data);
        }
    }

    app.controllers.BlockChainController = BlockChainController;

}) (App);