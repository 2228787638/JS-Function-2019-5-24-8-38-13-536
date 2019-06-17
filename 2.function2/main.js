function palindrome(message){
  // wirte your code here
  //对字符串拆分数组，调用数组反转，然后拼回字符串
  	var str=message.split('').reverse().join('');
  	if(message==str){
  		return true;
  	}else{
  		return false;
  	}
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true