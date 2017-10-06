(function (app) {
    const BlockService = app.services.BlockService;
    const BlockView = app.views.BlockView;
    const AddBlockView = app.views.AddBlockView;

    class BlockChainController {
        constructor() {
            let subject = new Rx.Subject();
            this.blockService = new BlockService();
            this.blockView = new BlockView();
            this.addBlockView = new AddBlockView(subject);

            this.blockService.fetch(this.showBlockchain.bind(this));

            subject.subscribe( (item) => {
                this.blockService.add(item, () => {
                    this.blockService.fetch(this.showBlockchain.bind(this));
                })
            })
        }

        showBlockchain(data) {
            this.blockView.render(data);
        }
    }

    app.controllers.BlockChainController = BlockChainController;

}) (App);