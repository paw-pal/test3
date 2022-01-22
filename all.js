data = [
    {
        id: 1,
        content: "小明"
    },
    {
        id: 2,
        content: "卡斯柏"
    }
]

//渲染
const app = document.querySelector('#app ul');
function render() {
    let str = '';
    data.forEach(function (item) {

        str += `<li>${item.content}<button type="button" class="btnsByRemove" data-remove="${item.id}">刪除</button></li>`
    })
    app.innerHTML = str;

    //刪除 方法2
    const remove = document.querySelectorAll('.btnsByRemove');
    remove.forEach(function(item){
        item.addEventListener('click',function(e){
            // console.log(e.target.dataset.remove);
            //將字串轉換成數值
            const id = Number.parseInt(e.target.dataset.remove);
            // console.log(id);
            removeItem(id);
        })
    })
    
    //有複數.btnsByRemove 用querySelector 只會抓到畫面中第一個項目 詳細可以去看JS全攻略影音-querySelecotrAll章節
    // const buttonByRemove = document.querySelector('.btnsByRemove');
    // buttonByRemove.addEventListener('click',function(){
    //     alert("123");
    // })

}
render();

//刪除 方法1 js全攻略-代辦清單作法 監聽事件綁定在已經存在HTML中的ul 再判斷class
// app.addEventListener('click',function(e){
//     // console.log(e.target);
//     if(e.target.getAttribute('class')!=='btnsByRemove'){
//         // alert("按錯");
//         return;
//     }
    
//     if(e.target.getAttribute('class')==='btnsByRemove'){
//         let remove = e.target.getAttribute('data-remove');
//         removeItem(remove);
//         render();
//     }
// })


//增加
let num = data.length;
// console.log(num);
function addItem(content) {
    num++;
    data.push({
        id: num,
        content
    })
    // console.log(data);
    render();
}

const buttonByAdd = document.querySelector('#buttonByAdd');
const inputByAdd = document.querySelector('#inputByAdd');
buttonByAdd.addEventListener('click', function () {
    if (inputByAdd.value == '') {
        alert('請填資訊');
    }
    addItem(inputByAdd.value);
    render();
    inputByAdd.value = '';
});

inputByAdd.addEventListener('keypress',function(e){
   
    if(e.key==='Enter'){
        if(inputByAdd.value==''){
            alert('請填資訊');
        }
        addItem(inputByAdd.value);
        inputByAdd.value='';
    }
})


// addItem('廖偉傑');
render();
// 刪除
function removeItem(id) {
    const removeIndex = data.findIndex(function (item) {
        return item.id == id;
    })
    // console.log(removeIndex);
    data.splice(removeIndex, 1);
    // console.log('刪除後', data);
    render();
}
// addItem('廖偉傑');
// removeItem(3);
// render();



