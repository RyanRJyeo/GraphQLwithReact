(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/spaceXlogo.697cc825.png"},42:function(e,a,t){e.exports=t(58)},47:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(33),r=t.n(l),s=(t(47),t(41)),m=t(8),i=t(17),o=t(14),u=t(21),h=t(16),p=t.n(h),E=t(19),d=t(26),g=t.n(d),N=t(24),b=t.n(N);function _(e){var a=e.launch,t=a.flight_number,n=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:g()({"text-success":r,"text-danger":!1===r,"text-secondary":null===r})},n)," "),c.a.createElement("p",null,"Date: ",c.a.createElement(b.a,{format:"YYYY-MM-DD HH:MM"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(i.b,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function f(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-secondary"})," = Null"))}function y(){var e=Object(u.a)(["\n  query Launches {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return y=function(){return e},e}var v=p()(y());var k=function(){var e=Object(E.a)(v),a=e.loading,t=e.error,l=e.data,r=null;return l&&(r=l.launches.map((function(e){return c.a.createElement(_,{key:e.flight_number,launch:e})}))),a&&(r=c.a.createElement("div",{className:"spinner-border text-info",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))),t&&(r=c.a.createElement("h1",{className:"display-4 my-3"},t)),c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(f,null),r)};function x(){var e=Object(u.a)(["\n  query LaunchQuery($flight_number: Int!){\n    launch(flight_number: $flight_number){\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local,\n      rocket{\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return x=function(){return e},e}var w=p()(x());var D=function(e){var a=e.match.params.flight_number;a=parseInt(a);var t=Object(E.a)(w,{variables:{flight_number:a}}),l=t.loading,r=t.error,s=t.data,m=null;if(s){var o=s.launch,u=o.mission_name,h=(o.launch_year,o.launch_success),p=o.launch_date_local,d=o.rocket,g=d.rocket_id,N=d.rocket_name,_=d.rocket_type;h=h?c.a.createElement("span",{className:"text-success"},"Success"):!1===h?c.a.createElement("span",{className:"text-danger"},"Fail"):c.a.createElement("span",{className:"text-secondary"},"Null"),m=c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission: "),u),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",a),c.a.createElement("li",{className:"list-group-item"},"Launch Date: ",c.a.createElement(b.a,{format:"YYYY-MM-DD, HH:MM"},p)),c.a.createElement("li",{className:"list-group-item"},"Launch Status: ",h)),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",g),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",N),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",_)),c.a.createElement("br",null),c.a.createElement(i.b,{to:"/",className:"btn btn-secondary"},"Back"))}return l&&(m=c.a.createElement("div",{className:"spinner-border text-info",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))),r&&(m=c.a.createElement("h1",{className:"display-4 my-3"},r)),c.a.createElement(n.Fragment,null,m)},M=t(40),L=t.n(M),Y=(t(56),new s.a({uri:"/graphql"}));var F=function(){return c.a.createElement(m.a,{client:Y},c.a.createElement(i.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:L.a,alt:"SpaceX",style:{width:"20%",display:"block",margin:"auto"}}),c.a.createElement(o.a,{exact:!0,path:"/",component:k}),c.a.createElement(o.a,{exact:!0,path:"/launch/:flight_number",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.fb64f76e.chunk.js.map