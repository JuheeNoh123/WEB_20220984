function setCookie(name, value, expiredays){
	var date = new Date();
	date.setDate(date.getDate() + expiredays);
	document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "SameSite=None; Secure";        
}

function getCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                
                if (cookie_name[0] == "id") {
                    return cookie_name[1];
                }
            }
        }
        return ;
}

function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}


function setloginCookie(name, value){
	//var date = new Date();
	//date.setDate(date.getDate() + expiredays);
	document.cookie = escape(name) + "=" + escape(value);        
}

function getloginCookie(name) {
        var cookie = document.cookie;
        console.log("쿠키를 요청합니다.");
        if (cookie != "") {
            var cookie_array = cookie.split("; ");
            for ( var index in cookie_array) {
                var cookie_name = cookie_array[index].split("=");
                console.log(cookie_name);
                if (cookie_name[0] == "login_cnt") {
					let cookievalue = Number(cookie_name[1])+1;
					console.log(cookievalue);
					document.cookie = cookie_name[0] + "=" + cookievalue;
					
                    return cookievalue;
                }
            }
        }
        return ;
}

function logindeletecookie(cookiename){
	document.cookie = escape(cookieName) + "= ";
}