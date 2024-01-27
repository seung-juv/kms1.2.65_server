var status = 0;

function action(mode, type, selection){
if(status == 0){
if (cm.getPlayer().getMapId() == 240093310) {
if (cm.getPlayer().getMobQuantity() == 0) {
cm.sendOk("#e#r<암벽너머의 괴음 : 파이널 스테이지>#k#n\r\n\r\n저희의 수호신을 정화해주셔서 진심으로 감사드립니다. 초라하지만 자그마한 보상과 경험치를 선물해드리겠습니다.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i4000990##b 반짝이는 더듬이\r\n#i2022452# +20,000 경험치");
status = 10;
} else {
cm.sendOk("으아아악 거대한 거미다!!!!!!");
cm.dispose();
}
} else {
if (!cm.isLeader()) {
cm.sendSimple("#e#r<암벽너머의 괴음 : 스테이지 2>#k#n\r\n\r\n으으 무서워요...어서 타락한 수호신의 일부체들을 쓰러트리고 통행쿠폰 20장을 모아와주세요 그럼 통행증으로 바꿔드릴게요 바꿔드린 통행증은 파티장에게 넘겨주시길 바래요.\r\n#L0##b통행쿠폰을 모두 모아왔어#l");
status = 11;
} else {
if (cm.haveItem(4001008,cm.getPlayer().getParty().getMembers().size() - 1)) {
cm.removeAll(4001008);
cm.removeAll(4001007);
cm.warpParty(240093310);
cm.showEffect(true, "monsterPark/stageEff/final");
cm.killAllMob();
cm.spawnMob(8800400,1,152,97);
cm.dispose();
} else {
cm.sendOk("#e#r<암벽너머의 괴음 : 스테이지 2>#k#n\r\n\r\n파티장을 제외한 갯수대로 통행증을 모아와주세요.");
cm.dispose();
}
}
}
} else if (status == 10) {
cm.gainItem(4000990,1);
cm.removeAll(4001008);
cm.removeAll(4001007);
cm.gainExp(10000);
cm.warp(240092101);
cm.dispose();
} else if (status == 11) {
if (cm.haveItem(4001007,20)) {
cm.removeAll(4001007);
cm.gainItem(4001008,1);
cm.gainExp(500);
cm.dispose();
} else {
cm.sendOk("정말로 쿠폰을 다 모아오셨나요?");
cm.dispose();
}
}
}