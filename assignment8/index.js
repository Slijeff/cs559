"use strict";(()=>{var Rr=Object.defineProperty;var K=(r,e)=>{for(var n in e)Rr(r,n,{get:e[n],enumerable:!0})};function $(){let r=document.getElementById("myCanvas"),e=r.getContext("webgl");return{canvas:r,gl:e}}var o=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),u1=new Float32Array([.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5]),u=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),V=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),rr=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0]);var S=1e-6,N=typeof Float32Array!="undefined"?Float32Array:Array;var ee=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var r=0,e=arguments.length;e--;)r+=arguments[e]*arguments[e];return Math.sqrt(r)});var D={};K(D,{add:()=>Zr,adjoint:()=>Br,clone:()=>Sr,copy:()=>Lr,create:()=>W,determinant:()=>Or,equals:()=>Kr,exactEquals:()=>Jr,frob:()=>Hr,fromMat2d:()=>Gr,fromMat4:()=>zr,fromQuat:()=>Vr,fromRotation:()=>Ur,fromScaling:()=>Cr,fromTranslation:()=>qr,fromValues:()=>Ir,identity:()=>_r,invert:()=>Nr,mul:()=>$r,multiply:()=>er,multiplyScalar:()=>Qr,multiplyScalarAndAdd:()=>jr,normalFromMat4:()=>Wr,projection:()=>Xr,rotate:()=>Fr,scale:()=>Dr,set:()=>wr,str:()=>kr,sub:()=>or,subtract:()=>nr,translate:()=>br,transpose:()=>Yr});function W(){var r=new N(9);return N!=Float32Array&&(r[1]=0,r[2]=0,r[3]=0,r[5]=0,r[6]=0,r[7]=0),r[0]=1,r[4]=1,r[8]=1,r}function zr(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[4],r[4]=e[5],r[5]=e[6],r[6]=e[8],r[7]=e[9],r[8]=e[10],r}function Sr(r){var e=new N(9);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e}function Lr(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function Ir(r,e,n,a,i,t,s,v,x){var h=new N(9);return h[0]=r,h[1]=e,h[2]=n,h[3]=a,h[4]=i,h[5]=t,h[6]=s,h[7]=v,h[8]=x,h}function wr(r,e,n,a,i,t,s,v,x,h){return r[0]=e,r[1]=n,r[2]=a,r[3]=i,r[4]=t,r[5]=s,r[6]=v,r[7]=x,r[8]=h,r}function _r(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function Yr(r,e){if(r===e){var n=e[1],a=e[2],i=e[5];r[1]=e[3],r[2]=e[6],r[3]=n,r[5]=e[7],r[6]=a,r[7]=i}else r[0]=e[0],r[1]=e[3],r[2]=e[6],r[3]=e[1],r[4]=e[4],r[5]=e[7],r[6]=e[2],r[7]=e[5],r[8]=e[8];return r}function Nr(r,e){var n=e[0],a=e[1],i=e[2],t=e[3],s=e[4],v=e[5],x=e[6],h=e[7],l=e[8],M=l*s-v*h,p=-l*t+v*x,f=h*t-s*x,g=n*M+a*p+i*f;return g?(g=1/g,r[0]=M*g,r[1]=(-l*a+i*h)*g,r[2]=(v*a-i*s)*g,r[3]=p*g,r[4]=(l*n-i*x)*g,r[5]=(-v*n+i*t)*g,r[6]=f*g,r[7]=(-h*n+a*x)*g,r[8]=(s*n-a*t)*g,r):null}function Br(r,e){var n=e[0],a=e[1],i=e[2],t=e[3],s=e[4],v=e[5],x=e[6],h=e[7],l=e[8];return r[0]=s*l-v*h,r[1]=i*h-a*l,r[2]=a*v-i*s,r[3]=v*x-t*l,r[4]=n*l-i*x,r[5]=i*t-n*v,r[6]=t*h-s*x,r[7]=a*x-n*h,r[8]=n*s-a*t,r}function Or(r){var e=r[0],n=r[1],a=r[2],i=r[3],t=r[4],s=r[5],v=r[6],x=r[7],h=r[8];return e*(h*t-s*x)+n*(-h*i+s*v)+a*(x*i-t*v)}function er(r,e,n){var a=e[0],i=e[1],t=e[2],s=e[3],v=e[4],x=e[5],h=e[6],l=e[7],M=e[8],p=n[0],f=n[1],g=n[2],m=n[3],c=n[4],y=n[5],T=n[6],E=n[7],d=n[8];return r[0]=p*a+f*s+g*h,r[1]=p*i+f*v+g*l,r[2]=p*t+f*x+g*M,r[3]=m*a+c*s+y*h,r[4]=m*i+c*v+y*l,r[5]=m*t+c*x+y*M,r[6]=T*a+E*s+d*h,r[7]=T*i+E*v+d*l,r[8]=T*t+E*x+d*M,r}function br(r,e,n){var a=e[0],i=e[1],t=e[2],s=e[3],v=e[4],x=e[5],h=e[6],l=e[7],M=e[8],p=n[0],f=n[1];return r[0]=a,r[1]=i,r[2]=t,r[3]=s,r[4]=v,r[5]=x,r[6]=p*a+f*s+h,r[7]=p*i+f*v+l,r[8]=p*t+f*x+M,r}function Fr(r,e,n){var a=e[0],i=e[1],t=e[2],s=e[3],v=e[4],x=e[5],h=e[6],l=e[7],M=e[8],p=Math.sin(n),f=Math.cos(n);return r[0]=f*a+p*s,r[1]=f*i+p*v,r[2]=f*t+p*x,r[3]=f*s-p*a,r[4]=f*v-p*i,r[5]=f*x-p*t,r[6]=h,r[7]=l,r[8]=M,r}function Dr(r,e,n){var a=n[0],i=n[1];return r[0]=a*e[0],r[1]=a*e[1],r[2]=a*e[2],r[3]=i*e[3],r[4]=i*e[4],r[5]=i*e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function qr(r,e){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=e[0],r[7]=e[1],r[8]=1,r}function Ur(r,e){var n=Math.sin(e),a=Math.cos(e);return r[0]=a,r[1]=n,r[2]=0,r[3]=-n,r[4]=a,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function Cr(r,e){return r[0]=e[0],r[1]=0,r[2]=0,r[3]=0,r[4]=e[1],r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function Gr(r,e){return r[0]=e[0],r[1]=e[1],r[2]=0,r[3]=e[2],r[4]=e[3],r[5]=0,r[6]=e[4],r[7]=e[5],r[8]=1,r}function Vr(r,e){var n=e[0],a=e[1],i=e[2],t=e[3],s=n+n,v=a+a,x=i+i,h=n*s,l=a*s,M=a*v,p=i*s,f=i*v,g=i*x,m=t*s,c=t*v,y=t*x;return r[0]=1-M-g,r[3]=l-y,r[6]=p+c,r[1]=l+y,r[4]=1-h-g,r[7]=f-m,r[2]=p-c,r[5]=f+m,r[8]=1-h-M,r}function Wr(r,e){var n=e[0],a=e[1],i=e[2],t=e[3],s=e[4],v=e[5],x=e[6],h=e[7],l=e[8],M=e[9],p=e[10],f=e[11],g=e[12],m=e[13],c=e[14],y=e[15],T=n*v-a*s,E=n*x-i*s,d=n*h-t*s,R=a*x-i*v,A=a*h-t*v,I=i*h-t*x,L=l*m-M*g,w=l*c-p*g,P=l*y-f*g,B=M*c-p*m,_=M*y-f*m,Y=p*y-f*c,z=T*Y-E*_+d*B+R*P-A*w+I*L;return z?(z=1/z,r[0]=(v*Y-x*_+h*B)*z,r[1]=(x*P-s*Y-h*w)*z,r[2]=(s*_-v*P+h*L)*z,r[3]=(i*_-a*Y-t*B)*z,r[4]=(n*Y-i*P+t*w)*z,r[5]=(a*P-n*_-t*L)*z,r[6]=(m*I-c*A+y*R)*z,r[7]=(c*d-g*I-y*E)*z,r[8]=(g*A-m*d+y*T)*z,r):null}function Xr(r,e,n){return r[0]=2/e,r[1]=0,r[2]=0,r[3]=0,r[4]=-2/n,r[5]=0,r[6]=-1,r[7]=1,r[8]=1,r}function kr(r){return"mat3("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+", "+r[4]+", "+r[5]+", "+r[6]+", "+r[7]+", "+r[8]+")"}function Hr(r){return Math.hypot(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8])}function Zr(r,e,n){return r[0]=e[0]+n[0],r[1]=e[1]+n[1],r[2]=e[2]+n[2],r[3]=e[3]+n[3],r[4]=e[4]+n[4],r[5]=e[5]+n[5],r[6]=e[6]+n[6],r[7]=e[7]+n[7],r[8]=e[8]+n[8],r}function nr(r,e,n){return r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r[3]=e[3]-n[3],r[4]=e[4]-n[4],r[5]=e[5]-n[5],r[6]=e[6]-n[6],r[7]=e[7]-n[7],r[8]=e[8]-n[8],r}function Qr(r,e,n){return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r[4]=e[4]*n,r[5]=e[5]*n,r[6]=e[6]*n,r[7]=e[7]*n,r[8]=e[8]*n,r}function jr(r,e,n,a){return r[0]=e[0]+n[0]*a,r[1]=e[1]+n[1]*a,r[2]=e[2]+n[2]*a,r[3]=e[3]+n[3]*a,r[4]=e[4]+n[4]*a,r[5]=e[5]+n[5]*a,r[6]=e[6]+n[6]*a,r[7]=e[7]+n[7]*a,r[8]=e[8]+n[8]*a,r}function Jr(r,e){return r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]&&r[3]===e[3]&&r[4]===e[4]&&r[5]===e[5]&&r[6]===e[6]&&r[7]===e[7]&&r[8]===e[8]}function Kr(r,e){var n=r[0],a=r[1],i=r[2],t=r[3],s=r[4],v=r[5],x=r[6],h=r[7],l=r[8],M=e[0],p=e[1],f=e[2],g=e[3],m=e[4],c=e[5],y=e[6],T=e[7],E=e[8];return Math.abs(n-M)<=S*Math.max(1,Math.abs(n),Math.abs(M))&&Math.abs(a-p)<=S*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(i-f)<=S*Math.max(1,Math.abs(i),Math.abs(f))&&Math.abs(t-g)<=S*Math.max(1,Math.abs(t),Math.abs(g))&&Math.abs(s-m)<=S*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(v-c)<=S*Math.max(1,Math.abs(v),Math.abs(c))&&Math.abs(x-y)<=S*Math.max(1,Math.abs(x),Math.abs(y))&&Math.abs(h-T)<=S*Math.max(1,Math.abs(h),Math.abs(T))&&Math.abs(l-E)<=S*Math.max(1,Math.abs(l),Math.abs(E))}var $r=er,or=nr;var O={};K(O,{add:()=>F1,adjoint:()=>s1,clone:()=>r1,copy:()=>e1,create:()=>ur,decompose:()=>R1,determinant:()=>v1,equals:()=>C1,exactEquals:()=>U1,frob:()=>b1,fromQuat:()=>z1,fromQuat2:()=>A1,fromRotation:()=>m1,fromRotationTranslation:()=>tr,fromRotationTranslationScale:()=>T1,fromRotationTranslationScaleOrigin:()=>P1,fromScaling:()=>g1,fromTranslation:()=>p1,fromValues:()=>n1,fromXRotation:()=>y1,fromYRotation:()=>d1,fromZRotation:()=>E1,frustum:()=>S1,getRotation:()=>xr,getScaling:()=>vr,getTranslation:()=>sr,identity:()=>ar,invert:()=>t1,lookAt:()=>N1,mul:()=>G1,multiply:()=>ir,multiplyScalar:()=>D1,multiplyScalarAndAdd:()=>q1,ortho:()=>_1,orthoNO:()=>lr,orthoZO:()=>Y1,perspective:()=>L1,perspectiveFromFieldOfView:()=>w1,perspectiveNO:()=>hr,perspectiveZO:()=>I1,rotate:()=>l1,rotateX:()=>f1,rotateY:()=>c1,rotateZ:()=>M1,scale:()=>h1,set:()=>a1,str:()=>O1,sub:()=>V1,subtract:()=>fr,targetTo:()=>B1,translate:()=>x1,transpose:()=>i1});function ur(){var r=new N(16);return N!=Float32Array&&(r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0),r[0]=1,r[5]=1,r[10]=1,r[15]=1,r}function r1(r){var e=new N(16);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],e}function e1(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function n1(r,e,n,a,i,t,s,v,x,h,l,M,p,f,g,m){var c=new N(16);return c[0]=r,c[1]=e,c[2]=n,c[3]=a,c[4]=i,c[5]=t,c[6]=s,c[7]=v,c[8]=x,c[9]=h,c[10]=l,c[11]=M,c[12]=p,c[13]=f,c[14]=g,c[15]=m,c}function a1(r,e,n,a,i,t,s,v,x,h,l,M,p,f,g,m,c){return r[0]=e,r[1]=n,r[2]=a,r[3]=i,r[4]=t,r[5]=s,r[6]=v,r[7]=x,r[8]=h,r[9]=l,r[10]=M,r[11]=p,r[12]=f,r[13]=g,r[14]=m,r[15]=c,r}function ar(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function i1(r,e){if(r===e){var n=e[1],a=e[2],i=e[3],t=e[6],s=e[7],v=e[11];r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=n,r[6]=e[9],r[7]=e[13],r[8]=a,r[9]=t,r[11]=e[14],r[12]=i,r[13]=s,r[14]=v}else r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15];return r}function t1(r,e){var n=e[0],a=e[1],i=e[2],t=e[3],s=e[4],v=e[5],x=e[6],h=e[7],l=e[8],M=e[9],p=e[10],f=e[11],g=e[12],m=e[13],c=e[14],y=e[15],T=n*v-a*s,E=n*x-i*s,d=n*h-t*s,R=a*x-i*v,A=a*h-t*v,I=i*h-t*x,L=l*m-M*g,w=l*c-p*g,P=l*y-f*g,B=M*c-p*m,_=M*y-f*m,Y=p*y-f*c,z=T*Y-E*_+d*B+R*P-A*w+I*L;return z?(z=1/z,r[0]=(v*Y-x*_+h*B)*z,r[1]=(i*_-a*Y-t*B)*z,r[2]=(m*I-c*A+y*R)*z,r[3]=(p*A-M*I-f*R)*z,r[4]=(x*P-s*Y-h*w)*z,r[5]=(n*Y-i*P+t*w)*z,r[6]=(c*d-g*I-y*E)*z,r[7]=(l*I-p*d+f*E)*z,r[8]=(s*_-v*P+h*L)*z,r[9]=(a*P-n*_-t*L)*z,r[10]=(g*A-m*d+y*T)*z,r[11]=(M*d-l*A-f*T)*z,r[12]=(v*w-s*B-x*L)*z,r[13]=(n*B-a*w+i*L)*z,r[14]=(m*E-g*R-c*T)*z,r[15]=(l*R-M*E+p*T)*z,r):null}function s1(r,e){var n=e[0],a=e[1],i=e[2],t=e[3],s=e[4],v=e[5],x=e[6],h=e[7],l=e[8],M=e[9],p=e[10],f=e[11],g=e[12],m=e[13],c=e[14],y=e[15],T=n*v-a*s,E=n*x-i*s,d=n*h-t*s,R=a*x-i*v,A=a*h-t*v,I=i*h-t*x,L=l*m-M*g,w=l*c-p*g,P=l*y-f*g,B=M*c-p*m,_=M*y-f*m,Y=p*y-f*c;return r[0]=v*Y-x*_+h*B,r[1]=i*_-a*Y-t*B,r[2]=m*I-c*A+y*R,r[3]=p*A-M*I-f*R,r[4]=x*P-s*Y-h*w,r[5]=n*Y-i*P+t*w,r[6]=c*d-g*I-y*E,r[7]=l*I-p*d+f*E,r[8]=s*_-v*P+h*L,r[9]=a*P-n*_-t*L,r[10]=g*A-m*d+y*T,r[11]=M*d-l*A-f*T,r[12]=v*w-s*B-x*L,r[13]=n*B-a*w+i*L,r[14]=m*E-g*R-c*T,r[15]=l*R-M*E+p*T,r}function v1(r){var e=r[0],n=r[1],a=r[2],i=r[3],t=r[4],s=r[5],v=r[6],x=r[7],h=r[8],l=r[9],M=r[10],p=r[11],f=r[12],g=r[13],m=r[14],c=r[15],y=e*s-n*t,T=e*v-a*t,E=n*v-a*s,d=h*g-l*f,R=h*m-M*f,A=l*m-M*g,I=e*A-n*R+a*d,L=t*A-s*R+v*d,w=h*E-l*T+M*y,P=f*E-g*T+m*y;return x*I-i*L+c*w-p*P}function ir(r,e,n){var a=e[0],i=e[1],t=e[2],s=e[3],v=e[4],x=e[5],h=e[6],l=e[7],M=e[8],p=e[9],f=e[10],g=e[11],m=e[12],c=e[13],y=e[14],T=e[15],E=n[0],d=n[1],R=n[2],A=n[3];return r[0]=E*a+d*v+R*M+A*m,r[1]=E*i+d*x+R*p+A*c,r[2]=E*t+d*h+R*f+A*y,r[3]=E*s+d*l+R*g+A*T,E=n[4],d=n[5],R=n[6],A=n[7],r[4]=E*a+d*v+R*M+A*m,r[5]=E*i+d*x+R*p+A*c,r[6]=E*t+d*h+R*f+A*y,r[7]=E*s+d*l+R*g+A*T,E=n[8],d=n[9],R=n[10],A=n[11],r[8]=E*a+d*v+R*M+A*m,r[9]=E*i+d*x+R*p+A*c,r[10]=E*t+d*h+R*f+A*y,r[11]=E*s+d*l+R*g+A*T,E=n[12],d=n[13],R=n[14],A=n[15],r[12]=E*a+d*v+R*M+A*m,r[13]=E*i+d*x+R*p+A*c,r[14]=E*t+d*h+R*f+A*y,r[15]=E*s+d*l+R*g+A*T,r}function x1(r,e,n){var a=n[0],i=n[1],t=n[2],s,v,x,h,l,M,p,f,g,m,c,y;return e===r?(r[12]=e[0]*a+e[4]*i+e[8]*t+e[12],r[13]=e[1]*a+e[5]*i+e[9]*t+e[13],r[14]=e[2]*a+e[6]*i+e[10]*t+e[14],r[15]=e[3]*a+e[7]*i+e[11]*t+e[15]):(s=e[0],v=e[1],x=e[2],h=e[3],l=e[4],M=e[5],p=e[6],f=e[7],g=e[8],m=e[9],c=e[10],y=e[11],r[0]=s,r[1]=v,r[2]=x,r[3]=h,r[4]=l,r[5]=M,r[6]=p,r[7]=f,r[8]=g,r[9]=m,r[10]=c,r[11]=y,r[12]=s*a+l*i+g*t+e[12],r[13]=v*a+M*i+m*t+e[13],r[14]=x*a+p*i+c*t+e[14],r[15]=h*a+f*i+y*t+e[15]),r}function h1(r,e,n){var a=n[0],i=n[1],t=n[2];return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=e[3]*a,r[4]=e[4]*i,r[5]=e[5]*i,r[6]=e[6]*i,r[7]=e[7]*i,r[8]=e[8]*t,r[9]=e[9]*t,r[10]=e[10]*t,r[11]=e[11]*t,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function l1(r,e,n,a){var i=a[0],t=a[1],s=a[2],v=Math.hypot(i,t,s),x,h,l,M,p,f,g,m,c,y,T,E,d,R,A,I,L,w,P,B,_,Y,z,b;return v<S?null:(v=1/v,i*=v,t*=v,s*=v,x=Math.sin(n),h=Math.cos(n),l=1-h,M=e[0],p=e[1],f=e[2],g=e[3],m=e[4],c=e[5],y=e[6],T=e[7],E=e[8],d=e[9],R=e[10],A=e[11],I=i*i*l+h,L=t*i*l+s*x,w=s*i*l-t*x,P=i*t*l-s*x,B=t*t*l+h,_=s*t*l+i*x,Y=i*s*l+t*x,z=t*s*l-i*x,b=s*s*l+h,r[0]=M*I+m*L+E*w,r[1]=p*I+c*L+d*w,r[2]=f*I+y*L+R*w,r[3]=g*I+T*L+A*w,r[4]=M*P+m*B+E*_,r[5]=p*P+c*B+d*_,r[6]=f*P+y*B+R*_,r[7]=g*P+T*B+A*_,r[8]=M*Y+m*z+E*b,r[9]=p*Y+c*z+d*b,r[10]=f*Y+y*z+R*b,r[11]=g*Y+T*z+A*b,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r)}function f1(r,e,n){var a=Math.sin(n),i=Math.cos(n),t=e[4],s=e[5],v=e[6],x=e[7],h=e[8],l=e[9],M=e[10],p=e[11];return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[4]=t*i+h*a,r[5]=s*i+l*a,r[6]=v*i+M*a,r[7]=x*i+p*a,r[8]=h*i-t*a,r[9]=l*i-s*a,r[10]=M*i-v*a,r[11]=p*i-x*a,r}function c1(r,e,n){var a=Math.sin(n),i=Math.cos(n),t=e[0],s=e[1],v=e[2],x=e[3],h=e[8],l=e[9],M=e[10],p=e[11];return e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[0]=t*i-h*a,r[1]=s*i-l*a,r[2]=v*i-M*a,r[3]=x*i-p*a,r[8]=t*a+h*i,r[9]=s*a+l*i,r[10]=v*a+M*i,r[11]=x*a+p*i,r}function M1(r,e,n){var a=Math.sin(n),i=Math.cos(n),t=e[0],s=e[1],v=e[2],x=e[3],h=e[4],l=e[5],M=e[6],p=e[7];return e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[0]=t*i+h*a,r[1]=s*i+l*a,r[2]=v*i+M*a,r[3]=x*i+p*a,r[4]=h*i-t*a,r[5]=l*i-s*a,r[6]=M*i-v*a,r[7]=p*i-x*a,r}function p1(r,e){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function g1(r,e){return r[0]=e[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=e[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=e[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function m1(r,e,n){var a=n[0],i=n[1],t=n[2],s=Math.hypot(a,i,t),v,x,h;return s<S?null:(s=1/s,a*=s,i*=s,t*=s,v=Math.sin(e),x=Math.cos(e),h=1-x,r[0]=a*a*h+x,r[1]=i*a*h+t*v,r[2]=t*a*h-i*v,r[3]=0,r[4]=a*i*h-t*v,r[5]=i*i*h+x,r[6]=t*i*h+a*v,r[7]=0,r[8]=a*t*h+i*v,r[9]=i*t*h-a*v,r[10]=t*t*h+x,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r)}function y1(r,e){var n=Math.sin(e),a=Math.cos(e);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=a,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=a,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function d1(r,e){var n=Math.sin(e),a=Math.cos(e);return r[0]=a,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=a,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function E1(r,e){var n=Math.sin(e),a=Math.cos(e);return r[0]=a,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=a,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function tr(r,e,n){var a=e[0],i=e[1],t=e[2],s=e[3],v=a+a,x=i+i,h=t+t,l=a*v,M=a*x,p=a*h,f=i*x,g=i*h,m=t*h,c=s*v,y=s*x,T=s*h;return r[0]=1-(f+m),r[1]=M+T,r[2]=p-y,r[3]=0,r[4]=M-T,r[5]=1-(l+m),r[6]=g+c,r[7]=0,r[8]=p+y,r[9]=g-c,r[10]=1-(l+f),r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function A1(r,e){var n=new N(3),a=-e[0],i=-e[1],t=-e[2],s=e[3],v=e[4],x=e[5],h=e[6],l=e[7],M=a*a+i*i+t*t+s*s;return M>0?(n[0]=(v*s+l*a+x*t-h*i)*2/M,n[1]=(x*s+l*i+h*a-v*t)*2/M,n[2]=(h*s+l*t+v*i-x*a)*2/M):(n[0]=(v*s+l*a+x*t-h*i)*2,n[1]=(x*s+l*i+h*a-v*t)*2,n[2]=(h*s+l*t+v*i-x*a)*2),tr(r,e,n),r}function sr(r,e){return r[0]=e[12],r[1]=e[13],r[2]=e[14],r}function vr(r,e){var n=e[0],a=e[1],i=e[2],t=e[4],s=e[5],v=e[6],x=e[8],h=e[9],l=e[10];return r[0]=Math.hypot(n,a,i),r[1]=Math.hypot(t,s,v),r[2]=Math.hypot(x,h,l),r}function xr(r,e){var n=new N(3);vr(n,e);var a=1/n[0],i=1/n[1],t=1/n[2],s=e[0]*a,v=e[1]*i,x=e[2]*t,h=e[4]*a,l=e[5]*i,M=e[6]*t,p=e[8]*a,f=e[9]*i,g=e[10]*t,m=s+l+g,c=0;return m>0?(c=Math.sqrt(m+1)*2,r[3]=.25*c,r[0]=(M-f)/c,r[1]=(p-x)/c,r[2]=(v-h)/c):s>l&&s>g?(c=Math.sqrt(1+s-l-g)*2,r[3]=(M-f)/c,r[0]=.25*c,r[1]=(v+h)/c,r[2]=(p+x)/c):l>g?(c=Math.sqrt(1+l-s-g)*2,r[3]=(p-x)/c,r[0]=(v+h)/c,r[1]=.25*c,r[2]=(M+f)/c):(c=Math.sqrt(1+g-s-l)*2,r[3]=(v-h)/c,r[0]=(p+x)/c,r[1]=(M+f)/c,r[2]=.25*c),r}function R1(r,e,n,a){e[0]=a[12],e[1]=a[13],e[2]=a[14];var i=a[0],t=a[1],s=a[2],v=a[4],x=a[5],h=a[6],l=a[8],M=a[9],p=a[10];n[0]=Math.hypot(i,t,s),n[1]=Math.hypot(v,x,h),n[2]=Math.hypot(l,M,p);var f=1/n[0],g=1/n[1],m=1/n[2],c=i*f,y=t*g,T=s*m,E=v*f,d=x*g,R=h*m,A=l*f,I=M*g,L=p*m,w=c+d+L,P=0;return w>0?(P=Math.sqrt(w+1)*2,r[3]=.25*P,r[0]=(R-I)/P,r[1]=(A-T)/P,r[2]=(y-E)/P):c>d&&c>L?(P=Math.sqrt(1+c-d-L)*2,r[3]=(R-I)/P,r[0]=.25*P,r[1]=(y+E)/P,r[2]=(A+T)/P):d>L?(P=Math.sqrt(1+d-c-L)*2,r[3]=(A-T)/P,r[0]=(y+E)/P,r[1]=.25*P,r[2]=(R+I)/P):(P=Math.sqrt(1+L-c-d)*2,r[3]=(y-E)/P,r[0]=(A+T)/P,r[1]=(R+I)/P,r[2]=.25*P),r}function T1(r,e,n,a){var i=e[0],t=e[1],s=e[2],v=e[3],x=i+i,h=t+t,l=s+s,M=i*x,p=i*h,f=i*l,g=t*h,m=t*l,c=s*l,y=v*x,T=v*h,E=v*l,d=a[0],R=a[1],A=a[2];return r[0]=(1-(g+c))*d,r[1]=(p+E)*d,r[2]=(f-T)*d,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(M+c))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(f+T)*A,r[9]=(m-y)*A,r[10]=(1-(M+g))*A,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function P1(r,e,n,a,i){var t=e[0],s=e[1],v=e[2],x=e[3],h=t+t,l=s+s,M=v+v,p=t*h,f=t*l,g=t*M,m=s*l,c=s*M,y=v*M,T=x*h,E=x*l,d=x*M,R=a[0],A=a[1],I=a[2],L=i[0],w=i[1],P=i[2],B=(1-(m+y))*R,_=(f+d)*R,Y=(g-E)*R,z=(f-d)*A,b=(1-(p+y))*A,q=(c+T)*A,U=(g+E)*I,j=(c-T)*I,J=(1-(p+m))*I;return r[0]=B,r[1]=_,r[2]=Y,r[3]=0,r[4]=z,r[5]=b,r[6]=q,r[7]=0,r[8]=U,r[9]=j,r[10]=J,r[11]=0,r[12]=n[0]+L-(B*L+z*w+U*P),r[13]=n[1]+w-(_*L+b*w+j*P),r[14]=n[2]+P-(Y*L+q*w+J*P),r[15]=1,r}function z1(r,e){var n=e[0],a=e[1],i=e[2],t=e[3],s=n+n,v=a+a,x=i+i,h=n*s,l=a*s,M=a*v,p=i*s,f=i*v,g=i*x,m=t*s,c=t*v,y=t*x;return r[0]=1-M-g,r[1]=l+y,r[2]=p-c,r[3]=0,r[4]=l-y,r[5]=1-h-g,r[6]=f+m,r[7]=0,r[8]=p+c,r[9]=f-m,r[10]=1-h-M,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function S1(r,e,n,a,i,t,s){var v=1/(n-e),x=1/(i-a),h=1/(t-s);return r[0]=t*2*v,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t*2*x,r[6]=0,r[7]=0,r[8]=(n+e)*v,r[9]=(i+a)*x,r[10]=(s+t)*h,r[11]=-1,r[12]=0,r[13]=0,r[14]=s*t*2*h,r[15]=0,r}function hr(r,e,n,a,i){var t=1/Math.tan(e/2);if(r[0]=t/n,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,i!=null&&i!==1/0){var s=1/(a-i);r[10]=(i+a)*s,r[14]=2*i*a*s}else r[10]=-1,r[14]=-2*a;return r}var L1=hr;function I1(r,e,n,a,i){var t=1/Math.tan(e/2);if(r[0]=t/n,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,i!=null&&i!==1/0){var s=1/(a-i);r[10]=i*s,r[14]=i*a*s}else r[10]=-1,r[14]=-a;return r}function w1(r,e,n,a){var i=Math.tan(e.upDegrees*Math.PI/180),t=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),v=Math.tan(e.rightDegrees*Math.PI/180),x=2/(s+v),h=2/(i+t);return r[0]=x,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=h,r[6]=0,r[7]=0,r[8]=-((s-v)*x*.5),r[9]=(i-t)*h*.5,r[10]=a/(n-a),r[11]=-1,r[12]=0,r[13]=0,r[14]=a*n/(n-a),r[15]=0,r}function lr(r,e,n,a,i,t,s){var v=1/(e-n),x=1/(a-i),h=1/(t-s);return r[0]=-2*v,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*x,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*h,r[11]=0,r[12]=(e+n)*v,r[13]=(i+a)*x,r[14]=(s+t)*h,r[15]=1,r}var _1=lr;function Y1(r,e,n,a,i,t,s){var v=1/(e-n),x=1/(a-i),h=1/(t-s);return r[0]=-2*v,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*x,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=h,r[11]=0,r[12]=(e+n)*v,r[13]=(i+a)*x,r[14]=t*h,r[15]=1,r}function N1(r,e,n,a){var i,t,s,v,x,h,l,M,p,f,g=e[0],m=e[1],c=e[2],y=a[0],T=a[1],E=a[2],d=n[0],R=n[1],A=n[2];return Math.abs(g-d)<S&&Math.abs(m-R)<S&&Math.abs(c-A)<S?ar(r):(l=g-d,M=m-R,p=c-A,f=1/Math.hypot(l,M,p),l*=f,M*=f,p*=f,i=T*p-E*M,t=E*l-y*p,s=y*M-T*l,f=Math.hypot(i,t,s),f?(f=1/f,i*=f,t*=f,s*=f):(i=0,t=0,s=0),v=M*s-p*t,x=p*i-l*s,h=l*t-M*i,f=Math.hypot(v,x,h),f?(f=1/f,v*=f,x*=f,h*=f):(v=0,x=0,h=0),r[0]=i,r[1]=v,r[2]=l,r[3]=0,r[4]=t,r[5]=x,r[6]=M,r[7]=0,r[8]=s,r[9]=h,r[10]=p,r[11]=0,r[12]=-(i*g+t*m+s*c),r[13]=-(v*g+x*m+h*c),r[14]=-(l*g+M*m+p*c),r[15]=1,r)}function B1(r,e,n,a){var i=e[0],t=e[1],s=e[2],v=a[0],x=a[1],h=a[2],l=i-n[0],M=t-n[1],p=s-n[2],f=l*l+M*M+p*p;f>0&&(f=1/Math.sqrt(f),l*=f,M*=f,p*=f);var g=x*p-h*M,m=h*l-v*p,c=v*M-x*l;return f=g*g+m*m+c*c,f>0&&(f=1/Math.sqrt(f),g*=f,m*=f,c*=f),r[0]=g,r[1]=m,r[2]=c,r[3]=0,r[4]=M*c-p*m,r[5]=p*g-l*c,r[6]=l*m-M*g,r[7]=0,r[8]=l,r[9]=M,r[10]=p,r[11]=0,r[12]=i,r[13]=t,r[14]=s,r[15]=1,r}function O1(r){return"mat4("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+", "+r[4]+", "+r[5]+", "+r[6]+", "+r[7]+", "+r[8]+", "+r[9]+", "+r[10]+", "+r[11]+", "+r[12]+", "+r[13]+", "+r[14]+", "+r[15]+")"}function b1(r){return Math.hypot(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])}function F1(r,e,n){return r[0]=e[0]+n[0],r[1]=e[1]+n[1],r[2]=e[2]+n[2],r[3]=e[3]+n[3],r[4]=e[4]+n[4],r[5]=e[5]+n[5],r[6]=e[6]+n[6],r[7]=e[7]+n[7],r[8]=e[8]+n[8],r[9]=e[9]+n[9],r[10]=e[10]+n[10],r[11]=e[11]+n[11],r[12]=e[12]+n[12],r[13]=e[13]+n[13],r[14]=e[14]+n[14],r[15]=e[15]+n[15],r}function fr(r,e,n){return r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r[3]=e[3]-n[3],r[4]=e[4]-n[4],r[5]=e[5]-n[5],r[6]=e[6]-n[6],r[7]=e[7]-n[7],r[8]=e[8]-n[8],r[9]=e[9]-n[9],r[10]=e[10]-n[10],r[11]=e[11]-n[11],r[12]=e[12]-n[12],r[13]=e[13]-n[13],r[14]=e[14]-n[14],r[15]=e[15]-n[15],r}function D1(r,e,n){return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r[4]=e[4]*n,r[5]=e[5]*n,r[6]=e[6]*n,r[7]=e[7]*n,r[8]=e[8]*n,r[9]=e[9]*n,r[10]=e[10]*n,r[11]=e[11]*n,r[12]=e[12]*n,r[13]=e[13]*n,r[14]=e[14]*n,r[15]=e[15]*n,r}function q1(r,e,n,a){return r[0]=e[0]+n[0]*a,r[1]=e[1]+n[1]*a,r[2]=e[2]+n[2]*a,r[3]=e[3]+n[3]*a,r[4]=e[4]+n[4]*a,r[5]=e[5]+n[5]*a,r[6]=e[6]+n[6]*a,r[7]=e[7]+n[7]*a,r[8]=e[8]+n[8]*a,r[9]=e[9]+n[9]*a,r[10]=e[10]+n[10]*a,r[11]=e[11]+n[11]*a,r[12]=e[12]+n[12]*a,r[13]=e[13]+n[13]*a,r[14]=e[14]+n[14]*a,r[15]=e[15]+n[15]*a,r}function U1(r,e){return r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]&&r[3]===e[3]&&r[4]===e[4]&&r[5]===e[5]&&r[6]===e[6]&&r[7]===e[7]&&r[8]===e[8]&&r[9]===e[9]&&r[10]===e[10]&&r[11]===e[11]&&r[12]===e[12]&&r[13]===e[13]&&r[14]===e[14]&&r[15]===e[15]}function C1(r,e){var n=r[0],a=r[1],i=r[2],t=r[3],s=r[4],v=r[5],x=r[6],h=r[7],l=r[8],M=r[9],p=r[10],f=r[11],g=r[12],m=r[13],c=r[14],y=r[15],T=e[0],E=e[1],d=e[2],R=e[3],A=e[4],I=e[5],L=e[6],w=e[7],P=e[8],B=e[9],_=e[10],Y=e[11],z=e[12],b=e[13],q=e[14],U=e[15];return Math.abs(n-T)<=S*Math.max(1,Math.abs(n),Math.abs(T))&&Math.abs(a-E)<=S*Math.max(1,Math.abs(a),Math.abs(E))&&Math.abs(i-d)<=S*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(t-R)<=S*Math.max(1,Math.abs(t),Math.abs(R))&&Math.abs(s-A)<=S*Math.max(1,Math.abs(s),Math.abs(A))&&Math.abs(v-I)<=S*Math.max(1,Math.abs(v),Math.abs(I))&&Math.abs(x-L)<=S*Math.max(1,Math.abs(x),Math.abs(L))&&Math.abs(h-w)<=S*Math.max(1,Math.abs(h),Math.abs(w))&&Math.abs(l-P)<=S*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(M-B)<=S*Math.max(1,Math.abs(M),Math.abs(B))&&Math.abs(p-_)<=S*Math.max(1,Math.abs(p),Math.abs(_))&&Math.abs(f-Y)<=S*Math.max(1,Math.abs(f),Math.abs(Y))&&Math.abs(g-z)<=S*Math.max(1,Math.abs(g),Math.abs(z))&&Math.abs(m-b)<=S*Math.max(1,Math.abs(m),Math.abs(b))&&Math.abs(c-q)<=S*Math.max(1,Math.abs(c),Math.abs(q))&&Math.abs(y-U)<=S*Math.max(1,Math.abs(y),Math.abs(U))}var G1=ir,V1=fr;function k(){var r=new N(3);return N!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r}function W1(r){var e=r[0],n=r[1],a=r[2];return Math.hypot(e,n,a)}function H(r,e,n){var a=new N(3);return a[0]=r,a[1]=e,a[2]=n,a}function cr(r,e){var n=e[0],a=e[1],i=e[2],t=n*n+a*a+i*i;return t>0&&(t=1/Math.sqrt(t)),r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r}function Mr(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function G(r,e,n){var a=e[0],i=e[1],t=e[2],s=n[0],v=n[1],x=n[2];return r[0]=i*x-t*v,r[1]=t*s-a*x,r[2]=a*v-i*s,r}var pr=W1;var ne=function(){var r=k();return function(e,n,a,i,t,s){var v,x;for(n||(n=3),a||(a=0),i?x=Math.min(i*n+a,e.length):x=e.length,v=a;v<x;v+=n)r[0]=e[v],r[1]=e[v+1],r[2]=e[v+2],t(r,r,s),e[v]=r[0],e[v+1]=r[1],e[v+2]=r[2];return e}}();function X1(){var r=new N(4);return N!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0,r[3]=0),r}function mr(r,e){var n=e[0],a=e[1],i=e[2],t=e[3],s=n*n+a*a+i*i+t*t;return s>0&&(s=1/Math.sqrt(s)),r[0]=n*s,r[1]=a*s,r[2]=i*s,r[3]=t*s,r}var ae=function(){var r=X1();return function(e,n,a,i,t,s){var v,x;for(n||(n=4),a||(a=0),i?x=Math.min(i*n+a,e.length):x=e.length,v=a;v<x;v+=n)r[0]=e[v],r[1]=e[v+1],r[2]=e[v+2],r[3]=e[v+3],t(r,r,s),e[v]=r[0],e[v+1]=r[1],e[v+2]=r[2],e[v+3]=r[3];return e}}();function Q(){var r=new N(4);return N!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r[3]=1,r}function k1(r,e,n){n=n*.5;var a=Math.sin(n);return r[0]=a*e[0],r[1]=a*e[1],r[2]=a*e[2],r[3]=Math.cos(n),r}function Z(r,e,n,a){var i=e[0],t=e[1],s=e[2],v=e[3],x=n[0],h=n[1],l=n[2],M=n[3],p,f,g,m,c;return f=i*x+t*h+s*l+v*M,f<0&&(f=-f,x=-x,h=-h,l=-l,M=-M),1-f>S?(p=Math.acos(f),g=Math.sin(p),m=Math.sin((1-a)*p)/g,c=Math.sin(a*p)/g):(m=1-a,c=a),r[0]=m*i+c*x,r[1]=m*t+c*h,r[2]=m*s+c*l,r[3]=m*v+c*M,r}function H1(r,e){var n=e[0]+e[4]+e[8],a;if(n>0)a=Math.sqrt(n+1),r[3]=.5*a,a=.5/a,r[0]=(e[5]-e[7])*a,r[1]=(e[6]-e[2])*a,r[2]=(e[1]-e[3])*a;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);var t=(i+1)%3,s=(i+2)%3;a=Math.sqrt(e[i*3+i]-e[t*3+t]-e[s*3+s]+1),r[i]=.5*a,a=.5/a,r[3]=(e[t*3+s]-e[s*3+t])*a,r[t]=(e[t*3+i]+e[i*3+t])*a,r[s]=(e[s*3+i]+e[i*3+s])*a}return r}var dr=mr;var me=function(){var r=k(),e=H(1,0,0),n=H(0,1,0);return function(a,i,t){var s=Mr(i,t);return s<-.999999?(G(r,e,i),pr(r)<1e-6&&G(r,n,i),cr(r,r),k1(a,r,Math.PI),a):s>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(G(r,i,t),a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=1+s,dr(a,a))}}(),ye=function(){var r=Q(),e=Q();return function(n,a,i,t,s,v){return Z(r,a,s,v),Z(e,i,t,v),Z(n,r,e,2*v*(1-v)),n}}(),de=function(){var r=W();return function(e,n,a,i){return r[0]=a[0],r[3]=a[1],r[6]=a[2],r[1]=i[0],r[4]=i[1],r[7]=i[2],r[2]=-n[0],r[5]=-n[1],r[8]=-n[2],dr(e,H1(e,r))}}();function Q1(){var r=new N(2);return N!=Float32Array&&(r[0]=0,r[1]=0),r}var Le=function(){var r=Q1();return function(e,n,a,i,t,s){var v,x;for(n||(n=2),a||(a=0),i?x=Math.min(i*n+a,e.length):x=e.length,v=a;v<x;v+=n)r[0]=e[v],r[1]=e[v+1],t(r,r,s),e[v]=r[0],e[v+1]=r[1];return e}}();var C=class{constructor(e,n){this.canvas=e;this.gl=n;this.trianglePosBuffer_itemSize=3;this.trianglePosBuffer_numItems=24;this.colorBuffer_itemSize=3;this.colorBuffer_numItems=24;this.normalBuffer_itemSize=3;this.normalBuffer_numItems=24;this.textureBuffer_itemSize=2;this.textureBuffer_numItems=24;this.render=()=>{this.gl.clearColor(0,0,0,.9),this.gl.enable(this.gl.DEPTH_TEST),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);let e=10;for(let n=0;n<e;n++)for(let a=0;a<e;a++)for(let i=0;i<e;i++)this.drawShape(n*200,a*200,i*200);this.dataUpdate(),requestAnimationFrame(this.render)};let a=document.getElementById("slider1"),i=document.getElementById("slider2");this.angle1=parseInt(a.value),this.angle2=parseInt(i.value),a.addEventListener("input",t=>{this.angle1=parseFloat(a.value)}),i.addEventListener("input",t=>{this.angle2=parseFloat(i.value)})}init(){this.shader_prog=this.createProgramFromScript("vertexShader","fragShader"),this.gl.useProgram(this.shader_prog),console.info("setting up attrs..."),this.pos_attr=this.gl.getAttribLocation(this.shader_prog,"vPosition"),this.gl.enableVertexAttribArray(this.pos_attr),this.color_attr=this.gl.getAttribLocation(this.shader_prog,"vColor"),this.gl.enableVertexAttribArray(this.color_attr),this.normal_attr=this.gl.getAttribLocation(this.shader_prog,"vNormal"),this.gl.enableVertexAttribArray(this.normal_attr),this.tex_attr=this.gl.getAttribLocation(this.shader_prog,"vTexCoord"),this.gl.enableVertexAttribArray(this.tex_attr),this.MVPmatrix=this.gl.getUniformLocation(this.shader_prog,"uMVP"),this.MVmatrix=this.gl.getUniformLocation(this.shader_prog,"uMV"),this.MVNormalmatrix=this.gl.getUniformLocation(this.shader_prog,"uMVn"),this.time=this.gl.getUniformLocation(this.shader_prog,"time"),this.texSampler1=this.gl.getUniformLocation(this.shader_prog,"texSampler1"),this.gl.uniform1i(this.texSampler1,0),this.texSampler2=this.gl.getUniformLocation(this.shader_prog,"texSampler2"),this.gl.uniform1i(this.texSampler2,1),console.info("buffering..."),this.trianglePosBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.trianglePosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,o,this.gl.STATIC_DRAW),this.trianglePosBuffer_itemSize=3,this.trianglePosBuffer_numItems=24;let e=[];for(let i=0;i<72;i++)e.push(this.randomBetween(0,1));this.vertCol=new Float32Array(e),this.colorBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.vertCol,this.gl.STATIC_DRAW),this.colorBuffer_itemSize=3,this.colorBuffer_numItems=24,this.normalBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.normalBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,u,this.gl.STATIC_DRAW),this.normalBuffer_itemSize=3,this.normalBuffer_numItems=24,this.textureBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.textureBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,rr,this.gl.STATIC_DRAW),this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,V,this.gl.STATIC_DRAW),this.texture1=this.gl.createTexture(),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null);let n=new Image;this.texture2=this.gl.createTexture(),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture2),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null);let a=new Image;n.onload=()=>{this.loadTexture(n,this.texture1)},n.crossOrigin="anonymous",n.src="https://farm6.staticflickr.com/5564/30725680942_e3bfe50e5e_b.jpg",a.onload=()=>{this.loadTexture(a,this.texture2)},a.crossOrigin="anonymous",a.src="https://farm6.staticflickr.com/5564/30725680942_e3bfe50e5e_b.jpg",console.info("init done"),this.positions=[];for(let i=0;i<100;i++)this.positions.push(this.randomBetween(-1,1)*10)}randomBetween(e,n){return Math.random()*(n-e)+e}loadTexture(e,n){this.gl.bindTexture(this.gl.TEXTURE_2D,n),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR)}drawShape(e,n,a){this.drawCube({translate:[e,n,a],scale:[200,200,10]}),this.drawCube({translate:[e,n,a],scale:[200,200,10],rotate:[{rotateVec:[1,0,0],rotateDeg:Math.PI/2}]}),this.drawCube({translate:[e,n,a],scale:[200,200,10],rotate:[{rotateVec:[0,1,0],rotateDeg:Math.PI/2}]})}drawCube({scale:e=[50,50,50],rotate:n=[],translate:a=[0,0,0]}){let i=[this.angle1*-2e3,this.angle2*600,-2e3],t=[1e3,700,0],s=[0,1,0],v=O.create();O.lookAt(v,i,t,s);let x=O.create();O.fromTranslation(x,a),n.forEach(f=>{O.rotate(x,x,f.rotateDeg,f.rotateVec)}),O.scale(x,x,e);let h=O.create();O.perspective(h,Math.PI/4,this.canvas.width/this.canvas.height,10,void 0);let l=O.create(),M=D.create(),p=O.create();O.multiply(l,v,x),D.normalFromMat4(M,l),O.multiply(p,h,l),this.gl.uniformMatrix4fv(this.MVPmatrix,!1,p),this.gl.uniformMatrix3fv(this.MVNormalmatrix,!1,M),this.gl.uniformMatrix4fv(this.MVmatrix,!1,l),this.gl.uniform1f(this.time,performance.now()*.001),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.vertexAttribPointer(this.color_attr,this.colorBuffer_itemSize,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.trianglePosBuffer),this.gl.vertexAttribPointer(this.pos_attr,this.trianglePosBuffer_itemSize,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.normalBuffer),this.gl.vertexAttribPointer(this.normal_attr,this.normalBuffer_itemSize,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.textureBuffer),this.gl.vertexAttribPointer(this.tex_attr,this.textureBuffer_itemSize,this.gl.FLOAT,!1,0,0),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture1),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture2),this.gl.drawElements(this.gl.TRIANGLES,V.length,this.gl.UNSIGNED_BYTE,0)}dataUpdate(){}compileShader(e,n){let a=this.gl.createShader(n);return this.gl.shaderSource(a,e),this.gl.compileShader(a),this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS)||console.error("compiling shader failed: ",this.gl.getShaderInfoLog(a)),a}createProgram(e,n){let a=this.gl.createProgram();return this.gl.attachShader(a,e),this.gl.attachShader(a,n),this.gl.linkProgram(a),this.gl.getProgramParameter(a,this.gl.LINK_STATUS)||console.error("linking error: ",this.gl.getProgramInfoLog(a)),a}createShaderFromScript(e,n){let a=document.getElementById(e).text;return this.compileShader(a,n)}createProgramFromScript(e,n){let a=this.createShaderFromScript(e,this.gl.VERTEX_SHADER),i=this.createShaderFromScript(n,this.gl.FRAGMENT_SHADER);return this.createProgram(a,i)}};var{canvas:J1,gl:K1}=$(),Ar=new C(J1,K1);Ar.init();Ar.render();})();
//# sourceMappingURL=index.js.map