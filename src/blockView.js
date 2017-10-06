(function (app) {
    class BlockView {
        constructor() {
            this.container = document.querySelector('#blockchain-container');
        }

        render(res) {
            this.container.innerHTML = '';
            res.blockchain.forEach((item) => {
                let itemjson = JSON.stringify(item);
                this.container.innerHTML += `
                <div class="row">
                    ${itemjson}
                </div>
                `
                console.log(item);
            });
        }
    }
    
    app.views.BlockView = BlockView;
}) (App);