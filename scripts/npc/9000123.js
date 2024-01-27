var status = 0;
var beauty = 0;
var needItem = 4310092;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("무작위로 성형을 받으시고 싶으신가요? 원하시는것을 정확하게 선택하셨는지 확인해 주시기 바랍니다. 정말 무작위로 성형을 해 드릴까요?");
    } else if (status == 1){
	var face = cm.getPlayerStat("FACE");
	var facetype;

	var customData = cm.getQuestRecord(50011);
            if (customData.getCustomData() == "남자") {
	    facetype = [20021, 20022, 20024, 20025, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20053, 20055, 20056, 20057, 20058, 20059, 20060, 20061, 20062, 20063, 20064, 20065, 20066, 20067, 20068, 20069, 20070, 20074, 20075, 20076, 20077, 20080, 20081, 20082, 20083, 20084, 20085, 20086, 20087, 20088];
        } else {
            facetype = [21021, 21023, 21024, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 21059, 21060, 21061, 21062, 21063, 21064, 21065, 21069, 21070, 21071, 21072, 21073, 21074, 21075, 21077, 21078, 21080, 21081, 21082, 21083, 21084];
        }
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	if (cm.haveItem(4310092,100)) {
	if (cm.setRandomAvatar(needItem, facetype) == 1) {
		cm.sendOk("자~ 다 되었답니다. 다른샵에서는 볼수없는 솜씨죠?");
		cm.gainItem(4310092,-99)
	} else {
		cm.sendOk("죄송하지만 리얼코인이 부족한것 같은데요?");
	}
	} else {
		cm.sendOk("죄송하지만 리얼코인이 부족한것 같은데요?");
	}
	cm.dispose();
    }
}
