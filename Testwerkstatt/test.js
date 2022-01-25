function solution(str){
    var result = " ";
    if (str.length >= 1){
      for (let i = str.length -1; i >= 0; i--){
        result += str[i];
      }
      return result;
    } else {
       return str;
    } 
  }


console.log(solution("hallo"));