/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-zoom' : '&#x21;',
			'icon-youtube' : '&#x22;',
			'icon-wrong' : '&#x23;',
			'icon-warning' : '&#x24;',
			'icon-visa' : '&#x25;',
			'icon-view' : '&#x26;',
			'icon-uservoice' : '&#x27;',
			'icon-twitter' : '&#x28;',
			'icon-tumblr' : '&#x29;',
			'icon-time' : '&#x2a;',
			'icon-take' : '&#x2b;',
			'icon-stick' : '&#x2c;',
			'icon-smile' : '&#x2d;',
			'icon-scooter' : '&#x2e;',
			'icon-right' : '&#x2f;',
			'icon-restaurant-ticket' : '&#x30;',
			'icon-pinterest' : '&#x31;',
			'icon-phone' : '&#x32;',
			'icon-padlock' : '&#x33;',
			'icon-more-adress' : '&#x34;',
			'icon-more' : '&#x35;',
			'icon-money' : '&#x36;',
			'icon-modified' : '&#x37;',
			'icon-mobil-version' : '&#x38;',
			'icon-message' : '&#x39;',
			'icon-menu' : '&#x3a;',
			'icon-mastercard' : '&#x3b;',
			'icon-less' : '&#x3c;',
			'icon-information' : '&#x3d;',
			'icon-home' : '&#x3e;',
			'icon-help' : '&#x3f;',
			'icon-google' : '&#x40;',
			'icon-geolocalisation' : '&#x41;',
			'icon-factures' : '&#x42;',
			'icon-facebook' : '&#x43;',
			'icon-delete' : '&#x44;',
			'icon-covered' : '&#x45;',
			'icon-commentary' : '&#x46;',
			'icon-checkbook' : '&#x47;',
			'icon-cgv' : '&#x48;',
			'icon-card' : '&#x49;',
			'icon-basket' : '&#x4a;',
			'icon-arrow' : '&#x4b;',
			'icon-adress' : '&#x4c;',
			'icon-account' : '&#x4d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};