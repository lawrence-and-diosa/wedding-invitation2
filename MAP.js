MAP=function(){
// MAP
sz=0;mapSz=window.innerHeight;//if(isPortrait){mapSz = window.innerWidth;}

map=document.createElement('IFRAME');
map.src=
"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7709.970391358275!2d120.58300364102928!3d14.937918142357388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x33965e8b6a56c083%3A0x8c6fd64f21fd1565!2sSan%20Antonio%20de%20Padua%20Parish%20Church%20-%20San%20Antonio%2C%20Lubao%2C%20Pampanga%20(Archdiocese%20of%20San%20Fernando)%2C%20Purok%201%20San%20Antonio%202005%2C%20Lubao!3m2!1d14.9383863!2d120.57847869999999!4m5!1s0x0%3A0x666d3b0714da6ed2!2sCVRazon%20Function%20hall!3m2!1d14.9435614!2d120.59765689999999!5e0!3m2!1sen!2sph!4v1708978622948!5m2!1sen!2sph"
document.body.appendChild(map);
map.style.zIndex=9999;
map.width=map.height=sz;
map.style.top=((window.innerHeight/2)-(sz/2))+'px';
map.style.left=((window.innerWidth/2)-(sz/2))+'px';
map.style='position:absolute;scrolling:no;border:0;allowfullscreen:;loading:"lazy";referrerpolicy:no-referrer-when-downgrade;';


gm=new THREE.PlaneGeometry(.3,.3);
txd=new THREE.ImageUtils.loadTexture('res/iconmap.png');
mt=new THREE.MeshBasicMaterial({map:txd,alphaTest:.5});
mshwz=new THREE.Mesh(gm,mt);
scene.add(mshwz);
mshwz.sw=-1;
mshwz.F=function(){this.sw*=-1;
if(this.sw==1){
wv=window.innerWidth
hv=window.innerHeight
map.width=wv/2;map.height=wv/2;
sz=map.width;szz=map.height;
map.style.top=(hv/2)-(szz/2)+'px';
map.style.left=(wv/2)-(sz/2)+'px';
pt.intensity=0;
mshwz.scale.set(2,2,2);
}
else{
map.width=map.height=0
map.style.top=(0)+'px';
map.style.left=(0)+'px';
pt.intensity=2;
mshwz.scale.set(1,1,1);
}
}
if(window.innerWidth>window.innerHeight){
mshwz.position.set(1.2,.2,.5);
setInterval(function(){
if(num==0){
mshwz.position.x+=((1.5-mshwz.position.x)*.05);
}
else{
mshwz.position.x+=((5-mshwz.position.x)*.05);
}
});
}
else{
mshwz.position.set(0,0,.5);
setInterval(function(){
if(num==1){
mshwz.position.y+=((-1-mshwz.position.y)*.05);
}
else{
mshwz.position.y+=((-5-mshwz.position.y)*.05);
}
});
}



}





FB=function(){








gm=new THREE.PlaneGeometry(.3,.3);
txd=new THREE.ImageUtils.loadTexture('res/iconfb.png');
mt=new THREE.MeshBasicMaterial({map:txd,alphaTest:.5});
mshrs=new THREE.Mesh(gm,mt);
scene.add(mshrs);
mshrs.sw=-1;
mshrs.F=function(){mshrs.sw*=-1;
if(mshrs.sw==1){
pt.intensity=0;
mshrs.scale.set(2,2,2);
}
else{
pt.intensity=2;
mshrs.scale.set(1,1,1);
}
//window.location.href='https://www.facebook.com/LNJ.Mariano';
}
if(window.innerWidth>window.innerHeight){
mshrs.position.set(-1.2,.2,.5);
setInterval(function(){
if(num==1){
mshrs.position.x+=((-1.2-mshrs.position.x)*.05);
}
else{
mshrs.position.x+=((-5-mshrs.position.x)*.05);
}
});
}
else{
mshrs.position.set(0,0,.5);
setInterval(function(){
if(num==2){
mshrs.position.y+=((-1-mshrs.position.y)*.05);
}
else{
mshrs.position.y+=((-5-mshrs.position.y)*.05);
}
});
}




}