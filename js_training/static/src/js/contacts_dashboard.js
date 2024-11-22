/** @odoo-module **/

import { Component, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { ContactCard } from "@js_training/js/components/contact_card"
import { One2manyLine } from "@js_training/js/components/line_dialog";
import { _t } from "@web/core/l10n/translation";

export class ContactDashboard extends Component{
    setup() {
        this.orm = useService("orm");
        this.dialog = useService("dialog");

        onWillStart(async () => {
            this.data = await this.getData();

        });
    }

    async getData() {
        const data = await this.orm.searchRead('res.partner', [], ['id', 'name']);

        return data;
    }

    onCreate() {

        this.dialog.add(One2manyLine, {
            title: _t("Add a Line"),
            onClickSave: async (name) => {
                this.orm.create('res.partner', [{
                    name: name
                }]);
            }
        });
    }
}

ContactDashboard.template = 'js_training.ContactDashboard';
ContactDashboard.components = { ContactCard }

registry.category("actions").add("contacts_dashboard", ContactDashboard);
