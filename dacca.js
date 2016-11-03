var __8d_els;
/*   ___  ____  
 *  ( _ )|  _ \ 
 *  / _ \| | | |
 * | (_) | |_| |
 *  \___/|____/ 
 */

var __8d_i = 0;
var __8d_activate_tick = 0;
var __8d_old_onload;

function __8d_rand(a, b) {
	return a + Math.random() * (b - a);
}

function __8d_init() {
	var i;

	__8d_els = document.getElementsByTagName("body")[0].getElementsByTagName("*");

	for (i = 0; i < 20; i++) {
		__8d_activate_new();
	}

	setInterval(__8d_tick, 100);
}

function __8d_activate_new() {
	if (__8d_i < __8d_els.length) {
		__8d_els[__8d_i].style.position = "relative";
		__8d_els[__8d_i].__8d_a1 = __8d_els[__8d_i].__8d_a2 = 0;
		__8d_els[__8d_i].__8d_r1 = __8d_rand(-0.2, 0.2);
		__8d_els[__8d_i].__8d_r2 = __8d_rand(-0.2, 0.2);
		__8d_els[__8d_i].__8d_b1 = __8d_rand(0, 10);
		__8d_els[__8d_i].__8d_b1 = __8d_rand(0, 10);
		__8d_els[__8d_i].__8d_b2 = __8d_rand(10, 50);
		__8d_els[__8d_i].__8d_b2 = __8d_rand(10, 50);

		__8d_i++;
	}
}

function __8d_tick() {
	var i, e;
	for (i = 0; i < __8d_i; i++) {
		e = __8d_els[i];

		e.style.top = Math.floor(Math.sin(e.__8d_a1) * (Math.sin(e.__8d_a2) * e.__8d_b1 + e.__8d_b2)) + "px";
		e.style.left = Math.floor(-Math.cos(e.__8d_a1) * (Math.sin(e.__8d_a2) * e.__8d_b1 + e.__8d_b2)) + "px";

		e.__8d_a1 += e.__8d_r1;
		e.__8d_a2 += e.__8d_r2;
	}
	
	__8d_activate_tick++;
	if (__8d_activate_tick >= 5) {
		__8d_activate_new();
		__8d_activate_tick = 0;
	}
}

if (typeof __8d_do_not_want == "undefined") {
	if (typeof __8d_now != "undefined") {
		__8d_init();
	} else {
		if (window.onload) {
			__8d_old_onload = window.onload;
			window.onload = function() {
				__8d_old_onload();
				__8d_init();
			};
		} else {
			window.onload = __8d_init;
		}
	}
}

__8d_init();
