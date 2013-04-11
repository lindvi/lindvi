$(document).ready(function() {



    a=parseFloat(0);// Initial value for the first background (bk 0)
    b=parseFloat(0);// Initial value for the second background (bk 1)
    c=parseFloat(0);// Initial value for the third background (bk 2)
    d=parseFloat(0);// Initial value for the fourth background (bk 3)

    var scrollTop = $(window).scrollTop();
    var scroll_actually= new Array();// Identifies the X and Y values for the background
 
    $(window).scroll(function(){//This is not the cleanest way to do this, I'm just keeping it short.
        if(scrollTop>$(this).scrollTop()) // Scroll up
        {
            a = a + 12;
            b = b + 16;
            c = c + 20;
            d = d + 24;
            
           $("html").css('background-position', '0% ' + a + 'px, 0% ' + b + 'px, 0% ' + c + 'px, 0% ' + d + 'px');
        }
        else
        {// Scroll down
           
            a = a - 12;
            b = b - 16;
            c = c - 20;
            d = d - 24;

           $("html").css('background-position', '0% ' + a + 'px, 0% ' + b + 'px, 0% ' + c + 'px, 0% ' + d + 'px');
        
     
        }
       
       /* if (getScrollTop()==0)// Adjusts the positions values and resets them to zero during a scroll up event
        {
            a=parseFloat(0);
            b=parseFloat(0);
            c=parseFloat(0);
            d=parseFloat(0);

          $(document.body).css('background-position', '0% 0px, 0% 0px, 0% 0px, 0% 0px');
        
        }*/
      scrollTop = $(this).scrollTop();
    });
});


function getScrollTop(){ //  Verifies the total sum in pixels of the whole page
 
    if(typeof pageYOffset!= 'undefined'){
        // Most browsers
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}