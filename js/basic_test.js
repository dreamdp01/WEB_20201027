// 한줄 주석: 임시자바스크립트 파일을 생성했습니다.
//var jb ='hi';// 변수 선언 뒤에 주석처리 가능 
/* 여러줄 주석 */

/*var a=1;
var b;
b=5;

if(true){
	let c ='let 접근';
	var c_1 ='var 접근';
	console.log(c);
}
 //Error?
console.log(c_1);

let d=5;
//let d='값 재할당;//Error?
console.log(d);

const e='상수 1 접근';
//e=5;
//const f// Error
console.log(e);
*/


// search.js 가 연동이 안돼서 임시 로 만든 코드
document.getElementById("search_btn").addEventListener('clik',search_message);

function search_message(){
	alert("검색을 수행합니다!");
 
	   let search_str = document.querySelector("#search_txt"); // 변수에 저장
   document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
   console.log(search_str.value); // 콘솔에 출력

}