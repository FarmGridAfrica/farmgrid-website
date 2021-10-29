
$(document).ready(function () {
  var current_star_statusses = [];

  star_elements = $('.fa-star').parent();

  star_elements.find(".fa-star").each(function(i, elem)
  {
     current_star_statusses.push($(elem).hasClass('yellow'));
  });
  
  star_elements.find(".fa-star").mouseenter(changeRatingStars);
  star_elements.find(".fa-star").mouseleave(resetRatingStars);

/**
* Changes the rating star colors when hovering over it.
*/
function changeRatingStars()
{
  // Current star hovered
  var star = $(this);

// Removes all colors first from all stars
$('.fa-star').removeClass('gray').removeClass('yellow');

// Makes the current hovered star yellow
star.addClass('yellow');

// Makes the previous stars yellow and the next stars gray
star.parent().prevAll().children('.fa-star').addClass('yellow');
star.parent().nextAll().children('.fa-star').addClass('gray');
}

/**
* Resets the rating star colors when not hovered anymore.
*/
function resetRatingStars()
{
star_elements.each(function(i, elem)
                   {
  $(elem).removeClass('yellow').removeClass('gray').addClass(current_star_statusses[i] ? 'yellow' : 'gray');
});
}

});

$(document).ready(function () {

	var navListItems = $('div.setup-panel div a'),
			allWells = $('.setup-content'),
			allNextBtn = $('.nextBtn');
	
	allWells.hide();
	
	navListItems.click(function (e) {
		e.preventDefault();
		var $target = $($(this).attr('href')), $item = $(this);
	
		if (!$item.hasClass('disabled')) {
			navListItems.removeClass('btn-primary').addClass('btn-default');
			$item.addClass('btn-primary');
			allWells.hide();
			$target.show();
			$target.find('input:eq(0)').focus();
		}
	});
	
	allNextBtn.click(function(){
		var curStep = $(this).closest(".setup-content"),
			curStepBtn = curStep.attr("id"),
			nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
			curInputs = curStep.find("input[type='text'],input[type='number'],input[type='url']"),
			isValid = true;
			
		$(".form-group").removeClass("has-error");
	
		for(var i=0; i<curInputs.length; i++){
			if (!curInputs[i].validity.valid){
				isValid = false;
				$(curInputs[i]).closest(".form-group").addClass("has-error");
				
			}
		}
		if(!isValid){
			alert('Fill all Fields');
		}
		
		if (isValid){
      nextStepWizard.removeAttr('disabled').trigger('click');
      if(curStepBtn == "step-1"){
        $('.bd').css({
          'display':'none'
        });
        $('.bolder').css({
          'color':'#1BD982'
        });
        $('.bolder1').css({
          'background-color':'#1BD982',
          'font-weight':'bolder',
          'color': 'white'
        });
        $('.bolder_a').css({
          'font-weight':'bolder',
          'color':'#1BD982'
        });
      }
      if(curStepBtn == "step-2"){
        $('.bd1').css({
          'display':'none'
        });
        $('.bolder2').css({
          'background-color':'#1BD982',
          'font-weight':'bolder',
          'color': 'white'
        });
        $('.bolder_i').css({
          'font-weight':'bolder',
          'color':'#1BD982'
        });
      }
      if(curStepBtn == "step-3"){
        $('.bd2').css({
          'display':'none'
        });
        $('.bolder3').css({
          'background-color':'#1BD982',
          'font-weight':'bolder',
          'color': 'white'
        });
        $('.bolder_p').css({
          'font-weight':'bolder',
          'color':'#1BD982'
        });
      }
      if(curStepBtn == "step-4"){
        $('.bd3').css({
          'display':'none'
        });
        $('.bolder4').css({
          'background-color':'#1BD982',
          'font-weight':'bolder',
          'color': 'white'
        });
        $('.bolder_c').css({
          'font-weight':'bolder',
          'color':'#1BD982'
        });
      }
		} 
	});
	$('div.setup-panel div a.btn-primary').trigger('click');
	});

