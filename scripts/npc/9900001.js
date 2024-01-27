/* 
EpionWorld Season.2 : REVOLUTION
The client version is the release KMS 1.2.65
All of Server structure made by : 토리(epionms_)
Please do not sharing all of them
*/

var status = 0;
var random;
random = Math.floor(Math.random() * 9);	

function action(mode, type, selection){
	if (status == 0){
		cm.sendSimple("게임이용에 불편을 끼쳐드린점 죄송합니다.\r\n어떤 퀘스트의 보상을 못받으셨나요?\r\n#b#L0#이카루스의 망토#l");
	status++;
	} else if (status == 1){
	if (selection == 0) {
	if (cm.getQuestRecord(2083).getStatus() == 2) {
	if (random >= 0 && random <=3) {
	cm.sendOk("이카루스의 망토가 지급완료 되었습니다.");
	cm.gainItem(1102054,1);
	cm.getQuestRecord(2083).setStatus(3);
	} else if (random >= 4 && random <=7) {
	cm.gainItem(1102055,1);
	cm.sendOk("이카루스의 망토가 지급완료 되었습니다.");
	cm.getQuestRecord(2083).setStatus(3);
	cm.dispose();
	} else if (random >= 7 && random <=9) {
	cm.gainItem(1102056,1);
	cm.sendOk("이카루스의 망토가 지급완료 되었습니다.");
	cm.getQuestRecord(2083).setStatus(3);
	cm.dispose();
	}
	} else{
	cm.sendOk("이카루스의 망토 퀘스트를 완료하지 않으셨거나 이미 보상을 해드렸습니다.");
	cm.dispose();
			}
		}
	}
}
