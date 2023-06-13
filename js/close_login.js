var close_time;   // 시간 정보
var close_time2 =59;
var start_timeS = 0;
var start_timeM = 0;
var str1 = "로그아웃까지 남은 시간은 ";
var str2 = "초 입니다";
var str3 = "로그인 시간 : ";
var str4 = "분 ";
var str5 = "초 (5분 후 종료)";

function setTime(){
   clearTimeout(close_time);
   setTimeout("show_time();", 240000);	//270초 : 4분 30초 //240초 : 4분
   setTimeout("show_time2();", 0);
   setTimeout("show_time3();", 0);
   close_time = setTimeout("close_login()", 300000);	//300초 : 5분
   


}

function show_time(){
   let divClock=document.getElementById('logoutClock');
   divClock.innerText = str1 + close_time2 + str2;
   close_time2--;
   setTimeout(show_time,1000);
}

function show_time2(){
   let divClock=document.getElementById('loginTime1');
   divClock.innerText = str3 + start_timeM + str4;
   start_timeM++;
   setTimeout(show_time2,60000);
}

function show_time3(){
   let divClock=document.getElementById('loginTime2');
   divClock.innerText = start_timeS + str5;
   start_timeS++;
   if (start_timeS >= 60){
      start_timeS = 0;
   }
   setTimeout(show_time3,1000);
}



function close_login(){
   logout();
}


function addJavascript(jsname){
   var th = document.getElementsByTagName('head')[0];
   var s = document.createElement('script');
   s.setAttribute('type','text/javascript');
   s.setAttribute('src',jsname);
   th.appendChild(s);
}

//addJavascript('/js/security.js');
//addJavascript('/js/cookie.js');
//addJavascript('/js/session.js');
//addJavascript('/js/login_cookie_count.js');
addJavascript('/js/login.js');