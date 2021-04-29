var t1 = just.animate({
   targets: ".ball",
   duration: 1300,
   props: {
     innerHTML: ['efecto', 'presiona'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(3, 1)" },
         { offset: 0.3, value: "scale(1.20, .70)" },
         { offset: 0.4, value: "scale(.75, 1.25)" },
         { offset: 0.5, value: "scale(1.15, .85)" },
         { offset: 0.65, value: "scale(.95, 1.05)" },
         { offset: 0.75, value: "scale(1.05, .95)" },
         { offset: 1, value: "scale(1, 1)" }
      ]
   }
});
document.getElementById("btn1").addEventListener("click", (e)=>{
t1.play();
});