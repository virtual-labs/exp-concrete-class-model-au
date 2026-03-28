import{_ as u,o as r,c as d,a as t,f as o,g as l,v as i,j as p,F as m,h as b,p as h,i as _}from"./index-d6e51d81.js";const v={data(){return{}},methods:{incorrect(e){var a=document.getElementById("snackbar");a.innerHTML=e,a.style.backgroundColor="red",a.className="show",setTimeout(function(){a.className=a.className.replace("show","")},3e3)},correct1(){var e=document.getElementById("snackbar");e.innerHTML="Correct",e.style.backgroundColor="green",e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="abstract"&&this.two.trim()=="abstract"&&this.three.trim()=="sunroof"&&this.four.trim()=="Yamaha"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},s=e=>(h("data-v-2be74743"),e=e(),_(),e),y=s(()=>t("header",{style:{padding:"20px"}},[t("h5",null,"HELP"),t("h1",null,"Abstract")],-1)),f=s(()=>t("div",{id:"snackbar"},"Some text some message..",-1)),g={class:"flex-row"},k=b(`<div style="width:50%;" data-v-2be74743><h2 data-v-2be74743>Theory</h2><div class="outbox" data-v-2be74743><pre data-v-2be74743>    <span id="comment" data-v-2be74743>//an abstract class </span>
  public abstract class Animal {

  public abstract void makeSound();
  
  }
  <span id="comment" data-v-2be74743>//concrete class that extends <br data-v-2be74743> Animal and implements its abstract method </span>
  public class Dog extends Animal {

  public void makeSound() {

      System.out.println(&quot;Wolf&quot;);
    
    }
  }

                </pre></div><div class="content" data-v-2be74743><p data-v-2be74743>An abstract class is a class that cannot be instantiated i.e., cannot create an object of the abstract class directly. It provides a blueprint or template for other classes to extend and implement its abstract methods. </p></div></div>`,1),w={style:{width:"50%"}},x=s(()=>t("h2",null,"Try it yourself",-1)),N={class:"outbox"},I=s(()=>t("br",null,null,-1)),S=s(()=>t("br",null,null,-1)),T=s(()=>t("span",{id:"comment"},"//Initialize an 'abstract' class Bike with an 'abstract' method 'sunroof'",-1)),C=s(()=>t("p",null,"{",-1)),V=s(()=>t("p",null,"void horn();",-1)),B=s(()=>t("p",null,"}",-1)),A=s(()=>t("br",null,null,-1)),E={id:"buttons",class:"relative"},$={key:0,class:"navitem"};function H(e,a,L,M,U,c){return r(),d(m,null,[y,f,t("main",null,[t("div",g,[k,t("div",w,[x,t("div",N,[I,o(),S,T,t("p",null,[l(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>e.one=n)},null,512),[[i,e.one]]),o("class Bike")]),C,t("p",null,[l(t("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=n=>e.two=n)},null,512),[[i,e.two]]),o(" void "),l(t("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=n=>e.three=n)},null,512),[[i,e.three]]),o(";")]),V,B,A]),t("button",{class:"button-9",onClick:a[3]||(a[3]=n=>c.validate_one())},"Validate")])]),t("footer",null,[t("div",E,[e.currentStep===1?(r(),d("button",$,"Next")):p("",!0)])])])],64)}const q=u(v,[["render",H],["__scopeId","data-v-2be74743"]]);export{q as default};
