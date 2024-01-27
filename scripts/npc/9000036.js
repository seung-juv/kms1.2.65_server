var status = 0;

function action(mode, type, selection){
if(status == 0){
if (cm.getPlayer().getLevel() >= 90 && cm.haveItem(4000056,50) && cm.haveItem(4000049,50) && cm.haveItem(4000057,50) && cm.haveItem(4000050,50) && cm.haveItem(4000054,10) && cm.haveItem(4000053,1)) {
cm.sendSimple("오오 정말 모두 모아왔군 너의 실력을 인정하도록 하지 자 위험한 모험이 될거야 마음의 준비는 확실하게 되었겠지?\r\n#b#L50#물론입니다, 지금 당장 이동하겠습니다.");
status = 10;
} else if (cm.getPlayer().getLevel() >= 90) { 
cm.sendSimple("요즘 심상치 않은 무언가가 이 아름다운 눈의 도시 엘나스를 위협하고있다는 느낌이 계속 오는 이유는 무엇일까? 역시 원천은 그 곳 이겠지...#b\r\n#L0#그 곳?... 어디를 말씀하시는 거죠?#l");
status++;
} else {
cm.sendOk("이 눈의 도시는 어쩜 새하얀 눈이 아닌 새빨간 피로 물들어버릴지도 모른다는 불안감이 멈추질 않는군... 하루 빨리 강력한 모험가들이 탐사해 주었으면 하는곳이 있는데 말이야.");
cm.dispose();
}
} else if(status == 1){
cm.sendSimple("몇 달 전부터 원인을 모르는 엄청난 동물의 괴음이 엘나스 곳곳에 들려오고있어 대충은 그 곳이 어딘지 알거같긴 한데 말이야 지금은 폐허가된 약 60년전의 존재하던 거대한 성...#b\r\n#L0#그 곳이 어딘지 가르쳐 주실수 있나요?#l");
status++;
} else if(status == 2){
cm.sendSimple("으흠... 만약 이 일을 외부인에게 맡겼다가 네가 다치는 경우에는 나는 이 일에서 손을 때야하는 궁지에 몰리지. 만약 내가 요구하는 것을 가져다 준다면 너의 실력을 인정하고 그곳으로 이동시켜주지.\r\n#L0##b좋습니다, 어떤 것 을 모아오면 되죠?#l")
status++;
} else if(status == 3){
cm.sendYesNo("좋아 한번만 말해줄테니 잘 새겨 들어주길 바래, 우선 예티와 다크예티의 뿔 , 페페와 다크페페의 부리 를 각각 50개씩 그다음 웨어울프의 발톱 10개와 라이칸스로프의 발톱 1개 이정도 각오는 되야 이동시켜줄수있다고.");
cm.dispose();
} else if(status == 10){
cm.gainItem(4000056,-50);
cm.gainItem(4000049,-50);
cm.gainItem(4000057,-50);
cm.gainItem(4000050,-50);
cm.gainItem(4000054,-10);
cm.gainItem(4000053,-1);
cm.warp(211060010);
cm.showEffect(false, "temaD/enter/lionCastle");
cm.dispose();
}
}
