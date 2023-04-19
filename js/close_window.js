var close_time;	//시간정보
var close_time2 = 10;	//10초설정

clearTimeout(close_time);	//재호출 정지
close_time = setTimeout("close_window()",10000);	// 1/1000초 지정, 바로시작
show_time();

function show_time(){
	let divClock = document.getElementById('Time');
	divClock.innerText = close_time2;	//10초 삽입 시작
	close_time2--;	//1초씩 감소
	setTimeout(show_time,1000);	//1초마다 갱신
}

function close_window(){	//함수 정의
	window.close();	//윈도우 닫기
}

window.onload=showWindow;