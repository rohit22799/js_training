/** @odoo-module **/

import { Component, useRef } from "@odoo/owl";
import { Dialog } from "@web/core/dialog/dialog";

export class One2manyLine extends Component{
    static components = {}
    setup() {
        this.nameEl = useRef('name_io');
        console.log(this,'.ttt',this.props)
    }

    onSave() {
        const name = this.nameEl.el.value;
        const toUpdate = this.props.trValue ? true: false;
        //var toUpdate;
        //  if(this.props.trValue){
        //     toUpdate = true;
        //  } else {
        //      toUpdate = false;
        //  }
        // py -> true if this.props.value else false
        this.props.onClickSave(name, toUpdate);
        this.props.close()
    }

}

One2manyLine.template = "js_training.One2manyLine";
One2manyLine.components = {
    Dialog,
}