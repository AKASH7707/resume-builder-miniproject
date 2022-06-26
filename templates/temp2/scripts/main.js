// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
function myPrint(boxx){
  var printdata =document.getElementById(boxx);
  newwin = window.open("");
  newwin.document.write(printdata.outerHTML);
  newwin.print();
  newwin.close();

}