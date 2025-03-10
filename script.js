// TROCAR DE FONTE
// Fonte1
const fonts1 = ["Vicenza", "Vecna", "TheWildBreathOfZelda", "BreatheFireII"];
let index1 = 0; // Índice exclusivo para fonts1

function changeFont1() {
    const titles1 = document.querySelectorAll(".Title1"); 

    titles1.forEach(title => {
        title.style.fontFamily = fonts1[index1]; // Aplica a fonte correta
    });

    // Atualiza o índice APÓS aplicar a fonte
    index1 = (index1 + 1) % fonts1.length; 
}
setInterval(changeFont1, 1000);

// Fonte2
const fonts2 = ["TheWildBreathOfZelda", "BreatheFireII", "Vicenza", "Vecna"];
let index2 = 0; // Índice exclusivo para fonts2

function changeFont2() {
    const titles2 = document.querySelectorAll(".Title2"); 

    titles2.forEach(title => {
        title.style.fontFamily = fonts2[index2]; // Aplica a fonte correta
    });

    index2 = (index2 + 1) % fonts2.length; // Alterna a fonte em loop
}
setInterval(changeFont2, 1000);

//TAB PORTIFÓLIO
function openPortifolio(evt, portifolio) {
    // Declare all variables
    var i, tabcontent, tabBtt;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tabBtt" and remove the class "active"
    tabBtt = document.getElementsByClassName("tabBtt");
    for (i = 0; i < tabBtt.length; i++) {
        tabBtt[i].className = tabBtt[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(portifolio).style.display = "block";
    evt.currentTarget.className += " active";
  }

//Carrega a página defaultTab antes de apertar em algum botão
document.addEventListener("DOMContentLoaded", function() {
    const defaultTab = document.getElementById("defaultTab");
    const allTabs = document.querySelectorAll(".tabcontent");

    // Esconde todas as abas
    allTabs.forEach(tab => {
        tab.style.display = "none";
    });

    // Exibe apenas a aba padrão
    if (defaultTab) {
        defaultTab.style.display = "flex";
    }
});

//Slide
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 500, // Ajuste este valor conforme necessário
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1 // Ou um número, se preferir
        },
        620: {
            slidesPerView: 2 // Ou um número, se preferir
        },
        1024: {
            slidesPerView: 3 // Ou um número, se preferir
        }
    }
  });