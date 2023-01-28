const delay = ms => new Promise(res => setTimeout(res, ms));



async function start() {

    await delay(900);
    
    function limpaTela(){                

        Array.from(document.getElementsByClassName('c-breadcrumb-wrapper'))[0].style.display = 'none';  
        Array.from(document.getElementsByClassName('entry-title'))[0].style.display = 'none';           
        Array.from(document.getElementsByClassName('tab-wrap'))[0].style.display = 'none';                   
        Array.from(document.getElementsByClassName('c-sidebar c-top-sidebar wp-manga'))[0].style.display = 'none';                 
        Array.from(document.getElementsByClassName('entry-header'))[0].style.display = 'none';                    
        Array.from(document.getElementsByClassName('tab-wrap'))[0].style.display = 'none';                    
        
    }
    limpaTela();

}
start();