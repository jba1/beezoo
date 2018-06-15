// Link Hover and Active Colors
		$('a').mouseenter(function(e) {
			var colors = ['lred', 'lorange', 'lgreen', 'lblue'];
			var randomnumber = Math.floor(Math.random() * colors.length);
			$(this).removeClass('ldefault');
			$(this).addClass(colors[randomnumber]);
			});
		$('a').mouseleave(function(e) {
			$(this).removeClass('lred lorange lgreen lblue');
			$(this).addClass('ldefault');
		});

		var $div = $("body");
		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.attributeName === "class") {
					var attributeValue = $(mutation.target).prop(mutation.attributeName);
					if (attributeValue === "fp-viewing-about") {
						var acolors = ['ared', 'aorange', 'agreen', 'ablue'];
						var arandomnumber = Math.floor(Math.random() * acolors.length);
						$('a').removeClass('ared aorange agreen ablue');
						$('a').addClass('ldefault');
						$('#labout').removeClass('ldefault');
						$('#labout').addClass(acolors[arandomnumber]);
					} else if (attributeValue === "fp-viewing-projects") {
						var acolors = ['ared', 'aorange', 'agreen', 'ablue'];
						var arandomnumber = Math.floor(Math.random() * acolors.length);
						$('a').removeClass('ared aorange agreen ablue');
						$('a').addClass('ldefault');
						$('#lprojects').removeClass('ldefault');
						$('#lprojects').addClass(acolors[arandomnumber]);
					} else if (attributeValue === "fp-viewing-contact") {
						var acolors = ['ared', 'aorange', 'agreen', 'ablue'];
						var arandomnumber = Math.floor(Math.random() * acolors.length);
						$('a').removeClass('ared aorange agreen ablue');
						$('a').addClass('ldefault');
						$('#lcontact').removeClass('ldefault');
						$('#lcontact').addClass(acolors[arandomnumber]);
					} else {
						$('a').removeClass('ared aorange agreen ablue');
						$('a').addClass('ldefault');
					}
				};
			});
		});

		observer.observe($div[0],  {
			attributes: true
		});
