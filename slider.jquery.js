$.fn.slider = function ()
{
	var currentSlide = 1;
	var totalSlides = this.find(".slide").length;
	var container = this.find(".slide_container");
	var slider = this.find('.slider');

	slider.width(totalSlides * 100 + '%');
	slider.find('.slide').width(100 / totalSlides + '%');

	function updateSliderImage()
	{
		container.css("transform", "translateX(-" + (currentSlide - 1) / totalSlides * 100 + "%)");
		container.css("transform", "-webkit-translateX(-" + (currentSlide - 1) / totalSlides * 100 + "%)");
	}

	this.find(".slider-arrow-left").click(function ()
	{
		if (currentSlide == 1)
		{
			currentSlide = totalSlides;
		}
		else
		{
			currentSlide--;
		}

		updateSliderImage();
	});

	this.find(".slider-arrow-right").click(function ()
	{
		if (currentSlide >= totalSlides)
		{
			currentSlide = 1;
		}
		else
		{
			currentSlide++;
		}

		updateSliderImage();
	});

	return this;
};