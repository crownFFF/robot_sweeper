"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{6261:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(2265),o=n(2079),a=n(9285);function c(e,t){let n=r.useRef(),[c]=r.useState(()=>t?t instanceof o.Tme?{current:t}:t:n),[s]=r.useState(()=>new o.Xcj(void 0));r.useLayoutEffect(()=>{t&&(c.current=t instanceof o.Tme?t:t.current),s._root=c.current});let u=r.useRef({}),l=r.useMemo(()=>{let t={};return e.forEach(e=>Object.defineProperty(t,e.name,{enumerable:!0,get(){if(c.current)return u.current[e.name]||(u.current[e.name]=s.clipAction(e,c.current))},configurable:!0})),{ref:c,clips:e,actions:t,names:e.map(e=>e.name),mixer:s}},[e]);return(0,a.F)((e,t)=>s.update(t)),r.useEffect(()=>{let e=c.current;return()=>{u.current={},s.stopAllAction(),Object.values(l.actions).forEach(t=>{e&&s.uncacheAction(t,e)})}},[e]),l}},6501:function(e,t,n){n.r(t);var r=n(7437),o=n(2265),a=n(574),c=n(6261),s=n(9285);t.default=e=>{let{scrollY:t,sayHi:n,...u}=e,l=(0,o.useRef)(null),{nodes:i,materials:m,animations:_}=(0,a.L)("/cute_home_robot.glb"),{actions:j}=(0,c.v)(_,l);return(0,o.useEffect)(()=>{let e=j["Take 001"];e&&(n?(e.play(),e.paused=!1):e.paused=!0)},[j,n]),(0,s.F)(()=>{l.current&&(l.current.rotation.y=-(.01*t))}),(0,r.jsx)("group",{ref:l,...u,dispose:null,children:(0,r.jsx)("group",{name:"Sketchfab_Scene",children:(0,r.jsx)("group",{name:"Sketchfab_model",rotation:[-Math.PI/2,0,0],scale:.057,children:(0,r.jsx)("group",{name:"edca9fd234644d5480a540acc91ca584fbx",rotation:[Math.PI/2,0,0],children:(0,r.jsx)("group",{name:"Object_2",children:(0,r.jsx)("group",{name:"RootNode",children:(0,r.jsxs)("group",{name:"Object_4",children:[(0,r.jsx)("primitive",{object:i._rootJoint}),(0,r.jsx)("skinnedMesh",{name:"Object_7",geometry:i.Object_7.geometry,material:m.M_Metal1,skeleton:i.Object_7.skeleton}),(0,r.jsx)("skinnedMesh",{name:"Object_8",geometry:i.Object_8.geometry,material:m.M_Pantalla1,skeleton:i.Object_8.skeleton}),(0,r.jsx)("skinnedMesh",{name:"Object_9",geometry:i.Object_9.geometry,material:m.M_Pantalla2,skeleton:i.Object_9.skeleton}),(0,r.jsx)("skinnedMesh",{name:"Object_10",geometry:i.Object_10.geometry,material:m.M_Rueda,skeleton:i.Object_10.skeleton}),(0,r.jsx)("group",{name:"Object_6",position:[0,10,0],rotation:[-Math.PI/2,0,0]}),(0,r.jsx)("group",{name:"Robo",position:[0,10,0],rotation:[-Math.PI/2,0,0]}),(0,r.jsx)("group",{name:"Cylinder001",position:[-.121,0,-.603],rotation:[-Math.PI/2,0,0],children:(0,r.jsx)("mesh",{name:"Cylinder001_M_Suelo_0",castShadow:!0,receiveShadow:!0,geometry:i.Cylinder001_M_Suelo_0.geometry,material:m.M_Suelo})})]})})})})})})})}}}]);