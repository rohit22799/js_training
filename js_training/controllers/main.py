from odoo import http
from odoo.http import request
import time


class JsTraining(http.Controller):

    @http.route('/create', type='http', website=True, auth='public')
    def create_partner_form(self):
        countries = request.env['res.country'].sudo().search([])
        return request.render('js_training.create_partner_form', {
            'countries': countries
        })

    @http.route('/get/states', type='json', website=True, auth='public')
    def get_state_from_country(self, **post):
        print(post,'.post data \n\n\n\n')
        states = request.env['res.country.state'].sudo().search_read(
            [('country_id', '=', int(post.get('country_id')))], fields=['id', 'name'])
        return states

    @http.route('/create/partner/json', type='json', website=True, auth='public')
    def create_partner_from_json(self, **post):
        print(post,'.post')
        partner = request.env['res.partner'].sudo().create({
            'country_id': int(post.get('country_id')),
            'state_id': int(post.get('state_id')),
            'name': post.get('name'),
            'email': post.get('email'),
        })
        if post.get('line_data'):
            for line in post.get('line_data'):
                request.env['res.partner'].sudo().create({
                    'name': line,
                    'parent_id': partner.id
                })
        return partner.name
