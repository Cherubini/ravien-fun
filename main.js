const ravienConversation = ['Ciao, io sono Ravien...', 'Non so chi sei, ma se hai della roba per me saremo migliori amici almeno finché sono fatto','aaaah, molto meglio ora...']
const immagini =['./Ravien/timidoravien.jpg', './Ravien/raviencannette.jpg' ,'./Ravien/ravienrilassato.jpg']
const youResponse = ['Ciao?', 'Beh, ho delle canne se vuoi, tieni', 'Ma chi sei?' ];
const imgcss =['img1','img2','img3'];

let step=0;
const p1=document.getElementById('talkingRavienAbove');
const b=document.getElementById('talkin')
const img= document.getElementById('ravien');
const p2=document.getElementById('talkingRavienUnder');


function conversation() {
    if(step<ravienConversation.length){
    img.classList.remove(imgcss[step-1]);
    img.classList.add(imgcss[step])
    img.setAttribute('src',immagini[step])
    if (step%2===0)
        {
        p2.innerHTML=ravienConversation[step];
        p1.innerHTML='';
        }
      else 
        {
        p1.innerHTML=ravienConversation[step];
        p2.innerHTML='';
        }
    b.innerHTML=youResponse[step];
    step++;
    }
}