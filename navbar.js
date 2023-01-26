    .header .navbar{
         position: absolute;
         top: 115%;
         right: 2rem;
         background: #fff;
         box-shadow: var(--box-shadow);
         border: var(--border);
         border-radius: .5rem;
         width: 30rem;
         padding: 15px;
         transform: scale(0);
         transform-origin: top right;
         opacity: 0;
    }
    .header .navbar.active{
      transform: scale(1);
      
      opacity: 1;
    }
    
    
    
    let menu= document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
