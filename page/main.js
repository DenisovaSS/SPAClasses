!function(){"use strict";class e{constructor(e){this.element=null,this.createElement(e)}createElement(e){this.element=document.createElement(e.tag),this.setCssClasses(e.classNames),this.setTextContent(e.textContent),this.setCallback(e.callback)}getElement(){return this.element}addInnerElement(t){t instanceof e?this.element.append(t.getElement()):this.element.append(t)}setCssClasses(e){e.map((e=>this.element.classList.add(e)))}setTextContent(e){this.element.textContent=e}setCallback(e){"function"==typeof e&&this.element.addEventListener("click",(t=>e(t)))}}class t{constructor(e){this.elementCreator=this.createView(e)}getHtmlElement(){return this.elementCreator.getElement()}createView(t){const n={tag:t.tag,classNames:t.classNames,textContent:t.textContent,callback:t.callback};return new e(n)}}class n extends t{constructor(){super({tag:"footer",classNames:["footer"],textContent:"SPA example app",callback:null})}}class s extends e{createElement(e){this.element=document.createElement("div"),this.setCssClasses(["field__container"]),e.classNames.forEach((e=>{this.element.classList.add(e)})),this.setCallback(e.callback),this.inputElement=document.createElement("input"),this.labelElement=document.createElement("label"),this.setTextContent(e.textContent),this.element.append(this.labelElement,this.inputElement)}setTextContent(e){this.element.textContent=e}setCallback(e){"function"==typeof e&&this.element.addEventListener("keyup",(t=>e(t)))}}class a extends t{constructor(){super({tag:"section",classNames:["indexM"],textContent:"",callback:null}),this.firstField="",this.secondField="",this.configureView()}configureView(){let e={tag:"input",classNames:[],textContent:"Поле для ввода 1",callback:e=>this.keyUPHandler(e,"firstinput")},t=new s(e);this.elementCreator.addInnerElement(t.getElement()),e={tag:"input",classNames:[],textContent:"Поле для ввода 2",callback:e=>this.keyUPHandler(e,"secondinput")},t=new s(e),this.elementCreator.addInnerElement(t.getElement())}keyUPHandler(e,t){e.target instanceof HTMLInputElement&&(this[t]=e.target.value)}}var l=[{id:"1",name:"Первая карточка",description:"Полное и очень длинное описание для карточки."},{id:"2",name:"Вторая карточка",description:"Полное и очень длинное описание для карточки. Это вторая карточка."},{id:"3",name:"Третья карточка",description:"Полное и очень длинное описание для третьей карточки."},{id:"4",name:"Четвертая карточка",description:"Полное и очень длинное описание для четвертой карточки."},{id:"5",name:"Пятая карточка",description:"Полное и очень длинное описание для пятой карточки."},{id:"6",name:"Шестая карточка",description:"Полное и очень длинное описание для шестой карточки."},{id:"7",name:"Седьмая карточка",description:"Полное и очень длинное описание для седьмой карточки."}];class c extends t{constructor(e){super({tag:"article",classNames:["card"]}),this.callback=null,this.card=e,this.configureView()}configureView(){const t={tag:"label",classNames:["card__field"],textContent:this.card.name,callback:null},n=new e(t),s={tag:"button",classNames:["card__button"],textContent:"Подробнее...",callback:this.buttonClickHandler.bind(this)},a=new e(s);this.elementCreator.addInnerElement(n),this.elementCreator.addInnerElement(a)}setCallback(e){"function"==typeof e&&(this.callback=e)}buttonClickHandler(){this.callback()}getCardInfo(){return this.card}}const i="card__field";class r extends c{configureView(){this.elementCreator.setCssClasses(["card__full"]);let t={tag:"label",classNames:[i],textContent:this.card.name,callback:null},n=new e(t);this.elementCreator.addInnerElement(n),t={tag:"label",classNames:[i],textContent:this.card.description,callback:null},n=new e(t),this.elementCreator.addInnerElement(n);const s={tag:"button",classNames:["card__button"],textContent:"Назад...",callback:this.buttonClickHandler.bind(this)},a=new e(s);this.elementCreator.addInnerElement(a)}}class o extends t{constructor(){super({tag:"section",classNames:["product"]}),this.showAllCard()}createSmallCardsToView(e){const t=new c(e);return t.setCallback((()=>this.showLargeCard(e))),t}createLargeCardToView(e){const t=new r(e);return t.setCallback((()=>this.showAllCard())),t}showAllCard(){this.clearView(),l.forEach((e=>{const t=this.createSmallCardsToView(e);this.elementCreator.addInnerElement(t.getHtmlElement())}))}showLargeCard(e){this.clearView();const t=this.createLargeCardToView(e);this.elementCreator.addInnerElement(t.getHtmlElement())}clearView(){const e=this.elementCreator.getElement();for(;e.firstElementChild;)e.firstElementChild.remove()}}const m="nav-item__selected";class d extends t{constructor(e,t){super({tag:"a",classNames:["nav-item"],textContent:e.name,callback:e.callback}),this.linkElements=t,this.configureView()}setSelectedStatus(){this.linkElements.forEach((e=>e.setNotSelectedStatus())),this.elementCreator.getElement().classList.add(m)}setNotSelectedStatus(){this.elementCreator.getElement().classList.remove(m)}configureView(){this.elementCreator.getElement().addEventListener("click",this.setSelectedStatus.bind(this))}}class h extends t{constructor(e){super({tag:"header",classNames:["header"]}),this.headerLinkElements=[],this.configureView(e)}configureView(t){const n=new e({tag:"nav",classNames:["nav"],textContent:"",callback:null});this.elementCreator.addInnerElement(n),this.getPages(t).forEach(((e,t)=>{const s=new d(e,this.headerLinkElements);n.addInnerElement(s.getHtmlElement()),0===t&&(e.callback(),s.setSelectedStatus()),this.headerLinkElements.push(s)})),this.elementCreator.addInnerElement(n)}getPages(e){const t=new a,n=new o;return[{name:"Главная",callback:()=>e.setContent(t)},{name:"Карточки",callback:()=>e.setContent(n)}]}}class u extends t{constructor(){super({tag:"main",classNames:["main"],textContent:"",callback:null})}setContent(e){const t=e.getHtmlElement(),n=this.elementCreator.getElement();for(;n.firstElementChild;)n.firstElementChild.remove();n.append(t)}}const C=new class{constructor(){this.createView()}createView(){const e=new u,t=new h(e),s=new n;e.setContent(new a),document.body.append(t.getHtmlElement(),e.getHtmlElement(),s.getHtmlElement())}};console.log(C)}();