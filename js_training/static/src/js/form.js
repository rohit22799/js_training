/** @odoo-module **/

import publicWidget from '@web/legacy/js/public/public_widget'; // Import Widget To Use For Basic Functionalities
import { jsonrpc } from "@web/core/network/rpc_service"; // Import JSON For Invoking JSON Controllers

publicWidget.registry.CreatePartnerForm = publicWidget.Widget.extend({ // CreatePartnerForm Name Of Widget Must Be Unique Otherwise Will Override Existing one
    selector: '#create_partner_form', // On Element Which This Widget Will Run -> selector with class or id or tag with unique attributes

    // Events
    events: {
        'change select[name="country_id"]': 'onChangeCountry', // 'Event_Name Element_Selector': 'Function_Name',
        'submit': 'onSubmit', // if not Element_Selector provided, will consider selector which is '#create_partner_form'
    },

    // Init Basically Used For Initializing Variables or Services Like ('dialog', 'notification', 'orm') or  At Initial Level Which Can Be Used Later on
    // "HIGH" -> Do Not Forget Super Call Method In Init And Start.
    init() {
        this._super(...arguments);
        this.notification = this.bindService("notification");
    },

    // Start Function -> All The Process Want To DO In Starting Of Page
    start: function(){
        this._super.apply(this, arguments);
        this.onChangeCountry();
    },


    onChangeCountry: function(){
        var countryId = document.querySelector('select[name="country_id"]').value;

        // Calling JSON Route /get/states With country_id data Will Response With States In List or Array
        // Use Only For JSON Routes Only
        jsonrpc('/get/states', {
            country_id: countryId
        }).then((result) => {

            var state = document.querySelector('select[name="state_id"]');
            var stateOptions = document.querySelectorAll('select[name="state_id"] > option');

            // Removing All The Option So It Will Remove Data Of Other Countries
            stateOptions.forEach((option) => {
                option.remove();
            })

            // Looping Over Data and Creating New Element Option For Each record And Appending To Select
            result.forEach((record) => {
                var option = document.createElement('option');
                option.value = record.id;
                option.textContent = record.name;

                state.appendChild(option);
            });

            // Removing Class Hidden State Div
            state.parentElement.classList.remove('d-none');

        });
    },

    onSubmit: function(event){
        event.preventDefault(); // Will Prevent Functionality Of Submit. So It Will not Submit The Form and we can perform manually
        var countryId = document.querySelector('select[name="country_id"]').value;
        var stateId = document.querySelector('select[name="state_id"]').value;
        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;

        if(countryId && stateId && name && email){
            jsonrpc('/create/partner/json', {
                country_id: countryId,
                state_id: stateId,
                name: name,
                email: email,
            }).then((result) => {
                // Using Notification Service To Show the notification
                this.notification.add(
                    `Contact ${result} Created Successfully`,
                    { type: 'info', sticky: true }
                );

                // Use To reroute to thank-you page
                window.location = '/thank-you';
            });
        } else {
            // Using Notification Service To Show the notification
            // Possible Types ['danger', 'info', 'warning']
             this.notification.add(
            "Please Fill Form Correctly",
            { type: 'danger', sticky: true }
        );
        }
    },
});