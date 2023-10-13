const reactElm ={
    type:"a",
    props:{
        href:"www.google.com",
        target:'_blank'
    },
    children:"Click me to go to this website"
}

function customRender(reactElm,root){
    const domElm = document.createElement(reactElm.type)
    domElm.innerHTML = reactElm.children
    // domElm.setAttribute("href",reactElm.props.href)
    // domElm.setAttribute("target",reactElm.props.target)
    for (const prop in reactElm.props) {
            domElm.setAttribute(prop, reactElm.props[prop])
            
        }
        root.appendChild(domElm)
    }

const root = document.getElementById("root");

customRender(reactElm,root);