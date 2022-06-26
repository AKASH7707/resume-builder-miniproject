function myPrint(boxx){
  var printdata =document.getElementById(boxx);
  newwin = window.open("");
  newwin.document.write(printdata.outerHTML);
  
  newwin.print();
  newwin.close();

}

// sdhfsfhdsdfh


async function downloadPDF(){
  document.getElementById("priBtn").innerHTML= "currently downloading, please wait";

  var downloading = document.getElementById("boxx");
  var doc =new jsPDF('p', 'pt','A4');


  await html2canvas(downloading, {
    allowTaint: true,
    useCORS: true,

    
  }).then((canvas) =>{
    doc.addImage(canvas.toDataURL("image/png"), 'PNG',1,1,600,600);
  })

  doc.save("Document.pdf"); 

  document.getElementById("priBtn").innerHTML= "Click to download";

}


