/** @odoo-module **/

import { Component, useRef } from "@odoo/owl";
import { Dialog } from "@web/core/dialog/dialog";

export class One2manyLine extends Component{
    static components = {}
    setup() {
        this.nameEl = useRef('name_io');
    }

    onSave() {
        console.log(this,'.aaaaaa')
        const name = this.nameEl.el.value;
        this.props.onClickSave(name);
        this.props.close()
    }

}

One2manyLine.template = "js_training.One2manyLine";
One2manyLine.components = {
    Dialog,
}