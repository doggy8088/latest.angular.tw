"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_api_api-list_module_ts"],{9947:($,f,a)=>{a.r(f),a.d(f,{ApiListModule:()=>d});var r=a(4666),g=a(8987),x=a(4466),_=a(6067),O=a(6562),v=a(635),t=a(2560),b=a(253),y=a(8951),S=a(9337),C=a(6403),w=a(4541);class p{constructor(i,e){this.http=i,this.logger=e,this.apiBase=C.Yp+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new b.x,this.sectionsSubject=new _.t(1),this._sections=this.sectionsSubject.pipe((0,y.R)(this.onDestroy))}get sections(){return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(i=>this.logger.log(`ApiService got API ${i.length} section(s)`))),this._sections.pipe((0,S.b)(i=>{i.forEach(e=>{e.deprecated=!!e.items&&e.items.every(s=>"deprecated"===s.stability)})}))}ngOnDestroy(){this.onDestroy.next()}fetchSections(i){const e=this.apiBase+(i||this.apiListJsonDefault);this.http.get(e).pipe((0,y.R)(this.onDestroy),(0,S.b)(()=>this.logger.log(`Got API sections from ${e}`))).subscribe({next:s=>this.sectionsSubject.next(s),error:s=>{throw this.logger.error(s),s}})}static#t=this.ɵfac=function(e){return new(e||p)(t.LFG(g.eN),t.LFG(w.Y))};static#e=this.ɵprov=t.Yz7({token:p,factory:p.ɵfac})}var A=a(5370);const I=["listBox"];function Z(n,i){1&n&&t.GkF(0)}function k(n,i){1&n&&t.GkF(0)}const L=function(n,i){return{showLabel:!1,value:n,title:i}};function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",9),t.NdJ("click",function(){const l=t.CHM(e).index,m=t.oxw(2);return t.KtG(m.select(l))}),t.YNc(1,k,1,0,"ng-container",3),t.qZA()}if(2&n){const e=i.$implicit,s=i.index,o=t.oxw(2),l=t.MAs(6);t.ekj("selected",e===o.selected)("current",o.currentOptionIdx===s),t.Q6J("id",o.listBoxId+"-option-"+s),t.uIk("aria-selected",e===o.selected),t.xp6(1),t.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",t.WLB(8,L,e.value,e.title))}}function Q(n,i){if(1&n&&(t.TgZ(0,"ul",6,7),t.YNc(2,J,2,11,"li",8),t.qZA()),2&n){const e=t.oxw();t.Q6J("id",e.listBoxId),t.xp6(2),t.Q6J("ngForOf",e.options)}}function F(n,i){if(1&n&&(t.TgZ(0,"span")(1,"strong"),t._uU(2),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Oqu(e.label)}}function B(n,i){if(1&n&&t._UZ(0,"span"),2&n){const e=t.oxw().value;t.Gre("symbol ",e,"")}}function M(n,i){if(1&n&&(t.YNc(0,F,3,1,"span",10),t.YNc(1,B,1,3,"span",11),t.TgZ(2,"span"),t._uU(3),t.qZA()),2&n){const e=i.showLabel,s=i.title,o=t.oxw();t.Q6J("ngIf",e),t.xp6(1),t.Q6J("ngIf",o.showSymbol),t.xp6(2),t.Oqu(s)}}const N=function(n,i){return{showLabel:!0,value:n,title:i}};class u{constructor(i){this.hostElement=i,this.change=new t.vpe,this.optionsToggled=new t.vpe,this.showSymbol=!1,this.label="",this._showOptions=!1,this.listBoxId="aio-select-list-box-"+u.instancesCounter++,this.currentOptionIdx=0}static#t=this.instancesCounter=0;get showOptions(){return this._showOptions}set showOptions(i){this.disabled||(this.showOptions!==i&&this.optionsToggled.emit(i),this._showOptions=i)}ngOnInit(){this.label=this.label||""}toggleOptions(){this.showOptions=!this.showOptions}hideOptions(){this.showOptions=!1}select(i){const e=this.options[i];this.selected=e,this.change.emit({option:e,index:i}),this.hideOptions()}onClick(i){this.hostElement.nativeElement.contains(i)||this.hideOptions()}handleKeydown(i){const e=s=>{if(this.showOptions)s();else{this.showOptions=!0;const o=this.options&&this.selected?this.options.indexOf(this.selected):-1;this.currentOptionIdx=o>0?o:0}};switch(i.key){case"ArrowDown":e(()=>this.currentOptionIdx=Math.min(this.currentOptionIdx+1,(this.options?.length??0)-1));break;case"ArrowUp":e(()=>this.currentOptionIdx=Math.max(this.currentOptionIdx-1,0));break;case"Escape":this.hideOptions();break;case"Tab":this.showOptions&&this.select(this.currentOptionIdx);break;case"Enter":case"Space":case" ":e(()=>this.select(this.currentOptionIdx))}"Tab"!==i.key&&i.preventDefault()}static#e=this.ɵfac=function(e){return new(e||u)(t.Y36(t.SBq))};static#i=this.ɵcmp=t.Xpm({type:u,selectors:[["aio-select"]],viewQuery:function(e,s){if(1&e&&t.Gf(I,5,t.SBq),2&e){let o;t.iGM(o=t.CRH())&&(s.listBox=o.first)}},hostBindings:function(e,s){1&e&&t.NdJ("click",function(l){return s.onClick(l.target)},!1,t.evT)},inputs:{selected:"selected",options:"options",showSymbol:"showSymbol",label:"label",disabled:"disabled"},outputs:{change:"change",optionsToggled:"optionsToggled"},decls:7,vars:12,consts:[[1,"form-select-menu"],["role","combobox","aria-haspopup","listbox","tabindex","0",1,"form-select-button",3,"click","keydown"],["aria-hidden","true"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","form-select-dropdown","role","listbox","tabIndex","-1",3,"id",4,"ngIf"],["optionTemplate",""],["role","listbox","tabIndex","-1",1,"form-select-dropdown",3,"id"],["listBox",""],["role","option",3,"selected","current","id","click",4,"ngFor","ngForOf"],["role","option",3,"id","click"],[4,"ngIf"],[3,"class",4,"ngIf"]],template:function(e,s){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return s.toggleOptions()})("keydown",function(l){return s.handleKeydown(l)}),t.TgZ(2,"div",2),t.YNc(3,Z,1,0,"ng-container",3),t.qZA()(),t.YNc(4,Q,3,2,"ul",4),t.qZA(),t.YNc(5,M,4,3,"ng-template",null,5,t.W1O)),2&e){const o=t.MAs(6);let l;t.xp6(1),t.ekj("disabled",s.disabled),t.uIk("aria-controls",s.listBoxId)("aria-expanded",s.showOptions)("aria-activedescendant",s.currentOptionIdx>-1&&s.showOptions?s.listBoxId+"-option-"+s.currentOptionIdx:null)("aria-label",s.label+(null!==(l=null==s.selected?null:s.selected.title)&&void 0!==l?l:"")),t.xp6(2),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.WLB(9,N,null==s.selected?null:s.selected.value,null==s.selected?null:s.selected.title)),t.xp6(1),t.Q6J("ngIf",s.showOptions)}},dependencies:[r.sg,r.O5,r.tP],encapsulation:2})}const j=["filter"];function Y(n,i){if(1&n&&(t.TgZ(0,"h2")(1,"a",11),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.ekj("deprecated-api-item",e.deprecated),t.Q6J("href",e.path,t.LSH),t.xp6(1),t.Oqu(e.title)}}function E(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"li",13)(2,"a",11),t._UZ(3,"span"),t._uU(4),t.qZA()(),t.BQk()),2&n){const e=i.$implicit;t.xp6(2),t.ekj("deprecated-api-item","deprecated"===e.stability),t.Q6J("href",e.path,t.LSH),t.xp6(1),t.Gre("symbol ",e.docType,""),t.xp6(1),t.hij(" ",e.title," ")}}function q(n,i){if(1&n&&(t.TgZ(0,"ul",12),t.YNc(1,E,5,7,"ng-container",8),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.items)}}function G(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,Y,3,4,"h2",9),t.YNc(2,q,2,1,"ul",10),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.items),t.xp6(1),t.Q6J("ngIf",e.items&&e.items.length)}}class U{constructor(){this.query="",this.status="all",this.type="all"}}class h{constructor(i,e){this.apiService=i,this.locationService=e,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new _.t(1),this.searchCriteria=new U,this.types=[{value:"all",title:"全部"},{value:"class",title:"類"},{value:"const",title:"常量"},{value:"decorator",title:"裝飾器"},{value:"directive",title:"指令"},{value:"element",title:"Element"},{value:"enum",title:"列舉"},{value:"function",title:"函式"},{value:"interface",title:"介面"},{value:"package",title:"Package"},{value:"pipe",title:"管道"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"類型別名"}],this.statuses=[{value:"all",title:"全部"},{value:"stable",title:"穩定"},{value:"deprecated",title:"棄用"},{value:"security-risk",title:"安全風險"}]}ngOnInit(){this.filteredSections=(0,O.a)([this.apiService.sections,this.criteriaSubject]).pipe((0,v.U)(i=>({sections:i[0],criteria:i[1]})),(0,v.U)(i=>i.sections.map(e=>({...e,items:this.filterSection(e,i.criteria)})))),this.initializeSearchCriteria()}setQuery(i){this.setSearchCriteria({query:(i||"").toLowerCase().trim()})}setStatus(i){this.toggleStatusMenu(),this.status=i,this.setSearchCriteria({status:i.value})}setType(i){this.toggleTypeMenu(),this.type=i,this.setSearchCriteria({type:i.value})}toggleStatusMenu(){this.showStatusMenu=!this.showStatusMenu}toggleTypeMenu(){this.showTypeMenu=!this.showTypeMenu}filterSection(i,{query:e,status:s,type:o}){const l=!e||-1!==i.name.indexOf(e),T=(i.items||[]).filter(c=>(c=>"all"===o||o===c.docType)(c)&&(c=>"all"===s||s===c.stability||"security-risk"===s&&c.securityRisk)(c)&&(c=>l||-1!==c.name.indexOf(e))(c));return T.length?T:l&&"package"===o?[]:null}initializeSearchCriteria(){const{query:i,status:e,type:s}=this.locationService.search(),o=(i||"").toLowerCase();this.queryEl.nativeElement.value=o,this.status=this.statuses.find(l=>l.value===e)||this.statuses[0],this.type=this.types.find(l=>l.value===s)||this.types[0],this.searchCriteria={query:o,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}setLocationSearch(){const{query:i,status:e,type:s}=this.searchCriteria;this.locationService.setSearch("API 搜尋",{query:i||void 0,status:"all"!==e?e:void 0,type:"all"!==s?s:void 0})}setSearchCriteria(i){this.criteriaSubject.next(Object.assign(this.searchCriteria,i)),this.setLocationSearch()}static#t=this.ɵfac=function(e){return new(e||h)(t.Y36(p),t.Y36(A.a))};static#e=this.ɵcmp=t.Xpm({type:h,selectors:[["aio-api-list"]],viewQuery:function(e,s){if(1&e&&t.Gf(j,7),2&e){let o;t.iGM(o=t.CRH())&&(s.queryEl=o.first)}},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","型別：",3,"options","selected","showSymbol","change"],["label","狀態：",3,"options","selected","disabled","change"],[1,"form-search"],["placeholder","過濾","aria-label","Filter Search",3,"input"],["filter",""],[1,"material-icons"],[1,"api-list-container"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"aio-select",1),t.NdJ("change",function(l){return s.setType(l.option)}),t.qZA(),t.TgZ(2,"aio-select",2),t.NdJ("change",function(l){return s.setStatus(l.option)}),t.qZA(),t.TgZ(3,"div",3)(4,"input",4,5),t.NdJ("input",function(l){return s.setQuery(l.target.value)}),t.qZA(),t.TgZ(6,"i",6),t._uU(7,"search"),t.qZA()()(),t.TgZ(8,"article",7),t.YNc(9,G,3,2,"div",8),t.ALo(10,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("options",s.types)("selected",s.type)("showSymbol",!0),t.xp6(1),t.Q6J("options",s.statuses)("selected",s.status)("disabled","package"===s.type.value),t.xp6(7),t.Q6J("ngForOf",t.lcZ(10,7,s.filteredSections)))},dependencies:[r.sg,r.O5,u,r.Ov],encapsulation:2})}class d{constructor(){this.customElementComponent=h}static#t=this.ɵfac=function(e){return new(e||d)};static#e=this.ɵmod=t.oAB({type:d});static#i=this.ɵinj=t.cJS({providers:[p],imports:[r.ez,x.m,g.JF]})}}}]);
//# sourceMappingURL=src_app_custom-elements_api_api-list_module_ts.e324e516146b6cda.js.map
