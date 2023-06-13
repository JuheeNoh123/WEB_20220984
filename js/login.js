function login(){
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
	//let join_email = document.querySelector("#emailAddress")
	let get_email = getCookie("join_email");
	console.log(get_email);
	form.action = "../index_login.html";
	form.method="get";
	setCookie("id", id.value, 1); // 1일 저장
	
	if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }
	
	let rst = login_check();
	login_count();
	if(id.value.length === 0 || password.value.length === 0){
		alert("아이디와 비밀번호를 모두 입력해주세요.");
	}
	
	else if(id.value != get_email){
		alert("회원정보가 없습니다. 회원가입을 해주세요");
		location.href = 'join.html';
	}
	else if(rst == true){
		session_set();
		form.submit();
	}
	else{
		return;
	}
	
	
	
	
	
	
}
function logout(){
	session_del(); // 세션 삭제
	deleteCookie("login_cnt");
	location.href='../index.html';
	
}

function get_id(){
	if(true){
        decrypt_text();
    }
    else{
		var getParameters = function(paramName){ // 변수 = 함수(이름)
			var returnValue; // 리턴값을 위한 변수 선언
			var url = location.href; // 현재 접속 중인 주소 정보 저장
			var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
			for(var i = 0; i < parameters.length; i++) { 
				var varName = parameters[i].split('=')[0];

				if (varName.toUpperCase() == paramName.toUpperCase()) {
					returnValue = parameters[i].split('=')[1];
					return decodeURIComponent(returnValue);
					// 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
				}
			} // 2중 for문 끝
		}
		alert(getParameters("id") + '님 반갑습니다!'); // 메시지 창 출력
	}
	

	
};






function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    
    if(get_id) { 
    id.value = get_id; 
    check.checked = true; 
    }
	
	session_check();
}

function login_check(){
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	
	var regexr1 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
	var regexr2 = /^[A-Za-z0-9]{4,10}$/;
	
	let rst1 = regexr1.test(id.value);
	let rst2 = regexr2.test(password.value);
	
	if(rst1 != true){
		alert("이메일 형식을 확인해주세요.");
	}
	
	else if(rst2 != true){
		alert("비밀번호 오류 : 알파벳 대소문자 혹은 숫자로 시작하고 끝나며, 4-10자리인지 확인해주세요.");
	}
	else{
		return true;
	}
}

function login_count(){
	
	
	var glc = getloginCookie("login_cnt");	//이게 쿠키값 받아온거
	console.log(typeof(glc));
	console.log(glc);
	
	if(isNaN(glc)){
		console.log("hi")
		var cnt = Number(1);
		setloginCookie("login_cnt",cnt);
	}
	
	else if(typeof(glc) == "undefined"){
		console.log("hi")
		var cnt = Number(1);
		setloginCookie("login_cnt",cnt);
	}
	
	else if(glc){
		cnt = Number(glc);	//여기서 받아온 쿠키값 다시 형변환 시킨거
		
	}
	else if(cnt>3){	//여기서 조건문 실행
		console.log("hihi")
		alert("로그인 가능 횟수 초과");
		btnActive();
	}
	else{
		return;
	}
}

function btnActive(){
	const target = document.getElementById('target_btn');
	target.disabled = true;
}

function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수