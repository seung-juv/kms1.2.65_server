var status = 0;

function action(mode, type, selection){
if(status == 0){
if (cm.isLeader()) {
if(cm.haveItem(4001008,5) && cm.getPlayer().getMobQuantity() == 0) {
cm.warpParty(240092000);
cm.removeAll(4001007);
cm.removeAll(4001008);
cm.givePartyItems(4032911,1);
cm.givePartyExp(88252);
cm.sendOk("#e#r<숲의 위협 : 승리의 외침>#k#n\r\n\r\n저희의 수호신을 정화해주셔서 진심으로 감사드립니다. 초라하지만 자그마한 보상과 경험치를 선물해드리겠습니다.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i4032911##b 크세르크세스의 목걸이\r\n#i2022452# +882,520 경험치");
cm.dispose();
} else if(cm.haveItem(4001008,3) && cm.getPlayer().getMobQuantity() == 0) {
cm.sendSimple("#e#r<숲의 위협 : 파이널 스테이지>#n#k\r\n\r\n몬스터들이 흉폭해지고 있습니다. 강력한 군주 몬스터가 침공하고 있습니다 마음에 각오를 단단히 해야할것 같군요.\r\n#b#L400#군주 몬스터를 처리하겠습니다..#l\r\n#L0#파티퀘스트를 포기하겠습니다.#l");
status++;
} else if(cm.haveItem(4001008,2) && cm.getPlayer().getMobQuantity() == 0) {
cm.sendSimple("#e#r<숲의 위협 : 스테이지 3>#n#k\r\n\r\n곧 세번째 몬스터들이 침공할거에요 두번째보다는 조금더 강력한 상대이니 주의하시길 바래요.\r\n#b#L300#세번째 몬스터들을 정리하겠습니다.#l\r\n#b#L10#쿠폰을 모두 모아왔습니다.#l\r\n#L0#파티퀘스트를 포기하겠습니다.#l");
status++;
} else if(cm.haveItem(4001008,1) && cm.getPlayer().getMobQuantity() == 0) {
cm.sendSimple("#e#r<숲의 위협 : 스테이지 2>#n#k\r\n\r\n곧 두번째 몬스터들이 침공할거에요 첫번째보다는 조금더 강력한 상대이니 주의하시길 바래요.\r\n#b#L200#두번째 몬스터들을 정리하겠습니다.#l\r\n#b#L10#쿠폰을 모두 모아왔습니다.#l\r\n#L0#파티퀘스트를 포기하겠습니다.#l");
status++;
} else if(cm.getPlayer().getMobQuantity() == 0) {
cm.sendSimple("#e#r<숲의 위협 : 스테이지 1>#n#k\r\n\r\n으아아 치노양을 믿고있길 잘했어요 정말 모험가들을 선발해서 보내주시다니 곧 첫번째 몬스터들이 침공할거에요 스테이지별로 몬스터들을 쓰러뜨리고 #b쿠폰 77장#k을 모아와주세요.\r\n#b#L100#첫번째 몬스터들을 정리하겠습니다.#l\r\n#b#L10#쿠폰을 모두 모아왔습니다.#l\r\n#L0#파티퀘스트를 포기하겠습니다.#l");
status++;
} else {
cm.sendOk("아직 필드에 몬스터가 남아있네요 모두 처리해주세요.");
cm.showEffect(true, "event/X");
cm.dispose();
}
} else {
cm.sendOk("파티장을 통해 진행해주시기 바랍니다.");
cm.dispose();
}
} else if (status == 1) {
if (selection == 0) {
cm.warpParty(240092000);
cm.warp(240092000);
cm.dispose();
} else if (selection == 10) {
if (cm.haveItem(4001007,70)) {
cm.removeAll(4001007);
cm.gainItem(4001008,1);
cm.playSound(true, "Party1/Clear");
cm.showEffect(true, "event/O");
cm.partyMessage("스테이지를 클리어하셨습니다.");
cm.partyMessage("파티장은 다음스테이지를 진행하시려면 지미를 클릭해주세요.");
cm.dispose();
} else {
cm.sendOk("쿠폰 80개를 확실하게 모아오셧나요?");
cm.showEffect(true, "event/X");
cm.dispose();
}
} else if (selection == 100) {
if (!cm.haveItem(4001007,1)) {
cm.showEffect(true, "defense/wave/1");
cm.playMusic(true, "Bgm14/DragonNest");
cm.playSound(true, "Party1/Clear");
cm.spawnMob(5160001, 533, -418);
cm.spawnMob(5160001, 675, -418);
cm.spawnMob(5160001, 804, -418);
cm.spawnMob(5160001, 925, -418);
cm.spawnMob(5160001, 1604, -418);
cm.spawnMob(5160001, 1700, -418);
cm.spawnMob(5160001, 1864, -418);
cm.spawnMob(5160001, 1979, -418);
cm.spawnMob(5160001, 2010, -838);
cm.spawnMob(5160001, 1856, -838);
cm.spawnMob(5160001, 1686, -838);
cm.spawnMob(5160001, 585, -118);
cm.spawnMob(5160001, 755, -118);
cm.spawnMob(5160001, 955, -118);
cm.spawnMob(5160001, 1155, -118);
cm.spawnMob(5160001, 1255, -118);
cm.spawnMob(5160001, 1355, -118);
cm.spawnMob(5160001, 1455, -118);
cm.spawnMob(5160001, 1600, -118);
cm.spawnMob(5160001, 1855, -118);
cm.dispose();
} else {
cm.sendOk("첫번째 몬스터는 이미 침공중입니다 서둘러 처리해주세요.");
cm.dispose();
}
} else if (selection == 200) {
if (!cm.haveItem(4001007,1)) {
cm.showEffect(true, "defense/wave/2");
cm.playMusic(true, "Bgm14/DragonNest");
cm.playSound(true, "Party1/Clear");
cm.spawnMob(5160005, 533, -418);
cm.spawnMob(5160005, 675, -418);
cm.spawnMob(5160005, 804, -418);
cm.spawnMob(5160005, 925, -418);
cm.spawnMob(5160005, 1604, -418);
cm.spawnMob(5160005, 1700, -418);
cm.spawnMob(5160005, 1864, -418);
cm.spawnMob(5160005, 1979, -418);
cm.spawnMob(5160005, 2010, -838);
cm.spawnMob(5160005, 1856, -838);
cm.spawnMob(5160005, 1686, -838);
cm.spawnMob(5160005, 585, -118);
cm.spawnMob(5160005, 755, -118);
cm.spawnMob(5160005, 955, -118);
cm.spawnMob(5160005, 1155, -118);
cm.spawnMob(5160005, 1255, -118);
cm.spawnMob(5160005, 1355, -118);
cm.spawnMob(5160005, 1455, -118);
cm.spawnMob(5160005, 1600, -118);
cm.spawnMob(5160005, 1855, -118);
cm.dispose();
} else {
cm.sendOk("두번째 몬스터는 이미 침공중입니다 서둘러 처리해주세요.");
cm.dispose();
}
} else if (selection == 300) {
if (!cm.haveItem(4001007,1)) {
cm.showEffect(true, "defense/wave/3");
cm.playMusic(true, "Bgm14/DragonNest");
cm.playSound(true, "Party1/Clear");
cm.spawnMob(6160001, 533, -418);
cm.spawnMob(6160001, 675, -418);
cm.spawnMob(6160001, 804, -418);
cm.spawnMob(6160001, 925, -418);
cm.spawnMob(6160001, 1604, -418);
cm.spawnMob(6160001, 1700, -418);
cm.spawnMob(6160001, 1864, -418);
cm.spawnMob(6160001, 1979, -418);
cm.spawnMob(6160001, 2010, -838);
cm.spawnMob(6160001, 1856, -838);
cm.spawnMob(6160001, 1686, -838);
cm.spawnMob(6160001, 585, -118);
cm.spawnMob(6160001, 755, -118);
cm.spawnMob(6160001, 955, -118);
cm.spawnMob(6160001, 1155, -118);
cm.spawnMob(6160001, 1255, -118);
cm.spawnMob(6160001, 1355, -118);
cm.spawnMob(6160001, 1455, -118);
cm.spawnMob(6160001, 1600, -118);
cm.spawnMob(6160001, 1855, -118);
cm.dispose();
} else {
cm.sendOk("세번째 몬스터는 이미 침공중입니다 서둘러 처리해주세요.");
cm.dispose();
}
} else if (selection == 400) {
if (cm.getPlayer().getMobQuantity() == 0) {
cm.showEffect(true, "monsterPark/stageEff/final");
cm.playMusic(true, "Bgm14/DragonNest");
cm.playSound(true, "Party1/Clear");
cm.spawnMob(6160003, 1277, -118);
cm.dispose();
} else {
cm.sendOk("군주 몬스터는 이미 침공중입니다 서둘러 처리해주세요.");
cm.dispose();
}
}
}
}