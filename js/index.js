//  navbar responsive js codes

const Header_nav =  document.querySelector('.header');
const Open_nav = document.querySelector('.open-menu');
const close_nav = document.querySelector('.close-menu');
const overlay =  document.querySelector('nav-overlay');


const openNavbar = () => {


    Header_nav.classList.add("active");
}


Open_nav.addEventListener('click', () => openNavbar());

const closeNavbar= () => {

    Header_nav.classList.remove("active");
}

close_nav.addEventListener('click', () => closeNavbar());




//   filter image gallery js codes 

const buttun =  document.querySelectorAll('.prod-btun');
const item =  document.querySelectorAll('.product-box');


    for(let i = 0;  i < buttun.length; i++){
        buttun[i].addEventListener('click', function(){
            for(let j = 0; j < buttun.length; j++){
                buttun[j].classList.remove("active");
            }
            this.classList.add('active');

            let datafilter =  this.getAttribute('data-filter');

            for(let k = 0; k < item.length; k++){
                item[k].classList.add('hide');
                item[k].classList.remove('active');

                if(item[k].getAttribute('data-item') == datafilter || datafilter == "sellers"){
                    item[k].classList.add('active');
                    item[k].classList.remove('hide');
                }
            }
        })

        
    }


// owl carousel
const left_Arr =  `<i class="fa-solid fa-arrow-left-long"></i>`
const right_Arr = `<i class="fa-solid fa-arrow-right-long"></i>`

$(' .instagram-carousel').owlCarousel({
    loop:true,
    autoplay:true,
autoplayTimeout:2000,
    margin:10,
    nav:false,
    dots: false,
    navText: [
        left_Arr, right_Arr
    ],
    responsive:{
        0:{
            items:1
        },

        350:{
            items: 2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
   
  
})


// tstim sec carousel 

const left_Arrow =  `<i class="fa-solid fa-arrow-left-long"></i>`
const right_Arrow = `<i class="fa-solid fa-arrow-right-long"></i>`

$(' .testim-carousel').owlCarousel({
    loop:true,
    autoplay:true,
autoplayTimeout:2000,
    margin:30,
    nav:false,
    dots: false,
    navText: [
        left_Arrow, right_Arrow
    ],
    responsive:{
        0:{
            items:1
        },

        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   
  
})

// selector box js codes  


    // var selecter  = document.querySelector('.selector');
    // var content =  document.querySelector('.textPara');
    // var select_box =  document.querySelector('.options-box');
    // var options  =  document.querySelectorAll('.op-list');
    // var arrow = document.querySelector('.arrow-icono');


    // const toggleOptions = () => {

    //     select_box.classList.toggle('active');
    //       arrow.classList.toggle('rotate');
        
    // }

    // selecter.addEventListener("click", () => toggleOptions());

    // for(let i =0; i < options.length; i++){
    //     options[i].addEventListener('click', function(){
    //         content.innerHTML = this.textContent;
    //         select_box.classList.toggle('active');
    //     arrow.classList.toggle('rotate');
    //     })
    // }



    
       // filter shop items prod -js codes

       const categ_btun =  document.querySelectorAll('.shop-cat-filt-button-box');
       const items =  document.querySelectorAll('.s-items');
   
      
       for(let i = 0; i < categ_btun.length; i++){
           categ_btun[i].addEventListener('click', function(){
               for(let j = 0; j < categ_btun.length; j++){
                   categ_btun[j].classList.remove('active');
               }
   
   
               let data_filter =  this.getAttribute('data-filter');
   
               for(let k = 0; k < items.length; k++){
                   items[k].classList.add('hide');
   
                   if(items[k].getAttribute('data-item') == data_filter || data_filter == 'all' ) {
                       items[k].classList.remove('hide');
                   }
               }
   
   
               
           })
       }


          // --------------------------------------------
      
    const list_btun =  document.querySelectorAll('.op-list');
    const item_filter =  document.querySelectorAll('.s-items');

    for(let i = 0; i < list_btun.length; i++){
        list_btun[i].addEventListener('click', function(){
            for(let j = 0; j < list_btun.length; j++){
                list_btun[j].classList.remove('active');
            }

            list_btun[i].classList.add('active');

            let data_filter =  this.getAttribute('data-filter');

            for(let k = 0; k < item_filter.length; k++){
                item_filter[k].classList.add('hide');

                if(item_filter[k].getAttribute('data-name') == data_filter ) {
                    item_filter[k].classList.remove('hide');
                }
            }


            
        })
    }

    //  filter colors available items js codes

    const col_btun =  document.querySelectorAll('.shop-colo-filt-button');
    const item_colo =  document.querySelectorAll('.s-items');

    for(let i = 0; i < col_btun.length; i++){
        col_btun[i].addEventListener('click', function(){
            for(let j = 0; j < col_btun.length; j++){
                col_btun[j].classList.remove('active');
            }


            let data_filter =  this.getAttribute('data-filter');

            for(let k = 0; k < item_filter.length; k++){
                item_colo[k].classList.add('hide');

                if(item_colo[k].getAttribute('data-color') == data_filter ) {
                    item_colo[k].classList.remove('hide');
                }
            }


            
        })
    }

//  filter size  available items js codes

const size_btun =  document.querySelectorAll('.shop-size-filt-button');
const item_size =  document.querySelectorAll('.s-items');

for(let i = 0; i < size_btun.length; i++){
    size_btun[i].addEventListener('click', function(){
        for(let j = 0; j < size_btun.length; j++){
            size_btun[j].classList.remove('active');
        }


        let data_filter =  this.getAttribute('data-filter');

        for(let k = 0; k < item_size.length; k++){
            item_size[k].classList.add('hide');

            if(item_size[k].getAttribute('data-label') == data_filter ) {
                item_size[k].classList.remove('hide');
            }
        }


        
    })
}

//  js codes 

// const show_item =  document.querySelector('.grid-btun');
// const show_blockitem =  document.querySelector('.list-btun');
// const grid_menu =  document.querySelector('.shopping-page-products-grid');
// const lists_menu =  document.querySelector('.shopping-page-block-list-products-grid-2');


// const showGrid = () => {
//     grid_menu.classList.add('active')
//     lists_menu.classList.remove('active')
//     show_item.classList.add('active')
//     show_blockitem.classList.remove('active')
// }

// show_item.addEventListener("click", () =>  showGrid());
 



// show_blockitem.addEventListener("click", function(){
//     grid_menu.classList.remove('active')
//     lists_menu.classList.add('active')
//     show_item.classList.remove('active')
//     show_blockitem.classList.add('active')
// });

// navbar sticky position fixed




    const navbarFixed = () => {

let Navbar =  document.querySelector('.header');


        Navbar.classList.toggle('sticky', window.scrollY > 400);
        
    }




window.addEventListener('scroll', () => navbarFixed());



// scroll top btun
let scroll_btun =  document.querySelector(".scroll-top-btun");

const listenScroll = () => {


    let heightView = 500;

    const winScroll =  document.body.scrollTop || document.documentElement.scrollTop ;

    if(winScroll > heightView){
        scroll_btun.style.transform = "translateY(0)";
        scroll_btun.style.opacity = "1";
    } else{
        scroll_btun.style.transform = "translateY(-700px)";
        scroll_btun.style.opacity = "0";
    }
    
}


window.addEventListener("scroll", () => listenScroll());

const ScrollBtn =  document.querySelector(".scroll-top-btun");
const Home_sec = document.querySelector(".top-header-sec");


const scrollTopScroll = () => {

Home_sec.scrollIntoView({behavior: "smooth"});
    
}

ScrollBtn.addEventListener("click", () => scrollTopScroll());

        
    
//search bar codes 

const SeachBtun =  document.querySelector('.search-button');
const closeSearch =  document.querySelector('.serch-close-btun');
const Seach_Box =  document.querySelector('.search-bar-sec');



const openSearchBar = () => {

    Seach_Box.classList.add('active');
    
}


SeachBtun.addEventListener('click', () => openSearchBar());


const closeSearchBar = () => {

    Seach_Box.classList.remove('active');
    
}

closeSearch.addEventListener('click', () => closeSearchBar());
   

// -----------------------------------------------

// var smallImg =  document.getElementsByClassName("smal-img");
// var bigImg =  document.getElementById("Main-img");

// smallImg[0].onclick =  function(){
//     bigImg.src = smallImg[0].src
// }

// smallImg[1].onclick =  function(){
//     bigImg.src = smallImg[1].src
// }

// smallImg[2].onclick =  function(){
//     bigImg.src = smallImg[2].src
// }
// smallImg[3].onclick =  function(){
//     bigImg.src = smallImg[3].src
// } 
    

// js codes -------------------------------------

const sizeBtun =  document.querySelectorAll('.prod-size-bx');



   for(let i =0 ; i<sizeBtun.length; i++){
    sizeBtun[i].addEventListener("click", () => {
        for(let j = 0; j<sizeBtun.length; j++){
            sizeBtun[j].classList.remove('active');
        }
        sizeBtun[i].classList.add('active')
    })
   }


   const ColrBtun =  document.querySelectorAll('.prod-col-cho-box');



   for(let i =0 ; i<ColrBtun.length; i++){
    ColrBtun[i].addEventListener("click", () => {
        for(let j = 0; j<ColrBtun.length; j++){
            ColrBtun[j].classList.remove('active');
        }
        ColrBtun[i].classList.add('active')
    })
   }


//    ----------------------------------------------------

// const dec_btun = document.querySelector('.minusbtun');
// const qtyBx =  document.querySelector('#qtyBx');
// const inc_btun =  document.querySelector('.addbtun');

// inc_btun.addEventListener('click', () => {
//     qtyBx.value =  parseInt(qtyBx.value) + 1;
// })

// dec_btun.addEventListener('click', () => {
//     qtyBx.value =  parseInt(qtyBx.value) - 1;

//     if(qtyBx.value <= 0){
//         qtyBx.value = 0
//     }
// })

// -----------------------------------------------------------

// const des_btun = document.querySelector('.desc-btun');
// const rev_btun =  document.querySelector('.rev-btun');
// const des_info =  document.querySelector('.prod-det-text-info');
// const rev_box =  document.querySelector('.prod-rev-user-input-box');

// des_btun.addEventListener("click", () => {
//     des_btun.classList.add("active");
//     rev_btun.classList.remove("active");
//     des_info.style.display = "block";
//     rev_box.style.display =  "none";
//     des_info.classList.add('active');
//     rev_box.classList.remove('active');

// })
// rev_btun.addEventListener("click", () => {
//     rev_btun.classList.add("active");
//     des_btun.classList.remove("active");
//     rev_box.style.display = "block";
//     des_info.style.display =  "none";
//     rev_box.classList.add('active');
//     des_info.classList.remove('active');
// })




// -----------------------------------------------------------

$(' .client-carousel').owlCarousel({
    loop:true,
    autoplay:true,
autoplayTimeout:2000,
    margin:30,
    nav:false,
    dots: false,
   
    responsive:{
        0:{
            items:2
        },

        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
   
  
})

// ----------------------------------------------------
const preload =  document.getElementById('preloader');

const myFunction = () => {



    preload.style.transform = "translateY(100%)";
    preload.style.opacity = "0";

    
}