import{_ as p,o as c,c as d,a as e,f as a,g as i,v as l,j as u,F as m,h,p as _,i as f}from"./index-d6e51d81.js";const v={data(){return{}},methods:{incorrect(t){var n=document.getElementById("snackbar");n.innerHTML=t,n.style.backgroundColor="red",n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="interface"&&this.two.trim()=="implements"&&this.three.trim()=="showRoom"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},s=t=>(_("data-v-f46c32c4"),t=t(),f(),t),y=s(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Interface")],-1)),b=s(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),g={class:"flex-row"},w=h(`<div style="width:50%;" data-v-f46c32c4><h2 data-v-f46c32c4>Theory</h2><div class="outbox" data-v-f46c32c4><pre data-v-f46c32c4><span id="comment" data-v-f46c32c4>//an interface structure</span>
public interface MyInterface {
  public void doSomething();
  public int getValue();
  }

public class MyClass implements MyInterface {
  public void doSomething() {
   
  }
  public int getValue() {
      
  }
}
<span id="comment" data-v-f46c32c4>//Any class that implements this interface must provide implementations
   for both methods.</span>

                </pre></div><div class="content" data-v-f46c32c4><p data-v-f46c32c4> An interface is a blueprint of a class that specifies a set of methods and properties that a class must implement. </p></div></div>`,1),k={style:{width:"50%"}},I=s(()=>e("h2",null,"Try it yourself",-1)),N={class:"outbox"},x=s(()=>e("br",null,null,-1)),C=s(()=>e("br",null,null,-1)),V=s(()=>e("span",{id:"comment"},"//Initialize an 'interface' Bike ",-1)),S=s(()=>e("p",null,"{",-1)),T=s(()=>e("p",null,"void display_name();",-1)),B=s(()=>e("p",null,"}",-1)),M=s(()=>e("span",{id:"comment"},"//Create a class 'showRoom' that implements the interface.",-1)),E=s(()=>e("p",null,"public void display_name() { ",-1)),$=s(()=>e("p",null,"System.out.println(name); }",-1)),H=s(()=>e("p",null,"}",-1)),L=s(()=>e("br",null,null,-1)),R={id:"buttons",class:"relative"},U={key:0,class:"navitem"};function A(t,n,F,j,z,r){return c(),d(m,null,[y,b,e("main",null,[e("div",g,[w,e("div",k,[I,e("div",N,[x,a(),C,V,e("p",null,[a("public "),i(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=o=>t.one=o)},null,512),[[l,t.one]]),a(" Bike")]),S,T,B,M,e("p",null,[a(" class showRoom "),i(e("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=o=>t.two=o)},null,512),[[l,t.two]]),a(),i(e("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=o=>t.three=o)},null,512),[[l,t.three]]),a(" { ")]),E,$,H,L]),e("button",{class:"button-9",onClick:n[3]||(n[3]=o=>r.validate_one())},"Validate")])]),e("footer",null,[e("div",R,[t.currentStep===1?(c(),d("button",U,"Next")):u("",!0)])])])],64)}const P=p(v,[["render",A],["__scopeId","data-v-f46c32c4"]]);export{P as default};
