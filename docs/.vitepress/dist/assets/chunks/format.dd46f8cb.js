const a=e=>{let t=e.time.split("-")[0],i=e.time.split("-")[1],l=e.time.split("-")[2],s=e.time.split("-")[3],g=e.time.split("-")[4],n=e.time.split("-")[5];return`${t}-${i}-${l} ${s}:${g}:${n}`},c=(e,t)=>{var i={yyyy:e.getFullYear(),yy:(""+e.getFullYear()).slice(-2),M:e.getMonth()+1,MM:("0"+(e.getMonth()+1)).slice(-2),d:e.getDate(),dd:("0"+e.getDate()).slice(-2),H:e.getHours(),HH:("0"+e.getHours()).slice(-2),h:e.getHours()%12,hh:("0"+e.getHours()%12).slice(-2),m:e.getMinutes(),mm:("0"+e.getMinutes()).slice(-2),s:e.getSeconds(),ss:("0"+e.getSeconds()).slice(-2),w:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"][e.getDay()]};return t.replace(/([a-z]+)/ig,function(l){return i[l]})};export{c as f,a as t};
