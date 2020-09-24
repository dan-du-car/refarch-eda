(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{s3by:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=c("InlineNotification"),p=c("AnchorLinks"),b=c("AnchorLink"),m={_frontmatter:r},d=s.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("strong",null,"Started 09/24/2020 - still working progress")," Updated /./"),Object(o.b)("p",null,"This chapter describes how event driven architecture addresses the implementation of reactive systems and goes over the different most recent technologies to implement such event-driven responsive applications."),Object(o.b)(p,{mdxType:"AnchorLinks"},Object(o.b)(b,{mdxType:"AnchorLink"},"Context"),Object(o.b)(b,{mdxType:"AnchorLink"},"More...")),Object(o.b)("h2",null,"Overview"),Object(o.b)("p",null,"Modern business applications embrace the strong need to be responsive, bringing immediate response and feedbacks to the end user or system acting on it at the moment it needed. Modern solution based on microservices need to support load and failure and developers adopt the reactive manifesto and modern programming libraries and software to support the manifesto characteristics. "),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.reactivemanifesto.org/"}),"reactive manifesto")," defines four characteristics modern cloud native application needs to support:"),Object(o.b)("p",null," ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"755px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACAklEQVQoz2WTz0tUURzF318QrVpVRAS17AdFumsRUYtatQhKFy1cJGWTrvotVFCRLSIqaWOg0SojKBTcBLXIkUhJCGbGmbR0ZjRNcXScdz5977svZ8wv3Hd5j+85937POS+QiMrv/mWlIr5kxaHbYvdlse+a2HNF1N0U38ZlvTEowqkGD8H/Hx0gMyVefoSdrWJXm9jW4teWC+LVJ5GeFCM5MV/SOtKgEkK5AmEohjIiV/QnzS1CohvOvxCXbG/uEq09Ynreg38viMGUKPxRRFS2qULFN3RVXlHUFA+yZix3WLUcsNr3a0axVP5b0PFeNDyDhqdw9jmcfgL9w2sJvmb96bXV/trjHMatxk5IZoxwa8Iep8SOhNh+UQRHRVsPLC2LlGmVK8CHURjLw3hRZPNiYlpsboGNTYp0dtjgpHjUb1znuqC+XRx/IE50iL3maLcZ4gRPTRpRQQyMeKN+GOFY3uvYaLerM9yx++LIXbH/hugbjjT0s0zNYqA4Oqpq4io/y/qSixd8NmOcsWEYxyaM81cqi2RaqzQLS6JzQDzuE3d6xcN34t5bG3emylk0h7//1KqJUWzcw7PLGvyJc4tidAI2NVuYr4uDtuptpOCM6B30vVmTYijtI+edp0oYRSPeS8sui/anjJlJcbAP3xIHrooNTfAm6fV0hP+mq0kYfwHubhPhq/iDWAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/4b9b5119e67d22bc7655574fcf30a4c4/d6061/reactive-manifesto.png",srcSet:["/refarch-eda/static/4b9b5119e67d22bc7655574fcf30a4c4/7fc1e/reactive-manifesto.png 288w","/refarch-eda/static/4b9b5119e67d22bc7655574fcf30a4c4/a5df1/reactive-manifesto.png 576w","/refarch-eda/static/4b9b5119e67d22bc7655574fcf30a4c4/d6061/reactive-manifesto.png 755w"],sizes:"(max-width: 755px) 100vw, 755px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Message driven"),": the underlying behavior is to have an asynchronous message driven backbone, to enable loose coupling of the application components by exchanging asynchronous messages to minimize or isolate the negative effects of resource contention, coherency delays and inter-service communication network latency. It is the base to support the other reactive characteristics. It also helps for isolation and support location transparency."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Elastic"),": The system stays responsive under varying workload, it can scale up and down the resource utilization depending of the load to the system."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Resilient"),": stay responsive in the face of failure, this is a key characteristics. It implies distributed systems."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Responsive"),": deliver a consistent quality of service to end users or systems, react quickly and consistently to events happening in the system.")),Object(o.b)("p",null,"Reactive architecture is an architecture approach aims to use asynchronous messaging or event driven architecture to build Responsive, Resilient and Elastic systems. "),Object(o.b)("p",null,"Under the “reactive” terms we can see two important caveats:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Reactive systems")," is a group of application components which can heal and scale automatically. It address data consistency, cross domain communication, orchestration, failure, recovery… "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Reactive programming")," is a subset of asynchronous programming and a paradigm where the availability of new information drives the logic forward rather than having control flow driven by a thread-of-execution. This is the adoption of non-blocking IO and event-based model.")),Object(o.b)("p",null,"We recommend to go over ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm.biz/DefiningReactive"}),"this excellent IBM article on defining reactive")," to go deeper into those concepts."),Object(o.b)("h3",null,"Is it for me?"),Object(o.b)("p",null,"We have learnt from years of point to point microservice implementations, that embrassing asynchronous communication help a lot to support scaling, integration, coupling and failover. So adopting reactive design and implementation may look complex at first but is a necessity in the long run. In e-commerce, a lot of monolithic applications were redesigned to adopt reactive manifesto characteristics to support scaling the business need and respond to sporadic demand. In the world of big data, collecting, aggregating, applying real time analytics, decisions and AI need to scale and respond to events at the time of occurence. "),Object(o.b)("h2",null,"EDA and reactive systems"),Object(o.b)("p",null,"The adoption of event driven microservice implementation fits well into the reactive manifesto, where most of the work presented in this git repository started by adoptin Kafka as event backbone, it is too reductor to think EDA is just kafka. EDA supports reactive systems at large, and developing event-driven microservice should use reactive libraries to support non-blocking IO and messaging. Also microservices is part of the game, functions are also in scope and serverless 2.0, knative eventing are the new kids in the play."),Object(o.b)("p",null,"The manifesto stipulates “message driven” while EDA is about events. Events represent unmmutable data and facts about what happened, and components subscribe to those event streams. Message content data sent to a specific destination or consumer. For sure we define EDA implementations to cover both. And we should not be purist and opinionated about that much: it will not make any sense to say: you are using queue to exchange message while we produce events in topic, are different architectures, we see them to be part of a larger asynchronous based architecture. "),Object(o.b)("h2",null,"Technology review"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"concurrency\nparallelism\nstream with back pressure\nvert.x\nmutiny\namqp\nknative eventing")),Object(o.b)("h2",null,"Code samples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://vertx.io/docs/vertx-kafka-client/java/"}),"Vert.x kafka client")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.ibm.com/tutorials/transforming-a-kafka-application-to-be-reactive/"}),"Experiences writing a reactive Kafka application"))),Object(o.b)("h2",null,"More…"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"ibm.biz/ReactiveReport"}),"Reactive Systems Explained - Book from Grace Jansen - Peter Gollmar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://ide.skillsnetwork.site/reactive-java-workshop"}),"Reactive Java Modules show how to build an event-driven, streams-optimized Kafka-based Java application. You will use the Eclipse MicroProfile Reactive Messaging API and Open Liberty to build it and then you’ll learn how to test it in true-to-production environments by using containers with MicroShed testing.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"(https://www.ibm.com/cloud/architecture/architectures/resilience)"}),"Resiliency discussion in IBM architecture center"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-advantages-reactive-index-mdx-a49d72aa60733f507e3f.js.map