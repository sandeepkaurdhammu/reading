<script>
var arr = [7, 10, 11, 12, 15];
var result = '';
for (var i = 0; i < arr.length; i++){
	if(arr[i] %2 == 1){
    	result += arr[i] + " is a prime number.\n"
    } else {
    	result += arr[i] + " is not a prime number.\n"
    }
}

alert(result);
</script>
