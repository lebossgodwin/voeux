
          

const click = document.getElementById("submitbtn");
// const Url = window.document.location.href;
// const title = window.document.title;
click.addEventListener('click',()=>{
        const names = document.getElementById("changename");
         const entername = document.getElementById("newname");
         const myname = entername.value;
          names.innerHTML = myname;
          const Url = window.document.location.href;
           const title = window.document.title;
        if(navigator.share){
                        navigator.share({
                                text: `${title}`,
                                url: `${Url}`
                        }).then(() =>{
                                alert("les voeux envoyés avec succes");
                        }).catch(err, ()=>{
                                alert(`something is wrong ${err}`);
                        })
               
               }
        else{
        
               alert("Svp entrer voter nom");
       }
       
})
