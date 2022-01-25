/* eslint-disable no-undef */
/* function calculatekcal() {
  var selectedPerformance = document.querySelector(
    'input[name="performance"]:checked',
  ).value;
  var selectedGewichtmanagement = document.querySelector(
    'input[name="gewichtmanagement"]:checked',
  ).value;
  var total =
    parseInt(selectedPerformance) + parseInt(selectedGewichtmanagement);
  document.getElementById('rechnung').value = total;
} */

$('input').change(function () {
  // run anytime the value changes

  var performancevalue = null;
  var gewichtmanagementvalue = null;
  /*   var firstValue = Number($('#first').val());
  var secondValue = Number($('#second').val()); */

  if ($("input[name='performance']").is(':checked')) {
    performancevalue = Number($("input[name='performance']:checked").val());
  }

  if ($("input[name='gewichtmanagement']").is(':checked')) {
    gewichtmanagementvalue = Number(
      $("input[name='gewichtmanagement']:checked").val(),
    );
  }

  $('#rechnungohneinput').html(performancevalue + gewichtmanagementvalue); // add them and output it
  document.getElementById('rechnung').value =
    performancevalue + gewichtmanagementvalue;
  // add them and output it
});

$('input[name="ziel"]').click(function () {
  var inputValue = $(this).attr('id');
  if (inputValue == 'ziel1') {
    $('#tool-performance').show();
    $('#tool-gewichtmanagement').hide();
    $('#tool-wohlbefinden').hide();
    $('input[name="gewichtmanagement"]').prop('checked', false).change();
    $('input[name="wohlbefinden"]').prop('checked', false).change();
    $('#tool-einleitung').hide();
  } else if (inputValue == 'ziel2') {
    $('#tool-performance').hide();
    $('#tool-gewichtmanagement').show();
    $('#tool-wohlbefinden').hide();
    $('input[name="performance"]').prop('checked', false).change();
    $('input[name="wohlbefinden"]').prop('checked', false).change();
    $('#tool-einleitung').hide();
  } else if (inputValue == 'ziel3') {
    $('#tool-performance').hide();
    $('#tool-gewichtmanagement').hide();
    $('#tool-wohlbefinden').show();
    $('input[name="performance"]').prop('checked', false).change();
    $('input[name="gewichtmanagement"]').prop('checked', false).change();
    $('#tool-einleitung').hide();
  }
});

$('input[type="radio"]').click(function () {
  var inputValue = $(this).attr('name');
  if (inputValue == 'performance') {
    $('#tool-kalorienverbrauchfrage').show();
  } else if (inputValue == 'gewichtmanagement') {
    $('#tool-kalorienverbrauchfrage').show();
  } else if (inputValue == 'wohlbefinden') {
    $('#tool-kalorienverbrauchfrage').show();
  }
});

$('#section2-1').click(function () {
  $('.step1').addClass('highlight');
  $('.step2, .step3').removeClass('highlight');
  $('#section-ziel').show();
  $('#section-koerper, #section-aktivitaet').hide();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#navbar').offset().top,
    },
    500,
  );
});

$('#section1-2').click(function () {
  $('.step2').addClass('highlight');
  $('.step1, .step3').removeClass('highlight');
  $('#section-koerper').show();
  $('#section-ziel, #section-aktivitaet').hide();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#navbar').offset().top,
    },
    500,
  );
});

$('#section2-3').click(function () {
  $('.step3').addClass('highlight');
  $('.step1, .step2').removeClass('highlight');
  $('#section-aktivitaet').show();
  $('#section-ziel, #section-koerper').hide();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#navbar').offset().top,
    },
    500,
  );
});

/* const darktoggle = document.getElementById('darktoggle');
darktoggle.addEventListener('change', () => {
  // change Theme //
  document.body.classList.toggle('dark');
}); */

$('#darktoggle').click(function () {
  $('body').toggleClass('dark');
  $('.ernaehrungstool').toggleClass('dark');
  $('.navbar').toggleClass('dark');
  $('.navbar-links').toggleClass('dark');
  $('.tool-steps').toggleClass('dark');
  $('.mehrauswahl').toggleClass('dark');
});

// When the user scrolls the page, execute stickybar
window.onscroll = function () {
  stickybar();
};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
function stickybar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
