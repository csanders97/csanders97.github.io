function loadworddoc() {

    var doc = new ActiveXObject("Word.Application"); // creates the word object
  
    doc.Visible=false; // doesn't display Word window
  
    doc.Documents.Open("D:\\Past Neumont Courses\\Persuasive and Professional Writing\\Resume.docx"); // specify path to document
  
                 
  
    //copy the content from my word document and throw it into my variable
  
    var txt;
  
    txt = doc.Documents("D:\\Past Neumont Courses\\Persuasive and Professional Writing\\Resume.docx").Content; 
  
    document.all.myarea.value = txt;
  
    doc.quit(0); // quit word (very important or you'll quickly chew up memory!)
  
}