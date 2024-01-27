var status = 0;

function action(mode, type, selection){
if(status == 0){
if (cm.getParty() != null) {
cm.sendSimple("#e<파티플레이존 : 엘나스 성벽>#n\r\n비참한 이 곳 사자왕의 성까지 어쩐일로 찾아오셨는지 모르겠군요 혹 저희의 원한을 풀어주시기위해 힘써주신다 한들 아주 힘겨운 일이 될것입니다.\r\n#r#e(!)#n 여기서는 인원당 80%의 추가경험치가 적용됩니다.#k#b\r\n#L0#(Lv.100) 성벽아래에 입장하고 싶습니다.\r\n#L1#(Lv.120) 성벽중심부에 입장하고 싶습니다.\r\n#L2#(Lv.140) 성벽상층에 입장하고 싶습니다.\r\n#L3#(Lv.155) 성벽최상층에 입장하고 싶습니다.");
status++;
} else {
cm.sendOk("기본적으로 파티를 만드시거나 가입되있으셔야합니다.");
cm.dispose();
}
} else if (status == 1) {
if (selection == 0) {
if (cm.getPlayer().getLevel() >= 100) {
cm.TimeMoveMap(211060100,211061001,3600);
cm.showEffect(false, "nightmare/wakeup");
cm.showEffect(false, "monsterPark/stageEff/stage");
cm.showEffect(false, "monsterPark/stageEff/number/1");
cm.dispose();
} else {
cm.sendOk("당신은 아직 이곳에 입장하기에 너무나도 위험합니다.");
cm.dispose();
}
} else if (selection == 1) {
if (cm.getPlayer().getLevel() >= 120) {
cm.TimeMoveMap(211060700,211061001,3600);
cm.showEffect(false, "nightmare/wakeup");
cm.showEffect(false, "monsterPark/stageEff/stage");
cm.showEffect(false, "monsterPark/stageEff/number/2");
cm.dispose();
} else {
cm.sendOk("당신은 아직 이곳에 입장하기에 너무나도 위험합니다.");
cm.dispose();
}
} else if (selection == 2) {
if (cm.getPlayer().getLevel() >= 140) {
cm.TimeMoveMap(211060810,211061001,3600);
cm.showEffect(false, "nightmare/wakeup");
cm.showEffect(false, "monsterPark/stageEff/stage");
cm.showEffect(false, "monsterPark/stageEff/number/3");
cm.dispose();
} else {
cm.sendOk("당신은 아직 이곳에 입장하기에 너무나도 위험합니다.");
cm.dispose();
}
} else if (selection == 3) {
if (cm.getPlayer().getLevel() >= 155) {
cm.TimeMoveMap(211060820,211061001,3600);
cm.showEffect(false, "nightmare/wakeup");
cm.showEffect(false, "monsterPark/stageEff/stage");
cm.showEffect(false, "monsterPark/stageEff/number/4");
cm.dispose();
} else {
cm.sendOk("당신은 아직 이곳에 입장하기에 너무나도 위험합니다.");
cm.dispose();
}
}
}
}