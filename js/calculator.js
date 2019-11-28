function getOption() { 
		var	select1Element = document.querySelector('#select1'); 		
	var output1 =select1Element.options[select1Element.selectedIndex].value; 

        var select2Element = document.querySelector('#select2'); 		
		var output2 =select2Element.options[select2Element.selectedIndex].value; 

     var select3Element = document.querySelector('#select3'); 		
		var output3 =select3Element.options[select3Element.selectedIndex].value; 


          if(output1 =="TX" && output2 =="N0" && output3 =="M0"){ 
              document.querySelector('.output').textContent = "OCCULT CARCINOMA"; 
          }else if(output1 =="Tis" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "0"; 
          }else if(output1 =="T1mi" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IA1"; 
          }else if(output1 =="T1a" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IA1"; 
          }else if(output1 =="T1b" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IA2"; 
          }else if(output1 =="T1c" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IA3"; 
          }else if(output1 =="T2a" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IB"; 
          }else if(output1 =="T2b" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIA"; 
          }else if(output1 =="T1a" && output2 =="N1" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIB"; 
          }else if(output1 =="T1b" && output2 =="N1" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIB"; 
          }else if(output1 =="T1c" && output2 =="N1" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIB"; 
          }else if(output1 =="T2a" && output2 =="N1" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIB"; 
          }else if(output1 =="T2b" && output2 =="N1" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIB"; 
          } else if(output1 =="T3" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIB"; 
          }else if(output1 =="T1a" && output2 =="N2" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIA"; 
          }else if(output1 =="T1b" && output2 =="N2" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIA"; 
          }else if(output1 =="T1c" && output2 =="N2" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIA"; 
          }
          else if(output1 =="T2a" && output2 =="N2" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIA"; 
          }
          else if(output1 =="T2b" && output2 =="N2" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIA"; 
          }
          else if(output1 =="T3" && output2 =="N1" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIA"; 
          }
          else if(output1 =="T4" && output2 =="N0" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIA"; 
          }
          else if(output1 =="T4" && output2 =="N1" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIA"; 
          }
          else if(output1 =="T1a" && output2 =="N3" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIB"; 
          }
          else if(output1 =="T1b" && output2 =="N3" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIB"; 
          }
           else if(output1 =="T1c" && output2 =="N3" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIB"; 
           }
           else if(output1 =="T2a" && output2 =="N3" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIB"; 
             }  
            else if(output1 =="T2b" && output2 =="N3" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIB"; 
          }
            else if(output1 =="T3" && output2 =="N2" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIB"; 
          }
            else if(output1 =="T4" && output2 =="N2" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIB"; 
          }
          else if( output1 =="T3" && output2 =="N3" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIC"; 
          }  
          else if(output1 =="T4" && output2 =="N3" && output3 =="M0"){ 
            document.querySelector('.output').textContent = "IIIC"; 
          }
          else if( output3 =="M1a"|| output3 =="M1b" ){ 
            document.querySelector('.output').textContent = "IVA"; 
            //|| output == "M1b"
          }else if(output3 =="M1c"){
              document.querySelector('.output').textContent = "IVB";
         }
		else {
			document.querySelector('.output').textContent = "NOT IDENTIFIED"; 
		}
          
			
		} 