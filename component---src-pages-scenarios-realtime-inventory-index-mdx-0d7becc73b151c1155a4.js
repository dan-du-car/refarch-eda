(window.webpackJsonp=window.webpackJsonp||[]).push([[50,86],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),c=a.n(o),r=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),p=a.n(l),m=a("QH2O"),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,c=i.subDirectory,s=o+"/edit/"+i.branch+c+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0,strict:!0}),o=i===n,s=new RegExp(n+"/?(#.*)?$"),b=a.replace(s,i);return Object(d.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(d.b)(r.Link,{className:j.link,to:""+b},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:j.list},i))))))},t}(i.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,l=void 0===o?{}:o,p=t.relativePagePath,m=t.titleType,h=l.tabs,O=l.title,j=l.theme,k=l.description,w=l.keywords,y=Object(r.useStaticQuery)("2456312558").site.pathPrefix,N=y?n.pathname.replace(y,""):n.pathname,x=h?N.split("/").filter(Boolean).slice(-1)[0]||c()(h[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:h,homepage:!1,theme:j,pageTitle:O,pageDescription:k,pageKeywords:w,titleType:m},Object(d.b)(u,{title:i?Object(d.b)(i,null):O,label:"label",tabs:h}),h&&Object(d.b)(A,{slug:N,tabs:h,currentTab:x}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(f.a,{pageContext:t,location:n,slug:N,tabs:h,currentTab:x}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ycnG:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),r=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=s("InlineNotification"),l=s("AnchorLinks"),p=s("AnchorLink"),m={_frontmatter:r},d=c.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("strong",null,"Updated 11/03/2020")," - Work in progress"),Object(o.b)(l,{mdxType:"AnchorLinks"},Object(o.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(o.b)(p,{mdxType:"AnchorLink"},"Solution anatomy"),Object(o.b)(p,{mdxType:"AnchorLink"},"General pre-requisites"),Object(o.b)(p,{mdxType:"AnchorLink"},"Lab 1: RabbitMQ Source Connector to Kafka items topic [A]"),Object(o.b)(p,{mdxType:"AnchorLink"},"Lab 2: Deploy the MQ Sink Connector [B]"),Object(o.b)(p,{mdxType:"AnchorLink"},"Lab 3: Deploy the JDBC Sink Connector [C]")),Object(o.b)("h2",null,"Overview"),Object(o.b)("p",null,"This lab addresses multiple use cases that aim to build an end to end data pipeline solution, as depicted by the following figure, using Event Streams / Kafka on Premise and Kafka Connect cluster. At the high level Kafka Connect is used to integrate external systems into Kafka. For example external systems can inject item sale messages to queue manager, from which a first Kafka source connector publishes the messages to a Kafka topic, which then will be processed by a series of event driven microservices down to a final topic, which will be used by Sink connectors to send records to other external systems."),Object(o.b)("p",null," ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABjUlEQVQoz1WR207CQBCG+4w+hvHCB/DGxBhfwMOtifFwafDCaLTeYDQBAUEubKIYKrRaqJRtadnt/s4sB+0kk25383/zz4yVJBpxDGSZRq41NCWQU9J/ni9TKYViaIiYtKRPU2A61ebWEgIYDOlREEDSA4HDkcRoLJcFGMhRc0Lsll5x//JdQDNUGFMEZGeSQKNI46UTwekKbB23sbb3hP4wMU4kV6K4rvpY3aug9OCCO7uqevj8ThFFgOdr06VlHFA3Is6xvl/HednFJFXoDybQ+p8NMlluBdg+a+Gu4aPnT7Fx2ELdGZlnNsWNWHqu4q83yDCOlXE1oRZC8YN2cIv61wV6oQtFIkXVlcqp6MzRbBo0x0xC0pytBexv1rmxw0D3K8BD7wR29wDdwRsyuuPlMJAXwUCOx3aAlU0bO6eNmcMFUEpFVXLYzz6ObjpovkXmnsUXjz4uKx7BFtvX5swxjDLYjT7aH2ER+NEfIhynuG9+4qbWw7sXmXZ+RIJS2cFttTN3qJYaUhc2/guBql9DC/31CgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/3cbba/kconnect-overview.png",srcSet:["/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/7fc1e/kconnect-overview.png 288w","/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/a5df1/kconnect-overview.png 576w","/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/3cbba/kconnect-overview.png 1152w","/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/f5f59/kconnect-overview.png 1522w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null,"To support this scenario we are reusing a classical business use case around ",Object(o.b)("inlineCode",{parentName:"p"},"real time inventory processing")," where stores are sending their sale transactions to a central messaging platform, based on queues, and with the adoption of loosely coupled microservices, real time analytics and complex event processing, Kafka is added to the architecture. Adopting Kafka Connect helps to integrate with existing applications without any changes."),Object(o.b)("p",null,"All the components of this scenario are ready to run on OpenShift, but we are also providing different docker compose files to run all of those components on your local computer. The important body of knowledge of this scenario is related to the programming model we used, and the Kafka Connect configuration and code."),Object(o.b)("h2",null,"What you will learn"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use Quarkus, with reactive programming API like Mutiny, with Kafka API to produce message to Kafka"),Object(o.b)("li",{parentName:"ul"},"Same Quarkus app can generate messages to RabbitMQ using the AMQP API"),Object(o.b)("li",{parentName:"ul"},"Same Quarkus app can generate mesasges to IBM MQ using JMS"),Object(o.b)("li",{parentName:"ul"},"Use Kafka Connect to get source and sink cluster to get date from the RabbitMQ queue and to IBM MQ queue or DB2"),Object(o.b)("li",{parentName:"ul"},"Use Quarkus and Kafka streams to compute aggregates to build an inventory view from the stream of events"),Object(o.b)("li",{parentName:"ul"},"Use the RabbitMQ source connector from IBM Event messaging open source contribution"),Object(o.b)("li",{parentName:"ul"},"Use the IBM MQ sink connector from IBM Event messaging open source contribution"),Object(o.b)("li",{parentName:"ul"},"Use the JDBC sink connector from IBM Event messaging open source contribution")),Object(o.b)("h2",null,"Solution anatomy"),Object(o.b)("p",null,"This end to end scenario is divided into smaller labs that can be combined to support the real time inventory data pipeline as illustrated in the figure below:"),Object(o.b)("p",null," ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABzklEQVQoz02S22sTQRjF81/7IooPIj4pfSwitiBY+mAVGowtlFKTEOs1LTGSJmluJFuby2az99n5+WUmaTrLwly+c75zzkwuCjW+D0miAW0+7n47tNZkWSYzxWZoAsEGgSaKIIwEKZDcdKZwHPA8TRJb4rmXSnEmey5RGBrqJA45LlZ5d3pN4dtAGmwaxrFgE4RYkzv57ZCmmtlM03NCuqOAN4U2D3drbO2VCHzXgLI0Yf9TlcdvL3hdaEmzjK9/J1wNFszn0Oqk4lQIo0Sh0qVkeLbXYOdzm5tpRK3jMvYS7o+jUpOXB3X2zzq4c8WjnRoHxaGxXv5zi5JEclpnpnghbc5KNXoj39qQBkGY0JpWuHBOyX+vy1r2xVsqSD9QVC+bdLpDdJZieLQiZ8MWhUGAO/lnDq1HGIvSk84r8tfPqd+ck/irA0k1FFWeF0vjFOc25sH2L57sXi4VanOLm8vL+Nmc8LHc50djYraWkZRrY/KVIe4iNmqUyljfy2Da5+nhFi+Ot63CNWFvNGbmJxQvBrwvdam2p9a+5PzhyxWHlS5+pIxCdQ933hgxnPdlNlkRrsQtiy1A3b01JXmZWLQlWquzzmxNqpbv1D7d/zqUp/BjHjIrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/3cbba/kconnect-scenario-components.png",srcSet:["/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/7fc1e/kconnect-scenario-components.png 288w","/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/a5df1/kconnect-scenario-components.png 576w","/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/3cbba/kconnect-scenario-components.png 1152w","/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/36102/kconnect-scenario-components.png 1518w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The store simulator application is a Quarkus based app, which generates item sales to different possible messaging middlewares ( RabbitMQ, MQ or event directly to Kafka). The code of this application is in this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-store-simulator"})," refarch-eda-store-simulator repository"),". If you want to browse the code, the main readme of this project includes how to package and run this app, and explains how the code works. The docker image is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/r/ibmcase/eda-store-simulator"}),"ibmcase/eda-store-simulator/")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"RabbitMQ runs in docker image started locally via docker compose. The messages are in the ",Object(o.b)("inlineCode",{parentName:"li"},"items")," queue."),Object(o.b)("li",{parentName:"ul"},"The first lab consists of setting up the Rabbit MQ source Kafka connector to get items from the queue to the ",Object(o.b)("inlineCode",{parentName:"li"},"items")," topic in Kafka.  focusing on the injection to Kafka, is documented in the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../../use-cases/connect-rabbitmq/"}),"use case: Kafka connect - Rabbit MQ"),"."),Object(o.b)("li",{parentName:"ul"},"[A]"," The Sink connector description is in the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-tools"}),"real time inventory lab")," folder. The Kafka connector source is in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-messaging/kafka-connect-rabbitmq-source"}),"this project.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The inventory MS is a Kafka Stream application, done with Kafka Stream API. The source code is in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-item-inventory"}),"this project"),". Consider this more as a black box in the context of the scenario, it consumes items events, aggregate them, expose API on top of Kafka Streams interactive queries and publish inventory events on ",Object(o.b)("inlineCode",{parentName:"p"},"inventory")," topic. The code is also used in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../use-cases/kafka-streams/lab-3/"}),"Kafka Streams lab 3"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The mock up Inventory mainframe application is not implemented and we will use the MQ tools to view the message in the ",Object(o.b)("inlineCode",{parentName:"p"},"inventory")," MQ queue."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The MQ Sink connector ","[B]"," configuration is defined in the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-tools"}),"real time inventory lab")," folder, ",Object(o.b)("inlineCode",{parentName:"li"},"mq-sink.json")," file."),Object(o.b)("li",{parentName:"ul"},"MQ broker runs in docker container started with docker-compose"),Object(o.b)("li",{parentName:"ul"},"The lab scenario is ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../../use-cases/connect-mq/"}),"describe in the Connect MQ use case ")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The Inventory Application, using DB2 as datasource is a quarkus app using hibernate with panache, defined in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jbcodeforce/eda-kconnect-lab/tree/master/inventory-app"}),"nventory-app")," folder"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The JDBC Sink connector ","[C]"," configuration is defined in the the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-tools"}),"real time inventory lab")," folder, ",Object(o.b)("inlineCode",{parentName:"li"},"jdbc-sink.json")," file ."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../../use-cases/connect-jdbc/"}),"Connect JDBC use case")," lab goes over how the Kafka Connect JDBC sink works."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#scenario-4:-run-the-solution-components-end-to-end-on-kubernetes"}),"last scenario")," addresses the end to end solution, which is basically an end to end demonstration of a simple data pipeline for a real time view of an inventory solution."))),Object(o.b)("h2",null,"Demonstration Script"),Object(o.b)("p",null,"For an end-to-end demonstration the following steps can be demonstrated once the environment is up and running."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start with the Store Simulator -> Stores view to present the stores Acme Inc is managing. Those stores ID will be used as key for sending events to Kafka."),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.93055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABBklEQVQoz3VQy07DMBD0R0HFBQ699MZP8C0FiYd66JnPghSknriAhJo4cZP4OXidrrFKWWk03tnd2U3EYr3F/HGD+dOEy/sKF3cVZrcVzpevOFu+JD6Fq4cNrtfvuHneYrF6S7OiVhrNfoJMbPBVK3x87vAth5TvYg+hLphBc21vJo+YC5wIbw2Ct/EVDswFN3Fwv++jECHEoRJRHMcR1rmEfd/D+5CgdVwUqK4xap36SS/n84UsUAzDAGNMbPZQSuUaaRQ6mhF4rmRRCvxOF1qbDLuug4uXUo00CjJm8z+GZZJ/VTQi8DAvo8vJlDR9+OR/L6SrpJRo2zZz0zQ5Z40X8NJjwx+kMFuGIA3abwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"0",title:"0",src:"/refarch-eda/static/e89a897c43dcbaceb5e7ee1bb1077ec5/3cbba/stores-view.png",srcSet:["/refarch-eda/static/e89a897c43dcbaceb5e7ee1bb1077ec5/7fc1e/stores-view.png 288w","/refarch-eda/static/e89a897c43dcbaceb5e7ee1bb1077ec5/a5df1/stores-view.png 576w","/refarch-eda/static/e89a897c43dcbaceb5e7ee1bb1077ec5/3cbba/stores-view.png 1152w","/refarch-eda/static/e89a897c43dcbaceb5e7ee1bb1077ec5/ecbf4/stores-view.png 1272w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the Simulator view start to send 10 messages to "),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABEUlEQVQoz6WRW0pEMQyGuzF9k1EGXYEbcCkO6KgPgm9uxiU4HHEEUWEE8Ygynd77m/ScHOp4eTHw0TRp/iRU7Z3PMT5tsDOdYXR0ja3jBpuTGTYOickPUJzz2ydUQ+ye3eDg8g77F7cYTRso6yN8zHh+aXH/8ITXt3cY6+FC+gK/W7/XdLEEhd6W2sAag/+ayjkjk2OthSHBGGli7+lMyJygLG/w2LpSEFNGImIF34sOUQTZWIRFhZRSiUu+WRgsbdckDGLoycM7VReJhRBKg65rF7uaf6DVYW3BPDT9JijwZFrrsn4dE4vkpx5p+Kug+LK2TOqco5+30KtViTEcq2v+nFCK+IMEFpAmkpMp5WT7BACMrRUEzV1iAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/dcae483e6052ff4ac3c1eba89685312d/3cbba/rmq-simulator.png",srcSet:["/refarch-eda/static/dcae483e6052ff4ac3c1eba89685312d/7fc1e/rmq-simulator.png 288w","/refarch-eda/static/dcae483e6052ff4ac3c1eba89685312d/a5df1/rmq-simulator.png 576w","/refarch-eda/static/dcae483e6052ff4ac3c1eba89685312d/3cbba/rmq-simulator.png 1152w","/refarch-eda/static/dcae483e6052ff4ac3c1eba89685312d/6302e/rmq-simulator.png 1371w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Validate Data arrived into RabbitMQ using the RabbitMQ console ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:15672/#/"}),"http://localhost:15672/")),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABaElEQVQ4y51TSW7DMAzU/9+TWz+QLzRAL4kb2/ESr5K8TjhMVQRpUaQmMBZtUUMOKZu1irHG7xjrDM55tG2Lvu/RNA3qusY4jvjLlmWBtRbee4WxcjjPLkjiWAlI1HUd8jzHfr+X72fM84xpmmWdlIDvBP1nGG4Mw6Cgvy7rfV1XJbe21UBWXRSFqHC6x4TcfyY2JGqbTgIHOezloJMKrUidEEvVVVEqAQnPnzFsb1UqZbJF3Hs0M02TZuEBSmUCBjEb30d5p8/vzjv4wWvsvWdOiQnGsnrDYA4iSRKQnMaVcq7XK+avnqVpiizLvskYw4ER9MlD3/BRlqUeCsYKn6W8aobZoijSsgPZb9N7FcYJYXq5qCROkVeHstiPTYSd9O8sFUanE06CUOlWMx+HA952O/RC/Ni/rdAeFjKUqqrQiNww6c2EgxAej0eVGv6Q/+CHZJLwvoU7FX7D4FMBfa5h7xGBNCS4AUITSKJVb4ctAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/fc9a443023a6daa5839e72dc5a907203/3cbba/rabbitmq-item-msgs.png",srcSet:["/refarch-eda/static/fc9a443023a6daa5839e72dc5a907203/7fc1e/rabbitmq-item-msgs.png 288w","/refarch-eda/static/fc9a443023a6daa5839e72dc5a907203/a5df1/rabbitmq-item-msgs.png 576w","/refarch-eda/static/fc9a443023a6daa5839e72dc5a907203/3cbba/rabbitmq-item-msgs.png 1152w","/refarch-eda/static/fc9a443023a6daa5839e72dc5a907203/3f238/rabbitmq-item-msgs.png 1195w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Validate Data is injected to Kafka once the RabbitMQ connector is deployed using:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'docker exec -ti real-time-inventory_kafka_1  bash -c "/opt/kafka/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic items --from-beginning"\n\n')),Object(o.b)("h2",null,"General pre-requisites"),Object(o.b)(b,{kind:"info",mdxType:"InlineNotification"},"You need to decide what your 'on-premise' environment is for this scenario. You can run with docker compose locally on your laptop, or deploy the component to an OpenShift cluster. For quick demonstration purpose, each of the labs / use cases have docker compose file to test them in isolation. If you do not want to build all the components, we have each of them available in Docker Hub."),Object(o.b)("p",null,"We need the following tools to run the different labs. We try to use docker images as much as possible to do not impact your local laptop with tools you may not want python for example."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/"}),"Docker")," and docker compose to run the solution locally."),Object(o.b)("li",{parentName:"ul"},"You need to get ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/"}),"docker compose"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/downloads"}),"git CLI"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://maven.apache.org/install.html"}),"Maven"),".")),Object(o.b)("p",null,"Clone the labs repository: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-tools"}),"refarch-eda-tools")),Object(o.b)("h3",null,"OpenShift specific setup"),Object(o.b)("p",null,"If you choose to use OpenShift as target environment to run the lab at least address the following items:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Connect to your OpenShift cluster using ‘oc’ cli"),Object(o.b)("li",{parentName:"ol"},"Create a new project ",Object(o.b)("inlineCode",{parentName:"li"},"oc new-project eda-inventory")),Object(o.b)("li",{parentName:"ol"},"If not done yet, deploy Event Streams using the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/use-cases/overview/pre-requisites#install-event-streams-using-operators"}),"instructions from this note"),"."),Object(o.b)("li",{parentName:"ol"},"Get secrets and users to access topics and cluster as described in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/use-cases/overview/pre-requisites#getting-scram-authentication-from-event-streams-on-openshift"}),"this note")),Object(o.b)("li",{parentName:"ol"},"Get ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/refarch-eda/use-cases/overview/pre-requisites#getting-tls-authentication-from-event-streams-on-openshift"}),"TLS certificates")," if your cluster was setup with TLS."),Object(o.b)("li",{parentName:"ol"},"Deploy the Store simulator app as Knative serving app. ")),Object(o.b)("h2",null,"Lab 1: RabbitMQ Source Connector to Kafka items topic ","[A]"),Object(o.b)("p",null,"Follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/refarch-eda/use-cases/connect-rabbitmq/"}),"RabbitMQ Source Connector lab")," to deploy the Kafka connector runtime, and deploy the RabbitMQ source connector configuration so it can get messages from RabbitMQ ",Object(o.b)("inlineCode",{parentName:"p"},"items")," queue to the target Kafka ",Object(o.b)("inlineCode",{parentName:"p"},"items")," topic."),Object(o.b)("p",null," ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"696px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAByklEQVQoz42TTW/TQBCG82P5Ixy5cwaEEBLijFSpBQmEqERLqUiE1DSxa2/iGDWNnfhj196Pl5m1XZwbI72a8e7sMzNre+KqClASrpaQeY22YC8BKf06e1PXMJSny4ry6n+ivSMphQkHbNYBzgBZDhRUo1ZAo4FWO4zNOgfDstbHbEMGsx6BqjH4Or1HUVpUpYOsu7Qs1/jwfY23n2K8+xJDtaYDM5DkQQwmHQFbbfErzNA0Fpo6m4YSr89CXM0zvDxd4OmbGZ69/41Kad+TseYROHTpgXxH46F8/YPAt4/nePJ8hvPZfVewcd2m6a5G0zMDuTs3jD7ukBet7TasqrD4+QMi+uPv1o9nDPKiwdlVipOLBJc3Oz/mML6PBqBvd1SNIZLemG4V7Tlow21ZPOwlXpzc4NXpEp+nqYcdDgeUZTkauW3xv8bFZD/RYNvtFgVBuzdLn81us0EkBMRqBcG+V9wrCAIEd3dYko+iCOtk3eX0+Zs0RZIkPrfZ7zHJ6EFwYhwfKaUDG1Jwe4vg8gKL62vEBOa1JBZY9WfYD7FiYJFlqPMcVS+Oy90OEYEEdbUKQwiKo/kcYrn06w80VU2Hh3x/njn0N/0FrexHV3MEoaoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/414eac07528673a0df069d9bdf8ea778/19b24/comp-view.png",srcSet:["/refarch-eda/static/414eac07528673a0df069d9bdf8ea778/7fc1e/comp-view.png 288w","/refarch-eda/static/414eac07528673a0df069d9bdf8ea778/a5df1/comp-view.png 576w","/refarch-eda/static/414eac07528673a0df069d9bdf8ea778/19b24/comp-view.png 696w"],sizes:"(max-width: 696px) 100vw, 696px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("h3",null,"Store simulator app"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-store-simulator"}),"refarch-eda-store-simulator repository")," containts the Quarkus app to integrate with RabbitMQ using AMQP protocol."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-store-simulator/blob/79fcb162ca2f4837df5cd73ac0f346af4d767f18/src/main/java/ibm/gse/eda/stores/infrastructure/rabbitmq/RabbitMQItemGenerator.java#L57-L67"}),"The start method")," create n records and send message on the channel."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Java"}),'  private Channel channel;\n  private Connection connection;\n  private ConnectionFactory factory;\n\n  ...\n  public void sendMessage(Item item) {\n        String messageToSend = parser.toJson(item);\n        this.channel.basicPublish("", queueName, null, messageToSend.getBytes());\n')),Object(o.b)("h2",null,"Lab 2: Deploy the MQ Sink Connector ","[B]"),Object(o.b)("p",null,"Follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/refarch-eda/use-cases/connect-mq/"}),"MQ Sink Connector")," use case to deploy the connector runtime to OpenShift, connecting your source Kafka environment and topic to the target MQ queue manager."),Object(o.b)("h2",null,"Lab 3: Deploy the JDBC Sink Connector ","[C]"),Object(o.b)("p",null,"Follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/refarch-eda/use-cases/connect-jdbc/"}),"JDBC Sink Connector")," use case to deploy the JDBC sink connector runtime, connecting your source Kafka environment and topic to the target DB2 database. This project uses a simple Inventory App to present the content of the DB2 tables. The component view looks like in the following diagram:"),Object(o.b)("p",null," ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"890px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABuElEQVQoz22S727TMBTF+5a8D0i8AI+ApgkJPsD3TWJIFIQYn1qNLaJp1pS1+bs0qRPH9o8bh1ab1BsdOfE9Pj4n9sR1Ha5tQeBOQNc7D6sUCNfuFarSKFnS7K2Mjq4dWo66hgn/y/G8nDzaGJI0Iy8KetP7eWssuumec924evA1cYcJgTFOJkVIQ90Y3l6EvDyf8ep8jlJWepZOGbpa83W+4ewiIIgfj6JDiMnTHSSROPHa9L1lFhZ+4fVdiTNjjFZithL5zccbXrz+zOWv9ejc2lHQenfWs3s9uLTSNB6HspRkKqLoYnSnJbJGaN71U0NHh7NlyburiE/TFZWQDyRjjHd1l0+Zrs/48fCBqmrYP/bofvifnBachznvr/7wZZbSS2+/byjLkpMl/cOhDEIHDA2lHJNtmpKlCUWeUJU5SZIQLpeEUcRmuyXNMlLhJII0k3GbyqF0J++GP+VwsSAKQ5aLEUEQcHP9k9/fvxHc3hLf37MS8SPCSO5h66Wqysomjt3OyT93NI047OQ2trvdEbppUGXBg2yyWa1Yi9tY3gf8FcEkjimLiqKoybJaEo3j8J3nFf8AvBr9vD0vvgMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"4",title:"4",src:"/refarch-eda/static/d822447dcbbde2dbc0a9fedb68bd7fcd/db5f8/comp-view.png",srcSet:["/refarch-eda/static/d822447dcbbde2dbc0a9fedb68bd7fcd/7fc1e/comp-view.png 288w","/refarch-eda/static/d822447dcbbde2dbc0a9fedb68bd7fcd/a5df1/comp-view.png 576w","/refarch-eda/static/d822447dcbbde2dbc0a9fedb68bd7fcd/db5f8/comp-view.png 890w"],sizes:"(max-width: 890px) 100vw, 890px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null,"The inventory application is in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda-inventory-app"}),"this repository")," but a docker image is ready to run."),Object(o.b)("h2",null,"Lab 4: Run the solution components end to end"),Object(o.b)("p",null,"This solution covers all the components of the data pipeline. "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-scenarios-realtime-inventory-index-mdx-0d7becc73b151c1155a4.js.map