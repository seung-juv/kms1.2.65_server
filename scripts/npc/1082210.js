var status = 0;
var item = [[1142536,100000,1],[1022129,85000,1],[4021037,4800,1],[2000004,550,30],[2000005,990,30],[2070004,2500,1],[4000995,3300,1],[4440101,3800,1],[4441101,3800,1],[4442101,3800,1],[4443101,3800,1]];

function action(mode, type, selection){
	var customData = cm.getQuestRecord(50025);
	if(customData.getCustomData() == null){ 
	customData.setCustomData("0");
	}
	if(status == 0){
	cm.sendSimple("당신 이곳을 어떻게 알고 찾아온거지? 요즘 낯선사람이 자주 드나드는군 다들 아마존의 무슨용건이길래 이 위험한곳까지 굳이 찾아오는것인지 의문이군...\r\n#r(아마존에선 파티인원당 30% 추가경험치가 적용됩니다.)#k\r\n#b#L0#프리미엄 아마존 던전 입장하기.\r\n#L1#아마존 포인트(AP) 사용하기.\r\n");
	status++;
	} else if(status == 1) {
		if (selection == 0) {
		cm.sendSimple("당신 이곳을 어떻게 알고 찾아온거지? 요즘 낯선사람이 자주 드나드는군 다들 아마존의 무슨용건이길래 이 위험한곳까지 굳이 찾아오는것인지 의문이군...\r\n#r(아마존에선 파티인원당 30% 추가경험치가 적용됩니다.)#k\r\n#b#L0#독개구리 주의보 (권장레벨 Lv.48~65)\r\n#L1#꽃거미 집 (권장레벨 Lv.65~90)\r\n#L2#온화의 숲 (권장레벨 Lv.90~120)\r\n");
		status++;
	} else if (selection == 1) {
	var point = java.lang.Integer.parseInt(customData.getCustomData());
			var basetext = "이피온포인트로 아이템을 교환하시겠어요? 가끔식 새로운 아이템들도 들어온답니다 아직은 들어온 아이템이 별로없지만 앞으로 점점 많아질거라구요 하하!\r\n#r현재 나의 아마존포인트 : "+point+"ap#k\r\n#b";
			for(var i = 0; i < item.length; i++){
				basetext += "#L"+i+"##i"+item[i][0]+"# #t"+item[i][0]+"# " +item[i][2]+ "개<"+item[i][1]+"ap>\r\n";
			}
			cm.sendSimple(basetext);
			status=10;
	}
	} else if(status == 2) {
		if (selection == 0) {
		if (cm.getPlayerCount(123456701) >= 8) {
		cm.sendOk("이미 다른 파티가 던전을 사용중입니다.");
		cm.dispose();
		} else {
		cm.warp(123456701);
		cm.dispose();
		}
		} else if (selection == 1) {
		if (cm.getPlayerCount(123456703) >= 8) {
		cm.sendOk("이미 다른 파티가 던전을 사용중입니다.");
		cm.dispose();
		} else {
		cm.warp(123456703);
		cm.dispose();
		}
		} else if (selection == 2) {
		if (cm.getPlayerCount(123456702) >= 12) {
		cm.sendOk("이미 다른 파티가 던전을 사용중입니다.");
		cm.dispose();
		} else {
		cm.warp(123456702);
		cm.dispose();
			}
	}
	} else if(status == 10) {
	var point = java.lang.Integer.parseInt(customData.getCustomData());
	 if (point > item[selection][1]) {
         if (!cm.canHold(item[selection][0])) {
              cm.sendOk("인벤토리가 부족합니다.");
              cm.safeDispose();
              return;
         }
		cm.gainItem(item[selection][0], item[selection][2]);
		customData.setCustomData((point - item[selection][1])+ "");
		cm.sendOk("#b#i"+item[selection][0]+"# #t"+item[selection][0]+"# " +item[selection][2]+ "개#k를 구매하였습니다.");
		cm.dispose();
		} else {
		cm.sendOk("선택하신 아이템을 구매하기엔 포인트가 부족합니다.")
		cm.dispose();
		}
	}
}