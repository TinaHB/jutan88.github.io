

function showValue(newValue, resultDiv) {
			document.getElementById(resultDiv).innerHTML = newValue;
			updateSum();
		}

		function updateSum() {
			var slider1val = +document.getElementById('slider1').value;
			var slider2val = +document.getElementById('slider2').value;
			var slider3val = +document.getElementById('slider3').value;
			var slider4val = +document.getElementById('slider4').value;
			var slider5val = +document.getElementById('slider5').value;
			var slider6val = +document.getElementById('slider6').value;
			var slider7val = +document.getElementById('slider7').value;
			var slider8val = +document.getElementById('slider8').value;
			
			document.getElementById('avg').innerHTML= (slider1val + slider2val + slider3val + (slider4val) + (slider5val) + (slider6val) + (slider7val) + (slider8val))/8;
			var avgval = document.getElementById('avg').innerHTML;
		}
  
		function f_color(){
				var avgval = document.getElementById('avg').value;
				avgval = document.getElementById('avg').innerHTML;  

				Number(avgval);
				//document.write(avgval);
			        // added middle part. 2020, Sep 15th. Hw.
				if (avgval>='0'&&avgval <= '98') {
					document.getElementById('myBar').style.display= "block";
					document.getElementById("demo").innerHTML = "Please Speak to Your Healthcare Team for More Information.";
				}else if(avgval>='49'&&avgval<='75'){
					document.getElementById('myBar').style.display="block";
					document.getElementById("demo").innerHTML = "You're in the middle of~ ";
				}else if(avgval>='99'){
					document.getElementById('myBar').style.display="block";
					document.getElementById("demo").innerHTML = "The Benefits Outweigh the Risks of Treatment. Can We Proceed with Booking Your Appointment?";
				}
			
			}

f_color;


// JavaScript Document
