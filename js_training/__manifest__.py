
{
    'name': 'JS Training',
    'version': '17.0.1.0',
    'license': 'LGPL-3',
    'category': 'Education',
    "sequence": 3,
    'depends': ['website'],
    'data': [
        'views/template.xml'
    ],
    'assets': {
        'web.assets_frontend': [
            'js_training/static/src/js/form.js',
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': True,
}
