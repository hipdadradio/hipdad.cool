(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={HDR:"HDR",PROGRAMMING:"Programming",NOTHING:"Nothing",TWITCH:"Twitch",YOUTUBE:"YOUTUBE"}},14:function(e){e.exports={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,VIDEO_QUEUED:5,PLAYLIST_ID:"PLbmCFhiM3soZXYXvWTc_wt_5Gt9LrjcfJ",HDR_ID:"PLbmCFhiM3soYdbBNe8SMeFtpzumrAZHkD",HOT_SANDWICH_ID:"PLbmCFhiM3soZG5lKZ2xCV07kFHOILSnuh",HIP_DAD_ADS_ID:"PLbmCFhiM3soahwPW8ThAv3TuSTv0PxhyO"}},17:function(e){e.exports={KEY:"AIzaSyDqSJPO_kbYmNKXYxEWsPC3Zf1R1p_Rctc"}},29:function(e,t,a){e.exports=a.p+"static/media/logo.ec50eb0e.png"},32:function(e,t,a){e.exports=a(55)},37:function(e,t,a){},38:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(26),l=a.n(s),r=(a(37),a(38),a(15)),o=a(16),c=a(2),u=a(3),h=a(5),d=a(4),m=a(1),p=a(6),b=a(7),E=a(17),v={},y=function(e,t){if(void 0!==v[b.SCHEDULE]){var a=w(v[b.SCHEDULE]);a.shouldPlay?e(a.videoId,a.startTime):t&&t()}else{var n=new XMLHttpRequest,i=f();n.onload=function(a){if(4===n.readyState)if(200===n.status){var i=JSON.parse(n.responseText).values.splice(1);v[b.SCHEDULE]=i;var s=w(i);s.shouldPlay?e(s.videoId,s.startTime):t&&t()}else console.error(n.statusText)},n.open("GET",i,!0),n.send()}},f=function(){var e=b.URL_ROOT;return e+="/"+b.values.schedule.DB_ID,e+="/values/"+b.values.schedule.DB_VALUES,e+="?key="+E.KEY},g=function(){var e=b.URL_ROOT;return e+="/"+b.values.news.DB_ID,e+="/values/"+b.values.news.DB_VALUES,e+="?key="+E.KEY},O=function(){var e=b.URL_ROOT;return e+="/"+b.values.djs.DB_ID,e+="/values/"+b.values.djs.DB_VALUES,e+="?key="+E.KEY},S=function(e){var t=[];return e.forEach(function(e){t.push({title:e[b.values.schedule.COLUMN_HEADERS.SHOW_TITLE],videoId:e[b.values.schedule.COLUMN_HEADERS.VIDEO_ID],startDate:Date.parse(e[b.values.schedule.COLUMN_HEADERS.START_DATE]),endDate:Date.parse(e[b.values.schedule.COLUMN_HEADERS.END_DATE])})}),t},w=function(e){var t=S(e),a=Date.now(),n={shouldPlay:!1};return t.forEach(function(e){if(e.startDate<a&&e.endDate>a){var t=0;a-e.startDate>6e4&&(t=(a-e.startDate)/1e3),n={shouldPlay:!0,videoId:e.videoId,startTime:t}}}),n},N=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"GrowingContainer"},i.a.createElement("img",{src:this.props.image,className:"NewsImageContainer",alt:this.props.title+"_IMG"}),i.a.createElement("div",{className:"textContainer"},i.a.createElement("h2",null,this.props.title),i.a.createElement("h4",null,this.props.date),i.a.createElement("p",null,this.props.text)))}}]),t}(i.a.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={page:0,news:[],visableNews:[]},a.handleFetchedNews=a.handleFetchedNews.bind(Object(m.a)(a)),a.handleNewerStories=a.handleNewerStories.bind(Object(m.a)(a)),a.handleOlderStories=a.handleOlderStories.bind(Object(m.a)(a)),a.updateVisibleEpisodes=a.updateVisibleEpisodes.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleFetchedNews",value:function(e){var t=function(e){var t=[];return e.forEach(function(e){t.push({date:e[b.values.news.COLUMN_HEADERS.DATE],title:e[b.values.news.COLUMN_HEADERS.TITLE],text:e[b.values.news.COLUMN_HEADERS.TEXT],image:e[b.values.news.COLUMN_HEADERS.IMAGE]})}),t.reverse()}(e);this.setState({news:t,visableNews:t.slice(0,10)})}},{key:"updateVisibleEpisodes",value:function(e){this.setState({visableNews:this.state.news.slice(10*e,10*e+10),page:e})}},{key:"handleOlderStories",value:function(){setTimeout(this.scrollToTop(),1e3),this.updateVisibleEpisodes(this.state.page+1)}},{key:"handleNewerStories",value:function(){setTimeout(this.scrollToTop(),1e3),this.updateVisibleEpisodes(this.state.page-1)}},{key:"scrollToTop",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"componentDidMount",value:function(){!function(e){if(void 0!==v[b.NEWS])e(v[b.NEWS]);else{var t=new XMLHttpRequest,a=g();t.onload=function(a){if(4===t.readyState)if(200===t.status){var n=JSON.parse(t.responseText).values.splice(1);v[b.NEWS]=n,e(n)}else console.error(t.statusText)},t.open("GET",a,!0),t.send()}}(this.handleFetchedNews)}},{key:"render",value:function(){var e=this.state.page,t=this.state.news.length>10*(this.state.page+1);return i.a.createElement("div",null,i.a.createElement("h2",null,"News"),this.state.visableNews.map(function(e){return i.a.createElement(N,{key:e.title,date:e.date,title:e.title,text:e.text,image:e.image})}),i.a.createElement("br",null),i.a.createElement("button",{id:"Newer News",onClick:this.handleNewerStories,hidden:!e},"Newer Stories"),i.a.createElement("button",{id:"Older News",onClick:this.handleOlderStories,hidden:!t},"Older Stories"))}}]),t}(i.a.Component),D=a(19),j=function(e){return i.a.createElement("div",null,i.a.createElement("h3",{className:"textContainer"},e.title),i.a.createElement(D.a,{videoId:e.src}),i.a.createElement("p",{className:"textContainer"},e.description))},C={},k=function e(t,a,n,i,s){if(void 0!==C[t])s(C[t]);else{var l=new XMLHttpRequest,r="&playlistId="+t+"&key="+E.KEY,o="https://www.googleapis.com/youtube/v3/playlistItems?part="+i+"&maxResults=50"+(r=n?r+"&pageToken="+n:r);l.onload=function(n){if(4===l.readyState)if(200===l.status){var r=JSON.parse(l.responseText);r.items.forEach(function(e){a.push({videoId:e.contentDetails.videoId,title:e.snippet?e.snippet.title:void 0,description:e.snippet?e.snippet.description:void 0})}),r.nextPageToken&&r.items.length<199?e(t,a,r.nextPageToken,i,s):(C[t]=a,s(a))}else console.error(l.statusText)},l.open("GET",o,!0),l.send()}},I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={episodes:[],visableEpisodes:[],page:0},a.updateVisibleEpisodes=a.updateVisibleEpisodes.bind(Object(m.a)(a)),a.initialEpisodePopulation=a.initialEpisodePopulation.bind(Object(m.a)(a)),a.handleOlderEpisodes=a.handleOlderEpisodes.bind(Object(m.a)(a)),a.handleNewerEpisodes=a.handleNewerEpisodes.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"initialEpisodePopulation",value:function(e){this.setState({episodes:e,visableEpisodes:e.slice(0,5)})}},{key:"updateVisibleEpisodes",value:function(e){this.setState({visableEpisodes:this.state.episodes.slice(5*e,5*e+5),page:e})}},{key:"handleOlderEpisodes",value:function(){this.scrollToTop(),this.updateVisibleEpisodes(this.state.page+1)}},{key:"handleNewerEpisodes",value:function(){this.scrollToTop(),this.updateVisibleEpisodes(this.state.page-1)}},{key:"scrollToTop",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"componentWillMount",value:function(){k(this.props.playlistId,[],void 0,"contentDetails,snippet",this.initialEpisodePopulation)}},{key:"render",value:function(){var e=this.state.page,t=this.state.episodes.length>5*(this.state.page+1);return i.a.createElement("div",null,this.state.visableEpisodes.map(function(e){return i.a.createElement(j,{key:e.videoId,src:e.videoId,title:e.title,description:e.description})}),i.a.createElement("button",{id:"Newer Episode",onClick:this.handleNewerEpisodes,hidden:!e},"Newer Videos"),i.a.createElement("button",{id:"Older Episodes",onClick:this.handleOlderEpisodes,hidden:!t},"Older Videos"))}}]),t}(i.a.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,this.props.title," Archive"),i.a.createElement("div",null,i.a.createElement(I,{playlistId:this.props.playlistId})))}}]),t}(i.a.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"GrowingContainer"},i.a.createElement("img",{src:this.props.image,className:"NewsImageContainer",alt:this.props.name+"_IMG"}),i.a.createElement("div",{className:"DJContainer"},i.a.createElement("h2",null,this.props.name),i.a.createElement("p",null,this.props.bio)))}}]),t}(i.a.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={djs:[]},a.handleFetchedDjs=a.handleFetchedDjs.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleFetchedDjs",value:function(e){var t=function(e){var t=[];return e.forEach(function(e){t.push({name:e[b.values.djs.COLUMN_HEADERS.NAME],bio:e[b.values.djs.COLUMN_HEADERS.BIO],image:e[b.values.djs.COLUMN_HEADERS.IMAGE]})}),t}(e);this.setState({djs:t})}},{key:"componentDidMount",value:function(){!function(e){if(void 0!==v[b.DJS])e(v[b.DJS]);else{var t=new XMLHttpRequest,a=O();t.onload=function(a){if(4===t.readyState)if(200===t.status){var n=JSON.parse(t.responseText).values.splice(1);v[b.DJS]=n,e(n)}else console.error(t.statusText)},t.open("GET",a,!0),t.send()}}(this.handleFetchedDjs)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Meet the DJs!"),this.state.djs.map(function(e){return i.a.createElement(P,{name:e.name,bio:e.bio,image:e.image,key:e.name})}))}}]),t}(i.a.Component),H=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"About Hip Dad Radio"),i.a.createElement(R,null))}}]),t}(i.a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.title,i.a.createElement("br",null),function(e){var t=new Date(e.startDate).toString(),a=new Date(e.endDate).toString();return t=t.substring(0,t.indexOf("GMT")),a=a.substring(16),i.a.createElement("div",null,t," - ",a)}(this.props),i.a.createElement("br",null))}}]),t}(i.a.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={schedule:[],upcomingShows:!1},a.populateSchedule=a.populateSchedule.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){!function(e){if(void 0!==v[b.SCHEDULE])e(v[b.SCHEDULE]);else{var t=new XMLHttpRequest,a=f();t.onload=function(a){if(4===t.readyState)if(200===t.status){var n=JSON.parse(t.responseText).values.splice(1);v[b.SCHEDULE]=n,e(v[b.SCHEDULE])}else console.error(t.statusText)},t.open("GET",a,!0),t.send()}}(this.populateSchedule)}},{key:"populateSchedule",value:function(e){var t=S(e);(t=this.filterSchedule(t)).length>0&&this.setState({schedule:t,upcomingShows:!0})}},{key:"filterSchedule",value:function(e){var t=[],a=Date.now();return e.forEach(function(e){var n=e.endDate-a;0<n&&n<864e5&&t.push(e)}),t}},{key:"render",value:function(){return i.a.createElement("h4",{className:"textContainer"},i.a.createElement("strong",null,"Scheduled shows:"),i.a.createElement("br",null),this.state.upcomingShows?"":"No upcoming shows scheduled... Please check back tomorrow!",this.state.schedule.map(function(e){return i.a.createElement(A,{title:e.title,startDate:e.startDate,endDate:e.endDate,key:e.title+e.startDate})}))}}]),t}(i.a.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={opts:{height:"360",width:"640",playerVars:{controls:0}},isBig:!1},a.goBigScreen=a.goBigScreen.bind(Object(m.a)(a)),a.goSmallScreen=a.goSmallScreen.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"goBigScreen",value:function(){this.setState({opts:{height:window.innerHeight-100,width:window.innerWidth-100,playerVars:{controls:0}},isBig:!0})}},{key:"goSmallScreen",value:function(){this.setState({opts:{height:"360",width:"640",playerVars:{controls:0}},isBig:!1})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{hidden:!this.props.visible,className:"noInteraction"},i.a.createElement(D.a,{opts:this.state.opts,onReady:this.props.onInitialize,onStateChange:this.props.onStateChange})),i.a.createElement("div",{hidden:!this.props.visible},i.a.createElement("button",{onClick:this.goSmallScreen,hidden:!this.state.isBig},"Go Small"),i.a.createElement("button",{onClick:this.goBigScreen,hidden:this.state.isBig},"Go Big")))}}]),t}(i.a.Component),_=window.Twitch,B=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitialize(new _.Player("TwitchPlayer",{channel:"hipdadradio"}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"TwitchPlayer",className:"noInteraction",hidden:!this.props.visible}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe id="hipdadradio" src="https://www.twitch.tv/embed/hipdadradio/chat" scrolling="yes" height="300" width="640"></iframe>'},hidden:!this.props.visible}))}}]),t}(i.a.Component),M=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},x=function(e){return i.a.createElement("h4",{className:"textContainer"},i.a.createElement("strong",null,"You're Listening to HDR ",i.a.createElement("br",null),"Now Playing: ",e.videoTitle," ",i.a.createElement("br",null),"Number of Listeners: ",e.numberOfListeners," ",i.a.createElement("br",null)))},W=a(11),V=a(14),Y=window.Twitch,G=V.PLAYLIST_ID,J=0,X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={activePlayer:"",playing:"",videoTitle:"...",numberOfListeners:Math.round(100*Math.random()),twitchPlayer:void 0,youTubePlayer:void 0},a.bindTwitchPlayer=a.bindTwitchPlayer.bind(Object(m.a)(a)),a.bindYouTubePlayer=a.bindYouTubePlayer.bind(Object(m.a)(a)),a.showTwitch=a.showTwitch.bind(Object(m.a)(a)),a.hideTwitch=a.hideTwitch.bind(Object(m.a)(a)),a.startYouTubePlayerRunner=a.startYouTubePlayerRunner.bind(Object(m.a)(a)),a.startBlockedYouTubeVideoChecker=a.startBlockedYouTubeVideoChecker.bind(Object(m.a)(a)),a.handleFetchingPlaylist=a.handleFetchingPlaylist.bind(Object(m.a)(a)),a.startYouTubePlayer=a.startYouTubePlayer.bind(Object(m.a)(a)),a.playScheduledProgramming=a.playScheduledProgramming.bind(Object(m.a)(a)),a.handleYouTubeStateChange=a.handleYouTubeStateChange.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"bindTwitchPlayer",value:function(e){this.setState({twitchPlayer:e}),e.addEventListener(Y.Player.PLAYING,this.showTwitch),e.addEventListener(Y.Player.OFFLINE,this.hideTwitch)}},{key:"showTwitch",value:function(){this.setState({volume:this.state.youTubePlayer.getVolume()});var e=setInterval(function(e){if(e.state.volume>0){var t=e.state.volume-5;e.state.youTubePlayer.setVolume(t),e.setState({volume:t})}},250,this);setTimeout(function(t){clearInterval(e),t.setState({activePlayer:W.TWITCH,videoTitle:"Hip Dad Radio: LIVE"}),t.state.youTubePlayer&&t.state.youTubePlayer.pauseVideo()},5e3,this)}},{key:"hideTwitch",value:function(){if(this.setState({activePlayer:W.YOUTUBE,volume:this.state.youTubePlayer?this.state.youTubePlayer.getVolume():100}),this.state.youTubePlayer&&this.state.youTubePlayer.playVideo(),this.state.volume<100){this.setState({});var e=setInterval(function(e){if(e.state.volume<100){var t=e.state.volume+5;e.state.youTubePlayer.setVolume(t),e.setState({volume:t})}},250,this);setTimeout(function(t){clearInterval(e)},5e3,this)}}},{key:"bindYouTubePlayer",value:function(e){this.setState({youTubePlayer:e.target}),y(this.playScheduledProgramming,this.handleFetchingPlaylist),this.startYouTubePlayerRunner(),this.startBlockedYouTubeVideoChecker()}},{key:"startYouTubePlayerRunner",value:function(){setInterval(function(e){if(e.state.playing===W.HDR)y(e.playScheduledProgramming);else if(e.state.playing===W.PROGRAMMING)return},6e4,this)}},{key:"startBlockedYouTubeVideoChecker",value:function(){setInterval(function(e){e.setState({numberOfListeners:e.state.numberOfListeners+Math.round(2*Math.random()-1)}),e.state.playing===W.HDR&&(J>2?(e.state.youTubePlayer.nextVideo(),J=0):e.state.youTubePlayer.getPlayerState()===V.UNSTARTED?J+=1:J=0)},1e3,this)}},{key:"handleFetchingPlaylist",value:function(){k(G,[],void 0,"contentDetails",this.startYouTubePlayer)}},{key:"playScheduledProgramming",value:function(e,t){this.state.youTubePlayer.loadVideoById(e,t),this.state.youTubePlayer.playVideo(),this.setState({playing:W.PROGRAMMING,activePlayer:W.YOUTUBE})}},{key:"startYouTubePlayer",value:function(e){e=e.map(function(e){return e.videoId}),this.state.youTubePlayer.loadPlaylist({playlist:M(e)}),this.state.activePlayer===W.YOUTUBE&&(this.state.youTubePlayer.playVideo(),this.setState({playing:W.HDR}))}},{key:"handleYouTubeStateChange",value:function(e){switch(e.data){case V.PLAYING:this.setState({videoTitle:this.state.youTubePlayer.getVideoData().title})}if(this.state.playing===W.PROGRAMMING)switch(e.data){case V.ENDED:y(this.playScheduledProgramming,this.handleFetchingPlaylist)}}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{videoTitle:this.state.videoTitle,numberOfListeners:this.state.numberOfListeners}),i.a.createElement(F,{onInitialize:this.bindYouTubePlayer,onStateChange:this.handleYouTubeStateChange,visible:this.state.activePlayer===W.YOUTUBE&&this.state.youTubePlayer}),i.a.createElement(B,{onInitialize:this.bindTwitchPlayer,visible:this.state.activePlayer===W.TWITCH&&this.state.twitchPlayer}),i.a.createElement(U,null))}}]),t}(i.a.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(X,null))}}]),t}(i.a.Component),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={started:!1,value:""},a.startForm=a.startForm.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"startForm",value:function(){this.setState({started:!0})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("entry.1059772933",this.state.value);var a=new XMLHttpRequest;a.onload=function(e){4===a.readyState&&(200===a.status?alert("Success! We now have your email address and will sell it to anyone who wants to buy it."):alert("Sorry! Something went wrong... Please try to submit the form again."))},a.open("POST","https://cors-hipdadradio.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLScIj6qyeZSeUX62cCstOZSuVTQIXMjR-ci7J9NSArSuoCWbVQ/formResponse",!0),a.send(t),this.setState({started:!1,value:""}),document.getElementById("mailingListEmail").value=""}},{key:"render",value:function(){return i.a.createElement("div",{className:"textContainer"},i.a.createElement("h2",null,"Join Our Mailing List!",i.a.createElement("button",{className:"formButton",onClick:this.startForm,hidden:this.state.started},"Looking for more?")),i.a.createElement("form",{onSubmit:this.handleSubmit,hidden:!this.state.started},i.a.createElement("h4",null,"Join our mailing list for updates on all things Hip Dad Radio!"),i.a.createElement("section",null,i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"mailingListEmail"},i.a.createElement("span",null,"Email: ")),i.a.createElement("input",{id:"mailingListEmail",type:"email",name:"email",value:this.state.email,onChange:this.handleChange})," ",i.a.createElement("br",null))),i.a.createElement("button",{id:"MailingListSubmit",type:"submit",hidden:!this.state.value},"Get Those Updates!")))}}]),t}(i.a.Component),K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={started:!1,firstName:"",lastName:"",email:"",why:""},a.startForm=a.startForm.bind(Object(m.a)(a)),a.handleFirstNameChange=a.handleFirstNameChange.bind(Object(m.a)(a)),a.handleLastNameChange=a.handleLastNameChange.bind(Object(m.a)(a)),a.handleEmailChange=a.handleEmailChange.bind(Object(m.a)(a)),a.handleWhyChange=a.handleWhyChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"startForm",value:function(){this.setState({started:!0})}},{key:"handleFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleWhyChange",value:function(e){this.setState({why:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("entry.984192258",this.state.firstName),t.append("entry.327263638",this.state.lastName),t.append("entry.1665212900",this.state.email),t.append("entry.643621519",this.state.why);var a=new XMLHttpRequest;a.onload=function(e){4===a.readyState&&(200===a.status?alert("Success! We will reach out to you to see what DJ oportunities are available."):alert("Sorry! Something went wrong... Please try to submit the form again."))},a.open("POST","https://cors-hipdadradio.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSf-NgZa7cYLvzydCIHJLzMvSR5WrPG-08c9rm70aYZwh5R_dg/formResponse",!0),a.send(t),this.setState({started:!1,firstName:"",lastName:"",email:"",why:""}),document.getElementById("applicationFirstName").value="",document.getElementById("applicationLastName").value="",document.getElementById("applicationEmail").value="",document.getElementById("applicationWhy").value=""}},{key:"render",value:function(){return i.a.createElement("div",{className:"textContainer"},i.a.createElement("h2",null,"Be a Hip Dad DJ!",i.a.createElement("button",{className:"formButton",onClick:this.startForm,hidden:this.state.started},"Tell us who you are")),i.a.createElement("form",{onSubmit:this.handleSubmit,hidden:!this.state.started},i.a.createElement("h4",null,"Want to be a Hip Dad Radio DJ? Tell us why!"),i.a.createElement("section",null,i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"applicationFirstName"},i.a.createElement("span",null,"First Name: ")),i.a.createElement("input",{id:"applicationFirstName",name:"firstName",value:this.state.firstName,onChange:this.handleFirstNameChange})),i.a.createElement("p",{hidden:!this.state.firstName},i.a.createElement("label",{htmlFor:"applicationLastName"},i.a.createElement("span",null,"Last Name: ")),i.a.createElement("input",{id:"applicationLastName",name:"lastName",value:this.state.lastName,onChange:this.handleLastNameChange})),i.a.createElement("p",{hidden:!(this.state.lastName&&this.state.firstName)},i.a.createElement("label",{htmlFor:"applicationEmail"},i.a.createElement("span",null,"Email: ")),i.a.createElement("input",{id:"applicationEmail",type:"email",name:"email",value:this.state.email,onChange:this.handleEmailChange})),i.a.createElement("p",{hidden:!(this.state.email&&this.state.lastName&&this.state.firstName)},i.a.createElement("label",{htmlFor:"applicationWhy"},i.a.createElement("span",null,"Why HDR: ")),i.a.createElement("textarea",{id:"applicationWhy",name:"why",value:this.state.why,onChange:this.handleWhyChange,rows:"3",cols:"60"}))),i.a.createElement("button",{id:"SubmitButton",type:"submit",hidden:!(this.state.why&&this.state.email&&this.state.lastName&&this.state.firstName)},"Welcome, DJ ",this.state.firstName)))}}]),t}(i.a.Component),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={started:!1,bandName:"",name:"",email:"",website:""},a.startForm=a.startForm.bind(Object(m.a)(a)),a.handleBandNameChange=a.handleBandNameChange.bind(Object(m.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(m.a)(a)),a.handleEmailChange=a.handleEmailChange.bind(Object(m.a)(a)),a.handleWebsiteChange=a.handleWebsiteChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"startForm",value:function(){this.setState({started:!0})}},{key:"handleBandNameChange",value:function(e){this.setState({bandName:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleWebsiteChange",value:function(e){this.setState({website:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("entry.267308415",this.state.bandName),t.append("entry.1428062257",this.state.name),t.append("entry.2009621913",this.state.email),t.append("entry.1224946671",this.state.website);var a=new XMLHttpRequest;a.onload=function(e){4===a.readyState&&(200===a.status?alert("Success! We will reach out to you to see what we can make happen!"):alert("Sorry! Something went wrong... Please try to submit the form again."))},a.open("POST","https://cors-hipdadradio.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSfkAY3wK8ORxS4DS2XUu5ch5Xpu6UljrBcuzWVkOW76OWXvyg/formResponse",!0),a.send(t),this.setState({started:!1,bandName:"",name:"",email:"",website:""}),document.getElementById("artistBandName").value="",document.getElementById("artistName").value="",document.getElementById("artistEmail").value="",document.getElementById("artistWebsite").value=""}},{key:"render",value:function(){return i.a.createElement("div",{className:"textContainer"},i.a.createElement("h2",null,"Do a Live Session on Hip Dad Radio! ",i.a.createElement("button",{className:"formButton",onClick:this.startForm,hidden:this.state.started},"Tell us about your Band")),i.a.createElement("form",{onSubmit:this.handleSubmit,hidden:!this.state.started},i.a.createElement("h4",null,"Are you a muscian and want to perform LIVE on Hip Dad Radio? We'd love to have you on!"),i.a.createElement("section",null,i.a.createElement("p",null,i.a.createElement("label",{htmlFor:"artistBandName"},i.a.createElement("span",null,"Band Name: ")),i.a.createElement("input",{id:"artistBandName",name:"bandName",value:this.state.bandName,onChange:this.handleBandNameChange})),i.a.createElement("p",{hidden:!this.state.bandName},i.a.createElement("label",{htmlFor:"artistName"},i.a.createElement("span",null,"Your Name: ")),i.a.createElement("input",{id:"artistName",name:"name",value:this.state.name,onChange:this.handleNameChange})),i.a.createElement("p",{hidden:!(this.state.name&&this.state.bandName)},i.a.createElement("label",{htmlFor:"artistEmail"},i.a.createElement("span",null,"Email: ")),i.a.createElement("input",{id:"artistEmail",name:"email",type:"email",value:this.state.email,onChange:this.handleEmailChange})),i.a.createElement("p",{hidden:!(this.state.email&&this.state.name&&this.state.bandName)},i.a.createElement("label",{htmlFor:"artistWebsite"},i.a.createElement("span",null,"Bandcamp: ")),i.a.createElement("input",{id:"artistWebsite",name:"website",value:this.state.website,onChange:this.handleWebsiteChange}))),i.a.createElement("button",{id:"SubmitButton",type:"submit",hidden:!(this.state.website&&this.state.email&&this.state.name&&this.state.bandName)},"Get ",this.state.bandName," on HDR!")))}}]),t}(i.a.Component),Z=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(z,null),i.a.createElement(K,null),i.a.createElement(Q,null))}}]),t}(i.a.Component),$=function(){return i.a.createElement(T,null)},ee=function(){return i.a.createElement(H,null)},te=function(){return i.a.createElement(q,null)},ae=function(){return i.a.createElement(L,{playlistId:V.HDR_ID,title:"HDR Newshour"})},ne=function(){return i.a.createElement(L,{playlistId:V.HOT_SANDWICH_ID,title:"Hot Sandwich"})},ie=function(){return i.a.createElement(L,{playlistId:V.HIP_DAD_ADS_ID,title:"Hip Dad Ads"})},se=function(){return i.a.createElement(Z,{title:"Contact Us"})},le=a(29),re=a.n(le),oe=function(){return i.a.createElement("img",{src:re.a,alt:"Logo",className:"Logo"})},ce=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Check us out on our platforms."),i.a.createElement("p",null,i.a.createElement("a",{className:"ImageLinks",href:"https://www.instagram.com/hipdadradio/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"LogoImageContainer",src:"http://www.transparentpng.com/thumb/logo-instagram/eerDTf-logo-instagram-clipart-transparent.png",alt:"instagramLogo"})),i.a.createElement("a",{className:"ImageLinks",href:"https://www.youtube.com/channel/UCfdin8x2dLREvJ5M-qAYU3A",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"LogoImageContainer",src:"http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png",alt:"youtubeLogo"}))))}}]),t}(i.a.Component),ue=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={listOpen:!1,headerTitle:a.props.title},a.close=a.close.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.state.listOpen;setTimeout(function(){t?window.addEventListener("click",e.close):window.removeEventListener("click",e.close)},0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.close)}},{key:"close",value:function(e){this.setState({listOpen:!1})}},{key:"toggleList",value:function(){this.setState(function(e){return{listOpen:!e.listOpen}})}},{key:"render",value:function(){var e=this,t=this.props.list,a=this.state,n=a.listOpen,s=a.headerTitle;return i.a.createElement("div",{className:"dd-wrapper"},i.a.createElement("div",{className:"dd-header",onClick:function(){return e.toggleList()}},i.a.createElement("div",{className:"dd-header-title"},s)),n&&i.a.createElement("ul",{className:"dd-list",onClick:function(e){return e.stopPropagation()}},t.map(function(e){return i.a.createElement(i.a.Fragment,null,e.jsx)})))}}]),t}(i.a.Component),he=[{id:0,title:"HDR Newshour",selected:!1,jsx:i.a.createElement(r.b,{to:"/hdrnewshour/",exact:!0,activeClassName:"active"},"HDR Newshour")},{id:1,title:"Hot Sandwich",selected:!1,jsx:i.a.createElement(r.b,{to:"/hotsandwich/",exact:!0,activeClassName:"active"},"Hot Sandwich")},{id:2,title:"Hip Dad Ads",selected:!1,jsx:i.a.createElement(r.b,{to:"/hipdadads/",exact:!0,activeClassName:"active"},"Hip Dad Ads")}];var de=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"Header"},i.a.createElement(oe,null),i.a.createElement("h1",null,"Welcome to Hip Dad Radio!!"),i.a.createElement(oe,null)),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.b,{to:"/",exact:!0,activeClassName:"active"},"Home"),i.a.createElement(r.b,{to:"/about/",exact:!0,activeClassName:"active"},"About"),i.a.createElement(r.b,{to:"/listen/",exact:!0,activeClassName:"active"},"Listen"),i.a.createElement(r.b,{to:"/contact/",exact:!0,activeClassName:"active"},"Contact Us"),i.a.createElement(ue,{title:"Shows",list:he}))),i.a.createElement(o.c,{className:"primary-content"},i.a.createElement(o.a,{path:"/",exact:!0,component:$}),i.a.createElement(o.a,{path:"/about/",component:ee}),i.a.createElement(o.a,{path:"/listen/",component:te}),i.a.createElement(o.a,{path:"/hdrnewshour/",component:ae}),i.a.createElement(o.a,{path:"/hotsandwich/",component:ne}),i.a.createElement(o.a,{path:"/hipdadads/",component:ie}),i.a.createElement(o.a,{path:"/contact/",component:se})),i.a.createElement("footer",null,i.a.createElement(ce,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={URL_ROOT:"https://cors-hipdadradio.herokuapp.com/https://sheets.googleapis.com/v4/spreadsheets/",values:{schedule:{DB_VALUES:"A%3AD",DB_ID:"1Wz2WIicOAUqn6TjCdYQR0i8j1udVw51AeHFUSN7EWSw",COLUMN_HEADERS:{SHOW_TITLE:0,VIDEO_ID:1,START_DATE:2,END_DATE:3}},news:{DB_VALUES:"A%3AD",DB_ID:"1fnv5qI5rNGExodkl_3vnNfwZyRX9k_QlH3KVlUR1xwU",COLUMN_HEADERS:{DATE:0,TITLE:1,TEXT:2,IMAGE:3}},djs:{DB_VALUES:"A%3AC",DB_ID:"16rKdGU-8yrbte-yH7uP0hmPePO33qQLOUQwIia-3hSs",COLUMN_HEADERS:{NAME:0,BIO:1,IMAGE:2}}},SCHEDULE:"SCHEDULE",NEWS:"NEWS",DJS:"DJS"}}},[[32,1,2]]]);
//# sourceMappingURL=main.e5fdd808.chunk.js.map