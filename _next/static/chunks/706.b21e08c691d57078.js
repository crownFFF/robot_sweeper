"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{4706:function(e,t,o){o.r(t);var a=o(7437),r=o(2079),s=o(2265),i=o(574),c=o(9285);t.default=e=>{let{setInfo:t,...o}=e,m=function(){let{camera:e}=(0,c.D)(),t=(0,s.useRef)(new r.Pa4),o=(0,s.useRef)(new r.Pa4),a=(0,s.useRef)(e.fov),i=(0,s.useRef)(!1),m=(0,s.useRef)(0);return(0,c.F)((s,c)=>{if(!i.current)return;m.current+=c;let h=Math.min(m.current/1.5,1);e.position.lerp(t.current,h);let l=new r.Pa4().lerpVectors(e.getWorldDirection(new r.Pa4),o.current.clone().sub(e.position),h);e.lookAt(e.position.clone().add(l)),e.fov=r.M8C.lerp(e.fov,a.current,h),e.updateProjectionMatrix(),h>=1&&(i.current=!1)}),{moveCameraTo:(e,r,s)=>{t.current.copy(e),o.current.copy(r),a.current=s,m.current=0,i.current=!0}}}(),{nodes:h,materials:l}=(0,i.L)("/computers.glb"),n=(0,s.useRef)(null),[d,g]=(0,s.useState)(null),[w,j]=(0,s.useState)(!1),S=(e,o,a)=>{if(w)m.moveCameraTo(new r.Pa4(0,0,5),new r.Pa4(0,0,0),75),t({show:!w,number:o,position:a});else{let s=n.current.position.toArray();m.moveCameraTo(new r.Pa4(s[0]-e[0],s[1]+e[1],s[2]+e[2]),new r.Pa4(...s),25),setTimeout(()=>{t({show:!w,number:o,position:a})},800)}j(!w)};return(0,s.useEffect)(()=>{let e=document.createElement("video");e.src="/video/success.mp4",e.loop=!0,e.muted=!0,e.play();let t=new r.fO1(e);return t.repeat.set(3.5,3),t.offset.set(-.05,-1.2),g(t),()=>{e.pause(),e.src="",t.dispose()}},[]),(0,a.jsxs)("group",{...o,dispose:null,children:[(0,a.jsxs)("group",{position:[.27,1.529,-2.613],children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_206.geometry,material:l.Texture}),(0,a.jsx)("mesh",{onClick:()=>S([.05,.05,.2],1,"right"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_207.geometry,material:l.Screen,children:(0,a.jsx)("meshBasicMaterial",{map:d})})]}),(0,a.jsxs)("group",{position:[-1.43,2.496,-1.8],rotation:[0,1.002,0],children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_209.geometry,material:l.Texture}),(0,a.jsx)("mesh",{onClick:()=>S([-.025,-.005,.1],2,"right"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_210.geometry,material:l.Screen})]}),(0,a.jsxs)("group",{position:[-2.731,.629,-.522],rotation:[0,1.087,0],children:[(0,a.jsx)("mesh",{onClick:()=>S([-.035,.026,.03],3,"right"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_212.geometry,material:l.Texture}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_213.geometry,material:l.Screen})]}),(0,a.jsxs)("group",{position:[1.845,.377,-1.771],rotation:[0,-Math.PI/9,0],children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_215.geometry,material:l.Texture}),(0,a.jsx)("mesh",{onClick:()=>S([.04,.07,.1],4,"left"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_216.geometry,material:l.Screen})]}),(0,a.jsxs)("group",{position:[3.11,2.145,-.18],rotation:[0,-.793,0],scale:.81,children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_218.geometry,material:l.Texture}),(0,a.jsx)("mesh",{onClick:()=>S([.5,.055,.06],5,"right"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_219.geometry,material:l.Screen})]}),(0,a.jsxs)("group",{position:[-3.417,3.056,1.303],rotation:[0,1.222,0],scale:.9,children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_221.geometry,material:l.Texture}),(0,a.jsx)("mesh",{onClick:()=>S([-.5,-.1,.06],6,"right"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_222.geometry,material:l.Screen})]}),(0,a.jsxs)("group",{position:[-3.899,4.287,-2.642],rotation:[0,.539,0],children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_224.geometry,material:l.Texture}),(0,a.jsx)("mesh",{onClick:()=>S([-.035,-.025,.05],7,"right"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_225.geometry,material:l.Screen})]}),(0,a.jsxs)("group",{position:[.992,4.287,-4.209],rotation:[0,.429,0],scale:[-1,1,1],children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_227.geometry,material:l.Texture}),(0,a.jsx)("mesh",{onClick:()=>S([.01,-.075,.2],8,"left"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_228.geometry,material:l.Screen})]}),(0,a.jsxs)("group",{position:[4.683,4.29,-1.558],rotation:[0,-Math.PI/3,0],children:[(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_230.geometry,material:l.Texture}),(0,a.jsx)("mesh",{onClick:()=>S([.45,-.15,.1],9,"right"),ref:n,castShadow:!0,receiveShadow:!0,geometry:h.Object_231.geometry,material:l.Screen})]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_4.geometry,material:l.Texture,position:[.165,.794,-1.972],rotation:[-.544,.929,-1.119],scale:.5}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_6.geometry,material:l.Texture,position:[-2.793,.27,1.816],rotation:[-1.44,1.219,1.432],scale:.5}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_8.geometry,material:l.Texture,position:[-5.603,4.615,-.027],rotation:[-1.955,.163,1.202],scale:.5}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_10.geometry,material:l.Texture,position:[2.621,1.985,-2.473],rotation:[-.419,-.704,-1.851],scale:.5}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_12.geometry,material:l.Texture,position:[4.598,3.459,1.19],rotation:[-1.236,-.719,.48],scale:.5}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_14.geometry,material:l["Material.001"],scale:13}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_16.geometry,material:l.Texture,position:[.63,0,-3],rotation:[0,.17,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_18.geometry,material:l.Texture,position:[-.186,0,-2.962],rotation:[0,-.064,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_20.geometry,material:l.Texture,position:[-2.36,.32,-2.018],rotation:[0,.534,-Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_22.geometry,material:l.Texture,position:[-2.288,1.56,-2.263],rotation:[0,-.012,-Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_24.geometry,material:l.Texture,position:[-2.424,.938,-2.247],rotation:[Math.PI,-.136,-Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_26.geometry,material:l.Texture,position:[-2.195,2.188,-1.867],rotation:[Math.PI,-.512,-Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_28.geometry,material:l.Texture,position:[.353,2.352,-3.336],rotation:[-.255,0,0]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_30.geometry,material:l.Texture,position:[.183,2.801,-2.854],rotation:[.093,.146,-.014]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_32.geometry,material:l.Texture,position:[-3.528,0,.586],rotation:[Math.PI,-1.085,Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_34.geometry,material:l.Texture,position:[-2.896,.3,-1.466],rotation:[Math.PI,-1.347,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_36.geometry,material:l.Texture,position:[-3.528,1.528,.586],rotation:[0,.911,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_38.geometry,material:l.Texture,position:[1.895,0,-1.944],rotation:[0,-.436,0],scale:[1.5,1,1.5]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_40.geometry,material:l.Texture,position:[3.423,0,.005],rotation:[-Math.PI,1.127,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_42.geometry,material:l.Texture,position:[3.224,0,-.804],rotation:[0,-1.324,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_44.geometry,material:l.Texture,position:[3.53,1.834,.44],rotation:[-Math.PI,1.324,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_46.geometry,material:l.Texture,position:[1.862,1.61,-1.807],rotation:[0,-Math.PI/3,0]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_48.geometry,material:l.Texture,position:[4.086,2.183,2.41],rotation:[0,-1.548,1.571],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_50.geometry,material:l.Texture,position:[4.255,.943,2.219],rotation:[0,-1.002,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_52.geometry,material:l.Texture,position:[4.314,1.565,2.343],rotation:[Math.PI,1.149,Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_54.geometry,material:l.Texture,position:[3.87,.315,2.35],rotation:[3.142,1.526,1.571],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_56.geometry,material:l.Texture,position:[3.954,2.491,1.607],rotation:[0,-Math.PI/3,0]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_58.geometry,material:l.Texture,position:[-3.79,0,1.656],rotation:[0,1.393,0],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_60.geometry,material:l.Texture,position:[-3.79,1.528,1.656],rotation:[-Math.PI,-1.218,-Math.PI],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_62.geometry,material:l.Texture,position:[-3.693,0,2.585],rotation:[0,-1.568,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_64.geometry,material:l.Texture,position:[-5.36,2.183,.811],rotation:[0,.772,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_66.geometry,material:l.Texture,position:[-5.614,.943,.817],rotation:[0,1.318,1.571],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_68.geometry,material:l.Texture,position:[-5.564,1.565,.69],rotation:[-Math.PI,-1.171,Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_70.geometry,material:l.Texture,position:[-5.257,.315,1.01],rotation:[-Math.PI,-.795,Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_72.geometry,material:l.Texture,position:[-5.474,2.794,.745],rotation:[Math.PI,-1.155,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_74.geometry,material:l.Texture,position:[-5.39,4.034,.986],rotation:[Math.PI,-.609,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_76.geometry,material:l.Texture,position:[-5.289,3.412,.894],rotation:[0,.757,Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_78.geometry,material:l.Texture,position:[-5.696,4.662,.718],rotation:[0,1.133,Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_80.geometry,material:l.Texture,position:[-5.283,0,-2.328],rotation:[0,.755,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_82.geometry,material:l.Texture,position:[-5.952,0,-.641],rotation:[0,.953,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_84.geometry,material:l.Texture,position:[-5.486,0,-1.385],rotation:[-Math.PI,-.985,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_86.geometry,material:l.Texture,position:[-4.476,0,-2.749],rotation:[-Math.PI,-.568,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_88.geometry,material:l.Texture,position:[-3.012,0,-3.79],rotation:[0,.597,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_90.geometry,material:l.Texture,position:[-3.716,0,-2.886],rotation:[0,.644,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_92.geometry,material:l.Texture,position:[-2.082,0,-4.324],rotation:[-Math.PI,-.597,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_94.geometry,material:l.Texture,position:[-1.016,0,-4.489],rotation:[0,.308,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_96.geometry,material:l.Texture,position:[-.084,0,-5.026],rotation:[-Math.PI,-.039,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_98.geometry,material:l.Texture,position:[-5.315,1.833,-1.412],rotation:[0,1.062,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_100.geometry,material:l.Texture,position:[-4.181,1.833,-3.064],rotation:[-Math.PI,-.465,-Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_102.geometry,material:l.Texture,position:[-1.758,1.833,-3.605],rotation:[0,-1.165,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_104.geometry,material:l.Texture,position:[-.254,1.833,-5.542],rotation:[0,1.553,1.571],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_106.geometry,material:l.Texture,position:[-4.194,1.836,-2.768],rotation:[0,.655,Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_108.geometry,material:l.Texture,position:[-5.283,2.143,-2.328],rotation:[-Math.PI,-.755,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_110.geometry,material:l.Texture,position:[-5.952,2.143,-.641],rotation:[-Math.PI,-.953,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_112.geometry,material:l.Texture,position:[-5.486,2.143,-1.385],rotation:[0,.985,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_114.geometry,material:l.Texture,position:[-4.476,2.143,-2.749],rotation:[0,.568,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_116.geometry,material:l.Texture,position:[-3.012,2.143,-3.79],rotation:[-Math.PI,-.597,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_118.geometry,material:l.Texture,position:[-3.727,2.143,-3.1],rotation:[-Math.PI,-.644,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_120.geometry,material:l.Texture,position:[-2.082,2.143,-4.324],rotation:[0,.597,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_122.geometry,material:l.Texture,position:[-1.016,2.143,-4.489],rotation:[-Math.PI,-.308,-Math.PI],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_124.geometry,material:l.Texture,position:[-.084,2.143,-5.026],rotation:[0,.039,0],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_126.geometry,material:l.Texture,position:[-5.315,3.976,-1.412],rotation:[0,1.062,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_128.geometry,material:l.Texture,position:[-4.181,3.976,-3.064],rotation:[-Math.PI,-.465,-Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_130.geometry,material:l.Texture,position:[-1.173,3.976,-4.449],rotation:[0,.168,Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_132.geometry,material:l.Texture,position:[-.941,3.976,-4.664],rotation:[Math.PI,.018,-Math.PI/2],scale:1.52}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_134.geometry,material:l.Texture,position:[-4.194,3.979,-2.768],rotation:[0,.655,Math.PI/2],scale:[-1.52,1.52,1.52]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_136.geometry,material:l.Texture,position:[-1.095,4.291,-4.434],rotation:[0,.357,0]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_138.geometry,material:l.Texture,position:[-5.246,4.291,-1.466],rotation:[0,1.246,0]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_140.geometry,material:l.Texture,position:[5.531,2.183,.174],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_142.geometry,material:l.Texture,position:[5.786,.943,.18],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_144.geometry,material:l.Texture,position:[5.736,1.565,.053],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_146.geometry,material:l.Texture,position:[5.428,.315,.373],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_148.geometry,material:l.Texture,position:[5.646,2.794,.107],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_150.geometry,material:l.Texture,position:[5.562,4.034,.348],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_152.geometry,material:l.Texture,position:[5.461,3.412,.256],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_154.geometry,material:l.Texture,position:[5.868,4.662,.081],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_156.geometry,material:l.Texture,position:[4.856,0,-2.541],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_158.geometry,material:l.Texture,position:[5.525,0,-.854],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_160.geometry,material:l.Texture,position:[5.059,0,-1.597],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_162.geometry,material:l.Texture,position:[4.05,0,-2.962],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_164.geometry,material:l.Texture,position:[2.585,0,-4.002],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_166.geometry,material:l.Texture,position:[3.289,0,-3.098],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_168.geometry,material:l.Texture,position:[1.655,0,-4.536],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_170.geometry,material:l.Texture,position:[.59,0,-4.701],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_172.geometry,material:l.Texture,position:[4.888,1.833,-1.624],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_174.geometry,material:l.Texture,position:[3.754,1.833,-3.277],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_176.geometry,material:l.Texture,position:[1.332,1.833,-3.817],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_178.geometry,material:l.Texture,position:[3.767,1.836,-2.98],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_180.geometry,material:l.Texture,position:[4.856,2.143,-2.541],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_182.geometry,material:l.Texture,position:[5.525,2.143,-.854],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_184.geometry,material:l.Texture,position:[5.059,2.143,-1.597],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_186.geometry,material:l.Texture,position:[4.05,2.143,-2.962],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_188.geometry,material:l.Texture,position:[2.585,2.143,-4.002],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_190.geometry,material:l.Texture,position:[3.3,2.143,-3.312],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_192.geometry,material:l.Texture,position:[1.655,2.143,-4.536],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_194.geometry,material:l.Texture,position:[.59,2.143,-4.701],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_196.geometry,material:l.Texture,position:[4.888,3.976,-1.624],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_198.geometry,material:l.Texture,position:[3.754,3.976,-3.277],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_200.geometry,material:l.Texture,position:[.746,3.976,-4.662],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_202.geometry,material:l.Texture,position:[3.767,3.979,-2.98],scale:[-1,1,1]}),(0,a.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:h.Object_204.geometry,material:l.Texture,position:[3.198,4.291,-3.092],rotation:[0,-.563,0],scale:[-1,1,1]})]})}}}]);