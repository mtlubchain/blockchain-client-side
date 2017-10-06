(function (app) {
    class BlockView {
        constructor() {
            console.log('hello from the BlockView');
        }

        render(res) {
            let container = document.querySelector('#blockchain-container');
            res.blockchain.forEach((item) => {
                let itemjson = JSON.stringify(item);
                container.innerHTML += `
                <div>
                    ${itemjson}
                </div>
                `
                console.log(item);
            });
        }
    }
    
    app.views.BlockView = BlockView;
}) (App);