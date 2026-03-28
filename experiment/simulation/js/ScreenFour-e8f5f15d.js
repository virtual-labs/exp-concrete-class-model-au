import{_ as f,o as s,c as l,a as e,f as n,h as i,p as r,i as c}from"./index-d6e51d81.js";const d={},o=t=>(r("data-v-9b2fdf4f"),t=t(),c(),t),p=o(()=>e("div",{style:{"padding-left":"2%"}},[e("h1",null,"Understanding the Output"),e("p",null,"The TestDriver code on the left end creates the required Customer and Exec ojbects and performs a reservation. Observe the output on the right end.")],-1)),b={class:"flex"},u=o(()=>e("div",{class:"row"},[e("div",{class:"codebox"},[e("h3",{style:{"font-family":"monospace"}},"Test Driver.java"),e("pre",null,`...

import java.util.Scanner;
import java.util.Date;


public class TestDriver {

    public static void main(String[] args) {
        Customer cobj= new Customer("ABC", "abc@gmail.com");
        cobj.setCity("Coimbatore");
        Clerk clobj = new Clerk("PQR","pqr@gmail.com");
        Vehicle vobj=new Vehicle(1234);
        Reservation robj= new Reservation(cobj,vobj);
        robj.setBookingDate(new Date());
        robj.getVehicleObj().updateKeyStatus();
    }

}
            `)])],-1)),v={class:"outbox"},m=i('<p data-v-9b2fdf4f>OUTPUT</p><p style="color:#fff;" data-v-9b2fdf4f>Customer list: </p><p style="color:#fff;" data-v-9b2fdf4f>[ID: 1, Name: ABC, Email: abc@gmail.com, Phone: 0, City: Coimbatore]</p><p style="color:#fff;" data-v-9b2fdf4f>[ID: 2, Name: DEF, Email: null, Phone: 0, City: Coimbatore]</p><p style="color:#fff;" data-v-9b2fdf4f>[ID: 3, Name: GHI, Email: ghi@gmail.com, Phone: 0, City: Chennai]</p><br data-v-9b2fdf4f><p style="color:#fff;" data-v-9b2fdf4f>Exec list: </p><p style="color:#fff;" data-v-9b2fdf4f>[ID: 1, Name: EFG, Email: efg@gmail.com, Phone: 0, City: Coimbatore ]</p><br data-v-9b2fdf4f><p style="color:#fff;" data-v-9b2fdf4f>Vehicle list: </p><p style="color:#fff;" data-v-9b2fdf4f>[Reg Number: 1234, Key Status: available ]</p><p style="color:#fff;" data-v-9b2fdf4f>Reservation list: </p><p style="color:#fff;" data-v-9b2fdf4f>[ID: 1, Customer Object: [ID: 1, Name: ABC, Email:abc@gmail.com, Phone: 0, City: Coimbatore ], Vehicle Object: [Reg Number: 1234, Key Status: available ], Contract Status: Reservation not released, Booking Date: Tue Mar 01 00:00:00 IST 2022, Release Date: null ] </p><p style="color:#fff;" data-v-9b2fdf4f>Vehicle is available, initiating contract..</p><p style="color:#fff;" data-v-9b2fdf4f>Reservation released</p><p style="color:#fff;" data-v-9b2fdf4f>Vehicle key handedover</p>',16),h=o(()=>e("br",null,null,-1)),_=o(()=>e("p",{style:{color:"#fff"}},"Process finished with exit code 0",-1)),y=o(()=>e("div",{style:{height:"100px","background-color":"#202020"}},null,-1));function C(t,a){return s(),l("main",null,[p,e("div",b,[u,e("div",v,[m,n(),h,_,y,e("button",{class:"button-9",id:"btn1",onClick:a[0]||(a[0]=g=>t.$router.push("/congratulations"))},"Continue")])])])}const D=f(d,[["render",C],["__scopeId","data-v-9b2fdf4f"]]);export{D as default};
