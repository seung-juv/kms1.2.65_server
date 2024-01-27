var status = 0;

var min = 83;
var max = 110;

function action(mode, type, selection){
var canstage = cm.getQuestRecord(51421);
if(canstage.getCustomData() == null){
canstage.setCustomData("1");
cm.dispose();
}
if(status == 0){
cm.sendSimple("#e#r<프리미엄 던전 : 이피아의 장미정원>#k#n\r\n이곳은 이 성의 주인이자 우리의 왕 반 레온님이 타락하기전 이피아님에게 선물한 장미정원 이 사랑이 가득했던 정원에까지 이런 비극이 일어나다니 정말 눈물이 앞을 가립니다 부디 이정원을 정화해주실 용사가 나타나주기를...\r\n#b#L0#스테이지 1 : 버려진 정원\r\n#L1#스테이지 2 : 영혼이 묶인 정원#l\r\n#L2#스테이지 3 : 장미정원의 끝자락#l");
status++;
} else if (status == 1) {
if (selection == 0) {
cm.warp(211080100);
cm.showEffect(true, "monsterPark/stageEff/stage");
cm.showEffect(true, "monsterPark/stageEff/number/1");
cm.dispose();
} else if (selection == 1) {
if (canstage.getCustomData() == "2") {
cm.warp(211080200);
cm.showEffect(true, "monsterPark/stageEff/stage");
cm.showEffect(true, "monsterPark/stageEff/number/2");
cm.dispose();
} else {
if (cm.haveItem(4009169,300)) {
cm.gainItem(4009169,-300);
canstage.setCustomData("2");
cm.sendOk("이제부터 #r스테이지 2 : 영혼이 묶인 정원#k을 이용하실수 있습니다.");
cm.dispose();
} else {
cm.sendOk("두번째 스테이지에 입장 권한을 얻으시기 위해서는 #i4009169# #b#t4009169# 300개#k가 필요합니다. #t4009169#는 스테이지 1 : 버려진 정원에서 획득하실수 있습니다.");
cm.dispose();
}
}
} else if (selection == 2) {
if (canstage.getCustomData() == "3") {
cm.warp(211080300);
cm.showEffect(true, "monsterPark/stageEff/stage");
cm.showEffect(true, "monsterPark/stageEff/number/2");
cm.dispose();
} else {
if (cm.haveItem(4000829,300) && canstage.getCustomData() == "2") {
cm.gainItem(4000829,-300);
canstage.setCustomData("3");
cm.sendOk("이제부터 #r스테이지 3 : 장미정원의 끝자락#k을 이용하실수 있습니다.");
cm.dispose();
} else {
cm.sendOk("세번째 스테이지에 입장 권한을 얻으시기 위해서는 #i4000829# #b#t4000829# 300개#k가 필요합니다. #t4000829#는 스테이지 2 : 영혼이 묶인 정원에서 획득하실수 있습니다.");
cm.dispose();
}
}
}
}
}