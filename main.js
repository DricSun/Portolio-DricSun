function ColorButton(){
    const buttonChange = document.querySelectorAll('.color-button')

    for(const button of buttonChange){
        console.log('test')
        button.addEventListener('mouseover', ()=>{
            // button.setAttribute("style","background-color:white");
            button.style.color = "#0CDEFF";
            button.style.backgroundColor = "black";
        })
        button.addEventListener('mouseout', () =>{
            button.style = ''
        })
    }

}

ColorButton()