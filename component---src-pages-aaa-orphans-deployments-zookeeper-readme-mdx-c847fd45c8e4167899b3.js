(window.webpackJsonp=window.webpackJsonp||[]).push([[22,91],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("NmYn"),l=n.n(r),s=n("Wbzz"),i=n("Xrax"),c=n("k4MR"),b=n("TSYQ"),d=n.n(b),u=n("QH2O"),p=n("qKvR"),m=function(e){var t,n=e.title,a=e.tabs,o=void 0===a?[]:a;return Object(p.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.text},n)))))},g=n("BAC9"),h=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,r=o.baseUrl,l=o.subDirectory,i=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},j=n("FCXl"),x=n("dI71"),O=n("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0,strict:!0}),r=o===a,i=new RegExp(a+"/?(#.*)?$"),c=n.replace(i,o);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(p.b)(s.Link,{className:O.link,to:""+c},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},o))))))},t}(o.a.Component),v=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,g=b.tabs,x=b.title,O=b.theme,k=b.description,T=b.keywords,w=Object(s.useStaticQuery)("2456312558").site.pathPrefix,y=w?a.pathname.replace(w,""):a.pathname,N=g?y.split("/").filter(Boolean).slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(p.b)(c.a,{tabs:g,homepage:!1,theme:O,pageTitle:x,pageDescription:k,pageKeywords:T,titleType:u},Object(p.b)(m,{title:o?Object(p.b)(o,null):x,label:"label",tabs:g}),g&&Object(p.b)(f,{slug:y,tabs:g,currentTab:N}),Object(p.b)(v.a,{padded:!0},n,Object(p.b)(h,{relativePagePath:d})),Object(p.b)(j.a,{pageContext:t,location:a,slug:y,tabs:g,currentTab:N}),Object(p.b)(i.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},s4M9:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("013z"),s=(n("qKvR"),{}),i={_frontmatter:s},c=l.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(c,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Development deployment uses one zookeeper server. For production the replicas is set to 5 to tolerate one planned and one unplanned failure. The service defines 3 ports: one for the inter-server communication, one for client access and one for leader-election.\nPersistence volumes are needed to provide durable storage. Better to use network storage like NFS or glusterfs."),Object(r.b)("p",null,"The zookeeper manifests are defined in this project under the ",Object(r.b)("inlineCode",{parentName:"p"},"deployments/zookeeper/dev")," folder. We are using our own docker images and the Dockerfile to build this image is in ",Object(r.b)("inlineCode",{parentName:"p"},"deployments/zookeeper"),". The image is already pushed to the Docker Hub under ibmcase account."),Object(r.b)("p",null,"We are providing a script to install zookeeper as a kubernetes environment. First be sure to be connected to your kubernetes cluster then run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ pwd\n> refarch-eda/deployments/zookeeper\n$ ./deployZoopeeker.sh\n\n$ kubectl get pods -n greencompute\nNAME                            READY     STATUS    RESTARTS   AGE\ngc-zookeeper-57dc5679bb-bh29q   1/1       Running   0          1m\n")),Object(r.b)("p",null,"It creates volume, services and deployment or statefulset."),Object(r.b)("p",null,"If you want to deploy it in more resilient deployment we provide other manifests under the prod folder. To install:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ ./deployZoopeeker.sh prod\n")),Object(r.b)("p",null,"Once installed you do not need to reinstall it."),Object(r.b)("p",null,"We are also delivering a script to remove zookeeper when you are done using it. (./removeZookeeper.sh)"),Object(r.b)("p",null," When running in production it is better to use separate zookeeper ensemble for each ",Object(r.b)("strong",{parentName:"p"},"Kafka")," cluster. Each server should have at least 2 GiB of heap with at least 4 GiB of reserved memory"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-aaa-orphans-deployments-zookeeper-readme-mdx-c847fd45c8e4167899b3.js.map