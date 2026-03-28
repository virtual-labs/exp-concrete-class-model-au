import{_ as m,o as i,c as l,a as e,g as r,v as c,f as a,j as u,F as h,p,i as _}from"./index-d6e51d81.js";const v={data(){return{}},methods:{incorrect(t){var s=document.getElementById("snackbar");s.innerHTML=t,s.style.backgroundColor="red",s.className="show",setTimeout(function(){s.className=s.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="this.name"&&this.two.trim()=="name"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},n=t=>(p("data-v-c3746ef2"),t=t(),_(),t),b=n(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Accessing variables of a class from within class (using this)")],-1)),f=n(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),y={class:"flex-row"},g=n(()=>e("div",{style:{width:"50%"}},[e("h2",null,"Theory"),e("div",{class:"outbox"},[e("pre",null,[a(`    public class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public void printName() {
        System.out.println("My name is " + this.name);
      }
    }
`),e("span",{id:"comment"},`//Class Person with a data member name and a method printName that uses 
the this keyword to access the name variable:`),a(`
                `)])]),e("div",{class:"content"},[e("p",null,' "this" keyword is used to refer to the current object of a class. It can be used to access the variables and methods of the object from within the class. ')])],-1)),w={style:{width:"50%"}},k=n(()=>e("h2",null,"Try it yourself",-1)),N={class:"outbox"},x=n(()=>e("p",null,"public class ClassA {",-1)),C=n(()=>e("p",null," private String name;",-1)),S=n(()=>e("p",null,"public void User(String name) {",-1)),T=n(()=>e("p",null,"}",-1)),I=n(()=>e("p",null,"}",-1)),V=n(()=>e("span",{id:"comment"},'//Use the this keyword to refer to instance variable "name" in User() method ',-1)),B={id:"buttons",class:"relative"},U={key:0,class:"navitem"};function E(t,s,M,P,$,d){return i(),l(h,null,[b,f,e("main",null,[e("div",y,[g,e("div",w,[k,e("div",N,[x,C,S,r(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>t.one=o)},null,512),[[c,t.one]]),a("="),r(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=o=>t.two=o)},null,512),[[c,t.two]]),a("; "),T,I,V]),e("button",{class:"button-9",onClick:s[2]||(s[2]=o=>d.validate_one())},"Validate")])]),e("footer",null,[e("div",B,[t.currentStep===1?(i(),l("button",U,"Next")):u("",!0)])])])],64)}const H=m(v,[["render",E],["__scopeId","data-v-c3746ef2"]]);export{H as default};
