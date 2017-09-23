<<<<<<< HEAD
<<<<<<< HEAD
$(".link").on('click', function(event) {
   if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){
       window.location.hash = hash;
     });
   }
 });

window.sr = ScrollReveal();
=======
$(".link").on('click', function(event) {
   if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){
       window.location.hash = hash;
     });
   }
 });

window.sr = ScrollReveal();
sr.reveal('.top-left', { duration: 2000});
sr.reveal('.menu', { duration: 2000,
                     delay:500});
sr.reveal('.top-right', { duration: 2000});
sr.reveal('.testimonal', { duration: 2200,
                          origin: 'bottom',
                          distance: '20px',
                          easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('.info1-left', { duration: 2500,
                          origin: 'left',
                          viewFactor: 0.5,
                          distance: '200px'});
sr.reveal('.info1-right', { duration: 2500,
                          origin: 'right',
                          viewFactor: 0.5,
                          distance: '200px'});
sr.reveal('.late', { duration: 2500,
                     delay: 2000,
                     distance: '200px'});
sr.reveal('.info2-left', { duration: 2500,
                            origin: 'left',
                            distance: '200px'});
sr.reveal('.info2-right', { duration: 2500,
                           origin: 'right',
                           distance: '200px'});
sr.reveal('.cubes', { duration: 2500,
                       viewFactor: 0.5});
sr.reveal('.contact1-left', { duration: 2500,
                              origin: 'left',
                              viewFactor: 0.5});
sr.reveal('.contact1-right', { duration: 2500,
                               origin: 'right',
                               viewFactor: 0.5});
>>>>>>> 06b0f24047e981ff8adade0b6a402e8847a70353
=======
$(".link").on('click', function(event) {
   if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){
       window.location.hash = hash;
     });
   }
 });

window.sr = ScrollReveal();
sr.reveal('.top-left', { duration: 2000});
sr.reveal('.menu', { duration: 2000,
                     delay:500});
sr.reveal('.top-right', { duration: 2000});
sr.reveal('.testimonal', { duration: 2200,
                          origin: 'bottom',
                          distance: '20px',
                          easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('.info1-left', { duration: 2500,
                          origin: 'left',
                          viewFactor: 0.5,
                          distance: '200px'});
sr.reveal('.info1-right', { duration: 2500,
                          origin: 'right',
                          viewFactor: 0.5,
                          distance: '200px'});
sr.reveal('.late', { duration: 2500,
                     delay: 2000,
                     distance: '200px'});
sr.reveal('.info2-left', { duration: 2500,
                            origin: 'left',
                            distance: '200px'});
sr.reveal('.info2-right', { duration: 2500,
                           origin: 'right',
                           distance: '200px'});
sr.reveal('.cubes', { duration: 2500,
                       viewFactor: 0.5});
sr.reveal('.contact1-left', { duration: 2500,
                              origin: 'left',
                              viewFactor: 0.5});
sr.reveal('.contact1-right', { duration: 2500,
                               origin: 'right',
                               viewFactor: 0.5});
>>>>>>> 06b0f24047e981ff8adade0b6a402e8847a70353
