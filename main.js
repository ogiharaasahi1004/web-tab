  const showTab = (selector) => {
    
   console.log(selector);
   
  $('.tabs-menu > div').removeClass('active');
  $('.tabs-content > div').hide();

  $(`.tabs-menu [id = "${selector}"]`).addClass('active');
   if (selector === 'tab-menu-a') {
    $('#tabs-a').show();
   } else if (selector === 'tab-menu-b') {
    $('#tabs-b').show();
   } else  {
    $('#tabs-c').show();
   }
    
  $(selector).show();
};

$('.tabs-menu div').on('click', (e) => {
  const selector = $(e.target).attr('id');
  showTab(selector);
});

showTab('tab-menu-a');
  