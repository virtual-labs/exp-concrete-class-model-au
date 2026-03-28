import{_ as p,o as l,c as d,a as e,f as a,g as r,v as i,j as u,F as h,h as m,p as v,i as _}from"./index-d6e51d81.js";const b={data(){return{}},methods:{incorrect(t){var s=document.getElementById("snackbar");s.innerHTML=t,s.style.backgroundColor="red",s.className="show",setTimeout(function(){s.className=s.className.replace("show","")},3e3)},correct1(){var t=document.getElementById("snackbar");t.innerHTML="Correct",t.style.backgroundColor="green",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},validate_one(){this.one.trim()=="super"&&this.two.trim()=="print()"?(this.correct1(),alert("Correct")):(this.incorrect("Try again"),alert("Incorrect, please try again"))}}},n=t=>(v("data-v-991253d2"),t=t(),_(),t),f=n(()=>e("header",{style:{padding:"20px"}},[e("h5",null,"HELP"),e("h1",null,"Super Keyword")],-1)),y=n(()=>e("div",{id:"snackbar"},"Some text some message..",-1)),C={class:"flex-row"},w=m(`<div style="width:50%;" data-v-991253d2><h2 data-v-991253d2>Theory</h2><div class="outbox" data-v-991253d2><pre data-v-991253d2>                  <p id="comment" data-v-991253d2>// call the constructor of the parent class</p>
   public class ChildClass extends ParentClass {
    public ChildClass() {
        super();        
    }
}

  <p id="comment" data-v-991253d2>//call the method1() of the parent class</p>
  public class ChildClass extends ParentClass {
    public void method1() {
        super.method1(); 
    }
}
    
    <p id="comment" data-v-991253d2>// set the x field of the parent class to 10</p>

    public class ChildClass extends ParentClass {
    private int x;
    public void method1() {
        super.x = 10;
    }
}
</pre></div><div class="content" data-v-991253d2><p data-v-991253d2> The super keyword is used to call the constructor or method of the superclass, or to refer to a field of the superclass with the same name as a field in the subclass. </p></div></div>`,1),x={style:{width:"50%"}},g=n(()=>e("h2",null,"Try it yourself",-1)),T={class:"outbox"},N=n(()=>e("br",null,null,-1)),k=n(()=>e("br",null,null,-1)),S=n(()=>e("span",{id:"comment"},'//Call the right method to print the following output: "This statement is superb"',-1)),B=n(()=>e("br",null,null,-1)),I={id:"buttons",class:"relative"},V={key:0,class:"navitem"};function E(t,s,P,$,H,c){return l(),d(h,null,[f,y,e("main",null,[e("div",C,[w,e("div",x,[g,e("div",T,[e("pre",null,[a(`class Base
{
  void print()
  {
    System.out.println("This statement is superb");
  }
}

class Derived extends Base
{
  void print()
  {
    `),r(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>t.one=o)},null,512),[[i,t.one]]),a("."),r(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=o=>t.two=o)},null,512),[[i,t.two]]),a(`;
  }
}
        `)]),N,k,S,B]),e("button",{class:"button-9",onClick:s[2]||(s[2]=o=>c.validate_one())},"Validate")])]),e("footer",null,[e("div",I,[t.currentStep===1?(l(),d("button",V,"Next")):u("",!0)])])])],64)}const L=p(b,[["render",E],["__scopeId","data-v-991253d2"]]);export{L as default};
