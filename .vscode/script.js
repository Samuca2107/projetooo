function toggleMode(){
const html= document.documentElement
html.classList.toggle('light')
// if(html.classList.contains ('light')){
//     html.classList.remove('light')
// }else{
//     html.classList.add('light')
// }

const Img = document.querySelector ("#profile img")

if( html.classList.contains('light')){
    Img.setAttribute('src','./assets/avatar-samuel-light.png')
}else{
    Img.setAttribute('src','./assets/Avatar.samuel.dark.png')
}

if(html.classList.contains('light')){
    Img.setAttribute('alt','foto de um cara com óculos de soll')
}else{
    Img.setAttribute('alt','foto de um cara com óculos de grau')
}


}