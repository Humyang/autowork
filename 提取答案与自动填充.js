
$("#submitBtn").click()

r = []
base=-1
danxuanIndex=0
function getDaan() {
    $(".tdTitle:contains('正确答案')+td").each(function (index, item) {
        let text = $(item).text()
        value = -1
        if (text == "A") {
            value = 1
        } else if (text == "B") {
            value = 2
        } else if (text == "C") {
            value = 3
        } else if (text == "D") {
            value = 4
        }


        if (value != -1) {
            r.push(value + index * 4)
            return
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
    localStorage.setItem('daan', JSON.stringify(r))
}
getDaan()


// 提取答案
r=[];base=-1;danxuanIndex=0;function getDaan(){$(".tdTitle:contains('正确答案')+td").each(function(index,item){var text=$(item).text();value=-1;if(text=="A"){value=1}else{if(text=="B"){value=2}else{if(text=="C"){value=3}else{if(text=="D"){value=4}}}}if(value!=-1){r.push(value+index*4);return}if(base==-1){base=(index)*4}if(text=="正确"){value=1}if(text=="错误"){value=2}console.log(text,value,base,danxuanIndex*2);r.push(value+base+danxuanIndex*2);danxuanIndex++});localStorage.setItem("daan",JSON.stringify(r))}getDaan();


// 填充答案
function tianchong() {
    var daan = JSON.parse(localStorage.getItem('daan'))
    daan.forEach((item, index) => {
        console.log(item - 1, index)
        console.log($(".dx_style").eq(item - 1))
        $(".dx_style").eq(item - 1).prop('checked', true)
    })
}
tianchong()

// 主观题
daan = []
s = $(".tdTitle:contains('正确答案')+td")
s.each((index, item) => {
    daan.push($(item).text())
})
copy(daan)
// 
$("iframe").each(function (index, item) {
    $(item).contents().find("#eWebEditor").contents().find("body p").html(daan[index])
})



