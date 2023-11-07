import{r,u as P,a as B,j as e,L as D}from"./index-97448f9c.js";import{u as J}from"./useLocalStorage-6a15a474.js";const G=()=>{const[m,t]=r.useState(""),[v,d]=r.useState("Enter data:"),[N,j]=J([],"contacts"),[h,C]=r.useState(!1),E=P(),w=B(),{id:q,firstName:R,lastName:V,email:z,phone:A,company:Z,job:L}=w.state,a=r.useRef(null),n=r.useRef(null),c=r.useRef(null),u=r.useRef(null),o=r.useRef(null),s=r.useRef(null),p=()=>new RegExp("^[a-zA-Z][a-zA-Z0-9-]+$").test(a.current.value)?(t(!0),a.current.style.borderColor="#44c47c",!0):(t(!1),a.current.style.borderColor="#eb4034",!1),i=()=>new RegExp("^[a-zA-Z][a-zA-Z0-9-]+$").test(n.current.value)?(t(!0),n.current.style.borderColor="#44c47c",!0):(t(!1),n.current.style.borderColor="#eb4034",!1),x=()=>new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i).test(c.current.value)?(t(!0),c.current.style.borderColor="#44c47c",!0):(t(!1),c.current.style.borderColor="#eb4034",!1),f=()=>new RegExp(/^\+?[0-9()\- ]{10,20}$/).test(u.current.value)?(t(!0),u.current.style.borderColor="#44c47c",!0):(t(!1),u.current.style.borderColor="#eb4034",!1),y=()=>{o.current.value.length?o.current.style.borderColor="#44c47c":o.current.style.borderColor="grey",s.current.value.length?s.current.style.borderColor="#44c47c":s.current.style.borderColor="grey"},S=l=>{const b=N.filter(I=>I.id!==l.id);j([l,...b])},g=()=>{if(p(),i(),x(),f(),p()&&i()&&x()&&f())return!0},k=()=>{d("Enter data:")},F=()=>{C(!0)},$=l=>{if(l.preventDefault(),g()){const b={id:q,firstName:a.current.value,lastName:n.current.value,email:c.current.value,phone:u.current.value,company:o.current.value.length?o.current.value:"No data",job:s.current.value.length?s.current.value:"No data"};S(b),k(),F()}else d("Correct mistakes!")};return r.useEffect(()=>{g()},[]),r.useEffect(()=>{d(m?"Enter data:":"Correct mistakes!")},[m]),r.useEffect(()=>{h&&E("/#")},[h]),e.jsxs("form",{className:"w-[262px] flex flex-col items-center mx-auto py-[1rem]",children:[e.jsx("p",{className:"pt-[1rem] font-bold mb-[1rem]",children:v}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("input",{type:"text",defaultValue:R,ref:a,onChange:p,placeholder:"First name",required:"required",className:"w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"}),e.jsx("label",{className:"text-[12px]",children:"required"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("input",{type:"text",defaultValue:V,ref:n,onChange:i,placeholder:"Last name",required:"required",className:"w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"}),e.jsx("label",{className:"text-[12px]",children:"required"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("input",{type:"email",defaultValue:z,ref:c,onChange:x,placeholder:"Email",required:"required",className:"w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"}),e.jsx("label",{className:"text-[12px]",children:"Example: mail@mail.com (required)"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("input",{type:"tel",defaultValue:A,ref:u,onChange:f,placeholder:"Phone",required:"required",className:"w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"}),e.jsx("label",{className:"text-[12px]",children:"digits only required"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("input",{type:"text",defaultValue:Z,ref:o,onChange:y,placeholder:"Company",className:"w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"}),e.jsx("label",{className:"text-[12px]",children:"Fill this field for company (not required)"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("input",{type:"text",defaultValue:L,ref:s,onChange:y,placeholder:"Job title",className:"w-[262px] h-[24px] outline-none border-b border-solid border-[grey] pt-[8px] pb-[2px] box-content placeholder:text-purple-300 focus:border-purple-500 focus:placeholder:text-red-500 focus:placeholder:font-bold"}),e.jsx("label",{className:"text-[12px]",children:"Fill this field for job title (not required)"})]}),e.jsxs("div",{className:"flex justify-between w-full pt-[1rem]",children:[e.jsx(D,{to:"/#",className:"w-[45%] h-[2.4rem] rounded-[0.8rem] bg-tomato py-[0.2rem] px-[0.5rem] text-[#ffffff] drop-shadow-sm hover:bg-red-700 hover:opacity-100 transition-all duration-[0.4s] active:scale-[0.97] flex items-center justify-center",children:"Back"}),e.jsx("button",{className:"w-[45%] h-[2.4rem] rounded-[0.8rem] bg-purple-800 py-[0.2rem] px-[0.5rem] text-[#ffffff] drop-shadow-sm hover:bg-purple-600 hover:opacity-100 transition-all duration-[0.4s] active:scale-[0.97] flex items-center justify-center",onClick:$,children:"Save"})]})]})};export{G as default};
