/* eslint-disable no-undef */

//Toggle-Funktion des Darkmodes
//
//
$('#darktoggle').click(function () {
  $('body').toggleClass('dark');
  $('.ernaehrungstool').toggleClass('dark');
  $('.navbar').toggleClass('dark');
  $('.navbar-links').toggleClass('dark');
  $('.tool-steps').toggleClass('dark');
  $('.mehrauswahl').toggleClass('dark');
});

//Stickybar CSS nach Scrollen
//
//
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

//Berechnung der Input-Values anhand der Namen + Überprüfung ob checked
//
//
$('input').change(function () {
  // jedesmal ausführen, wenn sich ein Input-Wert ändert
  var performancevalue = null;
  var gewichtmanagementvalue = null;

  //Falls mit normalen Input-Felndern gearbeitet werden soll
  //var firstValue = Number($('#first').val());
  //var secondValue = Number($('#second').val()); */

  //Inputfeldname = checked => Value zu "Xvalue"
  if ($("input[name='performance']").is(':checked')) {
    performancevalue = Number($("input[name='performance']:checked").val());
  }
  if ($("input[name='gewichtmanagement']").is(':checked')) {
    gewichtmanagementvalue = Number(
      $("input[name='gewichtmanagement']:checked").val(),
    );
  }
  // ZWei Berechnungsbeispiele, einmal als HTML-Text, einmal in Input-Feld
  $('#rechnungohneinput').html(performancevalue + gewichtmanagementvalue);
  document.getElementById('rechnung').value =
    performancevalue + gewichtmanagementvalue;
});

//Wenn Input-Feld gedrückt wird...
//mit z.B. der ID "ziel1", dann..
//zeige / verstecke diverse Elemente oder unchecke nicht sichtbare Inputs
//
//
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

//zeige Kalorienverbrauchfrage, sobald ein ELement aus den 3 Ziel-Gruppen ausgewählt wurde
//
//
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

//Buttons zum Seitenwechsel und ändern der Step-CSS
//
//Weiter Button von Sektion 1 zu 2
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
//Zurück Button von Sektion 2 zu 1
$('#section2-1').click(function () {
  $('.step1').addClass('highlight');
  $('.step2').removeClass('highlight');
  $('#section-ziel').show();
  $('#section-koerper').hide();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#navbar').offset().top,
    },
    500,
  );
});
//Weiter Button von Sektion 2 zu 3
$('#section2-3').click(function () {
  $('.step3').addClass('highlight');
  $('.step2').removeClass('highlight');
  $('#section-aktivitaet').show();
  $('#section-koerper').hide();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $('#navbar').offset().top,
    },
    500,
  );
});
