import{_ as c,o as a,c as i,a as e,f as s,g as d,v as u,j as h,F as p,p as m,i as _}from"./index-d6e51d81.js";const v={data(){return{}},methods:{incorrect(t){var n=document.getElementById("snackbar");n.innerHTML=t,n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="8"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},o=t=>(m("data-v-5662c628"),t=t(),_(),t),g=o(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Null Pointer Exception")],-1)),y=o(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),x={class:"flex-row"},b=o(()=>e("div",{style:{width:"50%"}},[e("h2",null,"Theory"),e("div",{class:"outbox"},[e("pre",null,`1.  String str = null;
2.  int length = str.length();`),e("span",{id:"comment"},"//2nd line will throw a NullPointerException because we declare a string variable str and initialize it to null. Then, we try to call the length() method on str")]),e("div",{class:"content"},[e("p",null,"Null Pointer Exception is a kind of run time exception that is thrown when the java program attempts to use the object reference that that contains the null value. ")])],-1)),w={style:{width:"50%"}},k=o(()=>e("h2",null,"Try it yourself",-1)),f={class:"outbox"},N=o(()=>e("br",null,null,-1)),B=o(()=>e("br",null,null,-1)),T=o(()=>e("span",{id:"comment"},"//Initialize a class 'Bike'",-1)),E=o(()=>e("span",{id:"comment"},"//In which line excption occurs (eg:1 or 2)",-1)),I={id:"buttons",class:"relative"},C={key:0,class:"navitem"};function S(t,n,P,V,$,r){return a(),i(p,null,[g,y,e("main",null,[e("div",x,[b,e("div",w,[k,e("div",f,[N,s(),B,T,e("pre",null,[s(`1.class Bike
2.{
3.
4.int arr[] = null;
5.    public static void main (String[] args)                    
6.    {
7.    Bike mybike = new Bike();                  
8.    System.out.println(myBike.arr.length());    
9.    }
10.}
`),d(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=l=>t.one=l)},null,512),[[u,t.one]]),s(`
`),E,s(`
              `)])]),e("button",{class:"button-9",onClick:n[1]||(n[1]=l=>r.validate_one())},"Validate")])]),e("footer",null,[e("div",I,[t.currentStep===1?(a(),i("button",C,"Next")):h("",!0)])])])],64)}const H=c(v,[["render",S],["__scopeId","data-v-5662c628"]]);export{H as default};
