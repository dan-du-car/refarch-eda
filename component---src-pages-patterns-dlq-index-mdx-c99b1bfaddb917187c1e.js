(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{N9rg:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},d=i.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Dead Letter Queue"),Object(o.b)("h2",null,"Event reprocessing with dead letter pattern"),Object(o.b)("p",null,"With event driven microservice, it is not just about pub/sub: there are use cases where the microservice needs to call existing service via an HTTP or RPC call. The call may fail. So what should be the processing to be done to retry and gracefully fail by leveraging the power of topics and the concept of dead letter."),Object(o.b)("p",null,"This pattern is influenced by the adoption of Kafka as event backbone and the offset management offered by Kafka. Once a message is read from a Kafka topic by a consumer the offset can be automatically committed so the consumer can poll the next batch of events, or in most the case manually committed, to support business logic to process those events."),Object(o.b)("p",null,"The figure below demonstrates the problem to address: the ",Object(o.b)("inlineCode",{parentName:"p"},"reefer management microservice")," get order event to process by allocating a reefer container to the order. The call to update the container inventory fails."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.40277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABeklEQVQoz4WSTW+CQBCG/f8/oKem8WIvTZPePPZgrVWbpoptFPELFAQU8QOBBfbt7FK1baKdZJhl2Dz7vrMUOOcQIQvP66EnIkk5vM0eaZoho3ZG35y5B2NsYzZxYE5tpCz6ZnAUxCKMYnwoGtrvKjrtPrTBGH3Dhb+NkBLlSTEQEozYYPTo9Qd4ayloKZ94bXVQ7+qYensJlUBGp490Hbqho6uN4NgzVDo67mojbFkmpWcTXapN6DUIY2yCEFEUYb0LcP+i4blr5cCFv0NXX5KtEKqxlE1/G6I381FRXSx2jHgZuOdJSz+m8Sd4bjmIElgk1w8Y7FUuW5utMLXX+baMZke2hU4xP7mWvVOe7oGA5tyG5biIYgbLtjEka/twj5gliJMUjDwyWc9nzNIjtFCpN3BVLKLabOChXMbN7S2uSyU8VqtHK/+FgB6BtUaTbqwNl2ZkmCYGkwnU4RAmqRV70oPlC/lLoe+vZZOfOTkhy5dS7BH/6GGGX+CtsjgU8cY7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dead letter context",title:"Dead letter context",src:"/refarch-eda/static/f424461dec2385d2ab5d41cf08d44327/3cbba/dl-1.png",srcSet:["/refarch-eda/static/f424461dec2385d2ab5d41cf08d44327/7fc1e/dl-1.png 288w","/refarch-eda/static/f424461dec2385d2ab5d41cf08d44327/a5df1/dl-1.png 576w","/refarch-eda/static/f424461dec2385d2ab5d41cf08d44327/3cbba/dl-1.png 1152w","/refarch-eda/static/f424461dec2385d2ab5d41cf08d44327/3ff9f/dl-1.png 1166w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,"At first glance, the approach is to commit the offset only when the three internal operations are succesful: write to reefer database (2), update the container inventory using legacy application service (3), and produce new event to ",Object(o.b)("inlineCode",{parentName:"p"},"orders")," (4) and ",Object(o.b)("inlineCode",{parentName:"p"},"containers")," (5) topics. Step (4) and (5) will not be done as no response from (3) happened."),Object(o.b)("p",null,"In fact a better approach is to commit the read offset on the orders topic, and then starts the processing: the goal is to do not impact the input throughput. In case of step (2) or (3) fails the order data is published to an ",Object(o.b)("inlineCode",{parentName:"p"},"order-retries")," topic (4) with some added metadata like number of retries and timestamp."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABvklEQVQoz3VRTW/TQBD1//8HSJxauLSigh6qVkKlBwKkiuUkJUmtusWKk8b22vE6/v5YP2Y32AcQI412d2Zn5r03Gsi6rsP/bMi5LmoWQr5E26IsKvJanW3bDP+1viBLC6x/uXCk2y6CfYRDXqvc845jaW5AlSgEsHVDjL9PoU8ecD+e4dF6QVbWargm/jQMoxi6Mcf85xLG7AGrJwsfv1mwWYqmFYjzCmnVoqHvh6wA4xHcMKTBAa4NG2djG0XVQJPNAp6BxbkkiIDOsjoiu1u5uJpu1H3rx1jY7CiDdD+AqFv1zssKcZIfEcqA4x+w9hOVnJguCpIkSkro5k7FGOOYz15grmwEYQShggFJ0PyjuaboxDHSokTVCPCYw9l5cPcJWJTAefVIMx8Xnyd49aiZ6MAPCTa+jyTLUTctKkLaS6fJwNXtLU4/XMB2NvgyGuHNySmebZtAMJycnxMdQt+JYeP3hoG3797j7PISn65vFGWVkpSTNMPd1xF+6Dr2Ecd6u8V0scCec6SE4NGyaLlC6dYKRZaQepgvV1iYJi3viTRvhmFaQVQ9jw1FvREzanCMSFkkk/7822Ssb/gb3Y6qOgnN//YAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dead letter context",title:"Dead letter context",src:"/refarch-eda/static/e192f384eee9637f08aa319ccf3cdc0a/3cbba/dl-2.png",srcSet:["/refarch-eda/static/e192f384eee9637f08aa319ccf3cdc0a/7fc1e/dl-2.png 288w","/refarch-eda/static/e192f384eee9637f08aa319ccf3cdc0a/a5df1/dl-2.png 576w","/refarch-eda/static/e192f384eee9637f08aa319ccf3cdc0a/3cbba/dl-2.png 1152w","/refarch-eda/static/e192f384eee9637f08aa319ccf3cdc0a/c95a1/dl-2.png 1162w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,"A new order retry service or function consumes the ",Object(o.b)("inlineCode",{parentName:"p"},"order retry")," events (5) and do a new call to the remote service using a delay according to the number of retries already done: this is to pace the calls to a service that has issue for longer time. If the call (6) fails this function creates a new event in the ",Object(o.b)("inlineCode",{parentName:"p"},"order-retries")," topic with a retry counter increased by one. If the number of retry reaches a certain threshold then the order is sent to ",Object(o.b)("inlineCode",{parentName:"p"},"order-dead-letter")," topic (7) for human to work on. A CLI could read from this dead letter topic to deal with the data, or retry automatically once we know the backend service works. Using this approach we delay the call to the remote service without putting too much preassure on it."),Object(o.b)("p",null,"We have implemented the dead letter pattern when integrating the container manager microservice with an external BPM end point. The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/integration-tests/dead-letter-queue/"}),"integration test detail is in this note")," and the integration test ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc/blob/master/itg-tests/es-it/ContainerAnomalyDlq.py"}),"here"),"."),Object(o.b)("p",null,"For more detail we recommend this article from Uber engineering: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://eng.uber.com/reliable-reprocessing/"}),"Building Reliable Reprocessing and Dead Letter Queues with Apache Kafka"),"."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-patterns-dlq-index-mdx-c99b1bfaddb917187c1e.js.map