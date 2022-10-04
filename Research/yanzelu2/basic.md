# Research for week 1
## JavaScript basics

- DOM：（Document object Model）
- BOM：（Browser Object Model）

## how to use DOM

```js
var div1 = document.getElementById("box1");  // a node
document.getElementsByTagName("div1")[0];    //many node so that [0](even if there are only one we must write this)
document.getElementsByClassName("hehe")[0];  //the same for className
```

## about attribute of this node
```js
<img src="images/3.jpg" class="image-box" title="hello" alt="good" id="a1">
```
for this
```js
node.getAttribute("----");//get
myNode.setAttribute("class","image3-box");//set
myNode.removeAttribute("class");
```
- value
- innerHTML
- innerText

## event
DOM0: ``relement.onclick = function () {}``
for example:
```js
<body>
<button>i am a button</button>
<script>
    var btn = document.getElementsByTagName("button")[0];
    btn.onclick = function () {
        console.log("hello");
    }
</script>
</body>
```

## REACT
**React tools：React + React-Router + Redux + Axios + Babel + Webpack**


