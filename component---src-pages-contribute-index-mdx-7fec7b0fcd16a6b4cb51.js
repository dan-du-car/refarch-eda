(window.webpackJsonp=window.webpackJsonp||[]).push([[33,85],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),p=a("QH2O"),m=a("qKvR"),d=function(e){var t,a=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(m.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=n.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,r=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,i=n.baseUrl,o=n.subDirectory,c=i+"/edit/"+n.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),g=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),i=n===r,c=new RegExp(r+"/?(#.*)?$"),b=a.replace(c,n);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+b},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},n))))))},t}(n.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,p=t.titleType,h=s.tabs,g=s.title,f=s.theme,w=s.description,x=s.keywords,v=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=v?r.pathname.replace(v,""):r.pathname,T=h?k.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:h,homepage:!1,theme:f,pageTitle:g,pageDescription:w,pageKeywords:x,titleType:p},Object(m.b)(d,{title:n?Object(m.b)(n,null):g,label:"label",tabs:h}),h&&Object(m.b)(y,{slug:k,tabs:h,currentTab:T}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:u})),Object(m.b)(O.a,{pageContext:t,location:r,slug:k,tabs:h,currentTab:T}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Kr8m:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var r,n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),b=(r="PageDescription",function(e){return console.warn("Component '"+r+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:c},u=l.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},"Anyone can contribute to IBM Cloud Architecture reference applications and their associated projects, whether you are an IBMer or not. We welcome your collaboration & contributions happily, as our reference applications are meant to reflect your real world scenarios. There are multiple ways to contribute: report bugs and improvement suggestions, improve documentation, and contribute code."),Object(o.b)("h2",null,"Bug reports, documentation changes, and feature requests"),Object(o.b)("p",null,"If you would like to contribute your experience with an IBM Cloud Architecture project back to the project in the form of encountered bug reports, necessary documentation changes, or new feature requests, this can be done through the use of the repository’s ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),Object(o.b)("strong",{parentName:"a"},"Issues"))," list."),Object(o.b)("p",null,"Before opening a new issue, please reference the existing list to make sure a similar or duplicate item does not already exist.  Otherwise, please be as explicit as possible when creating the new item and be sure to include the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Bug reports"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Specific Project Version"),Object(o.b)("li",{parentName:"ul"},"Deployment environment"),Object(o.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate the problem"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Documentation changes"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"URL to existing incorrect or incomplete documentation (either in the project’s GitHub repo or external product documentation)"),Object(o.b)("li",{parentName:"ul"},"Updates required to correct current inconsistency"),Object(o.b)("li",{parentName:"ul"},"If possible, a link to a project fork, sample, or workflow to expose the gap in documentation."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Feature requests"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Complete description of project feature request, including but not limited to, components of the existing project that are impacted, as well as additional components that may need to be created."),Object(o.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate environment necessary to identify the new feature’s current gap.")))),Object(o.b)("p",null,"The more explicit and thorough you are in opening GitHub Issues, the more efficient your interaction with the maintainers will be.  When creating the GitHub Issue for your bug report, documentation change, or feature request, be sure to add as many relevant labels as necessary (that are defined for that specific project).  These will vary by project, but will be helpful to the maintainers in quickly triaging your new GitHub issues."),Object(o.b)("h2",null,"Code contributions"),Object(o.b)("p",null,"We really value contributions, and to maximize the impact of code contributions, we request that any contributions follow the guidelines below.  If you are new to open source contribution and would like some more pointers or guidance, you may want to check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://yourfirstpr.github.io/"}),Object(o.b)("strong",{parentName:"a"},"Your First PR"))," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.firsttimersonly.com/"}),Object(o.b)("strong",{parentName:"a"},"First Timers Only")),".  These are a few projects that help on-board new contributors to the overall process."),Object(o.b)("h3",null,"Coding and Pull Requests best practices"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Please ensure you follow the coding standard and code formatting used throughout the existing code base.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This may vary project by project, but any specific diversion from normal language standards will be explicitly noted."))),Object(o.b)("li",{parentName:"ul"},"One feature / bug fix / documentation update per pull request",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Always pull the latest changes from upstream and rebase before creating any pull request."),Object(o.b)("li",{parentName:"ul"},"New pull requests should be created against the ",Object(o.b)("inlineCode",{parentName:"li"},"integration")," branch of the repository, if available."),Object(o.b)("li",{parentName:"ul"},"This ensures new code is included in full-stack integration tests before being merged into the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch"))),Object(o.b)("li",{parentName:"ul"},"All new features must be accompanied by associated tests.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Make sure all tests pass locally before submitting a pull request."),Object(o.b)("li",{parentName:"ul"},"Include tests with every feature enhancement, improve tests with every bug fix")))),Object(o.b)("h3",null,"Github and git flow"),Object(o.b)("p",null,"The internet is littered with guides and information on how to use and understand git.\nHowever, here’s a compact guide that follows the suggested workflow"),Object(o.b)("img",{src:"https://github.com/ibm-cloud-architecture/ibm-cloud-architecture.github.io/raw/master-content/assets/img/github_flow.png",alt:"Github flow"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fork the desired repo in github.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone your repo to your local computer.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the upstream repository"),Object(o.b)("p",{parentName:"li"},"Note: Guide for step 1-3 here: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo/"}),"forking a repo"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create new development branch off the targeted upstream branch.  This will often be ",Object(o.b)("inlineCode",{parentName:"p"},"master"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git checkout -b <my-feature-branch> master\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Do your work:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Write your code"),Object(o.b)("li",{parentName:"ul"},"Write your tests"),Object(o.b)("li",{parentName:"ul"},"Pass your tests locally"),Object(o.b)("li",{parentName:"ul"},"Commit your intermediate changes as you go and as appropriate"),Object(o.b)("li",{parentName:"ul"},"Repeat until satisfied"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fetch latest upstream changes (in case other changes had been delivered upstream while you were developing your new feature)."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git fetch upstream\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Rebase to the latest upstream changes, resolving any conflicts. This will ‘replay’ your local commits, one by one, after the changes delivered upstream while you were locally developing, letting you manually resolve any conflict."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git branch --set-upstream-to=upstream/master\ngit rebase\n")),Object(o.b)("p",{parentName:"li"},"Instructions on how to manually resolve a conflict and commit the new change or skip your local replayed commit will be presented on screen by the git CLI.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Push the changes to your repository"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git push origin <my-feature-branch>\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a pull request against the same targeted upstream branch."),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/creating-a-pull-request/"}),"Creating a pull request")))),Object(o.b)("p",null,"Once the pull request has been reviewed, accepted and merged into the main github repository, you should synchronise your remote and local forked github repository ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch with the upstream master branch. To do so:"),Object(o.b)("ol",{start:10},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Pull to your local forked repository the latest changes upstream (that is, the pull request)."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git pull upstream master\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Push those latest upstream changes pulled locally to your remote forked repository."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git push origin master\n")))),Object(o.b)("h3",null,"What happens next?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All pull requests will be automatically built and unit tested by travis-ci, when implemented by that specific project.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can determine if a given project is enabled for travis-ci unit tests by the existence of a ",Object(o.b)("inlineCode",{parentName:"li"},".travis.yml")," file in the root of the repository or branch."),Object(o.b)("li",{parentName:"ul"},"When in use, all travis-ci unit tests must pass completely before any further review or discussion takes place."))),Object(o.b)("li",{parentName:"ul"},"The repository maintainer will then inspect the commit and, if accepted, will pull the code into the upstream branch."),Object(o.b)("li",{parentName:"ul"},"Should a maintainer or reviewer ask for changes to be made to the pull request, these can be made locally and pushed to your forked repository and branch."),Object(o.b)("li",{parentName:"ul"},"Commits passing this stage will make it into the next release cycle for the given project.")))}p.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-contribute-index-mdx-7fec7b0fcd16a6b4cb51.js.map