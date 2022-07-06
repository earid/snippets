/* Snipppet 1 */
/* slide chaneg on image */ 

function funName(funParam){
    document.querySelector('.demo').src = funParam;
  }

HTML >> onclick="funParam('image/link.png');"
/* Snipppet 2 */
/* change bg color */

 function funName(funParam){
    const sec = document.querySelector('.sec');
    sec.style.background = funParam;
 }
HTML >> onclick="funName('#FFF');"
