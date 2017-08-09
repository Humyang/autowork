
// var comble2 = jiandati
// $("iframe").each(function(index,item){
// $(item).contents().find("#eWebEditor").contents().find("body p").text(comble2[index])
// })
function process(str){
	str = str.replace(/解题方案：\n(.*)\n评分标准：[\n]?.*/g,'`,`')
	str = str.replace(/[0-9]. \n参考答案：/g,'')
	str = "[`"+str+"`]"
	return str
}
setTimeout(function() {
    chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

    if(msg.action === "textarea"){
        var comble = eval(process(msg.str))
        $("iframe").each(function(index,item){
			$(item).contents().find("#eWebEditor").contents().find("body p").text(comble[index])
		})
    }
})
}, 1000);