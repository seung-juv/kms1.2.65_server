
var status = 0;

function action(mode, type, selection){

var myguild = cm.getPlayer().getGuildId();
var isleader = Packages.handling.world.World.Guild.getGuildLeader(myguild);

if (status == 0) {
if (cm.getPlayer().getMapId() == 272020200) {
cm.warp(272020110);
cm.dispose();
} else {
cm.sendSimple("낄낄낄... 여기까지 온 용기가 정말 가상하구나. 그 애송이를 완전히 타락시킨줄만 알고있었는데 뒤에서 이런 요망한 계략을 꾸리고있었다니. 그치만 죽음이란 운명 앞에서 너희들은 반드시 무릎을 꿇게 될것이야.\r\n#r현재 길드 포인트 : "+cm.getGP()+"GP#k\r\n#b#L0#사제장의 이계공상으로 이동한다. (#k#r5000GP#k#b)#l\r\n#L1#아카이럼의 제단으로 이동한다.#l");
status++;
}
} else if (status == 1) {
if (selection == 0) {
if (isleader == cm.getPlayer().getId()) {
if (cm.getGP() >= 5000) {
if (cm.getPlayerCount(272020400) == 0) {
if (cm.getPlayer().getParty().getMembers().size() >= 3) {
cm.warpParty(272020400);
cm.gainGP(-5000);
cm.killAllMob();
cm.spawnMob(9300853, -175, -181);
cm.playMusic(true,"Bgm16/Forgetfulness");
cm.dispose();
} else {
cm.sendOk("최소 입장 조건은 길드파티원 3명 입니다.");
cm.dispose();
}
} else {
cm.sendOk("이미 다른길드가 도전중입니다.");
cm.dispose();
}
} else {
cm.sendOk("아카이럼에 제단에 입장하기위해서는 #r5000GP#k가 필요합니다.");
cm.dispose();
}
} else {
cm.sendOk("길드장을 통해 입장할수 있습니다.");
cm.dispose();
}
} else if (selection == 1) {
if (cm.haveItem(4033959,1)) {
if (cm.getPlayerCount(272020200) == 0) {
cm.warpParty(272020200);
cm.gainItem(4033959,-1);
cm.killAllMob();
cm.spawnMob(8860000, -175, -181);
cm.getPlayer().ServerNotice("보스알림 : "+cm.getPlayer().getName()+"님과 그의 일행들이 아카이럼원정에 도전합니다.");
cm.playMusic(true,"Bgm16/Bgm16/FightingPinkBeen");
cm.dispose();
} else {
cm.sendOk("이미 다른길드가 도전중입니다.");
cm.dispose();
}
} else {
cm.sendOk("아카이럼에 제단에 입장하기위해서는 #i4033959# #r#t4033959##k가 필요합니다.");
cm.dispose();
}
}
}
}