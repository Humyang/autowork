
function getDaan(str){
    var Things = str.split(' ')
    var res = []
    for (var i = 0; i <Things.length; i++) {
        if(i % 2 === 0){
            // break
        }else{
        res.push(Things[i])
        }
    }
    return res
}
function checked_exec(comble){
var combleSplit = getDaan(comble)
    combleSplit.forEach(function(item,index){
        // index = 20 +index
        for (var i = 0; i<item.length; i++) {
            let trans = 0
            switch(item[i]){
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
            $($(".lx_cc_content2 .word_con02").eq(index).find('input')[trans]).prop('checked',true)
        }
    })
}
// var danxuan_str = "1. D 2. D 3. D 4. B 5. A 6. D 7. C 8. A 9. A 10. B 11. B 12. A 13. C 14. A 15. C 16. A 17. B 18. D 19. A 20. C "
// var duoxuan = ""
// var panduanti = "1. × 2. √ 3. × 4. √ 5. √ 6. √ 7. × 8. × 9. × 10. √ "
// var comble = danxuan_str.concat(duoxuan).concat(panduanti)

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if(msg.action === "checked"){
        checked_exec(msg.str)
    }
})



