window.onload=function(){
		var run1 = document.getElementById("run1")	
		run1.onclick = function(event){
			var t1 = document.getElementById("t1")
			// checked_exec(t1.value)
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {action: "checked",str:t1.value}, function(response) {});  
            });
			event.preventDefault()
		}
	}
