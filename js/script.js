$(document).ready(function () {
    $('#whatsapp-icon').floatingWhatsApp();

    $(".ibm-icon").hover(function(){
        $(".ibm1").hide();

    });

    if (window.innerWidth < 992) {
           document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
              everydropdown.addEventListener('hidden.bs.dropdown', function () {        
              this.querySelectorAll('.submenu').forEach(function(everysubmenu){           
                everysubmenu.style.display = 'none';
              });
          })
        });
      
        document.querySelectorAll('.dropdown-menu a').forEach(function(element){
          element.addEventListener('hover', function (e) {
              let nextEl = this.nextElementSibling;
              if(nextEl && nextEl.classList.contains('submenu')) {	
                e.preventDefault();
                if(nextEl.style.display == 'block'){
                  nextEl.style.display = 'none';
                } else {
                  nextEl.style.display = 'block';
                }
      
              }
          });
        })
    }
});