var CKF = require('./CKF.js');
require('../less/home-floor.less');
// other dependencies ...

module.exports = (function() {
	var moduleName = 'homeFloor';
	var module = CKF.create(moduleName);
	return {
		init: function() {
			module.each(function(index, elem) {
				var $elem = $(elem);
				var $items = $elem.find('.home-floor-keyword-items');
				var $left = $elem.find('.home-floor-keyword-left');
				var $right = $elem.find('.home-floor-keyword-right');
				var MOVE_WIDTH = $elem.find('.home-floor-keyword-wrap').width();
				var TOTAL_WIDTH = 0;

				$items.find('li').each(function(index, elem) {
					TOTAL_WIDTH += parseInt($(elem).outerWidth(true));
				});

				$left.on('click', function() {
					var iLeft = Math.abs(parseInt($items.css('left')));
					if (!$items.is(':animated') && iLeft > 0) {
						$items.animate({
							left: '+=' + MOVE_WIDTH + 'px'
						});
					}
				});

				$right.on('click', function() {
					var iLeft = Math.abs(parseInt($items.css('left')));

					if (!$items.is(':animated') && TOTAL_WIDTH - iLeft > MOVE_WIDTH) {
						$items.animate({
							left: '-=' + MOVE_WIDTH + 'px'
						});
					}
				});
			});
		}
	};
})();