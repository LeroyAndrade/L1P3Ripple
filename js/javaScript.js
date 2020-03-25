const alleVakken = document.querySelectorAll('.vlak');
const rimpl  =document.createElement('div');
rimpl.classList = 'rimpl';


for(let i=0; i < alleVakken.length; i++){
  alleVakken[i].addEventListener('click', function(e){
    e.preventDefault();
    let x = e.pageX - this.offsetLeft -50;
    let y = e.pageY - this.offsetTop -50;
    rimpl.style.left = x + 'px';
    rimpl.style.top  = y + 'px';
e.target.append(rimpl);
    //het element oproepen
    rimpl.classList.add('groeien');

    //

    if(this.getElementsByTagName('input')[0]){
      let dec = this.getElementsByTagName('input')[0];
        dec.checked = !dec.checked;
    }
    //als

  });
}
