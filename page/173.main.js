"use strict";(self.webpackChunkspaclasses=self.webpackChunkspaclasses||[]).push([[173],{173:function(e,t,s){s.d(t,{default:function(){return u}});var n=s(647),l=s(684);class a extends l.A{createElement(e){this.element=document.createElement("div"),this.setCssClasses(["field__container"]),e.classNames.forEach((e=>{this.element.classList.add(e)})),this.setCallback(e.callback),this.inputElement=document.createElement("input"),this.labelElement=document.createElement("label"),this.setTextContent(e.textContent),this.element.append(this.labelElement,this.inputElement)}setValue(e){this.inputElement.value=e}setTextContent(e=""){this.labelElement.textContent=e}setCallback(e=null){"function"==typeof e&&this.element.addEventListener("keyup",(t=>e(t)))}}const i="Поле для ввода 1",c="Поле для ввода 2";class u extends n.A{constructor(e){super({tag:"section",classNames:["indexM"]}),this.state=e,this.configureView()}configureView(){let e={tag:"input",classNames:[],textContent:i,callback:e=>this.keyUPHandler(e,i)},t=new a(e);t.setValue(this.state.getField(i)),this.elementCreator.addInnerElement(t.getElement()),e={tag:"input",classNames:[],textContent:c,callback:e=>this.keyUPHandler(e,c)},t=new a(e),t.setValue(this.state.getField(c)),this.elementCreator.addInnerElement(t.getElement())}keyUPHandler(e,t){e.target instanceof HTMLInputElement&&this.state.setField(t,e.target.value)}}}}]);