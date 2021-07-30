const htmlparser2 = require("htmlparser2");
const render = require("dom-serializer").default;
const fs = require('fs');
const path = require('path');
require('./utils/JSON.js')

const fra = `<div id="out" style="display:block;font-size: 20px;">
<div class=name>
哈哈
</div>
</div>`

const fra1 = `<script>
Array.prototype.flat && Array.prototype.includes || document.write(
    '<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.flat%2Ces6"><\/script>')
</script>
<script>

</script>
<div>

</div>`

const fra2 = `<div class="mas_con con clearfix">
<a href="https://blog.csdn.net/nokiaguy" target="_blank"
    data-report-click='{"mod":"popu_472","dest":"https://blog.csdn.net/nokiaguy"}'>
    <p class="text oneline">
        李宁，东北大学计算机专业硕士，超过20年软件开发和培训经验，UnityMarvel创始人，CSDN学院高级讲师，企业内训讲师，IT畅销书作者。曾出版超过30本IT畅销书，培训过数以千计的企业学员，制作做数千小时的视频课程。代表作包括《Python从菜鸟到高手》、《Python爬虫技术：深入理解原理...
    </p>
    </p>
</a>
</div>`

const fra3 = `<div>
<br />
哈哈哈哈
<br />
</div>`

const fra4 = `        <ul id="nav-access" class="a11y-nav">
<li><a id="skip-main" href="#content">Skip to main content</a></li>
<li><a id="skip-search" href="#main-q">Skip to search</a></li>
<li><a id="skip-select-language" href="#select-language">Skip to select language</a></li>
</ul>`

let code = fs.readFileSync(path.resolve(__dirname, `./demo/demo3.html`), {encoding: 'utf-8'});

console.time("test")
const dom = htmlparser2.parseDocument(code);
console.timeEnd("test")
console.log(dom)
// let out = {
//     type: dom.type,
//     children: []
// }

// children
//     name data
// type tag text
// let cur = dom.children
// let o = out.children
// while (cur) {
//     let child = cur
//     for (let item of child) {
//         if (item.type === "tag") {
//             o.push({name: item.name, type: item.type})
//         } else if (item.type === "text") {
//             o.push({data: item.data, type: item.type})
//         }
//     }
//     cur = child.children
//     o.children = []
// }

// let copy = {}

// let out = []
// let stack = [dom]

// let cur = stack.shift()
// while (cur) {
//     console.log(cur)
//     if (cur.type === "tag") {
//         out.push({name: cur.name, type: cur.type})
//     } else if (cur.type === "text") {
//         out.push({data: cur.data, type: cur.type})
//     } else if (cur.type === "root") {
//         out.push({type: cur.type})
//     }
//     if (cur.children) {
//         stack.push(... cur.children)
//     }
//     cur = stack.shift()
// }

// fs.writeFileSync(path.resolve(__dirname, "./demo.html.json"), stringify(out))

// console.log(dom)

// // 选择节点
// let ele = htmlparser2.DomUtils.getElementById("out", dom.children)

// console.log(ele)

// // 节点style属性
// let styles = ele.attribs.style.split(";").filter(item => item)

// console.log(styles)

// // style样式
// let stylesStruct = {}

// for (let i = 0; i < styles.length; i++) {
//     let item = styles[i].split(":")
//     let attr = item[0]
//     let value = item[1]
//     stylesStruct[attr] = value
// }


// console.log(stylesStruct)

// // 修改style样式
// stylesStruct['display'] = "none"

// let newStyle = ""

// // 拼接修改后的样式
// for (let attr in stylesStruct) {
//     let item = [
//         attr, stylesStruct[attr]
//     ].join(":")
//     newStyle += `${item};`
// }

// // 还原修改后的样式
// ele.attribs.style = newStyle

// console.log(dom)

// // 渲染为HTML文本
// let ss = render(dom)

// console.log(ss)
