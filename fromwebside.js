// $("ul input[checked]").each(function(index,item){
// 	console.log($("#P_e40b5a12-05e4-48a7-a8d6-8d8cb002dded input").index($(item)))
// })

var result = JSON.parse(localStorage.getItem('result')) || []
$("ul").each(function(index,item){
	var answer = []
	var id = ""
	var ulthis = this
	$(ulthis).find("input[checked]").each(function(index,item){
		answer.push($(ulthis).find("input").index($(this)))
		// console.log($(ulthis).find("input").index($(this)))
	})
	console.log(answer)
	id = $(ulthis).parent(".word_con02").attr("id")

	var res = {
		answer:answer,
		id:id
	}
	// result = []
	result.push(res)
})
localStorage.setItem('result',JSON.stringify(result))

// 解析
var result = JSON.parse(localStorage.getItem('result')) || []
for (var i = result.length - 1; i >= 0; i--) {
	for (var j = result[i].length - 1; j >= 0; j--) {
		$("#"+result[i].id+" input").eq(result[i].answer[j]).attr('checked',true)
	}
}


// 填空题
var tiankong = JSON.parse(localStorage.getItem(tiankong)) || []
$("iframe").each(function(index,item){
	var id = $(item).parents(".word_con02").attr("id")
	var text = $(item).contents().find("#eWebEditor").contents().find("body p").text()
	console.log(id,text)
	tiankong.push({id:id,text:text})
})
localStorage.setItem("tiankong",JSON.stringify(tiankong))

// 解析
var tiankong = JSON.parse(localStorage.getItem(tiankong)) || []
for (var i = tiankong.length - 1; i >= 0; i--) {
	$("#"+tiankong[i].id+" iframe").contents().find("#eWebEditor").contents().find("body p").text(tiankong[i].text)
}