window.onload=function(){
	var run1 = document.getElementById("run1")	
	run1.onclick = function(event){
		var t1 = document.getElementById("t1")
		sendMsg({action: "checked",str:t1.value})
		event.preventDefault()
	}
	var run2 = document.getElementById("run2")	
	run2.onclick = function(event){
		var t2 = document.getElementById("t2")
		sendMsg({action: "textarea",str:t2.value})
		event.preventDefault()
	}
}
function sendMsg(obj){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,obj , function(response) {});  
    });
}
