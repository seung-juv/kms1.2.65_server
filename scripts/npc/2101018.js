var status = 0;

function action(mode, type, selection){
if(status == 0){
cm.sendYesNo("#e#r<파티 퀘스트 : 암벽너머의 괴음>#k#n\r\n\r\n#b권장레벨 : Lv.60~80#k\r\n어디선가 들려오는 거대한 괴음이 페리온 전체를 뒤흔드는것 같군 그 소리에대해서 조사해줄 모험가가 필요한데말이야 자네가 한번 조사해주지 않겠나?");
status++;
} else if (status == 1) {
cm.warp(240091000);
cm.showEffect(false, "colossus/rise");
cm.dispose();
}
}