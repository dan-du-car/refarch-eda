(window.webpackJsonp=window.webpackJsonp||[]).push([[79,91],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("NmYn"),s=a.n(c),o=a("Wbzz"),i=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,c=r.baseUrl,s=r.subDirectory,i=c+"/edit/"+r.branch+s+"/src/pages"+t;return c?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0,strict:!0}),c=r===n,i=new RegExp(n+"/?(#.*)?$"),l=a.replace(i,r);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(m.b)(o.Link,{className:f.link,to:""+l},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},t}(r.a.Component),A=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,b=void 0===c?{}:c,p=t.relativePagePath,d=t.titleType,h=b.tabs,j=b.title,f=b.theme,w=b.description,k=b.keywords,v=Object(o.useStaticQuery)("2456312558").site.pathPrefix,x=v?n.pathname.replace(v,""):n.pathname,S=h?x.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:h,homepage:!1,theme:f,pageTitle:j,pageDescription:w,pageKeywords:k,titleType:d},Object(m.b)(u,{title:r?Object(m.b)(r,null):j,label:"label",tabs:h}),h&&Object(m.b)(N,{slug:x,tabs:h,currentTab:S}),Object(m.b)(A.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:p})),Object(m.b)(O.a,{pageContext:t,location:n,slug:x,tabs:h,currentTab:S}),Object(m.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kDoQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),c=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},l=i("AnchorLinks"),b=i("AnchorLink"),p={_frontmatter:o},d=s.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l,{mdxType:"AnchorLinks"},Object(c.b)(b,{mdxType:"AnchorLink"},"Overview"),Object(c.b)(b,{mdxType:"AnchorLink"},"Pre-requisites"),Object(c.b)(b,{mdxType:"AnchorLink"},"Start Mirror Maker 2"),Object(c.b)(b,{mdxType:"AnchorLink"},"Start Consumer from target cluster"),Object(c.b)(b,{mdxType:"AnchorLink"},"Start Producer to source cluster"),Object(c.b)(b,{mdxType:"AnchorLink"},"Clean up")),Object(c.b)("p",null,"Updated 01/08/2021"),Object(c.b)("h2",null,"Overview"),Object(c.b)("p",null,"For this scenario the source cluster is an Event Streams on OpenShift, and the target cluster is another Kafka cluster (using strimzi) running locally. Mirror Maker 2 runs on local server in same data center as target cluster. (Your laptop is promoted as data center). This lab is similar to the lab 1, but it instead uses the Event Streams within Cloud Pak for Integration as illustrated in the figure below:"),Object(c.b)("p",null," ",Object(c.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.93055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrklEQVQoz22Sz27TQBDG8248AAfeBwGXPkNbOPXMrRckjggioFGgKIncVg6hSYkSx47t9f71/ph1rox2tH9m9H3fzOzI2ojWPSEw+H4P222kriPeg3NgDETrCJ0laHnsgbIh7A4E4/GdxLQbkkdKBXpJ2Bcls3nGZlNwrC1KOcqqGbwTQlMpikJx2JUsZhm7p7+4ThN8wDuPFaJeW0ZlpcnyR+6zBRfn53y/meCDMCa5gxRD0wTqg8LLNV/mXFxe8unLGCslGGslP+0CaERhOjw8bVmXlqLx1E2HEmZrhSiz/LwNWFFwPBhpQS/V9DgBKls9gLVKSa49xZLCP6vIm7cFr98/cP1tL/3qmH5Ycn025urVjMmNw0hiUxn6JDrKEqWd7QUkEOWezLt4AlytAtMfEsAPgendko+/Jozv52TFnbw4qjqIEiclImojnQnsj5q2TZWcBup9lMEJoPOnXsVEK1aFlhefz3j+9SXP3l2xmAuIxLQMxYoClyhEVeA/lgC1jkPTVSeuetLUu1b6ZHpWOWzWUpoAuMc1Lv99+ltay6w0USc3RPlXw1kA/wErlmAsl2KdTQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/74ca371414a018d8447324ea7c849865/3cbba/mm2-lab2.png",srcSet:["/refarch-eda/static/74ca371414a018d8447324ea7c849865/7fc1e/mm2-lab2.png 288w","/refarch-eda/static/74ca371414a018d8447324ea7c849865/a5df1/mm2-lab2.png 576w","/refarch-eda/static/74ca371414a018d8447324ea7c849865/3cbba/mm2-lab2.png 1152w","/refarch-eda/static/74ca371414a018d8447324ea7c849865/5227e/mm2-lab2.png 1588w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Mirror Maker 2 runs on local server."),Object(c.b)("li",{parentName:"ol"},"A producer in python to send records to ",Object(c.b)("inlineCode",{parentName:"li"},"products")," topic, will run locally or could be deployed on OpenShift as a ",Object(c.b)("strong",{parentName:"li"},"job")),Object(c.b)("li",{parentName:"ol"},"Local Kafka cluster with replicated topic and Kafka console consumer to see the replicated messages.")),Object(c.b)("h2",null,"Pre-requisites"),Object(c.b)("p",null,"You need to have one instance of Event Streams installed and configured using Cloud Pak for Integration. See the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/installing/"}),"product documentation for installation")),Object(c.b)("p",null,"We need to define the ",Object(c.b)("inlineCode",{parentName:"p"},"products")," topic on the source cluster (Event Streams on CP4I) and get the authentication credentials and TLS certificates."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Login to the OpenShift cluster using the console and get the API token"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc login --token=L0.... --server=https://api.eda-solutions.gse-ocp.net:6443\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"If not done from lab 1, clone the github to get access to the Mirror Maker 2 configuration we are using:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"git clone https://github.com/ibm-cloud-architecture/refarch-eda-tools\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Verify the Event Streams on OpenShift service external end point URL. This URL will be used to configure Mirror Maker 2. "),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"# Be sure to be in the project where eventstreams runs. The following command may be different.\noc project eventstreams\n# Use the bootstrap internal URL: light-es is the name of the cluster\noc get route | grep bootstrap\n\n# The URL is something like\nlight-es-kafka-bootstrap-eventstreams.gse-eda-2020-10-3-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud \n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Rename the ",Object(c.b)("inlineCode",{parentName:"p"},".env-tmpl")," file to ",Object(c.b)("inlineCode",{parentName:"p"},".env"),". Then edit this ",Object(c.b)("inlineCode",{parentName:"p"},".env")," file, with the bootstrap URL and the port 443 at the end: ",Object(c.b)("inlineCode",{parentName:"p"},"light-es-kafka-bootstrap-eventstreams.gse-eda-2020-10-3-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud:443"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Get a user with write access to topic, group and transactions. You can use the Event Streams Console User Interface to define this user,  with the ",Object(c.b)("inlineCode",{parentName:"p"},"Create SCRAM credential")," on the internal URL panel. See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/refarch-eda/use-cases/overview/pre-requisites#getting-scram-authentication-from-event-streams-on-openshift"}),"this section")," for detail."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"})," oc get kafkausers\n\n# NAME                                    CLUSTER       AUTHENTICATION   AUTHORIZATION\n# light-es-ibm-es-ac-reg                  light-es      scram-sha-512    \n# light-es-ibm-es-georep-source-user      light-es      scram-sha-512    simple\n# light-es-ibm-es-kafka-user              light-es      tls   \n# starter                                 light-es      scram-sha-512           \n")))),Object(c.b)("p",null,"Modify the ",Object(c.b)("inlineCode",{parentName:"p"},".env")," file to set the ",Object(c.b)("inlineCode",{parentName:"p"},"ES_OCP_USER")," variable with your selected user."),Object(c.b)("h2",null,"Start the local Kafka cluster"),Object(c.b)("p",null,"In the ",Object(c.b)("inlineCode",{parentName:"p"},"refarch-eda-tools/labs/mirror-maker2/es-cp4i-to-local")," folder there is a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/refarch-eda-tools/labs/mirror-maker2/es-cp4i-to-local/master/docker-compose.yml"}),"docker compose file")," to start a local three brokers cluster with one Zookeeper node."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"In one Terminal window, start the local cluster using the command:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker-compose up -d\n")),Object(c.b)("p",null,"The data are persisted on the local disk within the folder named ",Object(c.b)("inlineCode",{parentName:"p"},"kafka-data"),"."),Object(c.b)("p",null,"Your local environment is up and running."),Object(c.b)("h2",null,"Start Mirror Maker 2"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"If not done already, create a ",Object(c.b)("inlineCode",{parentName:"p"},"products")," topic (with one partition) in the EventStreams cluster using the management console. See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/refarch-eda/use-cases/overview/pre-requisites#creating-event-streams-topics"}),"this note")," to see how to do this operation.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"As done in lab_1 the launch script will configure Mirror Maker 2 in standalone mode with the properties specific to the SCRAM authentication with TLS certificates."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),"es-cp4i.ssl.protocol=TLSv1.2\nes-cp4i.ssl.truststore.password=<>\nes-cp4i.ssl.truststore.location=/home/es-cert.p12\nes-cp4i.ssl.truststore.type=PKCS12\nes-cp4i.security.protocol=SASL_SSL\nes-cp4i.ssl.endpoint.identification.algorithm=https\nes-cp4i.sasl.mechanism=SCRAM-SHA-512\nes-cp4i.sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username=starter password=<>;\n\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Start Mirror Maker2 using the launch script:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"# In the  es-ic-to-local folder\n./launchMM2.sh\n")))),Object(c.b)("h2",null,"Start consumer from target cluster"),Object(c.b)("p",null,"Use Apache Kafka tool like Console consumer to trace the message received on a topic"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'docker exec -ti kafka2 bash -c "/opt/kafka/bin/kafka-console-consumer.sh --bootstrap-server kafka1:9091 --topic es-cp4i.products --from-beginning" \n')),Object(c.b)("h2",null,"Start Producer to source cluster"),Object(c.b)("p",null,"As seen in lab 1, we will use the same python script to create products records. This time the script is producing products data to Event Streams on OpenShift. So we need the URL, pem, and user to access this cluster."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"If not done before download the pem file using the following CLI commands:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"cloudctl login -a https://cp-console.apps.eda-solutions.gse-ocp.net --skip-ssl-validation\ncloudctl es init\n# select the event stream cluster\ncloudctl es certificates --format pem\n")),Object(c.b)("p",{parentName:"li"},"save this ",Object(c.b)("inlineCode",{parentName:"p"},".pem")," file under ",Object(c.b)("inlineCode",{parentName:"p"},"mirror-maker2/es-cpri-to-local")," folder."),Object(c.b)("p",{parentName:"li"},"Now send five records:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"\n./sendProductRecords.sh\n"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Going to the Event Streams Console we can see the message in the ",Object(c.b)("inlineCode",{parentName:"p"},"products")," topic."))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABSUlEQVQoz61S20rEMBDtt7l/s7h2t2DVB9/WfxBB3/wDf0LBG4J4eRGk2rpbu22SNmmTHjNZW1wRBDFwyMw0OXPOpN7aYIBwawfD4RDj8Ri+7/8ZE3vfm073QEtrjf9Y3ma4DSkl0vQdz1ECzgVqyVBXzHaRME0FUws0tULTNK7xT1C1hlQa3mhjgjhOEL28QvIUJ6cFgiOO3WOO4JBhdFBgfX+By0eB1pJr0zolbdv2qpbxEl4Yhq6Y5wWqSuApSnF+G+P6/g1nNxEu7hJcPcwxzwTKUqCybjqysiytI97ntHtBEHwS5iiKArqWXV9nWSsBGGvX1hnjMMb0BJ1dyjusEDLGrEo7M/uhsQcpXyxyCFG6OuHXR/lOSDZo+KREKeVIKKeHIwdUo5j2Lv6KFUKaB10iEDFBCOFI6XCWZfZvSFcwm816MYQPLmiMWJbfv4IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"es products topic",title:"es products topic",src:"/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/3cbba/es-products-topic.png",srcSet:["/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/7fc1e/es-products-topic.png 288w","/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/a5df1/es-products-topic.png 576w","/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/3cbba/es-products-topic.png 1152w","/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/1d1d1/es-products-topic.png 1565w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h2",null,"Clean up"),Object(c.b)("p",null,"You are done with the lab, to stop everything:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"./cleanLab.sh\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-kafka-mm-2-lab-2-index-mdx-469d3a270b69b8eb01f3.js.map