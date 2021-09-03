(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},83:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(18),r=n.n(o),a=(n(54),n(55),n(32)),s=n(6),l=n(15),j=n(49),d=n(48),b=n(19),h=n(1),x=Object(c.createContext)(),u=x.Provider,O=function(e,t){switch(t.type){case"LOAD_BOOKS":return Object(b.a)(Object(b.a)({},e),{},{books:t.books});case"ADD_BOOKS":return Object(b.a)(Object(b.a)({},e),{},{books:[t.book].concat(Object(d.a)(e.books))});default:return e}},f=function(e){e.value;var t=Object(j.a)(e,["value"]),n=Object(c.useReducer)(O,{books:[]}),i=Object(l.a)(n,2),o=i[0],r=i[1];return Object(h.jsx)(u,Object(b.a)({value:[o,r]},t))},g=n(94),p=n(90),m=n(44),v=n(95);n(57);var k=function(){return Object(h.jsx)(g.a,{expand:"lg",bg:"dark",variant:"dark",id:"navbar",children:Object(h.jsxs)(p.a,{id:"container",children:[Object(h.jsx)(m.a,{href:"/",children:"Google Books"}),Object(h.jsxs)(v.a,{className:"mr-auto",children:[Object(h.jsx)(v.a.Link,{href:"/",children:"Search"}),Object(h.jsx)(v.a.Link,{href:"/saved",children:"Saved"})]})]})})},y=n(96);n(63);var F=function(){return Object(h.jsx)(y.a,{id:"titleBox",children:Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)("h1",{children:"(React) Google Books Search"}),Object(h.jsx)("h4",{children:"Search for and save books of interest"})]})})},I=n(91);n(64);var w=function(e){return Object(h.jsxs)(y.a,{id:"searchBox",style:{justifyContent:"space-evenly",alignItems:"center"},children:[Object(h.jsx)(y.a.Title,{style:{width:"80%"},children:"Book Search"}),Object(h.jsx)("input",{style:{width:"80%"},type:"text",value:e.search,onChange:e.handleBookSearch,placeholder:"Look for your favorite book!"}),Object(h.jsx)(I.a,{style:{width:"10%"},onClick:e.handleInputSubmit,children:"Search"})]})},S=n(10),B=n(21),C=n.n(B),D=function(e){return C.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&key=AIzaSyAyS5JORNcOvvGYQeJgQT87aWIcOY04ad4&maxResults=8")},A=function(e){return C.a.post("/api/books",e)},L=function(){return C.a.get("/api/books")},R=function(e){return C.a.delete("/api/books/"+e)},T=n(92),z=n(93),N=n(26),W=(n(83),i.a.memo((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(y.a,{id:"resultsBox",style:{paddingTop:"20px"},children:[Object(h.jsx)(y.a.Title,{children:Object(h.jsx)("h3",{children:"Results"})}),Object(h.jsx)(y.a.Body,{children:!0===e.activated&&e.books.data?e.books.data.items.map((function(e){var t,n;return Object(h.jsx)(T.a,{style:{justifyContent:"center",marginTop:"10px",marginBottom:"10px"},children:Object(h.jsxs)(y.a,{style:{width:"80rem",padding:"30px",borderWidth:"4px"},children:[Object(h.jsxs)(T.a,{style:{marginBottom:"2px"},children:[Object(h.jsx)(z.a,{xs:12,md:8,lg:8,style:{},children:Object(h.jsxs)(z.a,{style:{float:"left",textAlign:"left"},children:[Object(h.jsx)("h4",{children:Object(h.jsx)("strong",{children:e.volumeInfo.title})}),Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:e.volumeInfo.subtitle})}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:["Written by : ",[e.volumeInfo.authors]]})]})}),Object(h.jsxs)(z.a,{xs:12,md:4,lg:4,children:[Object(h.jsx)(I.a,{style:(t={float:"right",marginLeft:"10px",width:"8rem",display:"inline-block",padding:"7px 20px",borderRadius:"25px",textDecoration:"none",color:"#FFF",backgroundImage:"-webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)"},Object(S.a)(t,"backgroundImage","linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)"),Object(S.a)(t,"transition",".4s"),t),href:e.volumeInfo.infoLink,target:"blank",children:"View"}),Object(h.jsxs)(I.a,{style:(n={float:"right",width:"8rem",display:"inline-block",padding:"7px 20px",borderRadius:"25px",textDecoration:"none",color:"#FFF",backgroundImage:"-webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)"},Object(S.a)(n,"backgroundImage","linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)"),Object(S.a)(n,"transition",".4s"),n),onClick:function(){return t=e.volumeInfo.title,n=e.volumeInfo.authors,c=e.volumeInfo.description,i=e.volumeInfo.imageLinks.thumbnail,o=e.volumeInfo.infoLink,void A({title:t,authors:n,description:c,image:i,link:o}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));var t,n,c,i,o},children:["Save ",Object(h.jsx)(N.b,{})]})]})]}),Object(h.jsxs)(T.a,{children:[Object(h.jsx)(z.a,{xs:12,md:5,lg:4,children:Object(h.jsx)("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:e.volumeInfo.title,style:{width:"15.5rem",height:"18.5rem",float:"left"}})}),Object(h.jsx)(z.a,{xs:12,md:7,lg:8,children:Object(h.jsxs)("p",{style:{lineHeight:"2.3rem",display:"flex",textAlign:"left"},children:[Object(h.jsx)("span",{children:Object(h.jsx)("h1",{style:{fontFamily:"Cinzel Decorative, cursive",fontSize:"2rem"},children:e.volumeInfo.description.split("")[0]})}),e.volumeInfo.description.split("").splice(1,e.volumeInfo.description.split("").length).join("")]})})]})]})})})):"No matches"})]})})})));var J=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)([]),r=Object(l.a)(o,2),a=r[0],s=r[1],j=Object(c.useState)(!1),d=Object(l.a)(j,2),b=d[0],x=d[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{}),Object(h.jsx)(w,{search:n,handleBookSearch:function(e){i(e.target.value)},handleInputSubmit:function(e){e.preventDefault(),x(!0),D(n).then((function(e){console.log(e),s(e)})).catch((function(e){return console.log(e)}))}}),Object(h.jsx)(W,{activated:b,books:a})]})},E=i.a.memo((function(){var e=Object(s.e)(),t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],o=n[1];function r(){L().then((function(e){console.log(e.data),o(e.data)})).catch((function(e){return console.log(e)}))}Object(c.useEffect)((function(){r()}),[]);return Object(h.jsxs)(y.a,{id:"resultsBox",style:{paddingTop:"20px"},children:[Object(h.jsx)(T.a,{children:Object(h.jsx)(y.a.Title,{children:Object(h.jsx)("h3",{children:"Your saved books  "})})}),Object(h.jsx)(y.a.Body,{children:i?i.map((function(t){var n,c;return Object(h.jsx)(T.a,{style:{justifyContent:"center",marginTop:"10px",marginBottom:"10px"},children:Object(h.jsxs)(y.a,{style:{width:"80rem",padding:"30px",borderWidth:"4px"},children:[Object(h.jsxs)(T.a,{style:{marginBottom:"2px"},children:[Object(h.jsx)(z.a,{xs:12,md:8,lg:8,style:{},children:Object(h.jsxs)(z.a,{style:{float:"left",textAlign:"left"},children:[Object(h.jsx)("h4",{children:Object(h.jsx)("strong",{children:t.title})}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:["Written by : ",t.authors]})]})}),Object(h.jsxs)(z.a,{xs:12,md:4,lg:4,children:[Object(h.jsx)(I.a,{style:(n={float:"right",marginLeft:"10px",width:"8rem",display:"inline-block",padding:"7px 20px",borderRadius:"25px",textDecoration:"none",color:"#FFF",backgroundImage:"-webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)"},Object(S.a)(n,"backgroundImage","linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)"),Object(S.a)(n,"transition",".4s"),n),href:t.link,target:"blank",children:"View"}),Object(h.jsxs)(I.a,{style:(c={float:"right",width:"8rem",display:"inline-block",padding:"7px 20px",borderRadius:"25px",textDecoration:"none",color:"#FFF",backgroundImage:"-webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%)"},Object(S.a)(c,"backgroundImage","linear-gradient(45deg, #D31027 0%, #EA384D  51%, #D31027  100%)"),Object(S.a)(c,"transition",".4s"),c),onClick:function(){return n=t._id,void R(n).then((function(t){console.log(t),r(),e.push("/saved")})).catch((function(e){return console.log(e)}));var n},children:["Delete ",Object(h.jsx)(N.a,{})]})]})]}),Object(h.jsxs)(T.a,{children:[Object(h.jsx)(z.a,{xs:12,md:5,lg:4,children:Object(h.jsx)("img",{src:t.image,alt:t.title,style:{width:"15.5rem",height:"18.5rem",float:"left"}})}),Object(h.jsx)(z.a,{xs:12,md:7,lg:8,children:Object(h.jsxs)("p",{style:{lineHeight:"2.3rem",display:"flex",textAlign:"left"},children:[Object(h.jsx)("span",{children:Object(h.jsx)("h1",{style:{fontFamily:"Cinzel Decorative, cursive",fontSize:"2rem"},children:t.description.split("")[0]})}),t.description.split("").splice(1,t.description.split("").length).join("")]})})]})]})})})):"No matches"})]})}));var G=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{}),Object(h.jsx)(E,{})]})};var Y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{children:Object(h.jsx)(a.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{}),Object(h.jsx)(s.a,{exact:!0,path:"/",component:J}),Object(h.jsx)(s.a,{exact:!0,path:"/saved",component:G})]})})})})};n(87);r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.bfc7f351.chunk.js.map