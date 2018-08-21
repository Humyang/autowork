function getDaan(str) {
    var Things = str.split(' ')
    var res = []
    for (var i = 0; i < Things.length; i++) {
        if (i % 2 === 0) {
            // break
        } else {
            res.push(Things[i])
        }
    }
    return res
}

function checked_exec(comble) {
    var combleSplit = getDaan(comble)
    combleSplit.forEach(function (item, index) {
        // index = 20 +index
        for (var i = 0; i < item.length; i++) {
            let trans = 0
            switch (item[i]) {
                case "A":
                    trans = 0
                    break;
                case "B":
                    trans = 1
                    break;
                case "C":
                    trans = 2
                    break;
                case "D":
                    trans = 3
                    break;
                case "E":
                    trans = 4
                    break;
                case "×":
                    trans = 1
                    break;
                case "√":
                    trans = 0
                    break;
            }
            console.log(123)
            $($(".lx_cc_content2 .word_con02").eq(index).find('input')[trans]).prop('checked', true)
        }
    })
}
// var danxuan_str = "1. D 2. D 3. D 4. B 5. A 6. D 7. C 8. A 9. A 10. B 11. B 12. A 13. C 14. A 15. C 16. A 17. B 18. D 19. A 20. C "
// var duoxuan = ""
// var panduanti = "1. × 2. √ 3. × 4. √ 5. √ 6. √ 7. × 8. × 9. × 10. √ "
// var comble = danxuan_str.concat(duoxuan).concat(panduanti)
// alert(123)

// chrome.runtime.onConnect.addListener(function(port) {
//   var tab = port.sender.tab;

//   // This will get called by the content script we execute in
//   // the tab as a result of the user pressing the browser action.
//   port.onMessage.addListener(function(info) {
//     alert(12333)
//     // clock_.start(info.t)
//   });
// });
setTimeout(function () {
    chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
        if (msg.action === "checked") {
            alert(msg.str)
            checked_exec(msg.str)
        }
        if (msg.action === "getdaan1") {
            // alert(msg.str)
            // checked_exec(msg.str)
            getDaan()
        }
        if (msg.action === "setdaan1") {
            // alert(msg.str)
            // checked_exec(msg.str)
            tianchong()
        }
        
    })

}, 1000);

function charToNumber(text){
    if (text == "A"||text == "E") {
        value = 0
        return value
    } else if (text == "B"||text == "F") {
        value = 1
        
        return value
    } else if (text == "C"||text == "G") {
        value = 2
        return value
    } else if (text == "D"||text == "H") {
        value = 3
        return value
    }
    return -1
}
function charToNumberMulti(text){
    if (text == "A") {
        value = 0
        return value
    } else if (text == "B") {
        value = 1
        
        return value
    } else if (text == "C") {
        value = 2
        return value
    } else if (text == "D") {
        value = 3
        return value
    }else if (text == "E") {
        value = 4
        return value
    }

    return -1
}
r = []
base=0
function getDaan(text) {
	r = []
	base=0
    $(".tdTitle:contains('正确答案')+td").each(function (index, item) {
        var inputLength=$(this).parents('table').parent().prev().find('input').length
        // $(".tdTitle:contains('正确答案')+td").parents('table').parent().prev()
        let text = $(item).text()
        var value=-1
        console.log(text)
        if(text.indexOf("，")!=-1){
            // 多选
            txetsplit=text.split("，")
            var textArr=txetsplit.map((item,sindex)=>{
                var pos=charToNumberMulti(item)
                return pos + base
			})
			base=base+inputLength
            r.push(textArr)
            return   
        }else{
            // 单选
            value = charToNumber(text)
            if (value != -1) {
				
				r.push(value + base)
				base=base+inputLength
                return
            }
        }
        if (text == "正确") {
            value = 0
        }
        if (text == "错误") {
            value = 1
        }
		r.push(value +base)
		base=base+inputLength
    })
    console.log(r)
    localStorage.setItem('daan', JSON.stringify(r))
}
// 填充答案
function tianchong() {
    var daan = JSON.parse(localStorage.getItem('daan'))
    daan.forEach((item, index) => {
        if(typeof item =='object'){
            item.forEach((sitem, sindex) => {
                $(".dx_style").eq(sitem).prop('checked', true)
            })
        }else{
            $(".dx_style").eq(item).prop('checked', true)
        }
    })
    console.log(daan)
}
