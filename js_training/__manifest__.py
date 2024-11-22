
{
    'name': 'JS Training',
    'version': '17.0.1.0',
    'license': 'LGPL-3',
    'category': 'Education',
    "sequence": 3,
    'depends': ['website'],
    'data': [
        'menu/menu.xml',
        'views/template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'js_training/static/src/js/form.js',
            'js_training/static/src/js/website_form.js',
            'js_training/static/src/js/hide_form.js',
            'js_training/static/src/js/components/line_dialog.js',
            'js_training/static/src/xml/line_dialog.xml',
        ],
        'web.assets_backend': [
            'js_training/static/src/js/components/copy_widget.js',
            'js_training/static/src/js/components/contact_card.js',
            'js_training/static/src/js/contacts_dashboard.js',
            'js_training/static/src/js/components/line_dialog.js',
            'js_training/static/src/xml/line_dialog.xml',
            'js_training/static/src/xml/template.xml',
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': True,
}
