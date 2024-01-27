var status = 0;

var one = new Array(1,1,1,1,2,2); 
var ones = Math.floor(Math.random()*one.length);

var two = new Array(1,1,1,2,2,3); 
var twos = Math.floor(Math.random()*two.length);

var three = new Array(4440001,4441001,4442001,4443001); 
var threes = Math.floor(Math.random()*three.length);

var f = new Array(4250800,4250900,4251000,4251100); 
var fs = Math.floor(Math.random()*f.length);

var s = new Array(2043001,2044001,2044301,2044401,2044801,2044701,2043201,2049100,2044201,2043701,2044901,2043801,2044501,2044601,2043301,2044303,2040807,2043003,2044003,2043703,2043803,2044503,2044603,2044703,2043303); 
var ss = Math.floor(Math.random()*s.length);

var r = new Array(1000,1300,1600,1800,2000,2200,2500); 
var rs = Math.floor(Math.random()*r.length);

var rr = new Array(1500,1800,2000,2300,2600,2800,3000,3300,3500); 
var rrs = Math.floor(Math.random()*rr.length);

var g = new Array(1,2,3,4,5); 
var gs = Math.floor(Math.random()*g.length);

var c = new Array(3,4,5,6,7,8,9,10); 
var cs = Math.floor(Math.random()*c.length);

var l = new Array(1902120,1902151,1902168); 
var ls = Math.floor(Math.random()*l.length);


function action(mode, type, selection){
if(status == 0){
if (cm.getPlayer().getLevel() == 120) {
cm.sendOk("#e#r120번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 120번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4000995##b #t4000995# "+one[ones]+"개");
cm.gainItem(4000995,one[ones]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 125) {
cm.sendOk("#e#r125번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 125번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i2049100##b #t2049100# "+two[twos]+"개");
cm.gainItem(2049100,two[twos]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 130) {
cm.sendOk("#e#r130번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 130번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4001783##b #t4001783# "+one[ones]+"개");
cm.gainItem(4001783,one[ones]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 135) {
cm.sendOk("#e#r135번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 135번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i"+three[threes]+"##b #t"+three[threes]+"#");
cm.gainItem(three[threes],1);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 140) {
cm.sendOk("#e#r140번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 140번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i"+f[fs]+"##b #t"+f[fs]+"#");
cm.gainItem(f[fs],1);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 145) {
cm.sendOk("#e#r145번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 145번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i"+s[ss]+"##b #t"+s[ss]+"#");
cm.gainItem(s[ss],1);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 150) {
cm.sendOk("#e#r150번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 150번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4310092##b #t4310092# "+r[rs]+"개");
cm.gainItem(4310092,r[rs]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 155) {
cm.sendOk("#e#r155번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 155번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4001783##b #t4001783# "+one[ones]+"개");
cm.gainItem(4001783,one[ones]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 160) {
cm.sendOk("#e#r160번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 160번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4001782##b #t4001782# "+c[cs]+"개");
cm.gainItem(4001782,c[cs]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 165) {
cm.sendOk("#e#r165번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 165번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4310092##b #t4310092# "+rr[rrs]+"개");
cm.gainItem(4310092,r[rs]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 170) {
cm.sendOk("#e#r170번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 170번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4001783##b #t4001783# "+g[gs]+"개");
cm.gainItem(4001783,g[gs]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 175) {
cm.sendOk("#e#r175번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 175번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4001783##b #t4001783# "+g[gs]+"개");
cm.gainItem(4001783,g[gs]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 180) {
cm.sendOk("#e#r180번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 180번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i"+three[threes]+"##b #t"+three[threes]+"#");
cm.gainItem(three[threes],1);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 185) {
cm.sendOk("#e#r185번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 185번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4310092##b #t4310092# "+r[rs]+"개");
cm.gainItem(4310092,r[rs]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 190) {
cm.sendOk("#e#r190번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 190번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i4310092##b #t4310092# "+r[rs]+"개");
cm.gainItem(4310092,r[rs]);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 195) {
cm.sendOk("#e#r195번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 195번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i"+l[ls]+"##b #t"+l[ls]+"#");
cm.gainItem(l[ls],1);
cm.dispose();
} else if (cm.getPlayer().getLevel() == 200) {
cm.sendOk("#e#r200번째 레벨업을 축하드립니다.#k#n\r\n"+cm.getPlayer().getName()+"님의 200번째 레벨업을 진심으로 축하드립니다. 저희 이피온에서 작지만 레벨업 보상을 준비해보았습니다 아래를 확인해주세요.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#i"+s[ss]+"##b #t"+s[ss]+"# 3개");
cm.gainItem(s[ss],3);
cm.dispose();
} else {
cm.dispose();
}
}
}
