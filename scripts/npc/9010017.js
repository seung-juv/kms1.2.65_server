/* 
EpionWorld Season.2 : REVOLUTION
The client version is the release KMS 1.2.65
All of Server structure made by : 토리(epionms_)
Please do not sharing all of them
*/

var status = 0;

function action(mode, type, selection){
	if (status == 0){
	cm.sendYesNo("#e<Epion Introduce>#n\r\n저희 이피온월드 시즌 3는 #rKoreanMaple 1.2.65#k를 기반으로 하여 더욱더 새롭고 재밌는 요소들을 추가함으로써 옛 추억의 메이플의 향수와 새로움의 재미를 동시에 유저분들이 느끼실수있도록 노력중입니다. 앞으로도 저, #b토리(epionms_)#k의 새로운 업데이트 많이기대해주세요.");
	status++;
	} else if (status == 1){
		cm.sendSimple("안녕하세요 이피온월드에 오신것을 환영합니다!\r\n게임을 시작하기전에, 캐릭터의 성별을선택해주세요.\r\n#b#L0#남성 캐릭터#k#l\r\n#L1##r여성 캐릭터#l");
	status++;
	} else if (status == 2){
	var customData = cm.getQuestRecord(50011);
	var customNick = cm.getQuestRecord(59012);
	var customDatas = cm.getQuestRecord(123456);
	if(customData.getCustomData() == null){ 
		customData.setCustomData("0");
		customNick.setCustomData(cm.getPlayer().getName()+"");
	}
	if (selection == 0) {
	customData.setCustomData("남자");
	customDatas.setCustomData("0");
	cm.getPlayer().setGender(0);
	cm.getPlayer().reloadChar();
	cm.gainMeso(50000);
	cm.warp(104040000);
	cm.dispose();
	} else if (selection == 1) {
	customData.setCustomData("여자");
	customDatas.setCustomData("0");
	cm.getPlayer().setHair(31002);
	cm.getPlayer().setFace(21000);
	cm.getPlayer().setGender(1);
	cm.getPlayer().reloadChar();
	cm.gainMeso(50000);
	cm.warp(104040000);
	cm.dispose();
		}
	}
}
