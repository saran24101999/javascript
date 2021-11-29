function funcall()
                    {
                        var name= document.getElementById("var");
                        var fname= document.getElementById("var1");   
                        var mnum= document.getElementById("var2");
                       var vary=1;
                         

                      switch(vary)
                      {
                        case 1:  
                                 if(name.value.trim()=="" && fname.value.trim()=="")
                                  {
                                  name.style.border="solid 3px red";
                                  fname.style.border="solid 3px red";
          
                                    alert("empty space will be not allowed");
                                     return false;
                                 }
                          
                                 else{
                                    fname.style.border="solid 3px green";
                                    }
                        case 2:
                                {
                                    if(mnum.value.trim()=="")
                                    {
                                        mnum.style.border="solid 3px red";
                                        alert("space will be not allowed111111");
                                        return false;
                                        
                                    }else{
                                        
                                        alert("space will  allowed");
                                    }
                                }}}
                        
                        
                        
    
                       
                    