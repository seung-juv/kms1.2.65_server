var status = 0;

var min = 60;
var max = 80;

function action(mode, type, selection){
if(status == 0){
if (cm.getPlayer().getMapId() == 240091500) {
cm.sendYesNo("#e#r<파티 퀘스트 : 숲의 위협>#k#n\r\n\r\n#b권장레벨 : Lv.83~100\r\n파티인원수 : 3~6명#k\r\n수호신은 정화되었지만 아직 그 사건의 잔해와 원인들이 암벽상층에 남아있다고해요 당신이 조사해주시겠어요?\r\n");
status++;
} else {
cm.sendOk("이 숲은 도대체 어떻게 되는걸까요...?");
cm.dispose();
}
} else if (status == 1) {
if (mode != 1) {
cm.sendOk("그렇군요 부디 이 지대가 무사하길 바랄뿐입니다.");
cm.dispose();
} else {
cm.warp(240091600);
cm.dispose();
}
}
}
