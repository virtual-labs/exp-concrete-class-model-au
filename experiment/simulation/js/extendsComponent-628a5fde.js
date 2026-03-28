import{_ as i,o as l,c as r,a as e,f as o,g as c,v as u,j as p,F as m,p as _,i as h}from"./index-d6e51d81.js";const v={data(){return{}},methods:{incorrect(s){var t=document.getElementById("snackbar");t.innerHTML=s,t.style.backgroundColor="red",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},correct1(){var s=document.getElementById("snackbar");s.innerHTML="Correct",s.style.backgroundColor="green",s.className="show",setTimeout(function(){s.className=s.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="Dog extends Animal"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},n=s=>(_("data-v-07156f04"),s=s(),h(),s),b=n(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Extends Keyword")],-1)),x=n(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),y={class:"flex-row"},f=n(()=>e("div",{style:{width:"50%"}},[e("h2",null,"Theory"),e("div",{class:"outbox"},[e("pre",null,`class Subclass extends Superclass {
// Subclass properties and methods
}
                `)]),e("div",{class:"content"},[e("p",null,"Extends keyword is used to create a subclass (or derived class) of an existing class. The subclass inherits all the properties and methods of the superclass (or base class), and can also add its own properties and methods. ")])],-1)),g={style:{width:"50%"}},k=n(()=>e("h2",null,"Try it yourself",-1)),w={class:"outbox"},S=n(()=>e("br",null,null,-1)),N=n(()=>e("br",null,null,-1)),T=n(()=>e("span",{id:"comment"},"//Create a class 'Dog' that extends 'Animal'",-1)),C={id:"buttons",class:"relative"},I={key:0,class:"navitem"};function E(s,t,B,V,A,d){return l(),r(m,null,[b,x,e("main",null,[e("div",y,[f,e("div",g,[k,e("div",w,[S,o(),N,e("pre",null,[o(`class Animal {
  public void makeSound() {
    System.out.println("Animal is making a sound");
}
}
        
`),T,o(`
`),e("p",null,[o("class "),c(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>s.one=a)},null,512),[[u,s.one]]),o("{")]),o(` 
        public void makeSound() {
        System.out.println("Dog is barking");
    }
}
`)])]),e("button",{class:"button-9",onClick:t[1]||(t[1]=a=>d.validate_one())},"Validate")])]),e("footer",null,[e("div",C,[s.currentStep===1?(l(),r("button",I,"Next")):p("",!0)])])])],64)}const $=i(v,[["render",E],["__scopeId","data-v-07156f04"]]);export{$ as default};
