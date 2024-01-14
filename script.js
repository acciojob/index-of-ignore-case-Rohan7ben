function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let k,j,i=0;
	while (i<s1.length) {
		while (s1[i]==s2[i]) {
			k++;
		j++;
			if(j==s2.length ){
				return i;
			}
			if (k==s1.length) {
				return 1;
			}
			if(s1[k]!=s2[j]){
				i++;
				k=i;
				j=0;
				
			}
			
		}
		
	}
	return -1;
	
}

// Please do not change the code below
/*const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
