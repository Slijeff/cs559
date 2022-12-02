"use strict";(()=>{var yr=Object.defineProperty;var dr=(r,e)=>{for(var a in e)yr(r,a,{get:e[a],enumerable:!0})};function j(){let r=document.getElementById("myCanvas"),e=r.getContext("webgl");return{canvas:r,gl:e}}var J=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),K=new Float32Array([.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5,.5]),U=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);var T=1e-6,Y=typeof Float32Array!="undefined"?Float32Array:Array;var P1=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var r=0,e=arguments.length;e--;)r+=arguments[e]*arguments[e];return Math.sqrt(r)});function $(){var r=new Y(9);return Y!=Float32Array&&(r[1]=0,r[2]=0,r[3]=0,r[5]=0,r[6]=0,r[7]=0),r[0]=1,r[4]=1,r[8]=1,r}var _={};dr(_,{add:()=>a1,adjoint:()=>Ir,clone:()=>Pr,copy:()=>zr,create:()=>Rr,decompose:()=>kr,determinant:()=>Yr,equals:()=>s1,exactEquals:()=>v1,frob:()=>n1,fromQuat:()=>Zr,fromQuat2:()=>Hr,fromRotation:()=>br,fromRotationTranslation:()=>er,fromRotationTranslationScale:()=>Wr,fromRotationTranslationScaleOrigin:()=>Xr,fromScaling:()=>Cr,fromTranslation:()=>Dr,fromValues:()=>Sr,fromXRotation:()=>Vr,fromYRotation:()=>Ur,fromZRotation:()=>Gr,frustum:()=>Qr,getRotation:()=>ir,getScaling:()=>ar,getTranslation:()=>nr,identity:()=>u,invert:()=>wr,lookAt:()=>ur,mul:()=>x1,multiply:()=>rr,multiplyScalar:()=>i1,multiplyScalarAndAdd:()=>t1,ortho:()=>$r,orthoNO:()=>vr,orthoZO:()=>or,perspective:()=>jr,perspectiveFromFieldOfView:()=>Kr,perspectiveNO:()=>tr,perspectiveZO:()=>Jr,rotate:()=>qr,rotateX:()=>_r,rotateY:()=>Br,rotateZ:()=>Fr,scale:()=>Nr,set:()=>Lr,str:()=>e1,sub:()=>h1,subtract:()=>sr,targetTo:()=>r1,translate:()=>Or,transpose:()=>Tr});function Rr(){var r=new Y(16);return Y!=Float32Array&&(r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0),r[0]=1,r[5]=1,r[10]=1,r[15]=1,r}function Pr(r){var e=new Y(16);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],e}function zr(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function Sr(r,e,a,n,i,t,v,s,x,h,c,l,p,f,g,m){var M=new Y(16);return M[0]=r,M[1]=e,M[2]=a,M[3]=n,M[4]=i,M[5]=t,M[6]=v,M[7]=s,M[8]=x,M[9]=h,M[10]=c,M[11]=l,M[12]=p,M[13]=f,M[14]=g,M[15]=m,M}function Lr(r,e,a,n,i,t,v,s,x,h,c,l,p,f,g,m,M){return r[0]=e,r[1]=a,r[2]=n,r[3]=i,r[4]=t,r[5]=v,r[6]=s,r[7]=x,r[8]=h,r[9]=c,r[10]=l,r[11]=p,r[12]=f,r[13]=g,r[14]=m,r[15]=M,r}function u(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Tr(r,e){if(r===e){var a=e[1],n=e[2],i=e[3],t=e[6],v=e[7],s=e[11];r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=a,r[6]=e[9],r[7]=e[13],r[8]=n,r[9]=t,r[11]=e[14],r[12]=i,r[13]=v,r[14]=s}else r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15];return r}function wr(r,e){var a=e[0],n=e[1],i=e[2],t=e[3],v=e[4],s=e[5],x=e[6],h=e[7],c=e[8],l=e[9],p=e[10],f=e[11],g=e[12],m=e[13],M=e[14],R=e[15],z=a*s-n*v,E=a*x-i*v,y=a*h-t*v,d=n*x-i*s,A=n*h-t*s,w=i*h-t*x,S=c*m-l*g,I=c*M-p*g,P=c*R-f*g,O=l*M-p*m,N=l*R-f*m,q=p*R-f*M,L=z*q-E*N+y*O+d*P-A*I+w*S;return L?(L=1/L,r[0]=(s*q-x*N+h*O)*L,r[1]=(i*N-n*q-t*O)*L,r[2]=(m*w-M*A+R*d)*L,r[3]=(p*A-l*w-f*d)*L,r[4]=(x*P-v*q-h*I)*L,r[5]=(a*q-i*P+t*I)*L,r[6]=(M*y-g*w-R*E)*L,r[7]=(c*w-p*y+f*E)*L,r[8]=(v*N-s*P+h*S)*L,r[9]=(n*P-a*N-t*S)*L,r[10]=(g*A-m*y+R*z)*L,r[11]=(l*y-c*A-f*z)*L,r[12]=(s*I-v*O-x*S)*L,r[13]=(a*O-n*I+i*S)*L,r[14]=(m*E-g*d-M*z)*L,r[15]=(c*d-l*E+p*z)*L,r):null}function Ir(r,e){var a=e[0],n=e[1],i=e[2],t=e[3],v=e[4],s=e[5],x=e[6],h=e[7],c=e[8],l=e[9],p=e[10],f=e[11],g=e[12],m=e[13],M=e[14],R=e[15],z=a*s-n*v,E=a*x-i*v,y=a*h-t*v,d=n*x-i*s,A=n*h-t*s,w=i*h-t*x,S=c*m-l*g,I=c*M-p*g,P=c*R-f*g,O=l*M-p*m,N=l*R-f*m,q=p*R-f*M;return r[0]=s*q-x*N+h*O,r[1]=i*N-n*q-t*O,r[2]=m*w-M*A+R*d,r[3]=p*A-l*w-f*d,r[4]=x*P-v*q-h*I,r[5]=a*q-i*P+t*I,r[6]=M*y-g*w-R*E,r[7]=c*w-p*y+f*E,r[8]=v*N-s*P+h*S,r[9]=n*P-a*N-t*S,r[10]=g*A-m*y+R*z,r[11]=l*y-c*A-f*z,r[12]=s*I-v*O-x*S,r[13]=a*O-n*I+i*S,r[14]=m*E-g*d-M*z,r[15]=c*d-l*E+p*z,r}function Yr(r){var e=r[0],a=r[1],n=r[2],i=r[3],t=r[4],v=r[5],s=r[6],x=r[7],h=r[8],c=r[9],l=r[10],p=r[11],f=r[12],g=r[13],m=r[14],M=r[15],R=e*v-a*t,z=e*s-n*t,E=a*s-n*v,y=h*g-c*f,d=h*m-l*f,A=c*m-l*g,w=e*A-a*d+n*y,S=t*A-v*d+s*y,I=h*E-c*z+l*R,P=f*E-g*z+m*R;return x*w-i*S+M*I-p*P}function rr(r,e,a){var n=e[0],i=e[1],t=e[2],v=e[3],s=e[4],x=e[5],h=e[6],c=e[7],l=e[8],p=e[9],f=e[10],g=e[11],m=e[12],M=e[13],R=e[14],z=e[15],E=a[0],y=a[1],d=a[2],A=a[3];return r[0]=E*n+y*s+d*l+A*m,r[1]=E*i+y*x+d*p+A*M,r[2]=E*t+y*h+d*f+A*R,r[3]=E*v+y*c+d*g+A*z,E=a[4],y=a[5],d=a[6],A=a[7],r[4]=E*n+y*s+d*l+A*m,r[5]=E*i+y*x+d*p+A*M,r[6]=E*t+y*h+d*f+A*R,r[7]=E*v+y*c+d*g+A*z,E=a[8],y=a[9],d=a[10],A=a[11],r[8]=E*n+y*s+d*l+A*m,r[9]=E*i+y*x+d*p+A*M,r[10]=E*t+y*h+d*f+A*R,r[11]=E*v+y*c+d*g+A*z,E=a[12],y=a[13],d=a[14],A=a[15],r[12]=E*n+y*s+d*l+A*m,r[13]=E*i+y*x+d*p+A*M,r[14]=E*t+y*h+d*f+A*R,r[15]=E*v+y*c+d*g+A*z,r}function Or(r,e,a){var n=a[0],i=a[1],t=a[2],v,s,x,h,c,l,p,f,g,m,M,R;return e===r?(r[12]=e[0]*n+e[4]*i+e[8]*t+e[12],r[13]=e[1]*n+e[5]*i+e[9]*t+e[13],r[14]=e[2]*n+e[6]*i+e[10]*t+e[14],r[15]=e[3]*n+e[7]*i+e[11]*t+e[15]):(v=e[0],s=e[1],x=e[2],h=e[3],c=e[4],l=e[5],p=e[6],f=e[7],g=e[8],m=e[9],M=e[10],R=e[11],r[0]=v,r[1]=s,r[2]=x,r[3]=h,r[4]=c,r[5]=l,r[6]=p,r[7]=f,r[8]=g,r[9]=m,r[10]=M,r[11]=R,r[12]=v*n+c*i+g*t+e[12],r[13]=s*n+l*i+m*t+e[13],r[14]=x*n+p*i+M*t+e[14],r[15]=h*n+f*i+R*t+e[15]),r}function Nr(r,e,a){var n=a[0],i=a[1],t=a[2];return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r[4]=e[4]*i,r[5]=e[5]*i,r[6]=e[6]*i,r[7]=e[7]*i,r[8]=e[8]*t,r[9]=e[9]*t,r[10]=e[10]*t,r[11]=e[11]*t,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function qr(r,e,a,n){var i=n[0],t=n[1],v=n[2],s=Math.hypot(i,t,v),x,h,c,l,p,f,g,m,M,R,z,E,y,d,A,w,S,I,P,O,N,q,L,B;return s<T?null:(s=1/s,i*=s,t*=s,v*=s,x=Math.sin(a),h=Math.cos(a),c=1-h,l=e[0],p=e[1],f=e[2],g=e[3],m=e[4],M=e[5],R=e[6],z=e[7],E=e[8],y=e[9],d=e[10],A=e[11],w=i*i*c+h,S=t*i*c+v*x,I=v*i*c-t*x,P=i*t*c-v*x,O=t*t*c+h,N=v*t*c+i*x,q=i*v*c+t*x,L=t*v*c-i*x,B=v*v*c+h,r[0]=l*w+m*S+E*I,r[1]=p*w+M*S+y*I,r[2]=f*w+R*S+d*I,r[3]=g*w+z*S+A*I,r[4]=l*P+m*O+E*N,r[5]=p*P+M*O+y*N,r[6]=f*P+R*O+d*N,r[7]=g*P+z*O+A*N,r[8]=l*q+m*L+E*B,r[9]=p*q+M*L+y*B,r[10]=f*q+R*L+d*B,r[11]=g*q+z*L+A*B,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r)}function _r(r,e,a){var n=Math.sin(a),i=Math.cos(a),t=e[4],v=e[5],s=e[6],x=e[7],h=e[8],c=e[9],l=e[10],p=e[11];return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[4]=t*i+h*n,r[5]=v*i+c*n,r[6]=s*i+l*n,r[7]=x*i+p*n,r[8]=h*i-t*n,r[9]=c*i-v*n,r[10]=l*i-s*n,r[11]=p*i-x*n,r}function Br(r,e,a){var n=Math.sin(a),i=Math.cos(a),t=e[0],v=e[1],s=e[2],x=e[3],h=e[8],c=e[9],l=e[10],p=e[11];return e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[0]=t*i-h*n,r[1]=v*i-c*n,r[2]=s*i-l*n,r[3]=x*i-p*n,r[8]=t*n+h*i,r[9]=v*n+c*i,r[10]=s*n+l*i,r[11]=x*n+p*i,r}function Fr(r,e,a){var n=Math.sin(a),i=Math.cos(a),t=e[0],v=e[1],s=e[2],x=e[3],h=e[4],c=e[5],l=e[6],p=e[7];return e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[0]=t*i+h*n,r[1]=v*i+c*n,r[2]=s*i+l*n,r[3]=x*i+p*n,r[4]=h*i-t*n,r[5]=c*i-v*n,r[6]=l*i-s*n,r[7]=p*i-x*n,r}function Dr(r,e){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function Cr(r,e){return r[0]=e[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=e[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=e[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function br(r,e,a){var n=a[0],i=a[1],t=a[2],v=Math.hypot(n,i,t),s,x,h;return v<T?null:(v=1/v,n*=v,i*=v,t*=v,s=Math.sin(e),x=Math.cos(e),h=1-x,r[0]=n*n*h+x,r[1]=i*n*h+t*s,r[2]=t*n*h-i*s,r[3]=0,r[4]=n*i*h-t*s,r[5]=i*i*h+x,r[6]=t*i*h+n*s,r[7]=0,r[8]=n*t*h+i*s,r[9]=i*t*h-n*s,r[10]=t*t*h+x,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r)}function Vr(r,e){var a=Math.sin(e),n=Math.cos(e);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=n,r[6]=a,r[7]=0,r[8]=0,r[9]=-a,r[10]=n,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Ur(r,e){var a=Math.sin(e),n=Math.cos(e);return r[0]=n,r[1]=0,r[2]=-a,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=a,r[9]=0,r[10]=n,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Gr(r,e){var a=Math.sin(e),n=Math.cos(e);return r[0]=n,r[1]=a,r[2]=0,r[3]=0,r[4]=-a,r[5]=n,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function er(r,e,a){var n=e[0],i=e[1],t=e[2],v=e[3],s=n+n,x=i+i,h=t+t,c=n*s,l=n*x,p=n*h,f=i*x,g=i*h,m=t*h,M=v*s,R=v*x,z=v*h;return r[0]=1-(f+m),r[1]=l+z,r[2]=p-R,r[3]=0,r[4]=l-z,r[5]=1-(c+m),r[6]=g+M,r[7]=0,r[8]=p+R,r[9]=g-M,r[10]=1-(c+f),r[11]=0,r[12]=a[0],r[13]=a[1],r[14]=a[2],r[15]=1,r}function Hr(r,e){var a=new Y(3),n=-e[0],i=-e[1],t=-e[2],v=e[3],s=e[4],x=e[5],h=e[6],c=e[7],l=n*n+i*i+t*t+v*v;return l>0?(a[0]=(s*v+c*n+x*t-h*i)*2/l,a[1]=(x*v+c*i+h*n-s*t)*2/l,a[2]=(h*v+c*t+s*i-x*n)*2/l):(a[0]=(s*v+c*n+x*t-h*i)*2,a[1]=(x*v+c*i+h*n-s*t)*2,a[2]=(h*v+c*t+s*i-x*n)*2),er(r,e,a),r}function nr(r,e){return r[0]=e[12],r[1]=e[13],r[2]=e[14],r}function ar(r,e){var a=e[0],n=e[1],i=e[2],t=e[4],v=e[5],s=e[6],x=e[8],h=e[9],c=e[10];return r[0]=Math.hypot(a,n,i),r[1]=Math.hypot(t,v,s),r[2]=Math.hypot(x,h,c),r}function ir(r,e){var a=new Y(3);ar(a,e);var n=1/a[0],i=1/a[1],t=1/a[2],v=e[0]*n,s=e[1]*i,x=e[2]*t,h=e[4]*n,c=e[5]*i,l=e[6]*t,p=e[8]*n,f=e[9]*i,g=e[10]*t,m=v+c+g,M=0;return m>0?(M=Math.sqrt(m+1)*2,r[3]=.25*M,r[0]=(l-f)/M,r[1]=(p-x)/M,r[2]=(s-h)/M):v>c&&v>g?(M=Math.sqrt(1+v-c-g)*2,r[3]=(l-f)/M,r[0]=.25*M,r[1]=(s+h)/M,r[2]=(p+x)/M):c>g?(M=Math.sqrt(1+c-v-g)*2,r[3]=(p-x)/M,r[0]=(s+h)/M,r[1]=.25*M,r[2]=(l+f)/M):(M=Math.sqrt(1+g-v-c)*2,r[3]=(s-h)/M,r[0]=(p+x)/M,r[1]=(l+f)/M,r[2]=.25*M),r}function kr(r,e,a,n){e[0]=n[12],e[1]=n[13],e[2]=n[14];var i=n[0],t=n[1],v=n[2],s=n[4],x=n[5],h=n[6],c=n[8],l=n[9],p=n[10];a[0]=Math.hypot(i,t,v),a[1]=Math.hypot(s,x,h),a[2]=Math.hypot(c,l,p);var f=1/a[0],g=1/a[1],m=1/a[2],M=i*f,R=t*g,z=v*m,E=s*f,y=x*g,d=h*m,A=c*f,w=l*g,S=p*m,I=M+y+S,P=0;return I>0?(P=Math.sqrt(I+1)*2,r[3]=.25*P,r[0]=(d-w)/P,r[1]=(A-z)/P,r[2]=(R-E)/P):M>y&&M>S?(P=Math.sqrt(1+M-y-S)*2,r[3]=(d-w)/P,r[0]=.25*P,r[1]=(R+E)/P,r[2]=(A+z)/P):y>S?(P=Math.sqrt(1+y-M-S)*2,r[3]=(A-z)/P,r[0]=(R+E)/P,r[1]=.25*P,r[2]=(d+w)/P):(P=Math.sqrt(1+S-M-y)*2,r[3]=(R-E)/P,r[0]=(A+z)/P,r[1]=(d+w)/P,r[2]=.25*P),r}function Wr(r,e,a,n){var i=e[0],t=e[1],v=e[2],s=e[3],x=i+i,h=t+t,c=v+v,l=i*x,p=i*h,f=i*c,g=t*h,m=t*c,M=v*c,R=s*x,z=s*h,E=s*c,y=n[0],d=n[1],A=n[2];return r[0]=(1-(g+M))*y,r[1]=(p+E)*y,r[2]=(f-z)*y,r[3]=0,r[4]=(p-E)*d,r[5]=(1-(l+M))*d,r[6]=(m+R)*d,r[7]=0,r[8]=(f+z)*A,r[9]=(m-R)*A,r[10]=(1-(l+g))*A,r[11]=0,r[12]=a[0],r[13]=a[1],r[14]=a[2],r[15]=1,r}function Xr(r,e,a,n,i){var t=e[0],v=e[1],s=e[2],x=e[3],h=t+t,c=v+v,l=s+s,p=t*h,f=t*c,g=t*l,m=v*c,M=v*l,R=s*l,z=x*h,E=x*c,y=x*l,d=n[0],A=n[1],w=n[2],S=i[0],I=i[1],P=i[2],O=(1-(m+R))*d,N=(f+y)*d,q=(g-E)*d,L=(f-y)*A,B=(1-(p+R))*A,D=(M+z)*A,C=(g+E)*w,Z=(M-z)*w,Q=(1-(p+m))*w;return r[0]=O,r[1]=N,r[2]=q,r[3]=0,r[4]=L,r[5]=B,r[6]=D,r[7]=0,r[8]=C,r[9]=Z,r[10]=Q,r[11]=0,r[12]=a[0]+S-(O*S+L*I+C*P),r[13]=a[1]+I-(N*S+B*I+Z*P),r[14]=a[2]+P-(q*S+D*I+Q*P),r[15]=1,r}function Zr(r,e){var a=e[0],n=e[1],i=e[2],t=e[3],v=a+a,s=n+n,x=i+i,h=a*v,c=n*v,l=n*s,p=i*v,f=i*s,g=i*x,m=t*v,M=t*s,R=t*x;return r[0]=1-l-g,r[1]=c+R,r[2]=p-M,r[3]=0,r[4]=c-R,r[5]=1-h-g,r[6]=f+m,r[7]=0,r[8]=p+M,r[9]=f-m,r[10]=1-h-l,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Qr(r,e,a,n,i,t,v){var s=1/(a-e),x=1/(i-n),h=1/(t-v);return r[0]=t*2*s,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t*2*x,r[6]=0,r[7]=0,r[8]=(a+e)*s,r[9]=(i+n)*x,r[10]=(v+t)*h,r[11]=-1,r[12]=0,r[13]=0,r[14]=v*t*2*h,r[15]=0,r}function tr(r,e,a,n,i){var t=1/Math.tan(e/2);if(r[0]=t/a,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,i!=null&&i!==1/0){var v=1/(n-i);r[10]=(i+n)*v,r[14]=2*i*n*v}else r[10]=-1,r[14]=-2*n;return r}var jr=tr;function Jr(r,e,a,n,i){var t=1/Math.tan(e/2);if(r[0]=t/a,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,i!=null&&i!==1/0){var v=1/(n-i);r[10]=i*v,r[14]=i*n*v}else r[10]=-1,r[14]=-n;return r}function Kr(r,e,a,n){var i=Math.tan(e.upDegrees*Math.PI/180),t=Math.tan(e.downDegrees*Math.PI/180),v=Math.tan(e.leftDegrees*Math.PI/180),s=Math.tan(e.rightDegrees*Math.PI/180),x=2/(v+s),h=2/(i+t);return r[0]=x,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=h,r[6]=0,r[7]=0,r[8]=-((v-s)*x*.5),r[9]=(i-t)*h*.5,r[10]=n/(a-n),r[11]=-1,r[12]=0,r[13]=0,r[14]=n*a/(a-n),r[15]=0,r}function vr(r,e,a,n,i,t,v){var s=1/(e-a),x=1/(n-i),h=1/(t-v);return r[0]=-2*s,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*x,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*h,r[11]=0,r[12]=(e+a)*s,r[13]=(i+n)*x,r[14]=(v+t)*h,r[15]=1,r}var $r=vr;function or(r,e,a,n,i,t,v){var s=1/(e-a),x=1/(n-i),h=1/(t-v);return r[0]=-2*s,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*x,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=h,r[11]=0,r[12]=(e+a)*s,r[13]=(i+n)*x,r[14]=t*h,r[15]=1,r}function ur(r,e,a,n){var i,t,v,s,x,h,c,l,p,f,g=e[0],m=e[1],M=e[2],R=n[0],z=n[1],E=n[2],y=a[0],d=a[1],A=a[2];return Math.abs(g-y)<T&&Math.abs(m-d)<T&&Math.abs(M-A)<T?u(r):(c=g-y,l=m-d,p=M-A,f=1/Math.hypot(c,l,p),c*=f,l*=f,p*=f,i=z*p-E*l,t=E*c-R*p,v=R*l-z*c,f=Math.hypot(i,t,v),f?(f=1/f,i*=f,t*=f,v*=f):(i=0,t=0,v=0),s=l*v-p*t,x=p*i-c*v,h=c*t-l*i,f=Math.hypot(s,x,h),f?(f=1/f,s*=f,x*=f,h*=f):(s=0,x=0,h=0),r[0]=i,r[1]=s,r[2]=c,r[3]=0,r[4]=t,r[5]=x,r[6]=l,r[7]=0,r[8]=v,r[9]=h,r[10]=p,r[11]=0,r[12]=-(i*g+t*m+v*M),r[13]=-(s*g+x*m+h*M),r[14]=-(c*g+l*m+p*M),r[15]=1,r)}function r1(r,e,a,n){var i=e[0],t=e[1],v=e[2],s=n[0],x=n[1],h=n[2],c=i-a[0],l=t-a[1],p=v-a[2],f=c*c+l*l+p*p;f>0&&(f=1/Math.sqrt(f),c*=f,l*=f,p*=f);var g=x*p-h*l,m=h*c-s*p,M=s*l-x*c;return f=g*g+m*m+M*M,f>0&&(f=1/Math.sqrt(f),g*=f,m*=f,M*=f),r[0]=g,r[1]=m,r[2]=M,r[3]=0,r[4]=l*M-p*m,r[5]=p*g-c*M,r[6]=c*m-l*g,r[7]=0,r[8]=c,r[9]=l,r[10]=p,r[11]=0,r[12]=i,r[13]=t,r[14]=v,r[15]=1,r}function e1(r){return"mat4("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+", "+r[4]+", "+r[5]+", "+r[6]+", "+r[7]+", "+r[8]+", "+r[9]+", "+r[10]+", "+r[11]+", "+r[12]+", "+r[13]+", "+r[14]+", "+r[15]+")"}function n1(r){return Math.hypot(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])}function a1(r,e,a){return r[0]=e[0]+a[0],r[1]=e[1]+a[1],r[2]=e[2]+a[2],r[3]=e[3]+a[3],r[4]=e[4]+a[4],r[5]=e[5]+a[5],r[6]=e[6]+a[6],r[7]=e[7]+a[7],r[8]=e[8]+a[8],r[9]=e[9]+a[9],r[10]=e[10]+a[10],r[11]=e[11]+a[11],r[12]=e[12]+a[12],r[13]=e[13]+a[13],r[14]=e[14]+a[14],r[15]=e[15]+a[15],r}function sr(r,e,a){return r[0]=e[0]-a[0],r[1]=e[1]-a[1],r[2]=e[2]-a[2],r[3]=e[3]-a[3],r[4]=e[4]-a[4],r[5]=e[5]-a[5],r[6]=e[6]-a[6],r[7]=e[7]-a[7],r[8]=e[8]-a[8],r[9]=e[9]-a[9],r[10]=e[10]-a[10],r[11]=e[11]-a[11],r[12]=e[12]-a[12],r[13]=e[13]-a[13],r[14]=e[14]-a[14],r[15]=e[15]-a[15],r}function i1(r,e,a){return r[0]=e[0]*a,r[1]=e[1]*a,r[2]=e[2]*a,r[3]=e[3]*a,r[4]=e[4]*a,r[5]=e[5]*a,r[6]=e[6]*a,r[7]=e[7]*a,r[8]=e[8]*a,r[9]=e[9]*a,r[10]=e[10]*a,r[11]=e[11]*a,r[12]=e[12]*a,r[13]=e[13]*a,r[14]=e[14]*a,r[15]=e[15]*a,r}function t1(r,e,a,n){return r[0]=e[0]+a[0]*n,r[1]=e[1]+a[1]*n,r[2]=e[2]+a[2]*n,r[3]=e[3]+a[3]*n,r[4]=e[4]+a[4]*n,r[5]=e[5]+a[5]*n,r[6]=e[6]+a[6]*n,r[7]=e[7]+a[7]*n,r[8]=e[8]+a[8]*n,r[9]=e[9]+a[9]*n,r[10]=e[10]+a[10]*n,r[11]=e[11]+a[11]*n,r[12]=e[12]+a[12]*n,r[13]=e[13]+a[13]*n,r[14]=e[14]+a[14]*n,r[15]=e[15]+a[15]*n,r}function v1(r,e){return r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]&&r[3]===e[3]&&r[4]===e[4]&&r[5]===e[5]&&r[6]===e[6]&&r[7]===e[7]&&r[8]===e[8]&&r[9]===e[9]&&r[10]===e[10]&&r[11]===e[11]&&r[12]===e[12]&&r[13]===e[13]&&r[14]===e[14]&&r[15]===e[15]}function s1(r,e){var a=r[0],n=r[1],i=r[2],t=r[3],v=r[4],s=r[5],x=r[6],h=r[7],c=r[8],l=r[9],p=r[10],f=r[11],g=r[12],m=r[13],M=r[14],R=r[15],z=e[0],E=e[1],y=e[2],d=e[3],A=e[4],w=e[5],S=e[6],I=e[7],P=e[8],O=e[9],N=e[10],q=e[11],L=e[12],B=e[13],D=e[14],C=e[15];return Math.abs(a-z)<=T*Math.max(1,Math.abs(a),Math.abs(z))&&Math.abs(n-E)<=T*Math.max(1,Math.abs(n),Math.abs(E))&&Math.abs(i-y)<=T*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(t-d)<=T*Math.max(1,Math.abs(t),Math.abs(d))&&Math.abs(v-A)<=T*Math.max(1,Math.abs(v),Math.abs(A))&&Math.abs(s-w)<=T*Math.max(1,Math.abs(s),Math.abs(w))&&Math.abs(x-S)<=T*Math.max(1,Math.abs(x),Math.abs(S))&&Math.abs(h-I)<=T*Math.max(1,Math.abs(h),Math.abs(I))&&Math.abs(c-P)<=T*Math.max(1,Math.abs(c),Math.abs(P))&&Math.abs(l-O)<=T*Math.max(1,Math.abs(l),Math.abs(O))&&Math.abs(p-N)<=T*Math.max(1,Math.abs(p),Math.abs(N))&&Math.abs(f-q)<=T*Math.max(1,Math.abs(f),Math.abs(q))&&Math.abs(g-L)<=T*Math.max(1,Math.abs(g),Math.abs(L))&&Math.abs(m-B)<=T*Math.max(1,Math.abs(m),Math.abs(B))&&Math.abs(M-D)<=T*Math.max(1,Math.abs(M),Math.abs(D))&&Math.abs(R-C)<=T*Math.max(1,Math.abs(R),Math.abs(C))}var x1=rr,h1=sr;function H(){var r=new Y(3);return Y!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r}function M1(r){var e=r[0],a=r[1],n=r[2];return Math.hypot(e,a,n)}function k(r,e,a){var n=new Y(3);return n[0]=r,n[1]=e,n[2]=a,n}function xr(r,e){var a=e[0],n=e[1],i=e[2],t=a*a+n*n+i*i;return t>0&&(t=1/Math.sqrt(t)),r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r}function hr(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function V(r,e,a){var n=e[0],i=e[1],t=e[2],v=a[0],s=a[1],x=a[2];return r[0]=i*x-t*s,r[1]=t*v-n*x,r[2]=n*s-i*v,r}var Mr=M1;var z1=function(){var r=H();return function(e,a,n,i,t,v){var s,x;for(a||(a=3),n||(n=0),i?x=Math.min(i*a+n,e.length):x=e.length,s=n;s<x;s+=a)r[0]=e[s],r[1]=e[s+1],r[2]=e[s+2],t(r,r,v),e[s]=r[0],e[s+1]=r[1],e[s+2]=r[2];return e}}();function c1(){var r=new Y(4);return Y!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0,r[3]=0),r}function fr(r,e){var a=e[0],n=e[1],i=e[2],t=e[3],v=a*a+n*n+i*i+t*t;return v>0&&(v=1/Math.sqrt(v)),r[0]=a*v,r[1]=n*v,r[2]=i*v,r[3]=t*v,r}var S1=function(){var r=c1();return function(e,a,n,i,t,v){var s,x;for(a||(a=4),n||(n=0),i?x=Math.min(i*a+n,e.length):x=e.length,s=n;s<x;s+=a)r[0]=e[s],r[1]=e[s+1],r[2]=e[s+2],r[3]=e[s+3],t(r,r,v),e[s]=r[0],e[s+1]=r[1],e[s+2]=r[2],e[s+3]=r[3];return e}}();function X(){var r=new Y(4);return Y!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r[3]=1,r}function f1(r,e,a){a=a*.5;var n=Math.sin(a);return r[0]=n*e[0],r[1]=n*e[1],r[2]=n*e[2],r[3]=Math.cos(a),r}function W(r,e,a,n){var i=e[0],t=e[1],v=e[2],s=e[3],x=a[0],h=a[1],c=a[2],l=a[3],p,f,g,m,M;return f=i*x+t*h+v*c+s*l,f<0&&(f=-f,x=-x,h=-h,c=-c,l=-l),1-f>T?(p=Math.acos(f),g=Math.sin(p),m=Math.sin((1-n)*p)/g,M=Math.sin(n*p)/g):(m=1-n,M=n),r[0]=m*i+M*x,r[1]=m*t+M*h,r[2]=m*v+M*c,r[3]=m*s+M*l,r}function l1(r,e){var a=e[0]+e[4]+e[8],n;if(a>0)n=Math.sqrt(a+1),r[3]=.5*n,n=.5/n,r[0]=(e[5]-e[7])*n,r[1]=(e[6]-e[2])*n,r[2]=(e[1]-e[3])*n;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[i*3+i]&&(i=2);var t=(i+1)%3,v=(i+2)%3;n=Math.sqrt(e[i*3+i]-e[t*3+t]-e[v*3+v]+1),r[i]=.5*n,n=.5/n,r[3]=(e[t*3+v]-e[v*3+t])*n,r[t]=(e[t*3+i]+e[i*3+t])*n,r[v]=(e[v*3+i]+e[i*3+v])*n}return r}var pr=fr;var C1=function(){var r=H(),e=k(1,0,0),a=k(0,1,0);return function(n,i,t){var v=hr(i,t);return v<-.999999?(V(r,e,i),Mr(r)<1e-6&&V(r,a,i),xr(r,r),f1(n,r,Math.PI),n):v>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(V(r,i,t),n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=1+v,pr(n,n))}}(),b1=function(){var r=X(),e=X();return function(a,n,i,t,v,s){return W(r,n,v,s),W(e,i,t,s),W(a,r,e,2*s*(1-s)),a}}(),V1=function(){var r=$();return function(e,a,n,i){return r[0]=n[0],r[3]=n[1],r[6]=n[2],r[1]=i[0],r[4]=i[1],r[7]=i[2],r[2]=-a[0],r[5]=-a[1],r[8]=-a[2],pr(e,l1(e,r))}}();function g1(){var r=new Y(2);return Y!=Float32Array&&(r[0]=0,r[1]=0),r}var Q1=function(){var r=g1();return function(e,a,n,i,t,v){var s,x;for(a||(a=2),n||(n=0),i?x=Math.min(i*a+n,e.length):x=e.length,s=n;s<x;s+=a)r[0]=e[s],r[1]=e[s+1],t(r,r,v),e[s]=r[0],e[s+1]=r[1];return e}}();var b=class{constructor(e,a){this.canvas=e;this.gl=a;this.trianglePosBuffer_itemSize=3;this.trianglePosBuffer_numItems=24;this.colorBuffer_itemSize=3;this.colorBuffer_numItems=24;this.render=()=>{let e=[500*Math.sin(this.angle1),200,500*Math.cos(this.angle1)],a=[0,0,0],n=[0,1,0],i=_.create();_.fromScaling(i,[100,100,100]),_.rotate(i,i,this.angle2,[1,0,1]);let t=_.create();_.lookAt(t,e,a,n);let v=_.create();_.perspective(v,Math.PI/4,this.canvas.width/this.canvas.height,10,1e3);let s=_.create();_.multiply(s,t,i),_.multiply(s,v,s),this.gl.clearColor(0,0,0,1),this.gl.enable(this.gl.DEPTH_TEST),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.uniformMatrix4fv(this.MVPmatrix,!1,s),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.vertexAttribPointer(this.color_attr,this.colorBuffer_itemSize,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.trianglePosBuffer),this.gl.vertexAttribPointer(this.pos_attr,this.trianglePosBuffer_itemSize,this.gl.FLOAT,!1,0,0),this.gl.drawElements(this.gl.TRIANGLES,U.length,this.gl.UNSIGNED_BYTE,0),this.dataUpdate(),requestAnimationFrame(this.render)};let n=document.getElementById("slider1"),i=document.getElementById("slider2");this.angle1=parseInt(n.value),this.angle2=parseInt(i.value),n.addEventListener("input",t=>{this.angle1=parseFloat(n.value)}),i.addEventListener("input",t=>{this.angle2=parseFloat(i.value)})}init(){console.info("initializing...");let e=document.getElementById("vertextShader").text,a=document.getElementById("fragShader").text;console.info("compiling vertext...");let n=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(n,e),this.gl.compileShader(n),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)||console.error("compiling vertex shader failed: ",this.gl.getShaderInfoLog(n)),console.info("compiling fragment...");let i=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(i,a),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)||console.error("compiling vertex shader failed: ",this.gl.getShaderInfoLog(i)),console.info("linking..."),this.shader_prog=this.gl.createProgram(),this.gl.attachShader(this.shader_prog,n),this.gl.attachShader(this.shader_prog,i),this.gl.linkProgram(this.shader_prog),this.gl.getProgramParameter(this.shader_prog,this.gl.LINK_STATUS)||console.error("linking error"),this.gl.useProgram(this.shader_prog),console.info("setting up attrs..."),this.pos_attr=this.gl.getAttribLocation(this.shader_prog,"vPosition"),this.gl.enableVertexAttribArray(this.pos_attr),this.color_attr=this.gl.getAttribLocation(this.shader_prog,"vColor"),this.gl.enableVertexAttribArray(this.color_attr),this.MVPmatrix=this.gl.getUniformLocation(this.shader_prog,"uMVP"),console.info("buffering..."),this.trianglePosBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.trianglePosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,J,this.gl.STATIC_DRAW),this.trianglePosBuffer_itemSize=3,this.trianglePosBuffer_numItems=24,this.colorBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,K,this.gl.STATIC_DRAW),this.colorBuffer_itemSize=3,this.colorBuffer_numItems=24,this.indexBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,U,this.gl.STATIC_DRAW),console.info("init done")}dataUpdate(){this.angle1=Math.sin(performance.now()*.001),this.angle2=Math.cos(performance.now()*.001)}};var{canvas:y1,gl:d1}=j(),mr=new b(y1,d1);mr.init();mr.render();})();
//# sourceMappingURL=index.js.map
