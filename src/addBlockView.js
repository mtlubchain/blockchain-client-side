(function (app) {

    class AddBlockView {
        constructor(subject) {
            this.container = document.querySelector('#add-block-container');
            this.render();
            this.form = this.container.querySelector('#add-block-form');
            this.btnSendItem = this.container.querySelector('#btn-send-item');
            this.btnSendItem.addEventListener('click', (evt) => {
                if(this.form.checkValidity()) {
                    let item = {data: this.form.blockData.value};
                    subject.next(item);
                }
                else {
                    console.warn('form invalid');
                }
            });
        }

        render() {
            this.container.innerHTML = `
            <form id="add-block-form">
                <div class="form-group">
                <input required type="text" name="blockData" placeholder="title" class="form-control">
                </div>
                <button type="button" id="btn-send-item" class="btn btn-primary">Add block</button>
            </form>
            `
        }
    }
    app.views.AddBlockView = AddBlockView;
}) (App);