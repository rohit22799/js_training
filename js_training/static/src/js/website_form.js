/** @odoo-module **/

import publicWidget from '@web/legacy/js/public/public_widget';
import "@website/snippets/s_website_form/000";

publicWidget.registry.s_website_form.include({
    events: Object.assign({}, publicWidget.registry.s_website_form.prototype.events || {}, {
        'change input': 'onInputChange'
    }),
    start: function(){
        return this._super.apply(this, arguments);
    },

    onInputChange: function(){
        console.log('IN INPUT CHange')
    },
});