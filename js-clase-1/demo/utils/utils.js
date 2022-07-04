	function showMessage(nombre, calificativo, cantidad) {
			return `El ${nombre} es un animal terrestre y es ${calificativo},tiene ${cantidad} patas`;
		}

      function equality(a,b){
        console.log("(a == b)    ->",a==b)
        console.log("(a === b)   ->",a===b)
        console.log("(a != b)    ->",a!=b)
        console.log("(a !== b)   ->",a!==b)
      }
      function inequality(a,c){
         console.log("(a < c)    ->",a<c)
         console.log("(a <= c)   ->",a<=c)
         console.log("(a > c)    ->",a>c)
         console.log("(a >= c)   ->", a >= c);
      }
     
module.exports = { showMessage, equality, inequality };