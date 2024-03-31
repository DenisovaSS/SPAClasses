!function(){"use strict";class e{constructor(e){this.element=null,this.createElement(e)}createElement(e){this.element=document.createElement(e.tag),this.setCssClasses(e.classNames),this.setTextContent(e.textContent),this.setCallback(e.callback)}getElement(){return this.element}addInnerElement(t){t instanceof e?this.element.append(t.getElement()):this.element.append(t)}setCssClasses(e){e.map((e=>this.element.classList.add(e)))}setTextContent(e){this.element.textContent=e}setCallback(e){"function"==typeof e&&this.element.addEventListener("click",(t=>e(t)))}}class t{constructor(e){this.elementCreator=this.createView(e)}getHtmlElement(){return this.elementCreator.getElement()}createView(t){const n={tag:t.tag,classNames:t.classNames,textContent:t.textContent,callback:t.callback};return new e(n)}}class n extends t{constructor(){super({tag:"footer",classNames:["footer"],textContent:"SPA example app",callback:null})}}const s="nav-item__selected";class a extends t{constructor(e,t){super({tag:"a",classNames:["nav-item"],textContent:e.name,callback:e.callback}),this.linkElements=t,this.configureView()}setSelectedStatus(){this.linkElements.forEach((e=>e.setNotSelectedStatus())),this.elementCreator.getElement().classList.add(s)}setNotSelectedStatus(){this.elementCreator.getElement().classList.remove(s)}configureView(){this.elementCreator.getElement().addEventListener("click",this.setSelectedStatus.bind(this))}}const l={INDEX:"index",PRODUCT:"product",NOT_FOUND:"nt-found"},i="{id}",c={INDEX:"Главная",PRODUCT:"Карточки"};class r extends t{constructor(e){super({tag:"header",classNames:["header"]}),this.headerLinkElements=new Map,this.configureView(e)}configureView(t){const n=new e({tag:"nav",classNames:["nav"],textContent:"",callback:null});this.elementCreator.addInnerElement(n),Object.keys(c).forEach((e=>{const s=new a({name:c[e],callback:()=>t.navigate(l[e])},this.headerLinkElements);n.addInnerElement(s.getHtmlElement()),this.headerLinkElements.set(l[e],s)}))}setSelectedItem(e){const t=this.headerLinkElements.get(e);t instanceof a&&t.setSelectedStatus()}}class o extends t{constructor(){super({tag:"main",classNames:["main"],textContent:"",callback:null})}setContent(e){const t=e.getHtmlElement(),n=this.elementCreator.getElement();for(;n.firstElementChild;)n.firstElementChild.remove();n.append(t)}}class d{constructor(e){this.routes=e}navigate(e){const t=this.parseurl(e),n=""===t.resource?t.path:`${t.path}/${i}`,s=this.routes.find((e=>e.path===n));s?s.callback(t.resource):this.redirectToNotFoundPage()}parseurl(e){const t={},n=e.split("/");return[t.path="",t.resource=""]=n,t}redirectToNotFoundPage(){const e=this.routes.find((e=>e.path===l.NOT_FOUND));e&&this.navigate(e.path)}}class m extends e{createElement(e){this.element=document.createElement("div"),this.setCssClasses(["field__container"]),e.classNames.forEach((e=>{this.element.classList.add(e)})),this.setCallback(e.callback),this.inputElement=document.createElement("input"),this.labelElement=document.createElement("label"),this.setTextContent(e.textContent),this.element.append(this.labelElement,this.inputElement)}setTextContent(e){this.element.textContent=e}setCallback(e){"function"==typeof e&&this.element.addEventListener("keyup",(t=>e(t)))}}class h extends t{constructor(){super({tag:"section",classNames:["indexM"]}),this.firstField="",this.secondField="",this.configureView()}configureView(){let e={tag:"input",classNames:[],textContent:"Поле для ввода 1",callback:e=>this.keyUPHandler(e,"firstinput")},t=new m(e);this.elementCreator.addInnerElement(t.getElement()),e={tag:"input",classNames:[],textContent:"Поле для ввода 2",callback:e=>this.keyUPHandler(e,"secondinput")},t=new m(e),this.elementCreator.addInnerElement(t.getElement())}keyUPHandler(e,t){e.target instanceof HTMLInputElement&&(this[t]=e.target.value)}}var u=[{id:"1",name:"Первая карточка",description:"Полное и очень длинное описание для карточки."},{id:"2",name:"Вторая карточка",description:"Полное и очень длинное описание для карточки. Это вторая карточка."},{id:"3",name:"Третья карточка",description:"Полное и очень длинное описание для третьей карточки."},{id:"4",name:"Четвертая карточка",description:"Полное и очень длинное описание для четвертой карточки."},{id:"5",name:"Пятая карточка",description:"Полное и очень длинное описание для пятой карточки."},{id:"6",name:"Шестая карточка",description:"Полное и очень длинное описание для шестой карточки."},{id:"7",name:"Седьмая карточка",description:"Полное и очень длинное описание для седьмой карточки."}];class C extends t{constructor(e,t){super({tag:"article",classNames:["card"]}),this.card=e,this.router=t,this.configureView()}configureView(){const t={tag:"label",classNames:["card__field"],textContent:this.card.name,callback:null},n=new e(t);this.elementCreator.addInnerElement(n);const s={tag:"button",classNames:["card__button"],textContent:"Подробнее...",callback:this.buttonClickHandler.bind(this,`${l.PRODUCT}/${this.card.id}`)},a=new e(s);this.elementCreator.addInnerElement(a)}buttonClickHandler(e){this.router.navigate(e)}getCardInfo(){return this.card}}const E="card__field";class g extends C{configureView(){this.elementCreator.setCssClasses(["card__full"]);let t={tag:"label",classNames:[E],textContent:this.card.name,callback:null},n=new e(t);this.elementCreator.addInnerElement(n),t={tag:"label",classNames:[E],textContent:this.card.description,callback:null},n=new e(t),this.elementCreator.addInnerElement(n);const s={tag:"button",classNames:["card__button"],textContent:"Назад...",callback:this.buttonClickHandler.bind(this,`${l.PRODUCT}`)},a=new e(s);this.elementCreator.addInnerElement(a)}}class p extends t{constructor(e,t=""){super({tag:"section",classNames:["product"]}),t?this.showLargeCard(e,t):this.showAllCard(e)}showAllCard(e){u.forEach((t=>{const n=new C(t,e);this.elementCreator.addInnerElement(n.getHtmlElement())}))}showLargeCard(e,t){const n=u.find((e=>e.id===t)),s=new g(n,e);this.elementCreator.addInnerElement(s.getHtmlElement())}}class b extends t{constructor(){super({tag:"section",classNames:["not-found"]}),this.configureView()}configureView(){this.elementCreator.setTextContent("Error. Page not found")}}const k=new class{constructor(){this.header=null,this.main=null;const e=this.createRoutes();this.router=new d(e),this.createView()}createView(){this.header=new r(this.router),this.main=new o;const e=new n;document.body.append(this.header.getHtmlElement(),this.main.getHtmlElement(),e.getHtmlElement())}createRoutes(){return[{path:"",callback:()=>{this.setContent(l.INDEX,new h)}},{path:`${l.INDEX}`,callback:()=>{this.setContent(l.INDEX,new h)}},{path:`${l.PRODUCT}/${i}`,callback:e=>{this.setContent(l.PRODUCT,new p(this.router,e))}},{path:`${l.PRODUCT}`,callback:()=>{this.setContent(l.PRODUCT,new p(this.router,""))}},{path:`${l.NOT_FOUND}`,callback:()=>{this.setContent(l.NOT_FOUND,new b)}}]}setContent(e,t){this.header.setSelectedItem(e),this.main.setContent(t)}};console.log(k)}();