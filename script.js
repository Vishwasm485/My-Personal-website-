
const roles=[
"MCA Student",
"Software Developer",
"AI Enthusiast",
"Full Stack Learner"
];

let i=0,j=0,current="",deleting=false;

function type(){
current=roles[i];

document.getElementById("typing").textContent=
deleting?current.substring(0,j--):current.substring(0,j++);

if(!deleting && j===current.length+1){
deleting=true;
setTimeout(type,1200);
return;
}

if(deleting && j===0){
deleting=false;
i=(i+1)%roles.length;
}

setTimeout(type,deleting?50:100);
}

type();

function updateTime(){
const now=new Date();
const time=now.toLocaleTimeString();
document.getElementById("time").textContent="Current Time: "+time;
}

setInterval(updateTime,1000);
updateTime();
