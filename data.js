var D=load('inv_v1',null);
if(!D){D={biz:{name:'Gabriel Mochubela Software',addr:'Durban, South Africa',email:'gabrielmochubela9@gmail.com',phone:'068 694 2018',vat:15,bank:'Bank details on request'},next:3,
 inv:[{id:'i1',no:'INV-0001',client:'Fadeful Barber',email:'bookings@fadeful.example',date:today(-40),due:today(-26),status:'paid',disc:0,vat:15,notes:'Thank you for your business.',items:[{d:'Website design and build',q:1,p:6500},{d:'Hosting setup',q:1,p:450}]},
 {id:'i2',no:'INV-0002',client:'Dina\'s Décor',email:'dina@decor.example',date:today(-12),due:today(-2),status:'sent',disc:5,vat:15,notes:'Payment due within 10 days.',items:[{d:'Booking page',q:1,p:3200},{d:'Photo gallery',q:12,p:75}]}]};save('inv_v1',D)}
function S(){save('inv_v1',D)}
function R(n){return'R'+(Math.round(n*100)/100).toLocaleString('en-ZA',{minimumFractionDigits:2,maximumFractionDigits:2})}
function tot(i){var sub=i.items.reduce(function(s,x){return s+x.q*x.p},0),d=sub*(i.disc||0)/100,net=sub-d,v=net*(i.vat||0)/100;return{sub:sub,d:d,v:v,t:net+v}}
function stat(i){return i.status==='paid'?'paid':(i.due<today()?'overdue':i.status)}
function pill(i){var s=stat(i);return'<span class="pill '+(s==='paid'?'ok':s==='overdue'?'bad':s==='sent'?'warn':'')+'">'+s+'</span>'}
var draft=null,T;
function blank(){var n='INV-'+String(D.next).padStart(4,'0');return{id:uid(),no:n,client:'',email:'',date:today(),due:today(14),status:'draft',disc:0,vat:D.biz.vat,notes:'Payment due within 14 days. Thank you for your business.',items:[{d:'',q:1,p:0}]}}
