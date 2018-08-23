// window.onload=function(){
// 	// alert(123)
// 	var run1 = document.getElementById("run1")	
// 	run1.onclick = function(event){
// 		var t1 = document.getElementById("t1")
// 		sendMsg({action: "checked",str:t1.value})
// 		event.preventDefault()
// 	}
// 	var run2 = document.getElementById("run2")	
// 	run2.onclick = function(event){
// 		var t2 = document.getElementById("t2")
// 		sendMsg({action: "textarea",str:t2.value})
// 		event.preventDefault()
// 	}
// }
function sendMsg(obj){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,obj , function(response) {});  
    });
}
$(function(){
	$("#getAns1").click(function(){
		sendMsg({action: "getdaan1"})
	})
	$("#setAns1").click(function(){
		sendMsg({action: "setdaan1"})
	})
	$("#getAns2").click(function(){
		sendMsg({action: "getdaan2"})
	})
	$("#setAns2").click(function(){
		sendMsg({action: "setdaan2"})
	})

	$("#getAns3").click(function(){
		sendMsg({action: "getdaan3"})
	})
	$("#setAns3").click(function(){
		sendMsg({action: "setdaan3"})
	})
	$("#submit").click(function(){
		sendMsg({action:"submit"})
	})
})

setTimeout(() => {
	console.log(123)
	chrome.runtime.onMessageExternal.addListener(
		function(request, sender, sendResponse) {
			alert('收到')
		//   if (sender.url == blocklistedWebsite)
		// 	return;  // don't allow this web page access
		//   if (request.openUrlInEditor)
		// 	openUrl(request.openUrlInEditor);
		});
}, 1000);