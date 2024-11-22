/** @odoo-module **/

import { Component, onWillUpdateProps } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { CharField, charField } from "@web/views/fields/char/char_field";
import { useService } from "@web/core/utils/hooks";

export class CopyWidget extends CharField {
    static template = 'js_training.CopyWidget';
    setup() {
         super.setup();
         this.notification = useService("notification"); // orm, notification, action, dialog, ui, user, command

    }

    onClick() {
        const value = this.props.record.data[this.props.name];
        if(!value){
            this.notification.add(
                `Nothing To Copy Here`,
                { type: 'warning', sticky: true }
            );
        }
        navigator.clipboard.writeText(value);
    }
}
// 2nd way CopyWidget.template = 'js_training.CopyWidget';


registry.category("fields").add("my_copy_widget", {
    ...charField,
    component: CopyWidget,
});
