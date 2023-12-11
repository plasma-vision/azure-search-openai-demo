import{r as o,bC as se,bD as e}from"./vendor-bfe9f059.js";import{R as a,u as h,S as oe,Q as ne,E as ae,A as ie,a as m,b as re,c as le,T as ce,g as ue,d as pe}from"./index-36299942.js";import{n as de,k as he,D as me,T as F,l as Se,C as S,m as ge}from"./fluentui-react-b2e1117c.js";import"./fluentui-icons-8959f39c.js";const Ce="_oneshotContainer_p6613_1",xe="_oneshotTopSection_p6613_8",_e="_oneshotBottomSection_p6613_15",ve="_oneshotTitle_p6613_25",ye="_oneshotQuestionInput_p6613_39",fe="_oneshotAnswerContainer_p6613_46",Te="_oneshotAnalysisPanel_p6613_53",be="_oneshotSettingsSeparator_p6613_58",Ae="_settingsButton_p6613_62",n={oneshotContainer:Ce,oneshotTopSection:xe,oneshotBottomSection:_e,oneshotTitle:ve,oneshotQuestionInput:ye,oneshotAnswerContainer:fe,oneshotAnalysisPanel:Te,oneshotSettingsSeparator:be,settingsButton:Ae};function ke(){const[T,g]=o.useState(!1),[C,H]=o.useState(""),[b,je]=o.useState(""),[A,Pe]=o.useState(""),[l,I]=o.useState(a.Hybrid),[k,O]=o.useState(3),[x,Q]=o.useState(!0),[j,D]=o.useState(!1),[P,M]=o.useState(""),[N,V]=o.useState(!1),[w,L]=o.useState(!1),_=o.useRef(""),[v,R]=o.useState(!1),[c,B]=o.useState(),[i,G]=o.useState(),[E,U]=o.useState(),[u,r]=o.useState(void 0),p=h?se().instance:void 0,y=async t=>{_.current=t,c&&B(void 0),R(!0),U(void 0),r(void 0);const s=p?await ue(p):void 0;try{const d={messages:[{content:t,role:"user"}],context:{overrides:{prompt_template:C.length===0?void 0:C,prompt_template_prefix:b.length===0?void 0:b,prompt_template_suffix:A.length===0?void 0:A,exclude_category:P.length===0?void 0:P,top:k,retrieval_mode:l,semantic_ranker:x,semantic_captions:j,use_oid_security_filter:N,use_groups_security_filter:w}},session_state:i?i.choices[0].session_state:null},te=await pe(d,s?.accessToken);G(te)}catch(d){B(d)}finally{R(!1)}},q=(t,s)=>{H(s||"")},X=(t,s)=>{O(parseInt(s||"3"))},z=(t,s,d)=>{I(s?.data||a.Hybrid)},J=(t,s)=>{Q(!!s)},K=(t,s)=>{D(!!s)},W=(t,s)=>{M(s||"")},Y=t=>{y(t)},Z=t=>{E===t&&u===m.CitationTab?r(void 0):(U(t),r(m.CitationTab))},f=t=>{r(u===t?void 0:t)},$=(t,s)=>{V(!!s)},ee=(t,s)=>{L(!!s)};return e.jsxs("div",{className:n.oneshotContainer,children:[e.jsxs("div",{className:n.oneshotTopSection,children:[e.jsx(oe,{className:n.settingsButton,onClick:()=>g(!T)}),e.jsx("h1",{className:n.oneshotTitle,children:"Ask your data"}),e.jsx("div",{className:n.oneshotQuestionInput,children:e.jsx(ne,{placeholder:"Example: How does one do a rebuild of a 100 Hp EnduroMAX Pump?",disabled:v,onSend:t=>y(t)})})]}),e.jsxs("div",{className:n.oneshotBottomSection,children:[v&&e.jsx(de,{label:"Generating answer"}),!_.current&&e.jsx(ae,{onExampleClicked:Y}),!v&&i&&!c&&e.jsx("div",{className:n.oneshotAnswerContainer,children:e.jsx(ie,{answer:i,isStreaming:!1,onCitationClicked:t=>Z(t),onThoughtProcessClicked:()=>f(m.ThoughtProcessTab),onSupportingContentClicked:()=>f(m.SupportingContentTab)})}),c?e.jsx("div",{className:n.oneshotAnswerContainer,children:e.jsx(re,{error:c.toString(),onRetry:()=>y(_.current)})}):null,u&&i&&e.jsx(le,{className:n.oneshotAnalysisPanel,activeCitation:E,onActiveTabChanged:t=>f(t),citationHeight:"600px",answer:i,activeTab:u})]}),e.jsxs(he,{headerText:"Configure answer generation",isOpen:T,isBlocking:!1,onDismiss:()=>g(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e.jsx(me,{onClick:()=>g(!1),children:"Close"}),isFooterAtBottom:!0,children:[e.jsx(F,{className:n.oneshotSettingsSeparator,defaultValue:C,label:"Override prompt template",multiline:!0,autoAdjustHeight:!0,onChange:q}),e.jsx(Se,{className:n.oneshotSettingsSeparator,label:"Retrieve this many search results:",min:1,max:50,defaultValue:k.toString(),onChange:X}),e.jsx(F,{className:n.oneshotSettingsSeparator,label:"Exclude category",onChange:W}),e.jsx(S,{className:n.oneshotSettingsSeparator,checked:x,label:"Use semantic ranker for retrieval",onChange:J}),e.jsx(S,{className:n.oneshotSettingsSeparator,checked:j,label:"Use query-contextual summaries instead of whole documents",onChange:K,disabled:!x}),h&&e.jsx(S,{className:n.oneshotSettingsSeparator,checked:N,label:"Use oid security filter",disabled:!p?.getActiveAccount(),onChange:$}),h&&e.jsx(S,{className:n.oneshotSettingsSeparator,checked:w,label:"Use groups security filter",disabled:!p?.getActiveAccount(),onChange:ee}),e.jsx(ge,{className:n.oneshotSettingsSeparator,label:"Retrieval mode",options:[{key:"hybrid",text:"Vectors + Text (Hybrid)",selected:l==a.Hybrid,data:a.Hybrid},{key:"vectors",text:"Vectors",selected:l==a.Vectors,data:a.Vectors},{key:"text",text:"Text",selected:l==a.Text,data:a.Text}],required:!0,onChange:z}),h&&e.jsx(ce,{})]})]})}ke.displayName="OneShot";export{ke as Component};
//# sourceMappingURL=OneShot-1a415c81.js.map
