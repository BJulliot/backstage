/*! For license information please see 1a6c6cbd.9a1e81f1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[627707],{687715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(824246),r=n(511151);const s={id:"writing-custom-field-extensions",title:"Writing Custom Field Extensions",description:"How to write your own field extensions"},i=void 0,a={id:"features/software-templates/writing-custom-field-extensions",title:"Writing Custom Field Extensions",description:"How to write your own field extensions",source:"@site/../docs/features/software-templates/writing-custom-field-extensions.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/writing-custom-field-extensions",permalink:"/docs/features/software-templates/writing-custom-field-extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/writing-custom-field-extensions.md",tags:[],version:"current",frontMatter:{id:"writing-custom-field-extensions",title:"Writing Custom Field Extensions",description:"How to write your own field extensions"},sidebar:"docs",previous:{title:"Writing Tests For Actions",permalink:"/docs/features/software-templates/writing-tests-for-actions"},next:{title:"Writing custom step layouts",permalink:"/docs/features/software-templates/writing-custom-step-layouts"}},l={},c=[{value:"Creating a Field Extension",id:"creating-a-field-extension",level:2},{value:"Using the Custom Field Extension",id:"using-the-custom-field-extension",level:2},{value:"Access Data from other Fields",id:"access-data-from-other-fields",level:2},{value:"Previewing Custom Field Extensions",id:"previewing-custom-field-extensions",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Collecting input from the user is a very large part of the scaffolding process\nand Software Templates as a whole. Sometimes the built in components and fields\njust aren't good enough, and sometimes you want to enrich the form that the\nusers sees with better inputs that fit better."}),"\n",(0,o.jsxs)(t.p,{children:["This is where ",(0,o.jsx)(t.code,{children:"Custom Field Extensions"})," come in."]}),"\n",(0,o.jsxs)(t.p,{children:["With them you can show your own ",(0,o.jsx)(t.code,{children:"React"})," Components and use them to control the\nstate of the JSON schema, as well as provide your own validation functions to\nvalidate the data too."]}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-field-extension",children:"Creating a Field Extension"}),"\n",(0,o.jsxs)(t.p,{children:["Field extensions are a way to combine an ID, a ",(0,o.jsx)(t.code,{children:"React"})," Component and a\n",(0,o.jsx)(t.code,{children:"validation"})," function together in a modular way that you can then use to pass to\nthe ",(0,o.jsx)(t.code,{children:"Scaffolder"})," frontend plugin in your own ",(0,o.jsx)(t.code,{children:"App.tsx"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["You can create your own Field Extension by using the\n",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-scaffolder.createscaffolderfieldextension",children:(0,o.jsx)(t.code,{children:"createScaffolderFieldExtension"})}),"\n",(0,o.jsx)(t.code,{children:"API"})," like below."]}),"\n",(0,o.jsxs)(t.p,{children:["As an example, we will create a component that validates whether a string is in the ",(0,o.jsx)(t.code,{children:"Kebab-case"})," pattern:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'//packages/app/src/scaffolder/ValidateKebabCase/ValidateKebabCaseExtension.tsx\nimport React from \'react\';\nimport { FieldExtensionComponentProps } from \'@backstage/plugin-scaffolder-react\';\nimport type { FieldValidation } from \'@rjsf/utils\';\nimport FormControl from \'@material-ui/core/FormControl\';\n/*\n This is the actual component that will get rendered in the form\n*/\nexport const ValidateKebabCase = ({\n  onChange,\n  rawErrors,\n  required,\n  formData,\n}: FieldExtensionComponentProps<string>) => {\n  return (\n    <FormControl\n      margin="normal"\n      required={required}\n      error={rawErrors?.length > 0 && !formData}\n    >\n      <InputLabel htmlFor="validateName">Name</InputLabel>\n      <Input\n        id="validateName"\n        aria-describedby="entityName"\n        onChange={e => onChange(e.target?.value)}\n      />\n      <FormHelperText id="entityName">\n        Use only letters, numbers, hyphens and underscores\n      </FormHelperText>\n    </FormControl>\n  );\n};\n\n/*\n This is a validation function that will run when the form is submitted.\n  You will get the value from the `onChange` handler before as the value here to make sure that the types are aligned\\\n*/\n\nexport const validateKebabCaseValidation = (\n  value: string,\n  validation: FieldValidation,\n) => {\n  const kebabCase = /^[a-z0-9-_]+$/g.test(value);\n\n  if (kebabCase === false) {\n    validation.addError(\n      `Only use letters, numbers, hyphen ("-") and underscore ("_").`,\n    );\n  }\n};\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"// packages/app/src/scaffolder/ValidateKebabCase/extensions.ts\n\n/*\n  This is where the magic happens and creates the custom field extension.\n\n  Note that if you're writing extensions part of a separate plugin,\n  then please use `scaffolderPlugin.provide` from there instead and export it part of your `plugin.ts` rather than re-using the `scaffolder.plugin`.\n*/\n\nimport { scaffolderPlugin } from '@backstage/plugin-scaffolder';\nimport { createScaffolderFieldExtension } from '@backstage/plugin-scaffolder-react';\nimport {\n  ValidateKebabCase,\n  validateKebabCaseValidation,\n} from './ValidateKebabCaseExtension';\n\nexport const ValidateKebabCaseFieldExtension = scaffolderPlugin.provide(\n  createScaffolderFieldExtension({\n    name: 'ValidateKebabCase',\n    component: ValidateKebabCase,\n    validation: validateKebabCaseValidation,\n  }),\n);\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"// packages/app/src/scaffolder/ValidateKebabCase/index.ts\n\nexport { ValidateKebabCaseFieldExtension } from './extensions';\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Once all these files are in place, you then need to provide your custom\nextension to the ",(0,o.jsx)(t.code,{children:"scaffolder"})," plugin."]}),"\n",(0,o.jsxs)(t.p,{children:["You do this in ",(0,o.jsx)(t.code,{children:"packages/app/src/App.tsx"}),". You need to provide the\n",(0,o.jsx)(t.code,{children:"customFieldExtensions"})," as children to the ",(0,o.jsx)(t.code,{children:"ScaffolderPage"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'const routes = (\n  <FlatRoutes>\n    ...\n    <Route path="/create" element={<ScaffolderPage />} />\n    ...\n  </FlatRoutes>\n);\n'})}),"\n",(0,o.jsx)(t.p,{children:"Should look something like this instead:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { ValidateKebabCaseFieldExtension } from './scaffolder/ValidateKebabCase';\nimport { ScaffolderFieldExtensions } from '@backstage/plugin-scaffolder-react';\n\nconst routes = (\n  <FlatRoutes>\n    ...\n    <Route path=\"/create\" element={<ScaffolderPage />}>\n      <ScaffolderFieldExtensions>\n        <ValidateKebabCaseFieldExtension />\n      </ScaffolderFieldExtensions>\n    </Route>\n    ...\n  </FlatRoutes>\n);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"using-the-custom-field-extension",children:"Using the Custom Field Extension"}),"\n",(0,o.jsxs)(t.p,{children:["Once it's been passed to the ",(0,o.jsx)(t.code,{children:"ScaffolderPage"})," you should now be able to use the\n",(0,o.jsx)(t.code,{children:"ui:field"})," property in your templates to point it to the name of the\n",(0,o.jsx)(t.code,{children:"customFieldExtension"})," that you registered."]}),"\n",(0,o.jsx)(t.p,{children:"Something like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\nmetadata:\n  name: Test template\n  title: Test template with custom extension\n  description: Test template\nspec:\n  parameters:\n    - title: Fill in some steps\n      required:\n        - name\n      properties:\n        name:\n          title: Name\n          type: string\n          description: My custom name for the component\n          ui:field: ValidateKebabCase\n  steps:\n  [...]\n"})}),"\n",(0,o.jsx)(t.h2,{id:"access-data-from-other-fields",children:"Access Data from other Fields"}),"\n",(0,o.jsx)(t.p,{children:"Custom fields extensions can read data from other fields in the form via the form context. This\nis something that we discourage due to the coupling that it creates, but is sometimes still\nthe most sensible solution."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const CustomFieldExtensionComponent = (props: FieldExtensionComponentProps<string[]>) => {\n  const { formData } = props.formContext;\n  ...\n};\n\nconst CustomFieldExtension = scaffolderPlugin.provide(\n  createScaffolderFieldExtension({\n    name: ...,\n    component: CustomFieldExtensionComponent,\n    validation: ...\n  })\n);\n"})}),"\n",(0,o.jsx)(t.h2,{id:"previewing-custom-field-extensions",children:"Previewing Custom Field Extensions"}),"\n",(0,o.jsxs)(t.p,{children:["You can preview custom field extensions you write in the Backstage UI using the Custom Field Explorer\n(accessible via the ",(0,o.jsx)(t.code,{children:"/create/edit"})," route by default):"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Custom Field Explorer",src:n(505384).Z+"",width:"1832",height:"781"})}),"\n",(0,o.jsx)(t.p,{children:"In order to make your new custom field extension available in the explorer you will have to define a\nJSON schema that describes the input/output types on your field like in the following example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"//packages/app/src/scaffolder/MyCustomExtensionWithOptions/MyCustomExtensionWithOptions.tsx\nexport const MyCustomExtensionWithOptionsSchema = {\n  uiOptions: {\n    type: 'object',\n    properties: {\n      focused: {\n        description: 'Whether to focus this field',\n        type: 'boolean',\n      },\n    },\n  },\n  returnValue: { type: 'string' },\n};\n\nexport const MyCustomExtensionWithOptions = ({\n  onChange,\n  rawErrors,\n  required,\n  formData,\n}: FieldExtensionComponentProps<string, { focused?: boolean }>) => {\n  return (\n    <FormControl\n      margin=\"normal\"\n      required={required}\n      error={rawErrors?.length > 0 && !formData}\n      onChange={onChange}\n      focused={focused}\n    />\n  );\n};\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"// packages/app/src/scaffolder/MyCustomExtensionWithOptions/extensions.ts\n...\nimport { MyCustomExtensionWithOptions, MyCustomExtensionWithOptionsSchema } from './MyCustomExtensionWithOptions';\n\nexport const MyCustomFieldWithOptionsExtension = scaffolderPlugin.provide(\n  createScaffolderFieldExtension({\n    name: 'MyCustomExtensionWithOptions',\n    component: MyCustomExtensionWithOptions,\n    schema: MyCustomExtensionWithOptionsSchema,\n  }),\n);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["We recommend using a library like ",(0,o.jsx)(t.a,{href:"https://github.com/colinhacks/zod",children:"zod"})," to define your schema\nand the provided ",(0,o.jsx)(t.code,{children:"makeFieldSchemaFromZod"})," helper utility function to generate both the JSON schema\nand type for your field props to preventing having to duplicate the definitions:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"//packages/app/src/scaffolder/MyCustomExtensionWithOptions/MyCustomExtensionWithOptions.tsx\n...\nimport { z } from 'zod';\nimport { makeFieldSchemaFromZod } from '@backstage/plugin-scaffolder';\n\nconst MyCustomExtensionWithOptionsFieldSchema = makeFieldSchemaFromZod(\n  z.string(),\n  z.object({\n    focused: z\n      .boolean()\n      .optional()\n      .describe('Whether to focus this field'),\n  }),\n);\n\nexport const MyCustomExtensionWithOptionsSchema = MyCustomExtensionWithOptionsFieldSchema.schema;\n\ntype MyCustomExtensionWithOptionsProps = typeof MyCustomExtensionWithOptionsFieldSchema.type;\n\nexport const MyCustomExtensionWithOptions = ({\n  onChange,\n  rawErrors,\n  required,\n  formData,\n}: MyCustomExtensionWithOptionsProps) => {\n  return (\n    <FormControl\n      margin=\"normal\"\n      required={required}\n      error={rawErrors?.length > 0 && !formData}\n      onChange={onChange}\n      focused={focused}\n    />\n  );\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},505384:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/custom-field-explorer-a0f6f73e07cdd0e6821b6fc78b2ca827.png"},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,s={},c=null,u=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,x={};function y(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var C=b.prototype=new g;C.constructor=b,m(C,y.prototype),C.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,E={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,o){var r,s={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!j.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(1===l)s.children=o;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===s[r]&&(s[r]=l[r]);return{$$typeof:n,type:e,key:i,ref:a,props:s,_owner:E.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,s,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case o:l=!0}}if(l)return i=i(l=e),e=""===s?"."+k(l,0):s,v(i)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),O(i,t,r,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(l=0,s=""===s?".":s+":",v(e))for(var c=0;c<e.length;c++){var u=s+k(a=e[c],c);l+=O(a,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(a=e.next()).done;)l+=O(a=a.value,t,r,u=s+k(a,c++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function R(e,t,n){if(null==e)return e;var o=[],r=0;return O(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var W={current:null},M={transition:null},V={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:M,ReactCurrentOwner:E};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=i,t.PureComponent=b,t.StrictMode=s,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,t.act=N,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),s=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=E.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)w.call(t,c)&&!j.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=o;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:n,type:e.type,key:s,ref:i,props:r,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=F,t.createFactory=function(e){var t=F.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return W.current.useCallback(e,t)},t.useContext=function(e){return W.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return W.current.useDeferredValue(e)},t.useEffect=function(e,t){return W.current.useEffect(e,t)},t.useId=function(){return W.current.useId()},t.useImperativeHandle=function(e,t,n){return W.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return W.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return W.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return W.current.useMemo(e,t)},t.useReducer=function(e,t,n){return W.current.useReducer(e,t,n)},t.useRef=function(e){return W.current.useRef(e)},t.useState=function(e){return W.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return W.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return W.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(667294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);