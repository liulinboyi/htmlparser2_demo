const htmlparser2 = require("htmlparser2");
const render = require("dom-serializer").default;

const dom = htmlparser2.parseDocument(`<div id="out" style="display:block;font-size: 20px;">
<div class=name>哈哈</div>
</div>`);

console.log(dom)

// 选择节点
let ele = htmlparser2.DomUtils.getElementById("out", dom.children)

console.log(ele)

// 节点style属性
let styles = ele.attribs.style.split(";").filter(item => item)

console.log(styles)

// style样式
let stylesStruct = {}

for (let i = 0; i < styles.length; i++) {
    let item = styles[i].split(":")
    let attr = item[0]
    let value = item[1]
    stylesStruct[attr] = value
}


console.log(stylesStruct)

// 修改style样式
stylesStruct['display'] = "none"

let newStyle = ""

// 拼接修改后的样式
for (let attr in stylesStruct) {
    let item = [
        attr, stylesStruct[attr]
    ].join(":")
    newStyle += `${item};`
}

// 还原修改后的样式
ele.attribs.style = newStyle

console.log(dom)

// 渲染为HTML文本
let ss = render(dom)

console.log(ss)
