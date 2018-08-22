
$("#submitBtn").click()

r = []
base=-1
danxuanIndex=0
function charToNumber(text){
    if (text == "A"||text == "E") {
        value = 1
        return value
    } else if (text == "B"||text == "F") {
        value = 2
        
        return value
    } else if (text == "C"||text == "G") {
        value = 3
        return value
    } else if (text == "D"||text == "H") {
        value = 4
        return value
    }
    return -1
}
function charToNumberMulti(text){
    if (text == "A") {
        value = 1
        return value
    } else if (text == "B") {
        value = 2
        
        return value
    } else if (text == "C") {
        value = 3
        return value
    } else if (text == "D") {
        value = 4
        return value
    }else if (text == "E") {
        value = 5
        return value
    }

    return -1
}
function getDaan(text) {
    $(".tdTitle:contains('正确答案')+td").each(function (index, item) {
        let text = $(item).text()
        var value=-1
        console.log(text)
        if(text.indexOf("，")!=-1){
            // 多选
            txetsplit=text.split("，")
            var textArr=txetsplit.map((item,sindex)=>{
                var pos=charToNumberMulti(item)
                return pos + index * 4
            })
            r.push(textArr)
            return   
        }else{
            // 单选
            value = charToNumber(text)
            if (value != -1) {
                r.push(value + index * 4)
                return
            }
        }
        if(base==-1){
            base=(index)*4
        }
        if (text == "正确") {
            value = 1
        }
        if (text == "错误") {
            value = 2
        }
        console.log(text,value,base,danxuanIndex * 2)
        r.push(value + base + danxuanIndex * 2)
        danxuanIndex++
    })
    console.log(r)
    localStorage.setItem('daan', JSON.stringify(r))
}
getDaan()



// 填充答案
function tianchong() {
    var daan = JSON.parse(localStorage.getItem('daan'))
    daan.forEach((item, index) => {
        if(typeof item =='object'){
            item.forEach((sitem, sindex) => {
                $(".dx_style").eq(sitem - 1).prop('checked', true)
            })
        }else{
            $(".dx_style").eq(item - 1).prop('checked', true)
        }
    })
    console.log(daan)
}
tianchong()

// 主观题
function zhuguanti(){
    var daan = []
    var s = $(".tdTitle:contains('正确答案')+td")
    s.each((index, item) => {
        daan.push($(item).text())
    })
    localStorage.setItem('daan', JSON.stringify(r))
}

function setZhuguanti(){
    var daan = JSON.parse(localStorage.getItem('daan'))
    $("iframe").each(function (index, item) {
        $(item).contents().find("#eWebEditor").contents().find("body p").html(daan[index])
    })
}




