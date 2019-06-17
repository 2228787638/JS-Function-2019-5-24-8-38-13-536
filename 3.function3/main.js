function alphabetSort(message){
  	// wirte your code here
  	var str=message.split("").sort();
  	return str.join('');
}
alphabetSort('hello'); // should return 'ehllo'