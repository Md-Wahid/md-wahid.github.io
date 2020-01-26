$(document).ready(function(){
    
    
   var isItBlack = true;  
    
   $("#red-button").click(function(){
       
       if(isItBlack == true){        
           $(".css-function-example h1").css({
               "color":"red"
           }); 
           isItBlack = false;
        }else{
            $(".css-function-example h1").css({
               "color":"black"
           });
            isItBlack = true;
        }
       
       
   });
    
    
    /* ------------------------------------- */
    
    
    $(".main-menu ul li").first().find("a").addClass("active");
    
    $(".main-menu ul li a").click(function(){
        //$(".main-menu ul li a").removeClass("active");
        $(this).addClass("active"); 
        $(this).parent().siblings().children().removeClass("active");
    });
    
    
    
    /* ------------------------------------- */
    
    $(".chaldal>ul>li>a").click(function(){
        
        $(this).siblings().slideDown(1000);
        $(this).parent().siblings().find("ul").slideUp(1000);
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
