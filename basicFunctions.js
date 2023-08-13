
        function addNumbers() {
            var firstNumber = parseFloat(document.getElementById("num1").value);
            var secondNumber = parseFloat(document.getElementById("num2").value);
            var sum = firstNumber + secondNumber;
            
            alert("The sum is: " + sum);    
        }
        

 		function subNumbers() {
            var thirdNumber = parseFloat(document.getElementById("num3").value);
            var fourthNumber = parseFloat(document.getElementById("num4").value);
            var sub = thirdNumber - fourthNumber;
            
            alert("The sub is: " + sub);    
        }
        
   
		function mealCost() {
            var Appcost = parseFloat(document.getElementById("appcost").value);
            var Entrecost = parseFloat(document.getElementById("entrecost").value);
			var Drinkcost = parseFloat(document.getElementById("drinkcost").value);
			var Tip = parseFloat(document.getElementById("tipcost").value);
			var cost1 = Tip / 100;
			var cost2 = Appcost + Entrecost + Drinkcost;
			var cost3 = cost2 * cost1;
			var totalcost = cost2 + cost3;
            
            alert("The total is: " + totalcost);    
        }
        
		function WidgetTotal() {
            var Wcost = parseFloat(document.getElementById("wcost").value);
            var Quant = parseFloat(document.getElementById("quant").value);
            var sub = Wcost * Quant;
            
            alert("The sub is: " + sub);    
        }

		function ClearInput() {
			document.getElementById('num1').value = '';
			document.getElementById('num2').value = '';
			document.getElementById('num3').value = '';
			document.getElementById('num4').value = '';
			document.getElementById('appcost').value = '';
			document.getElementById('entrecost').value = '';
			document.getElementById('drinkcost').value = '';
			document.getElementById('tipcost').value = '';
			document.getElementById('wcost').value = '';
			document.getElementById('quant').value = '';
		}