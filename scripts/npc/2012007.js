
var status = -1;
var beauty = 0;
var newAvatar;
var needItemHair = 5150004;
var needItemColor = 5151004;

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
	cm.sendSimple("안녕하세요, 오르비스 헤어샵의 보조로 일하고 있는 린스 라고 해요. #b#i"+needItemHair+"# #t"+needItemHair+"##k 또는 #b#i"+needItemColor+"# #t"+needItemColor+"##k을 가져오시면 무작위로 머리 손질을 해 드린답니다. \r\n#b#L0#무작위로 머리 스타일 바꾸기#l\r\n#L1#무작위로 머리 색깔 염색하기#l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    newAvatar = [];
	    beauty = 1;

            var curColor = hair % 10;
	var customData = cm.getQuestRecord(50011);
            if (customData.getCustomData() == "남자") {
                newAvatar = [
				30030+curColor, 
				30020+curColor, 
				30000+curColor, 
                                
				30520+curColor, 
				30480+curColor, 
				30490+curColor, 
				30460+curColor, 
				30420+curColor, 
				30340+curColor, 
				30290+curColor, 
				30280+curColor, 
				30270+curColor, 
				30260+curColor, 
				30240+curColor, 
				30230+curColor];
            } else {
                newAvatar = [
				31040+curColor, 
				31000+curColor, 
				31050+curColor, 
                                
				31440+curColor, 
				31540+curColor, 
				31420+curColor, 
				31320+curColor, 
				31270+curColor, 
				31260+curColor, 
				31250+curColor, 
				31240+curColor, 
				31230+curColor, 
				31220+curColor, 
				31110+curColor, 
				31030+curColor, 
				31530+curColor];
            }
	    cm.sendYesNo("무작위로 머리 손질을 받으시고 싶으신가요? 원하시는것을 정확하게 선택하셨는지 확인해 주시기 바랍니다. 정말 무작위로 머리 손질을 해 드릴까요?");

	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    newAvatar = [];
	    beauty = 2;

            newAvatar = [
                currenthaircolo,
                currenthaircolo + 1,
                currenthaircolo + 7,
                currenthaircolo + 3,
                currenthaircolo + 4,
                currenthaircolo + 5
            ];
	    cm.sendYesNo("무작위로 머리 손질을 받으시고 싶으신가요? 원하시는것을 정확하게 선택하셨는지 확인해 주시기 바랍니다. 정말 무작위로 머리 손질을 해 드릴까요?");
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(needItemHair, newAvatar) == 1) {
		cm.sendOk("자~ 다 되었답니다. 원장님 못지 않은 솜씨죠? 마음에 드셨으면 좋겠어요.");
	    } else {
		cm.sendOk("죄송하지만 쿠폰을 가져오시지 않으면 머리 손질을 해드릴 수 없답니다.");
	    }
	} else {
	    if (cm.setRandomAvatar(needItemColor, newAvatar) == 1) {
		cm.sendOk("자~ 다 되었답니다. 원장님 못지 않은 솜씨죠? 마음에 드셨으면 좋겠어요.");
	    } else {
		cm.sendOk("죄송하지만 쿠폰을 가져오시지 않으면 머리 손질을 해드릴 수 없답니다.");
	    }
	}
	cm.safeDispose();
    }
}