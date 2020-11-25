<script>
var str = '(()(){}[])';
var arr = [];
for (c of str){
	if(c == '[' || c == '(' || c == '{'){
    	arr.push(c);
    } else {
    	if(c == '}' && arr[arr.length-1] == '{'){
        	arr.pop()
        }
        if(c == ')' && arr[arr.length-1] == '('){
        	arr.pop()
        }
        if(c == ']' && arr[arr.length-1] == '['){
        	arr.pop()
        }
    }
}
if(arr.length == 0){
	alert("Braces are correct!")
} else {
	alert("Please correct the braces!")
}
console.log(arr);
</script>
