import f from"./abstractComponent-c3df9a2a.js";import v from"./arrayListComponent-5668b41b.js";import k from"./classCastExceptionComponent-4a3b3d59.js";import w from"./constructorWritingComponent-c4ebc820.js";import D from"./dateComponent-8b12631a.js";import I from"./extendsComponent-628a5fde.js";import F from"./functionCallingWithObjectComponent-414a1797.js";import S from"./getterComponent-78d5d98c.js";import E from"./interfaceComponent-2ea5719b.js";import V from"./newVariableComponent-b0b490fe.js";import N from"./nullPointerExceptionComponent-6c55e274.js";import P from"./objectCreationComponent-d7e33606.js";import U from"./parseExceptionComponent-54b452d8.js";import T from"./passingArgumentsToFunctionsComponent-0560b242.js";import B from"./printFunctionComponent-3ab2cd42.js";import H from"./setterComponent-b5930c4b.js";import L from"./StringcompareComponent-159c8641.js";import A from"./superKeywordComponent-89740d19.js";import M from"./thisComponent-fbd02dca.js";import W from"./tryCatchComponent-2a1aa328.js";import{_ as j,r as C,o as _,c as g,a as t,b as K,d as Z,e as r,w as u,n as p,f as n,g as m,v as h,t as a,p as z,i as J}from"./index-d6e51d81.js";const O={components:{abstractComponent:f,arrayListComponent:v,classCastExceptionComponent:k,constructorWritingComponent:w,dateComponent:D,extendsComponent:I,functionCallingWithObjectComponent:F,getterComponent:S,interfaceComponent:E,newVariableComponent:V,nullPointerExceptionComponent:N,objectCreationComponent:P,parseExceptionComponent:U,passingArgumentsToFunctionsComponent:T,printFunctionComponent:B,setterComponent:H,stringCompareComponent:L,superKeywordComponent:A,thisComponent:M,tryCatchComponent:W},methods:{popup(i){this.currentComponent=i,console.log("popup");var o=document.getElementById("myModal");console.log(o);var x=document.getElementsByClassName("close")[0];o.style.display="block",console.log(o.style.display),x.onclick=function(){o.style.display="none"},window.onclick=function(y){y.target==o&&(o.style.display="none")}},correct1(){var i=document.getElementById("snackbar");i.innerHTML="Correct",i.style.backgroundColor="green",i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3)},incorrect(){var i=document.getElementById("snackbar");i.innerHTML="Inorrect. Try again",i.style.backgroundColor="red",i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3)},notExactlyCorrect(){var i=document.getElementById("snackbar");i.innerHTML="Are you sure that's the right modifier?",i.style.backgroundColor="yellow",i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3)},validate_one(){this.one==="Customer"?(this.correct1(),this.display[0]="none",this.display[1]="inherit"):this.incorrect()},validate_two(){this.two==="private"?(this.correct1(),this.display[1]="none",this.display[2]="inherit"):this.two==="public"||this.two==="protected"?this.notExactlyCorrect():this.incorrect()},validate_three(){this.three==="private"?(this.correct1(),this.display[2]="none",this.display[3]="inherit"):this.three==="public"||this.three==="protected"?this.notExactlyCorrect():this.incorrect()},validate_four(){this.four==="public"&&this.five==="int"&&this.six==="customerID"?(this.correct1(),this.display[3]="none",this.display[4]="inherit"):this.four==="private"||this.four==="protected"?this.notExactlyCorrect():this.incorrect()},validate_five(){this.seven==="super()"?(this.correct1(),this.display[4]="none",this.display[5]="inherit"):this.incorrect()},validate_six(){this.eight==="name"&&this.nine==="email"?(this.correct1(),this.display[5]="none",this.display[6]="inherit"):this.incorrect()},validate_seven(){this.ten==="name"&&this.eleven==="phone"?(this.correct1(),this.display[6]="none",this.display[7]="inherit"):this.incorrect()},validate_eight(){this.twelve==="name"&&this.thirteen==="email"&&this.fourteen==="phone"?(this.correct1(),this.display[7]="none",this.display[8]="inherit"):this.incorrect()}},data(){return{eight:"",nine:"",eleven:"",twelve:"",thirteen:"",fourteen:"",id:"container",class:"wrapper",button_value:"Evaluate",currentComponent:"constructorWritingComponent",button_text:"Incorrect. Try again",button_text_right:"Correct. Next",correct:!1,display:["inherit","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]}}},e=i=>(z("data-v-e01a81c5"),i=i(),J(),i),Y=e(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),q={id:"myModal"},G={class:"modal-content"},Q=e(()=>t("span",{class:"close"},"×",-1)),R={class:"row"},X={class:"column"},$=e(()=>t("h1",{style:{"padding-left":"25px","padding-bottom":"0px"}},"Fill in the Java code for the following updated Customer class.",-1)),tt=e(()=>t("p",{style:{"padding-left":"25px"}},"You only have to fill in the spaces provided.",-1)),et={style:{height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"}},nt={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},ot={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},lt=e(()=>t("br",null,null,-1)),st=e(()=>t("br",null,null,-1)),it=e(()=>t("br",null,null,-1)),rt=e(()=>t("br",null,null,-1)),ut={style:{padding:"15px","line-height":"40px"}},dt=e(()=>t("br",null,null,-1)),pt=e(()=>t("br",null,null,-1)),ct=e(()=>t("br",null,null,-1)),at=e(()=>t("br",null,null,-1)),mt=e(()=>t("br",null,null,-1)),ht=e(()=>t("br",null,null,-1)),bt=e(()=>t("br",null,null,-1)),_t=e(()=>t("br",null,null,-1)),gt={class:"flex-box-svg"},xt={class:"row-svg"},yt={width:"104",height:"198",style:{"background-color":"transparent"},viewBox:"0 0 104 198",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ct=e(()=>t("line",{x1:"25.4733",y1:"209.504",x2:"88.1127",y2:"21.0543",stroke:"black"},null,-1)),ft=e(()=>t("path",{d:"M98.0787 23.9775L79.127 17.8467L93.9122 4.49953L98.0787 23.9775Z",stroke:"black"},null,-1)),vt=[Ct,ft],kt={width:"220",height:"198",style:{"background-color":"transparent"},viewBox:"0 0 220 198",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wt=e(()=>t("line",{x1:"163.266",y1:"197.357",x2:"64.4637",y2:"25.0918",stroke:"black"},null,-1)),Dt=e(()=>t("path",{d:"M73.2833 19.6074L56.0851 29.6559L55.9819 9.73754L73.2833 19.6074Z",stroke:"black"},null,-1)),It=[wt,Dt],Ft={class:"row-svg"},St={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},Et=e(()=>t("div",{style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"60px"}},[n(" - customerID: int "),t("br"),n(" - customerCount: int "),t("br")],-1)),Vt=e(()=>t("div",{style:{padding:"15px","line-height":"60px"}},[n(" + getCustomerID(): int "),t("br")],-1)),Nt={style:{height:"45px","border-bottom":"1px solid black","text-align":"center","padding-top":"15px"}},Pt={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"60px"}},Ut=e(()=>t("br",null,null,-1)),Tt=e(()=>t("br",null,null,-1)),Bt=e(()=>t("div",{style:{padding:"15px","line-height":"60px"}},[n(" + getCustomerID(): int "),t("br")],-1)),Ht={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},Lt={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"60px"}},At=e(()=>t("br",null,null,-1)),Mt=e(()=>t("br",null,null,-1)),Wt=e(()=>t("div",{style:{padding:"15px","line-height":"60px"}},[n(" + getCustomerID(): int "),t("br")],-1)),jt={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},Kt={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"60px"}},Zt=e(()=>t("br",null,null,-1)),zt=e(()=>t("br",null,null,-1)),Jt={style:{padding:"15px","line-height":"60px"}},Ot=e(()=>t("br",null,null,-1)),Yt={style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}},qt={style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"60px"}},Gt=e(()=>t("br",null,null,-1)),Qt=e(()=>t("br",null,null,-1)),Rt={style:{padding:"15px","line-height":"60px"}},Xt=e(()=>t("br",null,null,-1)),$t=e(()=>t("div",{style:{width:"fit-content",height:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"}},[t("div",{style:{height:"fit-content","border-bottom":"1px solid black","text-align":"center",padding:"15px"}}," Class Exec "),t("div",{style:{height:"fit-content","border-bottom":"1px solid black",padding:"15px","line-height":"40px"}},[n(" - empID: int "),t("br"),n(" - employeeCount: int "),t("br")]),t("div",{style:{padding:"15px","line-height":"60px"}},[n(" + getEmpID(): int "),t("br")])],-1)),te={class:"column"},ee={style:{display:"flex","flex-direction":"row"}},ne=e(()=>t("div",{style:{flex:"5"}},[t("h1",{style:{"padding-left":"0px"}},"Constructing the Customer class"),t("p",{style:{"padding-bottom":"25px"}},"Create the Customer class by establishing an inheritance relationship with the previously implemented Person class.")],-1)),oe={style:{flex:"1"}},le=e(()=>t("p",{id:"comment"},' //Create a class "Customer" that inherits "Person" class',-1)),se=e(()=>t("br",null,null,-1)),ie=e(()=>t("br",null,null,-1)),re=e(()=>t("pre",null,`public class Customer extends Person{

          `,-1)),ue=e(()=>t("br",null,null,-1)),de=e(()=>t("p",{id:"comment"}," //Create a variable 'customerID' of type int with the appropriate access modifier",-1)),pe=e(()=>t("br",null,null,-1)),ce=e(()=>t("br",null,null,-1)),ae=e(()=>t("pre",null,`public class Customer extends Person{

    private final int customerID;

          `,-1)),me=e(()=>t("br",null,null,-1)),he=e(()=>t("p",{id:"comment"}," //Create a variable 'customerCount' of type int with the appropriate access modifier",-1)),be=e(()=>t("br",null,null,-1)),_e=e(()=>t("br",null,null,-1)),ge=e(()=>t("pre",null,`public class Customer extends Person{

    private final int customerID;
    private static int customerCount;

          `,-1)),xe=e(()=>t("br",null,null,-1)),ye=e(()=>t("p",{id:"comment"}," //Create the getter method for getting CustomerID with the appropriate access modifier",-1)),Ce=e(()=>t("br",null,null,-1)),fe=e(()=>t("br",null,null,-1)),ve=e(()=>t("pre",null,`public class Customer extends Person{

    private int customerID;
    private int customerCount;

    public int getCustomerID(){
        return customerID;
    }


          `,-1)),ke=e(()=>t("br",null,null,-1)),we=e(()=>t("br",null,null,-1)),De=e(()=>t("br",null,null,-1)),Ie=e(()=>t("br",null,null,-1)),Fe=e(()=>t("br",null,null,-1)),Se=e(()=>t("p",{id:"comment"}," //Use the appropriate keyword to inherit all parent constructor properties.",-1)),Ee=e(()=>t("br",null,null,-1)),Ve=e(()=>t("pre",null,`public class Customer extends Person{
	
	private final int customerID;
	private static int customerCount=0; 
	
	public Customer()
	{
		super();
		customerCount++;
		this.customerID=customerCount;
	}
	

          `,-1)),Ne=e(()=>t("br",null,null,-1)),Pe=e(()=>t("br",null,null,-1)),Ue=e(()=>t("br",null,null,-1)),Te=e(()=>t("br",null,null,-1)),Be=e(()=>t("br",null,null,-1)),He=e(()=>t("p",{id:"comment"}," //Create the constructor using Customer's name and email",-1)),Le=e(()=>t("br",null,null,-1)),Ae=e(()=>t("pre",null,`public class Customer extends Person{
	
	private final int customerID;
	private static int customerCount=0; 
	
	public Customer()
	{
		super();
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String name, String email) {
		super(name, email);
		customerCount++;
		this.customerID=customerCount;
	}
	
	

          `,-1)),Me=e(()=>t("br",null,null,-1)),We=e(()=>t("br",null,null,-1)),je=e(()=>t("br",null,null,-1)),Ke=e(()=>t("br",null,null,-1)),Ze=e(()=>t("br",null,null,-1)),ze=e(()=>t("p",{id:"comment"}," //Create the constructor using Customer's name and phone",-1)),Je=e(()=>t("br",null,null,-1)),Oe=e(()=>t("pre",null,`public class Customer extends Person{
	
	private final int customerID;
	private static int customerCount=0; 
	
	public Customer()
	{
		super();
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String name, String email) {
		super(name, email);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String name, long phone) {
		super(name, phone);
		customerCount++;
		this.customerID=customerCount;
	}
	

          `,-1)),Ye=e(()=>t("br",null,null,-1)),qe=e(()=>t("br",null,null,-1)),Ge=e(()=>t("br",null,null,-1)),Qe=e(()=>t("br",null,null,-1)),Re=e(()=>t("br",null,null,-1)),Xe=e(()=>t("p",{id:"comment"}," //Create the constructor using Customer's name, email and phone",-1)),$e=e(()=>t("br",null,null,-1)),tn=e(()=>t("pre",null,`public class Customer extends Person{
	
	private final int customerID;
	private static int customerCount=0; 
	
	public Customer()
	{
		super();
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String name, String email) {
		super(name, email);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String name, long phone) {
		super(name, phone);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public Customer(String name, String email, long phone) {
		super(name, email, phone);
		customerCount++;
		this.customerID=customerCount;
	}
	
	public int getcustomerID() {
		return customerID;
	}
	
	public String toString()
	{
		return "[ID: "+ getcustomerID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
}

          `,-1)),en=e(()=>t("br",null,null,-1));function nn(i,o,x,y,l,c){const d=C("mark1"),b=C("mark0");return _(),g("main",null,[Y,t("div",q,[t("div",G,[Q,(_(),K(Z(l.currentComponent)))])]),t("div",R,[t("div",X,[$,tt,t("div",et,[t("div",nt,[r(d,null,{default:u(()=>[n("Class Person")]),_:1})]),t("div",ot,[r(d,null,{default:u(()=>[n("- name: String")]),_:1}),lt,r(d,null,{default:u(()=>[n("- city: String")]),_:1}),st,r(d,null,{default:u(()=>[n("- phone: long")]),_:1}),it,r(d,null,{default:u(()=>[n("- email: String")]),_:1}),rt]),t("div",ut,[r(d,null,{default:u(()=>[n("+ getName(): String")]),_:1}),dt,r(d,null,{default:u(()=>[n("+ getEmail(): String")]),_:1}),pt,r(d,null,{default:u(()=>[n("+ getCity(): String")]),_:1}),ct,r(d,null,{default:u(()=>[n("+ getPhone(): long")]),_:1}),at,r(d,null,{default:u(()=>[n("+ setName(name: String): void")]),_:1}),mt,r(d,null,{default:u(()=>[n("+ setEmail(email: String): void")]),_:1}),ht,r(d,null,{default:u(()=>[n("+ setCity(city: String): void")]),_:1}),bt,r(d,null,{default:u(()=>[n("+ setPhone(phone: long): void")]),_:1}),_t])]),t("div",gt,[t("div",xt,[(_(),g("svg",yt,vt)),(_(),g("svg",kt,It))]),t("div",Ft,[t("div",{class:"col",style:p([{height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:l.display[0]}])},[t("div",St,[r(b,null,{default:u(()=>[n("Class Customer")]),_:1})]),Et,Vt],4),t("div",{class:"col",style:p([{height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:l.display[1]}])},[t("div",Nt,[r(d,null,{default:u(()=>[n("Class Customer")]),_:1})]),t("div",Pt,[r(b,null,{default:u(()=>[n("- customerID: int")]),_:1}),Ut,n(" - customerCount: int "),Tt]),Bt],4),t("div",{class:"col",style:p([{height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:l.display[2]}])},[t("div",Ht,[r(d,null,{default:u(()=>[n("Class Customer")]),_:1})]),t("div",Lt,[r(d,null,{default:u(()=>[n("- customerID: int")]),_:1}),At,r(b,null,{default:u(()=>[n("- customerCount: int")]),_:1}),Mt]),Wt],4),t("div",{class:"col",style:p([{height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:l.display[3]}])},[t("div",jt,[r(d,null,{default:u(()=>[n("Class Customer")]),_:1})]),t("div",Kt,[r(d,null,{default:u(()=>[n("- customerID: int")]),_:1}),Zt,r(d,null,{default:u(()=>[n("- customerCount: int")]),_:1}),zt]),t("div",Jt,[r(b,null,{default:u(()=>[n("+ getCustomerID(): int")]),_:1}),Ot])],4),t("div",{class:"col",style:p([{height:"fit-content",width:"fit-content",border:"1px solid black","background-color":"#F9FAFE","box-shadow":"2px 3px 10px 2px #D7DFFF"},{display:l.display[4]}])},[t("div",Yt,[r(d,null,{default:u(()=>[n("Class Customer")]),_:1})]),t("div",qt,[r(d,null,{default:u(()=>[n("- customerID: int")]),_:1}),Gt,r(d,null,{default:u(()=>[n("- customerCount: int")]),_:1}),Qt]),t("div",Rt,[r(d,null,{default:u(()=>[n("+ getCustomerID(): int")]),_:1}),Xt])],4),$t])])]),t("div",te,[t("div",ee,[ne,t("div",oe,[t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:l.display[0]}]),onClick:o[0]||(o[0]=s=>c.popup("extendsComponent")),class:"button-30"},"Help",4),t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:l.display[1]}]),onClick:o[1]||(o[1]=s=>c.popup("newVariableComponent")),class:"button-30"},"Help",4),t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:l.display[2]}]),onClick:o[2]||(o[2]=s=>c.popup("newVariableComponent")),class:"button-30"},"Help",4),t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:l.display[3]}]),onClick:o[3]||(o[3]=s=>c.popup("getterComponent")),class:"button-30"},"Help",4),t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:l.display[4]}]),onClick:o[4]||(o[4]=s=>c.popup("superKeywordComponent")),class:"button-30"},"Help",4),t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:l.display[5]}]),onClick:o[5]||(o[5]=s=>c.popup("constructorWritingComponent")),class:"button-30"},"Help",4),t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:l.display[6]}]),onClick:o[6]||(o[6]=s=>c.popup("constructorWritingComponent")),class:"button-30"},"Help",4),t("button",{style:p([{float:"right","margin-bottom":"30px"},{display:l.display[7]}]),onClick:o[7]||(o[7]=s=>c.popup("constructorWritingComponent")),class:"button-30"},"Help",4)])]),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[0]})},[n(" public class "),m(t("input",{spellcheck:"false",id:"one",maxlength:"8",style:{width:"90px"},"onUpdate:modelValue":o[8]||(o[8]=s=>i.one=s)},null,512),[[h,i.one]]),n(" extends Person{ "),le,se,n(" } "),ie,t("button",{class:"button-9",id:"btn1",onClick:o[9]||(o[9]=s=>c.validate_one())},a(l.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[1]})},[re,n("   "),m(t("input",{spellcheck:"false",id:"two",maxlength:"7",style:{width:"95px"},"onUpdate:modelValue":o[10]||(o[10]=s=>i.two=s)},null,512),[[h,i.two]]),n("final int customerID; "),ue,n(" };"),de,pe,n("}"),ce,t("button",{class:"button-9",id:"btn2",onClick:o[11]||(o[11]=s=>c.validate_two())},a(l.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[2]})},[ae,n("   "),m(t("input",{spellcheck:"false",id:"three",maxlength:"7",style:{width:"95px"},"onUpdate:modelValue":o[12]||(o[12]=s=>i.three=s)},null,512),[[h,i.three]]),n("static int customerCount; "),me,n(" };"),he,be,n("}"),_e,t("button",{class:"button-9",id:"btn2",onClick:o[13]||(o[13]=s=>c.validate_three())},a(l.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[3]})},[ge,n("   "),m(t("input",{spellcheck:"false",id:"four",maxlength:"6",style:{width:"95px"},"onUpdate:modelValue":o[14]||(o[14]=s=>i.four=s)},null,512),[[h,i.four]]),n(),m(t("input",{spellcheck:"false",id:"five","onUpdate:modelValue":o[15]||(o[15]=s=>i.five=s),maxlength:"3",style:{width:"60px"}},null,512),[[h,i.five]]),n(" getCustomerID() { "),xe,n("    return "),m(t("input",{spellcheck:"false",id:"six","onUpdate:modelValue":o[16]||(o[16]=s=>i.six=s),maxlength:"10",style:{width:"100px"}},null,512),[[h,i.six]]),n("; };"),ye,Ce,n("}"),fe,t("button",{class:"button-9",id:"btn2",onClick:o[17]||(o[17]=s=>c.validate_four())},a(l.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[4]})},[ve,n("   public Customer()"),ke,n("   {"),we,n("     "),m(t("input",{spellcheck:"false",maxlength:"7",style:{width:"95px"},"onUpdate:modelValue":o[18]||(o[18]=s=>i.seven=s)},null,512),[[h,i.seven]]),De,n("     customerCount++;"),Ie,n("     this.customerID=customerCount;"),Fe,Se,n("   } "),Ee,t("button",{class:"button-9",id:"btn2",onClick:o[19]||(o[19]=s=>c.validate_five())},a(l.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[5]})},[Ve,n("   public Customer(String "),m(t("input",{spellcheck:"false",maxlength:"8",style:{width:"95px"},"onUpdate:modelValue":o[20]||(o[20]=s=>l.eight=s)},null,512),[[h,l.eight]]),n(", String "),m(t("input",{spellcheck:"false",maxlength:"5",style:{width:"55px"},"onUpdate:modelValue":o[21]||(o[21]=s=>l.nine=s)},null,512),[[h,l.nine]]),n(");"),Ne,n("   {"),Pe,n("     super("+a(l.eight)+","+a(l.nine)+");",1),Ue,n("     customerCount++;"),Te,n("     this.customerID=customerCount;"),Be,He,n("   } "),Le,t("button",{class:"button-9",id:"btn2",onClick:o[22]||(o[22]=s=>c.validate_six())},a(l.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[6]})},[Ae,n("   public Customer(String "),m(t("input",{spellcheck:"false",maxlength:"8",style:{width:"95px"},"onUpdate:modelValue":o[23]||(o[23]=s=>i.ten=s)},null,512),[[h,i.ten]]),n(", long "),m(t("input",{spellcheck:"false",maxlength:"5",style:{width:"55px"},"onUpdate:modelValue":o[24]||(o[24]=s=>l.eleven=s)},null,512),[[h,l.eleven]]),n(");"),Me,n("   {"),We,n("     super("+a(i.ten)+","+a(l.eleven)+");",1),je,n("     customerCount++;"),Ke,n("     this.customerID=customerCount;"),Ze,ze,n("   } "),Je,t("button",{class:"button-9",id:"btn2",onClick:o[25]||(o[25]=s=>c.validate_seven())},a(l.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[7]})},[Oe,n("   public Customer(String "),m(t("input",{spellcheck:"false",maxlength:"8",style:{width:"95px"},"onUpdate:modelValue":o[26]||(o[26]=s=>l.twelve=s)},null,512),[[h,l.twelve]]),n(", String "),m(t("input",{spellcheck:"false",maxlength:"5",style:{width:"55px"},"onUpdate:modelValue":o[27]||(o[27]=s=>l.thirteen=s)},null,512),[[h,l.thirteen]]),n(", long "),m(t("input",{spellcheck:"false",maxlength:"5",style:{width:"55px"},"onUpdate:modelValue":o[28]||(o[28]=s=>l.fourteen=s)},null,512),[[h,l.fourteen]]),n(" );"),Ye,n("   {"),qe,n("     super("+a(l.twelve)+", "+a(l.thirteen)+", "+a(l.fourteen)+");",1),Ge,n("     customerCount++;"),Qe,n("     this.customerID=customerCount;"),Re,Xe,n("   } "),$e,t("button",{class:"button-9",id:"btn2",onClick:o[29]||(o[29]=s=>c.validate_eight())},a(l.button_value),1)],4),t("div",{class:"codebox",id:"codebox",style:p({display:l.display[8]})},[tn,en,t("button",{class:"button-9",id:"btn2",onClick:o[30]||(o[30]=s=>i.$router.push("/screen-three"))},"Next")],4)])])])}const Dn=j(O,[["render",nn],["__scopeId","data-v-e01a81c5"]]);export{Dn as default};
