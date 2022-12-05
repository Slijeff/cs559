"use strict";(()=>{var Hr=Object.defineProperty;var ar=(r,e)=>{for(var n in e)Hr(r,n,{get:e[n],enumerable:!0})};var P=1e-6,Y=typeof Float32Array!="undefined"?Float32Array:Array,V=Math.random;var s1=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var r=0,e=arguments.length;e--;)r+=arguments[e]*arguments[e];return Math.sqrt(r)});function pr(){var r=new Y(9);return Y!=Float32Array&&(r[1]=0,r[2]=0,r[3]=0,r[5]=0,r[6]=0,r[7]=0),r[0]=1,r[4]=1,r[8]=1,r}var S={};ar(S,{add:()=>Le,adjoint:()=>Kr,clone:()=>Zr,copy:()=>Gr,create:()=>Qr,decompose:()=>Me,determinant:()=>ur,equals:()=>Ye,exactEquals:()=>Ie,frob:()=>Re,fromQuat:()=>ye,fromQuat2:()=>pe,fromRotation:()=>ce,fromRotationTranslation:()=>yr,fromRotationTranslationScale:()=>fe,fromRotationTranslationScaleOrigin:()=>me,fromScaling:()=>he,fromTranslation:()=>se,fromValues:()=>Xr,fromXRotation:()=>ve,fromYRotation:()=>xe,fromZRotation:()=>le,frustum:()=>ge,getRotation:()=>_r,getScaling:()=>dr,getTranslation:()=>gr,identity:()=>fr,invert:()=>Jr,lookAt:()=>we,mul:()=>be,multiply:()=>mr,multiplyScalar:()=>Se,multiplyScalarAndAdd:()=>oe,ortho:()=>ze,orthoNO:()=>zr,orthoZO:()=>Te,perspective:()=>de,perspectiveFromFieldOfView:()=>Ee,perspectiveNO:()=>Er,perspectiveZO:()=>_e,rotate:()=>ne,rotateX:()=>te,rotateY:()=>ae,rotateZ:()=>ie,scale:()=>ee,set:()=>jr,str:()=>Pe,sub:()=>Oe,subtract:()=>Tr,targetTo:()=>Ae,translate:()=>re,transpose:()=>Ur});function Qr(){var r=new Y(16);return Y!=Float32Array&&(r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0),r[0]=1,r[5]=1,r[10]=1,r[15]=1,r}function Zr(r){var e=new Y(16);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],e}function Gr(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function Xr(r,e,n,t,a,i,s,h,c,v,x,p,f,M,m,y){var l=new Y(16);return l[0]=r,l[1]=e,l[2]=n,l[3]=t,l[4]=a,l[5]=i,l[6]=s,l[7]=h,l[8]=c,l[9]=v,l[10]=x,l[11]=p,l[12]=f,l[13]=M,l[14]=m,l[15]=y,l}function jr(r,e,n,t,a,i,s,h,c,v,x,p,f,M,m,y,l){return r[0]=e,r[1]=n,r[2]=t,r[3]=a,r[4]=i,r[5]=s,r[6]=h,r[7]=c,r[8]=v,r[9]=x,r[10]=p,r[11]=f,r[12]=M,r[13]=m,r[14]=y,r[15]=l,r}function fr(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Ur(r,e){if(r===e){var n=e[1],t=e[2],a=e[3],i=e[6],s=e[7],h=e[11];r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=n,r[6]=e[9],r[7]=e[13],r[8]=t,r[9]=i,r[11]=e[14],r[12]=a,r[13]=s,r[14]=h}else r[0]=e[0],r[1]=e[4],r[2]=e[8],r[3]=e[12],r[4]=e[1],r[5]=e[5],r[6]=e[9],r[7]=e[13],r[8]=e[2],r[9]=e[6],r[10]=e[10],r[11]=e[14],r[12]=e[3],r[13]=e[7],r[14]=e[11],r[15]=e[15];return r}function Jr(r,e){var n=e[0],t=e[1],a=e[2],i=e[3],s=e[4],h=e[5],c=e[6],v=e[7],x=e[8],p=e[9],f=e[10],M=e[11],m=e[12],y=e[13],l=e[14],z=e[15],A=n*h-t*s,E=n*c-a*s,g=n*v-i*s,d=t*c-a*h,_=t*v-i*h,o=a*v-i*c,R=x*y-p*m,I=x*l-f*m,T=x*z-M*m,b=p*l-f*y,O=p*z-M*y,q=f*z-M*l,L=A*q-E*O+g*b+d*T-_*I+o*R;return L?(L=1/L,r[0]=(h*q-c*O+v*b)*L,r[1]=(a*O-t*q-i*b)*L,r[2]=(y*o-l*_+z*d)*L,r[3]=(f*_-p*o-M*d)*L,r[4]=(c*T-s*q-v*I)*L,r[5]=(n*q-a*T+i*I)*L,r[6]=(l*g-m*o-z*E)*L,r[7]=(x*o-f*g+M*E)*L,r[8]=(s*O-h*T+v*R)*L,r[9]=(t*T-n*O-i*R)*L,r[10]=(m*_-y*g+z*A)*L,r[11]=(p*g-x*_-M*A)*L,r[12]=(h*I-s*b-c*R)*L,r[13]=(n*b-t*I+a*R)*L,r[14]=(y*E-m*d-l*A)*L,r[15]=(x*d-p*E+f*A)*L,r):null}function Kr(r,e){var n=e[0],t=e[1],a=e[2],i=e[3],s=e[4],h=e[5],c=e[6],v=e[7],x=e[8],p=e[9],f=e[10],M=e[11],m=e[12],y=e[13],l=e[14],z=e[15],A=n*h-t*s,E=n*c-a*s,g=n*v-i*s,d=t*c-a*h,_=t*v-i*h,o=a*v-i*c,R=x*y-p*m,I=x*l-f*m,T=x*z-M*m,b=p*l-f*y,O=p*z-M*y,q=f*z-M*l;return r[0]=h*q-c*O+v*b,r[1]=a*O-t*q-i*b,r[2]=y*o-l*_+z*d,r[3]=f*_-p*o-M*d,r[4]=c*T-s*q-v*I,r[5]=n*q-a*T+i*I,r[6]=l*g-m*o-z*E,r[7]=x*o-f*g+M*E,r[8]=s*O-h*T+v*R,r[9]=t*T-n*O-i*R,r[10]=m*_-y*g+z*A,r[11]=p*g-x*_-M*A,r[12]=h*I-s*b-c*R,r[13]=n*b-t*I+a*R,r[14]=y*E-m*d-l*A,r[15]=x*d-p*E+f*A,r}function ur(r){var e=r[0],n=r[1],t=r[2],a=r[3],i=r[4],s=r[5],h=r[6],c=r[7],v=r[8],x=r[9],p=r[10],f=r[11],M=r[12],m=r[13],y=r[14],l=r[15],z=e*s-n*i,A=e*h-t*i,E=n*h-t*s,g=v*m-x*M,d=v*y-p*M,_=x*y-p*m,o=e*_-n*d+t*g,R=i*_-s*d+h*g,I=v*E-x*A+p*z,T=M*E-m*A+y*z;return c*o-a*R+l*I-f*T}function mr(r,e,n){var t=e[0],a=e[1],i=e[2],s=e[3],h=e[4],c=e[5],v=e[6],x=e[7],p=e[8],f=e[9],M=e[10],m=e[11],y=e[12],l=e[13],z=e[14],A=e[15],E=n[0],g=n[1],d=n[2],_=n[3];return r[0]=E*t+g*h+d*p+_*y,r[1]=E*a+g*c+d*f+_*l,r[2]=E*i+g*v+d*M+_*z,r[3]=E*s+g*x+d*m+_*A,E=n[4],g=n[5],d=n[6],_=n[7],r[4]=E*t+g*h+d*p+_*y,r[5]=E*a+g*c+d*f+_*l,r[6]=E*i+g*v+d*M+_*z,r[7]=E*s+g*x+d*m+_*A,E=n[8],g=n[9],d=n[10],_=n[11],r[8]=E*t+g*h+d*p+_*y,r[9]=E*a+g*c+d*f+_*l,r[10]=E*i+g*v+d*M+_*z,r[11]=E*s+g*x+d*m+_*A,E=n[12],g=n[13],d=n[14],_=n[15],r[12]=E*t+g*h+d*p+_*y,r[13]=E*a+g*c+d*f+_*l,r[14]=E*i+g*v+d*M+_*z,r[15]=E*s+g*x+d*m+_*A,r}function re(r,e,n){var t=n[0],a=n[1],i=n[2],s,h,c,v,x,p,f,M,m,y,l,z;return e===r?(r[12]=e[0]*t+e[4]*a+e[8]*i+e[12],r[13]=e[1]*t+e[5]*a+e[9]*i+e[13],r[14]=e[2]*t+e[6]*a+e[10]*i+e[14],r[15]=e[3]*t+e[7]*a+e[11]*i+e[15]):(s=e[0],h=e[1],c=e[2],v=e[3],x=e[4],p=e[5],f=e[6],M=e[7],m=e[8],y=e[9],l=e[10],z=e[11],r[0]=s,r[1]=h,r[2]=c,r[3]=v,r[4]=x,r[5]=p,r[6]=f,r[7]=M,r[8]=m,r[9]=y,r[10]=l,r[11]=z,r[12]=s*t+x*a+m*i+e[12],r[13]=h*t+p*a+y*i+e[13],r[14]=c*t+f*a+l*i+e[14],r[15]=v*t+M*a+z*i+e[15]),r}function ee(r,e,n){var t=n[0],a=n[1],i=n[2];return r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r[3]=e[3]*t,r[4]=e[4]*a,r[5]=e[5]*a,r[6]=e[6]*a,r[7]=e[7]*a,r[8]=e[8]*i,r[9]=e[9]*i,r[10]=e[10]*i,r[11]=e[11]*i,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function ne(r,e,n,t){var a=t[0],i=t[1],s=t[2],h=Math.hypot(a,i,s),c,v,x,p,f,M,m,y,l,z,A,E,g,d,_,o,R,I,T,b,O,q,L,D;return h<P?null:(h=1/h,a*=h,i*=h,s*=h,c=Math.sin(n),v=Math.cos(n),x=1-v,p=e[0],f=e[1],M=e[2],m=e[3],y=e[4],l=e[5],z=e[6],A=e[7],E=e[8],g=e[9],d=e[10],_=e[11],o=a*a*x+v,R=i*a*x+s*c,I=s*a*x-i*c,T=a*i*x-s*c,b=i*i*x+v,O=s*i*x+a*c,q=a*s*x+i*c,L=i*s*x-a*c,D=s*s*x+v,r[0]=p*o+y*R+E*I,r[1]=f*o+l*R+g*I,r[2]=M*o+z*R+d*I,r[3]=m*o+A*R+_*I,r[4]=p*T+y*b+E*O,r[5]=f*T+l*b+g*O,r[6]=M*T+z*b+d*O,r[7]=m*T+A*b+_*O,r[8]=p*q+y*L+E*D,r[9]=f*q+l*L+g*D,r[10]=M*q+z*L+d*D,r[11]=m*q+A*L+_*D,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r)}function te(r,e,n){var t=Math.sin(n),a=Math.cos(n),i=e[4],s=e[5],h=e[6],c=e[7],v=e[8],x=e[9],p=e[10],f=e[11];return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[4]=i*a+v*t,r[5]=s*a+x*t,r[6]=h*a+p*t,r[7]=c*a+f*t,r[8]=v*a-i*t,r[9]=x*a-s*t,r[10]=p*a-h*t,r[11]=f*a-c*t,r}function ae(r,e,n){var t=Math.sin(n),a=Math.cos(n),i=e[0],s=e[1],h=e[2],c=e[3],v=e[8],x=e[9],p=e[10],f=e[11];return e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[0]=i*a-v*t,r[1]=s*a-x*t,r[2]=h*a-p*t,r[3]=c*a-f*t,r[8]=i*t+v*a,r[9]=s*t+x*a,r[10]=h*t+p*a,r[11]=c*t+f*a,r}function ie(r,e,n){var t=Math.sin(n),a=Math.cos(n),i=e[0],s=e[1],h=e[2],c=e[3],v=e[4],x=e[5],p=e[6],f=e[7];return e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[0]=i*a+v*t,r[1]=s*a+x*t,r[2]=h*a+p*t,r[3]=c*a+f*t,r[4]=v*a-i*t,r[5]=x*a-s*t,r[6]=p*a-h*t,r[7]=f*a-c*t,r}function se(r,e){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function he(r,e){return r[0]=e[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=e[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=e[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function ce(r,e,n){var t=n[0],a=n[1],i=n[2],s=Math.hypot(t,a,i),h,c,v;return s<P?null:(s=1/s,t*=s,a*=s,i*=s,h=Math.sin(e),c=Math.cos(e),v=1-c,r[0]=t*t*v+c,r[1]=a*t*v+i*h,r[2]=i*t*v-a*h,r[3]=0,r[4]=t*a*v-i*h,r[5]=a*a*v+c,r[6]=i*a*v+t*h,r[7]=0,r[8]=t*i*v+a*h,r[9]=a*i*v-t*h,r[10]=i*i*v+c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r)}function ve(r,e){var n=Math.sin(e),t=Math.cos(e);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function xe(r,e){var n=Math.sin(e),t=Math.cos(e);return r[0]=t,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function le(r,e){var n=Math.sin(e),t=Math.cos(e);return r[0]=t,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function yr(r,e,n){var t=e[0],a=e[1],i=e[2],s=e[3],h=t+t,c=a+a,v=i+i,x=t*h,p=t*c,f=t*v,M=a*c,m=a*v,y=i*v,l=s*h,z=s*c,A=s*v;return r[0]=1-(M+y),r[1]=p+A,r[2]=f-z,r[3]=0,r[4]=p-A,r[5]=1-(x+y),r[6]=m+l,r[7]=0,r[8]=f+z,r[9]=m-l,r[10]=1-(x+M),r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function pe(r,e){var n=new Y(3),t=-e[0],a=-e[1],i=-e[2],s=e[3],h=e[4],c=e[5],v=e[6],x=e[7],p=t*t+a*a+i*i+s*s;return p>0?(n[0]=(h*s+x*t+c*i-v*a)*2/p,n[1]=(c*s+x*a+v*t-h*i)*2/p,n[2]=(v*s+x*i+h*a-c*t)*2/p):(n[0]=(h*s+x*t+c*i-v*a)*2,n[1]=(c*s+x*a+v*t-h*i)*2,n[2]=(v*s+x*i+h*a-c*t)*2),yr(r,e,n),r}function gr(r,e){return r[0]=e[12],r[1]=e[13],r[2]=e[14],r}function dr(r,e){var n=e[0],t=e[1],a=e[2],i=e[4],s=e[5],h=e[6],c=e[8],v=e[9],x=e[10];return r[0]=Math.hypot(n,t,a),r[1]=Math.hypot(i,s,h),r[2]=Math.hypot(c,v,x),r}function _r(r,e){var n=new Y(3);dr(n,e);var t=1/n[0],a=1/n[1],i=1/n[2],s=e[0]*t,h=e[1]*a,c=e[2]*i,v=e[4]*t,x=e[5]*a,p=e[6]*i,f=e[8]*t,M=e[9]*a,m=e[10]*i,y=s+x+m,l=0;return y>0?(l=Math.sqrt(y+1)*2,r[3]=.25*l,r[0]=(p-M)/l,r[1]=(f-c)/l,r[2]=(h-v)/l):s>x&&s>m?(l=Math.sqrt(1+s-x-m)*2,r[3]=(p-M)/l,r[0]=.25*l,r[1]=(h+v)/l,r[2]=(f+c)/l):x>m?(l=Math.sqrt(1+x-s-m)*2,r[3]=(f-c)/l,r[0]=(h+v)/l,r[1]=.25*l,r[2]=(p+M)/l):(l=Math.sqrt(1+m-s-x)*2,r[3]=(h-v)/l,r[0]=(f+c)/l,r[1]=(p+M)/l,r[2]=.25*l),r}function Me(r,e,n,t){e[0]=t[12],e[1]=t[13],e[2]=t[14];var a=t[0],i=t[1],s=t[2],h=t[4],c=t[5],v=t[6],x=t[8],p=t[9],f=t[10];n[0]=Math.hypot(a,i,s),n[1]=Math.hypot(h,c,v),n[2]=Math.hypot(x,p,f);var M=1/n[0],m=1/n[1],y=1/n[2],l=a*M,z=i*m,A=s*y,E=h*M,g=c*m,d=v*y,_=x*M,o=p*m,R=f*y,I=l+g+R,T=0;return I>0?(T=Math.sqrt(I+1)*2,r[3]=.25*T,r[0]=(d-o)/T,r[1]=(_-A)/T,r[2]=(z-E)/T):l>g&&l>R?(T=Math.sqrt(1+l-g-R)*2,r[3]=(d-o)/T,r[0]=.25*T,r[1]=(z+E)/T,r[2]=(_+A)/T):g>R?(T=Math.sqrt(1+g-l-R)*2,r[3]=(_-A)/T,r[0]=(z+E)/T,r[1]=.25*T,r[2]=(d+o)/T):(T=Math.sqrt(1+R-l-g)*2,r[3]=(z-E)/T,r[0]=(_+A)/T,r[1]=(d+o)/T,r[2]=.25*T),r}function fe(r,e,n,t){var a=e[0],i=e[1],s=e[2],h=e[3],c=a+a,v=i+i,x=s+s,p=a*c,f=a*v,M=a*x,m=i*v,y=i*x,l=s*x,z=h*c,A=h*v,E=h*x,g=t[0],d=t[1],_=t[2];return r[0]=(1-(m+l))*g,r[1]=(f+E)*g,r[2]=(M-A)*g,r[3]=0,r[4]=(f-E)*d,r[5]=(1-(p+l))*d,r[6]=(y+z)*d,r[7]=0,r[8]=(M+A)*_,r[9]=(y-z)*_,r[10]=(1-(p+m))*_,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function me(r,e,n,t,a){var i=e[0],s=e[1],h=e[2],c=e[3],v=i+i,x=s+s,p=h+h,f=i*v,M=i*x,m=i*p,y=s*x,l=s*p,z=h*p,A=c*v,E=c*x,g=c*p,d=t[0],_=t[1],o=t[2],R=a[0],I=a[1],T=a[2],b=(1-(y+z))*d,O=(M+g)*d,q=(m-E)*d,L=(M-g)*_,D=(1-(f+z))*_,H=(l+A)*_,W=(m+E)*o,xr=(l-A)*o,lr=(1-(f+y))*o;return r[0]=b,r[1]=O,r[2]=q,r[3]=0,r[4]=L,r[5]=D,r[6]=H,r[7]=0,r[8]=W,r[9]=xr,r[10]=lr,r[11]=0,r[12]=n[0]+R-(b*R+L*I+W*T),r[13]=n[1]+I-(O*R+D*I+xr*T),r[14]=n[2]+T-(q*R+H*I+lr*T),r[15]=1,r}function ye(r,e){var n=e[0],t=e[1],a=e[2],i=e[3],s=n+n,h=t+t,c=a+a,v=n*s,x=t*s,p=t*h,f=a*s,M=a*h,m=a*c,y=i*s,l=i*h,z=i*c;return r[0]=1-p-m,r[1]=x+z,r[2]=f-l,r[3]=0,r[4]=x-z,r[5]=1-v-m,r[6]=M+y,r[7]=0,r[8]=f+l,r[9]=M-y,r[10]=1-v-p,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function ge(r,e,n,t,a,i,s){var h=1/(n-e),c=1/(a-t),v=1/(i-s);return r[0]=i*2*h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=i*2*c,r[6]=0,r[7]=0,r[8]=(n+e)*h,r[9]=(a+t)*c,r[10]=(s+i)*v,r[11]=-1,r[12]=0,r[13]=0,r[14]=s*i*2*v,r[15]=0,r}function Er(r,e,n,t,a){var i=1/Math.tan(e/2);if(r[0]=i/n,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=i,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,a!=null&&a!==1/0){var s=1/(t-a);r[10]=(a+t)*s,r[14]=2*a*t*s}else r[10]=-1,r[14]=-2*t;return r}var de=Er;function _e(r,e,n,t,a){var i=1/Math.tan(e/2);if(r[0]=i/n,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=i,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,a!=null&&a!==1/0){var s=1/(t-a);r[10]=a*s,r[14]=a*t*s}else r[10]=-1,r[14]=-t;return r}function Ee(r,e,n,t){var a=Math.tan(e.upDegrees*Math.PI/180),i=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),h=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+h),v=2/(a+i);return r[0]=c,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=v,r[6]=0,r[7]=0,r[8]=-((s-h)*c*.5),r[9]=(a-i)*v*.5,r[10]=t/(n-t),r[11]=-1,r[12]=0,r[13]=0,r[14]=t*n/(n-t),r[15]=0,r}function zr(r,e,n,t,a,i,s){var h=1/(e-n),c=1/(t-a),v=1/(i-s);return r[0]=-2*h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*c,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*v,r[11]=0,r[12]=(e+n)*h,r[13]=(a+t)*c,r[14]=(s+i)*v,r[15]=1,r}var ze=zr;function Te(r,e,n,t,a,i,s){var h=1/(e-n),c=1/(t-a),v=1/(i-s);return r[0]=-2*h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*c,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=v,r[11]=0,r[12]=(e+n)*h,r[13]=(a+t)*c,r[14]=i*v,r[15]=1,r}function we(r,e,n,t){var a,i,s,h,c,v,x,p,f,M,m=e[0],y=e[1],l=e[2],z=t[0],A=t[1],E=t[2],g=n[0],d=n[1],_=n[2];return Math.abs(m-g)<P&&Math.abs(y-d)<P&&Math.abs(l-_)<P?fr(r):(x=m-g,p=y-d,f=l-_,M=1/Math.hypot(x,p,f),x*=M,p*=M,f*=M,a=A*f-E*p,i=E*x-z*f,s=z*p-A*x,M=Math.hypot(a,i,s),M?(M=1/M,a*=M,i*=M,s*=M):(a=0,i=0,s=0),h=p*s-f*i,c=f*a-x*s,v=x*i-p*a,M=Math.hypot(h,c,v),M?(M=1/M,h*=M,c*=M,v*=M):(h=0,c=0,v=0),r[0]=a,r[1]=h,r[2]=x,r[3]=0,r[4]=i,r[5]=c,r[6]=p,r[7]=0,r[8]=s,r[9]=v,r[10]=f,r[11]=0,r[12]=-(a*m+i*y+s*l),r[13]=-(h*m+c*y+v*l),r[14]=-(x*m+p*y+f*l),r[15]=1,r)}function Ae(r,e,n,t){var a=e[0],i=e[1],s=e[2],h=t[0],c=t[1],v=t[2],x=a-n[0],p=i-n[1],f=s-n[2],M=x*x+p*p+f*f;M>0&&(M=1/Math.sqrt(M),x*=M,p*=M,f*=M);var m=c*f-v*p,y=v*x-h*f,l=h*p-c*x;return M=m*m+y*y+l*l,M>0&&(M=1/Math.sqrt(M),m*=M,y*=M,l*=M),r[0]=m,r[1]=y,r[2]=l,r[3]=0,r[4]=p*l-f*y,r[5]=f*m-x*l,r[6]=x*y-p*m,r[7]=0,r[8]=x,r[9]=p,r[10]=f,r[11]=0,r[12]=a,r[13]=i,r[14]=s,r[15]=1,r}function Pe(r){return"mat4("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+", "+r[4]+", "+r[5]+", "+r[6]+", "+r[7]+", "+r[8]+", "+r[9]+", "+r[10]+", "+r[11]+", "+r[12]+", "+r[13]+", "+r[14]+", "+r[15]+")"}function Re(r){return Math.hypot(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])}function Le(r,e,n){return r[0]=e[0]+n[0],r[1]=e[1]+n[1],r[2]=e[2]+n[2],r[3]=e[3]+n[3],r[4]=e[4]+n[4],r[5]=e[5]+n[5],r[6]=e[6]+n[6],r[7]=e[7]+n[7],r[8]=e[8]+n[8],r[9]=e[9]+n[9],r[10]=e[10]+n[10],r[11]=e[11]+n[11],r[12]=e[12]+n[12],r[13]=e[13]+n[13],r[14]=e[14]+n[14],r[15]=e[15]+n[15],r}function Tr(r,e,n){return r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r[3]=e[3]-n[3],r[4]=e[4]-n[4],r[5]=e[5]-n[5],r[6]=e[6]-n[6],r[7]=e[7]-n[7],r[8]=e[8]-n[8],r[9]=e[9]-n[9],r[10]=e[10]-n[10],r[11]=e[11]-n[11],r[12]=e[12]-n[12],r[13]=e[13]-n[13],r[14]=e[14]-n[14],r[15]=e[15]-n[15],r}function Se(r,e,n){return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r[4]=e[4]*n,r[5]=e[5]*n,r[6]=e[6]*n,r[7]=e[7]*n,r[8]=e[8]*n,r[9]=e[9]*n,r[10]=e[10]*n,r[11]=e[11]*n,r[12]=e[12]*n,r[13]=e[13]*n,r[14]=e[14]*n,r[15]=e[15]*n,r}function oe(r,e,n,t){return r[0]=e[0]+n[0]*t,r[1]=e[1]+n[1]*t,r[2]=e[2]+n[2]*t,r[3]=e[3]+n[3]*t,r[4]=e[4]+n[4]*t,r[5]=e[5]+n[5]*t,r[6]=e[6]+n[6]*t,r[7]=e[7]+n[7]*t,r[8]=e[8]+n[8]*t,r[9]=e[9]+n[9]*t,r[10]=e[10]+n[10]*t,r[11]=e[11]+n[11]*t,r[12]=e[12]+n[12]*t,r[13]=e[13]+n[13]*t,r[14]=e[14]+n[14]*t,r[15]=e[15]+n[15]*t,r}function Ie(r,e){return r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]&&r[3]===e[3]&&r[4]===e[4]&&r[5]===e[5]&&r[6]===e[6]&&r[7]===e[7]&&r[8]===e[8]&&r[9]===e[9]&&r[10]===e[10]&&r[11]===e[11]&&r[12]===e[12]&&r[13]===e[13]&&r[14]===e[14]&&r[15]===e[15]}function Ye(r,e){var n=r[0],t=r[1],a=r[2],i=r[3],s=r[4],h=r[5],c=r[6],v=r[7],x=r[8],p=r[9],f=r[10],M=r[11],m=r[12],y=r[13],l=r[14],z=r[15],A=e[0],E=e[1],g=e[2],d=e[3],_=e[4],o=e[5],R=e[6],I=e[7],T=e[8],b=e[9],O=e[10],q=e[11],L=e[12],D=e[13],H=e[14],W=e[15];return Math.abs(n-A)<=P*Math.max(1,Math.abs(n),Math.abs(A))&&Math.abs(t-E)<=P*Math.max(1,Math.abs(t),Math.abs(E))&&Math.abs(a-g)<=P*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(i-d)<=P*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(s-_)<=P*Math.max(1,Math.abs(s),Math.abs(_))&&Math.abs(h-o)<=P*Math.max(1,Math.abs(h),Math.abs(o))&&Math.abs(c-R)<=P*Math.max(1,Math.abs(c),Math.abs(R))&&Math.abs(v-I)<=P*Math.max(1,Math.abs(v),Math.abs(I))&&Math.abs(x-T)<=P*Math.max(1,Math.abs(x),Math.abs(T))&&Math.abs(p-b)<=P*Math.max(1,Math.abs(p),Math.abs(b))&&Math.abs(f-O)<=P*Math.max(1,Math.abs(f),Math.abs(O))&&Math.abs(M-q)<=P*Math.max(1,Math.abs(M),Math.abs(q))&&Math.abs(m-L)<=P*Math.max(1,Math.abs(m),Math.abs(L))&&Math.abs(y-D)<=P*Math.max(1,Math.abs(y),Math.abs(D))&&Math.abs(l-H)<=P*Math.max(1,Math.abs(l),Math.abs(H))&&Math.abs(z-W)<=P*Math.max(1,Math.abs(z),Math.abs(W))}var be=mr,Oe=Tr;var C={};ar(C,{add:()=>De,angle:()=>an,bezier:()=>Ue,ceil:()=>ke,clone:()=>qe,copy:()=>Ne,create:()=>G,cross:()=>Q,dist:()=>Mn,distance:()=>Lr,div:()=>pn,divide:()=>Rr,dot:()=>B,equals:()=>vn,exactEquals:()=>cn,floor:()=>Fe,forEach:()=>yn,fromValues:()=>X,hermite:()=>je,inverse:()=>Ze,len:()=>sr,length:()=>wr,lerp:()=>Ge,max:()=>$e,min:()=>Ve,mul:()=>ln,multiply:()=>Pr,negate:()=>Qe,normalize:()=>ir,random:()=>Je,rotateX:()=>en,rotateY:()=>nn,rotateZ:()=>tn,round:()=>He,scale:()=>We,scaleAndAdd:()=>Be,set:()=>Ce,slerp:()=>Xe,sqrDist:()=>fn,sqrLen:()=>mn,squaredDistance:()=>Sr,squaredLength:()=>or,str:()=>hn,sub:()=>xn,subtract:()=>Ar,transformMat3:()=>ue,transformMat4:()=>Ke,transformQuat:()=>rn,zero:()=>sn});function G(){var r=new Y(3);return Y!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r}function qe(r){var e=new Y(3);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e}function wr(r){var e=r[0],n=r[1],t=r[2];return Math.hypot(e,n,t)}function X(r,e,n){var t=new Y(3);return t[0]=r,t[1]=e,t[2]=n,t}function Ne(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r}function Ce(r,e,n,t){return r[0]=e,r[1]=n,r[2]=t,r}function De(r,e,n){return r[0]=e[0]+n[0],r[1]=e[1]+n[1],r[2]=e[2]+n[2],r}function Ar(r,e,n){return r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r}function Pr(r,e,n){return r[0]=e[0]*n[0],r[1]=e[1]*n[1],r[2]=e[2]*n[2],r}function Rr(r,e,n){return r[0]=e[0]/n[0],r[1]=e[1]/n[1],r[2]=e[2]/n[2],r}function ke(r,e){return r[0]=Math.ceil(e[0]),r[1]=Math.ceil(e[1]),r[2]=Math.ceil(e[2]),r}function Fe(r,e){return r[0]=Math.floor(e[0]),r[1]=Math.floor(e[1]),r[2]=Math.floor(e[2]),r}function Ve(r,e,n){return r[0]=Math.min(e[0],n[0]),r[1]=Math.min(e[1],n[1]),r[2]=Math.min(e[2],n[2]),r}function $e(r,e,n){return r[0]=Math.max(e[0],n[0]),r[1]=Math.max(e[1],n[1]),r[2]=Math.max(e[2],n[2]),r}function He(r,e){return r[0]=Math.round(e[0]),r[1]=Math.round(e[1]),r[2]=Math.round(e[2]),r}function We(r,e,n){return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}function Be(r,e,n,t){return r[0]=e[0]+n[0]*t,r[1]=e[1]+n[1]*t,r[2]=e[2]+n[2]*t,r}function Lr(r,e){var n=e[0]-r[0],t=e[1]-r[1],a=e[2]-r[2];return Math.hypot(n,t,a)}function Sr(r,e){var n=e[0]-r[0],t=e[1]-r[1],a=e[2]-r[2];return n*n+t*t+a*a}function or(r){var e=r[0],n=r[1],t=r[2];return e*e+n*n+t*t}function Qe(r,e){return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r}function Ze(r,e){return r[0]=1/e[0],r[1]=1/e[1],r[2]=1/e[2],r}function ir(r,e){var n=e[0],t=e[1],a=e[2],i=n*n+t*t+a*a;return i>0&&(i=1/Math.sqrt(i)),r[0]=e[0]*i,r[1]=e[1]*i,r[2]=e[2]*i,r}function B(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function Q(r,e,n){var t=e[0],a=e[1],i=e[2],s=n[0],h=n[1],c=n[2];return r[0]=a*c-i*h,r[1]=i*s-t*c,r[2]=t*h-a*s,r}function Ge(r,e,n,t){var a=e[0],i=e[1],s=e[2];return r[0]=a+t*(n[0]-a),r[1]=i+t*(n[1]-i),r[2]=s+t*(n[2]-s),r}function Xe(r,e,n,t){var a=Math.acos(Math.min(Math.max(B(e,n),-1),1)),i=Math.sin(a),s=Math.sin((1-t)*a)/i,h=Math.sin(t*a)/i;return r[0]=s*e[0]+h*n[0],r[1]=s*e[1]+h*n[1],r[2]=s*e[2]+h*n[2],r}function je(r,e,n,t,a,i){var s=i*i,h=s*(2*i-3)+1,c=s*(i-2)+i,v=s*(i-1),x=s*(3-2*i);return r[0]=e[0]*h+n[0]*c+t[0]*v+a[0]*x,r[1]=e[1]*h+n[1]*c+t[1]*v+a[1]*x,r[2]=e[2]*h+n[2]*c+t[2]*v+a[2]*x,r}function Ue(r,e,n,t,a,i){var s=1-i,h=s*s,c=i*i,v=h*s,x=3*i*h,p=3*c*s,f=c*i;return r[0]=e[0]*v+n[0]*x+t[0]*p+a[0]*f,r[1]=e[1]*v+n[1]*x+t[1]*p+a[1]*f,r[2]=e[2]*v+n[2]*x+t[2]*p+a[2]*f,r}function Je(r,e){e=e===void 0?1:e;var n=V()*2*Math.PI,t=V()*2-1,a=Math.sqrt(1-t*t)*e;return r[0]=Math.cos(n)*a,r[1]=Math.sin(n)*a,r[2]=t*e,r}function Ke(r,e,n){var t=e[0],a=e[1],i=e[2],s=n[3]*t+n[7]*a+n[11]*i+n[15];return s=s||1,r[0]=(n[0]*t+n[4]*a+n[8]*i+n[12])/s,r[1]=(n[1]*t+n[5]*a+n[9]*i+n[13])/s,r[2]=(n[2]*t+n[6]*a+n[10]*i+n[14])/s,r}function ue(r,e,n){var t=e[0],a=e[1],i=e[2];return r[0]=t*n[0]+a*n[3]+i*n[6],r[1]=t*n[1]+a*n[4]+i*n[7],r[2]=t*n[2]+a*n[5]+i*n[8],r}function rn(r,e,n){var t=n[0],a=n[1],i=n[2],s=n[3],h=e[0],c=e[1],v=e[2],x=a*v-i*c,p=i*h-t*v,f=t*c-a*h,M=a*f-i*p,m=i*x-t*f,y=t*p-a*x,l=s*2;return x*=l,p*=l,f*=l,M*=2,m*=2,y*=2,r[0]=h+x+M,r[1]=c+p+m,r[2]=v+f+y,r}function en(r,e,n,t){var a=[],i=[];return a[0]=e[0]-n[0],a[1]=e[1]-n[1],a[2]=e[2]-n[2],i[0]=a[0],i[1]=a[1]*Math.cos(t)-a[2]*Math.sin(t),i[2]=a[1]*Math.sin(t)+a[2]*Math.cos(t),r[0]=i[0]+n[0],r[1]=i[1]+n[1],r[2]=i[2]+n[2],r}function nn(r,e,n,t){var a=[],i=[];return a[0]=e[0]-n[0],a[1]=e[1]-n[1],a[2]=e[2]-n[2],i[0]=a[2]*Math.sin(t)+a[0]*Math.cos(t),i[1]=a[1],i[2]=a[2]*Math.cos(t)-a[0]*Math.sin(t),r[0]=i[0]+n[0],r[1]=i[1]+n[1],r[2]=i[2]+n[2],r}function tn(r,e,n,t){var a=[],i=[];return a[0]=e[0]-n[0],a[1]=e[1]-n[1],a[2]=e[2]-n[2],i[0]=a[0]*Math.cos(t)-a[1]*Math.sin(t),i[1]=a[0]*Math.sin(t)+a[1]*Math.cos(t),i[2]=a[2],r[0]=i[0]+n[0],r[1]=i[1]+n[1],r[2]=i[2]+n[2],r}function an(r,e){var n=r[0],t=r[1],a=r[2],i=e[0],s=e[1],h=e[2],c=Math.sqrt((n*n+t*t+a*a)*(i*i+s*s+h*h)),v=c&&B(r,e)/c;return Math.acos(Math.min(Math.max(v,-1),1))}function sn(r){return r[0]=0,r[1]=0,r[2]=0,r}function hn(r){return"vec3("+r[0]+", "+r[1]+", "+r[2]+")"}function cn(r,e){return r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]}function vn(r,e){var n=r[0],t=r[1],a=r[2],i=e[0],s=e[1],h=e[2];return Math.abs(n-i)<=P*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(t-s)<=P*Math.max(1,Math.abs(t),Math.abs(s))&&Math.abs(a-h)<=P*Math.max(1,Math.abs(a),Math.abs(h))}var xn=Ar,ln=Pr,pn=Rr,Mn=Lr,fn=Sr,sr=wr,mn=or,yn=function(){var r=G();return function(e,n,t,a,i,s){var h,c;for(n||(n=3),t||(t=0),a?c=Math.min(a*n+t,e.length):c=e.length,h=t;h<c;h+=n)r[0]=e[h],r[1]=e[h+1],r[2]=e[h+2],i(r,r,s),e[h]=r[0],e[h+1]=r[1],e[h+2]=r[2];return e}}();function gn(){var r=new Y(4);return Y!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0,r[3]=0),r}function Ir(r,e){var n=e[0],t=e[1],a=e[2],i=e[3],s=n*n+t*t+a*a+i*i;return s>0&&(s=1/Math.sqrt(s)),r[0]=n*s,r[1]=t*s,r[2]=a*s,r[3]=i*s,r}var h1=function(){var r=gn();return function(e,n,t,a,i,s){var h,c;for(n||(n=4),t||(t=0),a?c=Math.min(a*n+t,e.length):c=e.length,h=t;h<c;h+=n)r[0]=e[h],r[1]=e[h+1],r[2]=e[h+2],r[3]=e[h+3],i(r,r,s),e[h]=r[0],e[h+1]=r[1],e[h+2]=r[2],e[h+3]=r[3];return e}}();function cr(){var r=new Y(4);return Y!=Float32Array&&(r[0]=0,r[1]=0,r[2]=0),r[3]=1,r}function dn(r,e,n){n=n*.5;var t=Math.sin(n);return r[0]=t*e[0],r[1]=t*e[1],r[2]=t*e[2],r[3]=Math.cos(n),r}function hr(r,e,n,t){var a=e[0],i=e[1],s=e[2],h=e[3],c=n[0],v=n[1],x=n[2],p=n[3],f,M,m,y,l;return M=a*c+i*v+s*x+h*p,M<0&&(M=-M,c=-c,v=-v,x=-x,p=-p),1-M>P?(f=Math.acos(M),m=Math.sin(f),y=Math.sin((1-t)*f)/m,l=Math.sin(t*f)/m):(y=1-t,l=t),r[0]=y*a+l*c,r[1]=y*i+l*v,r[2]=y*s+l*x,r[3]=y*h+l*p,r}function _n(r,e){var n=e[0]+e[4]+e[8],t;if(n>0)t=Math.sqrt(n+1),r[3]=.5*t,t=.5/t,r[0]=(e[5]-e[7])*t,r[1]=(e[6]-e[2])*t,r[2]=(e[1]-e[3])*t;else{var a=0;e[4]>e[0]&&(a=1),e[8]>e[a*3+a]&&(a=2);var i=(a+1)%3,s=(a+2)%3;t=Math.sqrt(e[a*3+a]-e[i*3+i]-e[s*3+s]+1),r[a]=.5*t,t=.5/t,r[3]=(e[i*3+s]-e[s*3+i])*t,r[i]=(e[i*3+a]+e[a*3+i])*t,r[s]=(e[s*3+a]+e[a*3+s])*t}return r}var br=Ir;var E1=function(){var r=G(),e=X(1,0,0),n=X(0,1,0);return function(t,a,i){var s=B(a,i);return s<-.999999?(Q(r,e,a),sr(r)<1e-6&&Q(r,n,a),ir(r,r),dn(t,r,Math.PI),t):s>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Q(r,a,i),t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=1+s,br(t,t))}}(),z1=function(){var r=cr(),e=cr();return function(n,t,a,i,s,h){return hr(r,t,s,h),hr(e,a,i,h),hr(n,r,e,2*h*(1-h)),n}}(),T1=function(){var r=pr();return function(e,n,t,a){return r[0]=t[0],r[3]=t[1],r[6]=t[2],r[1]=a[0],r[4]=a[1],r[7]=a[2],r[2]=-n[0],r[5]=-n[1],r[8]=-n[2],br(e,_n(e,r))}}();var Z={};ar(Z,{add:()=>Pn,angle:()=>Qn,ceil:()=>Rn,clone:()=>zn,copy:()=>wn,create:()=>qr,cross:()=>Dn,dist:()=>r1,distance:()=>kr,div:()=>un,divide:()=>Dr,dot:()=>Cn,equals:()=>jn,exactEquals:()=>Xn,floor:()=>Ln,forEach:()=>t1,fromValues:()=>Tn,inverse:()=>qn,len:()=>Un,length:()=>Vr,lerp:()=>kn,max:()=>on,min:()=>Sn,mul:()=>Kn,multiply:()=>Cr,negate:()=>On,normalize:()=>Nn,random:()=>Fn,rotate:()=>Bn,round:()=>In,scale:()=>Yn,scaleAndAdd:()=>bn,set:()=>An,sqrDist:()=>e1,sqrLen:()=>n1,squaredDistance:()=>Fr,squaredLength:()=>$r,str:()=>Gn,sub:()=>Jn,subtract:()=>Nr,transformMat2:()=>Vn,transformMat2d:()=>$n,transformMat3:()=>Hn,transformMat4:()=>Wn,zero:()=>Zn});function qr(){var r=new Y(2);return Y!=Float32Array&&(r[0]=0,r[1]=0),r}function zn(r){var e=new Y(2);return e[0]=r[0],e[1]=r[1],e}function Tn(r,e){var n=new Y(2);return n[0]=r,n[1]=e,n}function wn(r,e){return r[0]=e[0],r[1]=e[1],r}function An(r,e,n){return r[0]=e,r[1]=n,r}function Pn(r,e,n){return r[0]=e[0]+n[0],r[1]=e[1]+n[1],r}function Nr(r,e,n){return r[0]=e[0]-n[0],r[1]=e[1]-n[1],r}function Cr(r,e,n){return r[0]=e[0]*n[0],r[1]=e[1]*n[1],r}function Dr(r,e,n){return r[0]=e[0]/n[0],r[1]=e[1]/n[1],r}function Rn(r,e){return r[0]=Math.ceil(e[0]),r[1]=Math.ceil(e[1]),r}function Ln(r,e){return r[0]=Math.floor(e[0]),r[1]=Math.floor(e[1]),r}function Sn(r,e,n){return r[0]=Math.min(e[0],n[0]),r[1]=Math.min(e[1],n[1]),r}function on(r,e,n){return r[0]=Math.max(e[0],n[0]),r[1]=Math.max(e[1],n[1]),r}function In(r,e){return r[0]=Math.round(e[0]),r[1]=Math.round(e[1]),r}function Yn(r,e,n){return r[0]=e[0]*n,r[1]=e[1]*n,r}function bn(r,e,n,t){return r[0]=e[0]+n[0]*t,r[1]=e[1]+n[1]*t,r}function kr(r,e){var n=e[0]-r[0],t=e[1]-r[1];return Math.hypot(n,t)}function Fr(r,e){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t}function Vr(r){var e=r[0],n=r[1];return Math.hypot(e,n)}function $r(r){var e=r[0],n=r[1];return e*e+n*n}function On(r,e){return r[0]=-e[0],r[1]=-e[1],r}function qn(r,e){return r[0]=1/e[0],r[1]=1/e[1],r}function Nn(r,e){var n=e[0],t=e[1],a=n*n+t*t;return a>0&&(a=1/Math.sqrt(a)),r[0]=e[0]*a,r[1]=e[1]*a,r}function Cn(r,e){return r[0]*e[0]+r[1]*e[1]}function Dn(r,e,n){var t=e[0]*n[1]-e[1]*n[0];return r[0]=r[1]=0,r[2]=t,r}function kn(r,e,n,t){var a=e[0],i=e[1];return r[0]=a+t*(n[0]-a),r[1]=i+t*(n[1]-i),r}function Fn(r,e){e=e===void 0?1:e;var n=V()*2*Math.PI;return r[0]=Math.cos(n)*e,r[1]=Math.sin(n)*e,r}function Vn(r,e,n){var t=e[0],a=e[1];return r[0]=n[0]*t+n[2]*a,r[1]=n[1]*t+n[3]*a,r}function $n(r,e,n){var t=e[0],a=e[1];return r[0]=n[0]*t+n[2]*a+n[4],r[1]=n[1]*t+n[3]*a+n[5],r}function Hn(r,e,n){var t=e[0],a=e[1];return r[0]=n[0]*t+n[3]*a+n[6],r[1]=n[1]*t+n[4]*a+n[7],r}function Wn(r,e,n){var t=e[0],a=e[1];return r[0]=n[0]*t+n[4]*a+n[12],r[1]=n[1]*t+n[5]*a+n[13],r}function Bn(r,e,n,t){var a=e[0]-n[0],i=e[1]-n[1],s=Math.sin(t),h=Math.cos(t);return r[0]=a*h-i*s+n[0],r[1]=a*s+i*h+n[1],r}function Qn(r,e){var n=r[0],t=r[1],a=e[0],i=e[1],s=Math.sqrt((n*n+t*t)*(a*a+i*i)),h=s&&(n*a+t*i)/s;return Math.acos(Math.min(Math.max(h,-1),1))}function Zn(r){return r[0]=0,r[1]=0,r}function Gn(r){return"vec2("+r[0]+", "+r[1]+")"}function Xn(r,e){return r[0]===e[0]&&r[1]===e[1]}function jn(r,e){var n=r[0],t=r[1],a=e[0],i=e[1];return Math.abs(n-a)<=P*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(t-i)<=P*Math.max(1,Math.abs(t),Math.abs(i))}var Un=Vr,Jn=Nr,Kn=Cr,un=Dr,r1=kr,e1=Fr,n1=$r,t1=function(){var r=qr();return function(e,n,t,a,i,s){var h,c;for(n||(n=2),t||(t=0),a?c=Math.min(a*n+t,e.length):c=e.length,h=t;h<c;h+=n)r[0]=e[h],r[1]=e[h+1],i(r,r,s),e[h]=r[0],e[h+1]=r[1];return e}}();var j=class{constructor(e){this.trans_mat=S.create(),S.fromTranslation(this.trans_mat,[e.width/2,e.height/2,0]),S.scale(this.trans_mat,this.trans_mat,[1,-1,1])}transformTo(e){return this}};function vr(r,e){let n=r.getBoundingClientRect(),t=e.clientX-n.left,a=e.clientY-n.top;return[t,a]}function U(){let r=document.getElementById("myCanvas"),e=r.getContext("2d");return{canvas:r,ctx:e}}var $=class{constructor(){let{canvas:e,ctx:n}=U();this.canvas=e,e.addEventListener("mouseover",t=>{this.inside=!0,this.curr=vr(e,t)}),e.addEventListener("mouseout",()=>{this.inside=!1,this.down=!1}),e.addEventListener("mousedown",()=>{this.down=!0}),e.addEventListener("mouseup",()=>{this.down=!1})}mouseDrag(e){this.canvas.addEventListener("mousemove",n=>{if(this.prev=this.curr,this.curr=vr(this.canvas,n),this.down&&this.inside){let t=Z.create();Z.sub(t,this.curr,this.prev),e(t)}})}mouseWheel(e){this.canvas.addEventListener("wheel",n=>{n.preventDefault(),this.inside&&e(n.deltaY)})}logStates(){console.log("down: ",this.down,"inside: ",this.inside,"curr: ",this.curr)}};var J=class{constructor(){this.moveEye=e=>{this.eye[0]=this.inLimit(e[0])?this.eye[0]+-e[0]/10:this.eye[0],this.eye[1]=this.inLimit(e[1])?this.eye[1]+-e[1]/10:this.eye[1],S.lookAt(this.trans_mat,this.eye,this.target,this.up)};this.trans_mat=S.create(),this.eye=C.fromValues(20,30,40),this.target=C.fromValues(0,0,0),this.up=C.fromValues(0,1,0),S.lookAt(this.trans_mat,this.eye,this.target,this.up),this.event=new $,this.event.mouseDrag(this.moveEye)}transformTo(e){return this.trans_mat=S.create(),S.lookAt(this.trans_mat,this.eye,this.target,this.up),S.multiply(this.trans_mat,e.trans_mat,this.trans_mat),this}inLimit(e){return!0}};function N(r,e,n){let t=C.create();C.transformMat4(t,r,e),n.moveTo(t[0],t[1])}function w(r,e,n){let t=C.create();C.transformMat4(t,r,e),n.lineTo(t[0],t[1])}var K=class{constructor(e=1/0){this.capacity=e;this.storage=[]}enqueue(e){this.size()<=this.capacity&&this.storage.push(e)}dequeue(){return this.storage.shift()}size(){return this.storage.length}};var u=class{constructor(e,n){this.trans_mat=S.create(),this.context=e,this.scale=n}renderAxes(e){this.context.strokeStyle=e,this.context.lineWidth=1,this.context.beginPath(),N([1.2,0,0],this.trans_mat,this.context),w([-1.2,0,0],this.trans_mat,this.context),N([0,0,0],this.trans_mat,this.context),w([0,1.2,0],this.trans_mat,this.context),w([0,-1.2,0],this.trans_mat,this.context),N([0,0,0],this.trans_mat,this.context),w([0,0,1.2],this.trans_mat,this.context),w([0,0,-1.2],this.trans_mat,this.context),N([1.1,.05,0],this.trans_mat,this.context),w([1.2,0,0],this.trans_mat,this.context),w([1.1,-.05,0],this.trans_mat,this.context),N([.05,1.1,0],this.trans_mat,this.context),w([0,1.2,0],this.trans_mat,this.context),w([-.05,1.1,0],this.trans_mat,this.context),N([.05,0,1.1],this.trans_mat,this.context),w([0,0,1.2],this.trans_mat,this.context),w([-.05,0,1.1],this.trans_mat,this.context),N([1.3,-.05,0],this.trans_mat,this.context),w([1.4,.05,0],this.trans_mat,this.context),N([1.3,.05,0],this.trans_mat,this.context),w([1.4,-.05,0],this.trans_mat,this.context),N([-.05,1.4,0],this.trans_mat,this.context),w([0,1.35,0],this.trans_mat,this.context),w([.05,1.4,0],this.trans_mat,this.context),N([0,1.35,0],this.trans_mat,this.context),w([0,1.28,0],this.trans_mat,this.context),N([-.05,0,1.3],this.trans_mat,this.context),w([.05,0,1.3],this.trans_mat,this.context),w([-.05,0,1.4],this.trans_mat,this.context),w([.05,0,1.4],this.trans_mat,this.context),this.context.stroke()}renderCubeTrace(e){this.context.strokeStyle=`rgba(${e.rgb_color[0]}, ${e.rgb_color[1]}, ${e.rgb_color[2]})`,this.context.lineWidth=2,this.context.beginPath();for(let n=0;n<e.prev_mat_queue.size();n++)w([0,0,0],e.prev_mat_queue.storage[n],this.context);this.context.stroke(),e.prev_mat_queue.size()>=20&&e.prev_mat_queue.dequeue()}transformTo(e){return this.trans_mat=S.create(),S.scale(this.trans_mat,this.trans_mat,[this.scale,this.scale,this.scale]),S.multiply(this.trans_mat,e.trans_mat,this.trans_mat),this}};var F=class{constructor(e,n,t,a=!1,i=[1,1,1],s=.2,h=[0,68,255]){this.trans_mat=[0,0,0];this.isInit=!0;this.step=10;this.counter=0;this.context=e,this.scale=n,this.location=t,this.deg=a?1:0,this.speed=s,this.rgb_color=h,this.rotate_vec=i,this.prev_mat_queue=new K(1e3)}transformTo(e){this.isInit&&(this.next=e),this.isInit=!1,this.counter%this.step===0&&this.prev_mat_queue.enqueue(S.clone(this.trans_mat)),this.counter=(this.counter+1)%this.step,this.trans_mat=S.create();let n=this.deg*Math.PI/180;return S.fromTranslation(this.trans_mat,this.location),S.rotate(this.trans_mat,this.trans_mat,n,this.rotate_vec),S.multiply(this.trans_mat,e.trans_mat,this.trans_mat),this}render(){this.context.fillStyle=`rgba(${this.rgb_color[0]}, ${this.rgb_color[1]}, ${this.rgb_color[2]})`,this.context.beginPath(),N([0,0,0],this.trans_mat,this.context),w([this.scale,0,0],this.trans_mat,this.context),w([this.scale,0,this.scale],this.trans_mat,this.context),w([0,0,this.scale],this.trans_mat,this.context),w([0,0,0],this.trans_mat,this.context),this.context.fill(),this.context.beginPath(),N([0,0,0],this.trans_mat,this.context),w([this.scale,0,0],this.trans_mat,this.context),w([this.scale,this.scale,0],this.trans_mat,this.context),w([0,this.scale,0],this.trans_mat,this.context),w([0,0,0],this.trans_mat,this.context),this.context.fill(),this.context.fillStyle=`rgba(${this.rgb_color[0]+30}, ${this.rgb_color[1]+30}, ${this.rgb_color[2]})`,this.context.beginPath(),N([0,0,0],this.trans_mat,this.context),w([0,0,this.scale],this.trans_mat,this.context),w([0,this.scale,this.scale],this.trans_mat,this.context),w([0,this.scale,0],this.trans_mat,this.context),w([0,0,0],this.trans_mat,this.context),this.context.fill(),this.context.beginPath(),N([this.scale,this.scale,this.scale],this.trans_mat,this.context),w([this.scale,this.scale,0],this.trans_mat,this.context),w([0,this.scale,0],this.trans_mat,this.context),w([0,this.scale,this.scale],this.trans_mat,this.context),w([this.scale,this.scale,this.scale],this.trans_mat,this.context),this.context.fill(),this.context.fillStyle=`rgba(${this.rgb_color[0]}, ${this.rgb_color[1]}, ${this.rgb_color[2]})`,this.context.beginPath(),N([this.scale,this.scale,this.scale],this.trans_mat,this.context),w([this.scale,this.scale,0],this.trans_mat,this.context),w([this.scale,0,0],this.trans_mat,this.context),w([this.scale,0,this.scale],this.trans_mat,this.context),w([this.scale,this.scale,this.scale],this.trans_mat,this.context),this.context.fill(),this.context.fillStyle=`rgba(${this.rgb_color[0]+30}, ${this.rgb_color[1]+30}, ${this.rgb_color[2]})`,this.context.beginPath(),N([this.scale,this.scale,this.scale],this.trans_mat,this.context),w([0,this.scale,this.scale],this.trans_mat,this.context),w([0,0,this.scale],this.trans_mat,this.context),w([this.scale,0,this.scale],this.trans_mat,this.context),w([this.scale,this.scale,this.scale],this.trans_mat,this.context),this.context.fill(),this.deg!==0&&(this.deg=(this.deg+this.speed)%360)}};var rr=class{constructor(e){this.selection=document.querySelector(e),this.selection.addEventListener("change",n=>{this.selection.checked=!!this.selection.checked})}get checked(){return this.selection.checked}};var er=class{constructor(){this.moveDistance=e=>{let n=e/10;this.distance+=n,S.ortho(this.trans_mat,-this.distance,this.distance,-this.distance,this.distance,-1,1)};this.trans_mat=S.create(),this.distance=150,this.event=new $,this.event.mouseWheel(this.moveDistance)}transformTo(e){return this.trans_mat=S.create(),S.ortho(this.trans_mat,-this.distance,this.distance,-this.distance,this.distance,-1,1),S.multiply(this.trans_mat,e.trans_mat,this.trans_mat),this}};var nr=class{constructor(){this.selection=document.querySelector("#fps")}track(){if(!this.lastCalledTime){this.lastCalledTime=performance.now(),this.fps=0;return}let e=(performance.now()-this.lastCalledTime)/1e3;this.lastCalledTime=performance.now(),this.fps=Math.floor(1/e),this.selection.innerText=`FPS: ${this.fps}`}};var tr=class{constructor(){this.render=()=>{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.world.transformTo(this.camera.transformTo(this.projection.transformTo(this.viewport))),this.solar_system.sun.transformTo(this.world),this.solar_system.planet1.transformTo(this.solar_system.sun),this.solar_system.planet2.transformTo(this.solar_system.sun),this.solar_system.planet1_moon1.transformTo(this.solar_system.planet1),this.solar_system.planet2_moon1.transformTo(this.solar_system.planet2),this.solar_system.planet2_moon2.transformTo(this.solar_system.planet2),this.solar_system.planet2_moon2_moon1.transformTo(this.solar_system.planet2_moon2),this.gridCheckbox.checked&&this.world.renderAxes("grey");for(let e in this.solar_system)this.world.renderCubeTrace(this.solar_system[e]),this.solar_system[e].render();this.tracker.track(),requestAnimationFrame(this.render)};let{canvas:e,ctx:n}=U();this.tracker=new nr,this.ctx=n,this.canvas=e,this.viewport=new j(e),this.projection=new er,this.camera=new J,this.world=new u(n,4e4);let t=.35;this.solar_system={sun:new F(n,t,[-t/2,-t/2,-t/2],!0,[-1,-1,-1],.3),planet1:new F(n,.1,[.6,.6,0],!0,[1,1,1],.7,[255,60,41]),planet1_moon1:new F(n,.05,[.15,.15,-.15],!0,[-1,-1,-1],2,[26,186,9]),planet2:new F(n,.2,[-.6,-.6,.4],!0,[-1,-1,-1],.25,[75,9,186]),planet2_moon1:new F(n,.11,[-.3,.3,.2],!0,[1,2,3],.9,[176,175,9]),planet2_moon2:new F(n,.08,[.3,-.3,-.2],!0,[-2,-3,-1],1.2,[9,176,175]),planet2_moon2_moon1:new F(n,.04,[.1,.5,.1],!0,[-1,1,-1],2,[130,60,41])},this.gridCheckbox=new rr("#grid")}};var a1=new tr;a1.render();})();
//# sourceMappingURL=index.js.map
