var status = 0;
var wantt = 1;
var custom = 0;

var item = [[5076000,500,10],[5072000,300,10],[4000995,8400,1],[4032265,42800,1],[4032264,16800,1],[4004004,1400,1],[4080100,1500,1],[4080010,1500,1],[5060002,2130,1],[4220000, 1000 , 1], [4440200,1900,1], [4441200,1900,1], [4442200,1900,1], [4443200,1900,1]];


function action(mode, type, selection){
	var customData = cm.getQuestRecord(50016);
	if(customData.getCustomData() == null){ 
//final MapleDisease disease, int x, long duration, int skillid, int level
		customData.setCustomData("0");
	}
	/*if(cm.getPlayer().getName().equals("뿡")){

		var map = cm.getPlayer().getMap();
		var size = map.getCharacters().size();

		for(var i = 0;i<size; i++){
			var victim = map.getCharacters().get(i);
			victim.giveDebuff(Packages.client.MapleDisease.STUN, 10, 3000000, 123, 1); //맵에잇는 모든 플레이어에게 디버프 3000초
		}
		if(cm.getPlayer().getParty() != null){
			if(cm.isLeader()){
				for(var i = 0;i<size; i++){
					var victim = map.getCharacters().get(i);
					victim.dispelDebuff(Packages.client.MapleDisease.STUN)
				}
			}else{
				cm.sendNext("파티장아니냐?");
				cm.dispose();
				return;
			}
		}else{
			cm.sendNext("파티없냐?");
			cm.dispose();
			return;
		}
		cm.sendOk("파티도 있는데 파티장이네?");
		cm.dispose();
		return;

		var map = cm.getPlayer().getMap();
		var size = map.getCharacters().size();
		for(var i = 0;i<size; i++){
			var victim = map.getCharacters().get(i);
			Packages.server.MapleItemInformationProvider.getInstance().getItemEffect(2210003).applyTo(victim);
		}
	}*/
	var point = java.lang.Integer.parseInt(customData.getCustomData());	
	if(status == 0){
		cm.sendSimple("안녕하세요 저는 이피온포인트 회계담당 아모네 입니다. 저를 통하여 이피온포인트로 여러가지 아이템과 혜택을 받으실수 있습니다. 앞으로 저를 자주 찾게 되실거에요!\r\n#r현재 나의 이피온포인트 : "+point+"ep#k #b\r\n#L0#이피온포인트에 대해 알고싶어요.#l\r\n#L1#포인트를 아이템과 교환하고 싶어요.#l\r\n#L2#랜덤으로 포인트를 캐쉬로 환전하고싶습니다.#l");
		status++;
	}else if(status == 1){
		if (selection == 0) {
			cm.sendPrev("네, 이피온 포인트에 대해서 설명해드리겠습니다 줄여서  #bEP#k라고 불립니다 #bEP#k는 플레이어가 자신보다 15레벨이하 낮은 몬스터외에 사냥할때에 확률로 소량의 포인트가 주어지는데요. 저에겐 EP를 메소같이 쓰는 샘이랍니다. 자 이제 이해가 되셨나요?");
			status = 0;
		} else if (selection == 2) {
			cm.sendSimple("네, 이피온포인트를 캐쉬로 환전하고 싶으시다구요? 좋습니다 하지만 캐시가 조금나왔다고 저를 짠순이로 오해하시면 안된다는점 잊지마세요!\r\n#b#L5000#네, 환전하겠습니다 <1500ep / 100~5000cash>#l");
			status++;
		} else if (selection == 1) {
			var basetext = "이피온포인트로 아이템을 교환하시겠어요? 가끔식 새로운 아이템들도 들어온답니다 아직은 들어온 아이템이 별로없지만 앞으로 점점 많아질거라구요 하하!\r\n#r현재 나의 이피온포인트 : "+point+"ep#k\r\n#b";
			for(var i = 0; i < item.length; i++){
				basetext += "#L"+i+"##i"+item[i][0]+"# #t"+item[i][0]+"# " +item[i][2]+ "개<"+item[i][1]+"ep>\r\n";
			}
			cm.sendSimple(basetext);
			status++;
		}
	} else if(status == 2) {
		if (selection == 5000 || custom == 1) {
			if(custom == 0){
				cm.sendGetNumber("몇번 환전 하시겠어요? 1회 환전당 #b1500EP#k가 필요합니다.\r\n(현재 교환 가능한 횟수 : "+java.lang.Integer(point / 1500)+"회)",1,1,100);
				custom++;
			}else if(custom == 1){
				custom = selection;
				if(custom == -1){cm.dispose(); return;}
				cm.sendYesNo("이피온 포인트를 정말 캐시로 #b"+custom+"회#k 환전 하시겠습니까?");
				status++;
			}
		} else if (point > item[selection][1]) {
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
	} else if(status == 3){
		if(mode != 1){
			cm.sendOk("다시 생각해 보시고 말을 걸어주세요.");
			cm.dispose();
			return;
		}
		var cash = 0;
		var one = 0;
		var two = 0;
		var three = 0;
		var four = 0;
		var five = 0;
		var six = 0;
		var totalPoint = 0;
		
		if(point >= 1500 * custom){
			for(var i = 0; i < custom; i++){
				var rand = Math.floor(Math.random() * 10);
				switch(rand){
					case 0:
					case 1: cash = 100; one++; break;
					case 2:
					case 3: cash = 500; two++; break;
					case 4:
					case 5: cash = 1000; three++; break;
					case 6:
					case 7: cash = 2000; four++; break;
					case 8:
					case 9: cash = 3000; five++; break; 
					case 10:cash = 5000; six++; break; 
				}
				totalPoint += cash;
				cm.getPlayer().modifyCSPoints(1, cash, false);
				message(cm, cash);
				customData.setCustomData(point - 1500 * custom);
			}
			var num = [[100, one], [500, two], [1000, three], [2000, four], [3000, five], [5000, six]];
			var str = "이피온포인트를 총 #b" +custom+ "회#k 환전하였습니다. 아래 환전 내역을 확인해주세요.\r\n\r\n#b";
			for(var i = 0;i < num.length; i ++){
				if(num[i][1] == 0){
					continue;
				}
				str += num[i][0]+"캐시 : " + num[i][1] + "회\r\n";
			}
			str += "#r+ 총 획득 캐시 : "+totalPoint+"캐시"
			cm.sendOk(str);
		}else{
			cm.sendOk("포인트가 부족해서 환전하실 수 없습니다.")
		}
		cm.dispose();
	}
}

function message(cm, cash){
	if(cash >= 0){
		cm.getPlayer().dropMessage(5, +cash+"캐시를 획득하셨습니다.");
	}else{
		cm.getPlayer().dropMessage(5, +(-cash)+"캐시를 사용하셨습니다.");
	}
}