var status = 0;
var custom = 0;


var HscrollAcc = new Array(2040931,2040924,2040901,2040804,2049100,2041013,2041016,2041019,2040321,2040301,2040317);
var HscrollEqp = new Array(2043001,2044001,2044301,2044401,2044801,2044701,2043201,2049100,2044201,2043701,2044901,2043801,2044501,2044601,2043301);

function action(mode, type, selection){
	if(status == 0){
if (cm.getPlayer().getClient().getChannel() == 1) {
		if (cm.haveItem(3014000,1)) {
		cm.sendSimple("허허 오늘은 낚시터 물이 좋은것 같은데 오늘은 누가 대어를 낚을지 기대되는구만 물고기는 내가 다 사겠네 물건이랑 교환도 해주겠다고 허허...\r\n#L0##b낚시그물을 구매하고싶습니다.#l\r\n#L1#그물에 무언가가 잡혔어요 확인해주세요.#l\r\n#L2#물고기 판매,교환 하기#l\r\n#L4#낚시터 퇴장하기#l\r\n");
		status++;
		} else {
		cm.sendSimple("허허 오늘은 낚시터 물이 좋은것 같은데 오늘은 누가 대어를 낚을지 기대되는구만 물고기는 내가 다 사겠네 물건이랑 교환도 해주겠다고 허허...\r\n#L50##b태공의 선물 (퀘스트) #l\r\n#L4#낚시터 퇴장하기#l\r\n");
		status++;
		}
} else {
cm.sendOk("1채널에서 이용가능한 서비스 이다.");
cm.dispose();
}
	} else if(status == 1) {
		if (selection == 0 && mode == 1) {
			cm.sendGetNumber("그물은 한개당 800원이라네 얼마나 구매할텐가?\r\n#b현재 보유메소 : "+cm.getPlayer().getMeso()+"메소\r\n구매가능 횟수 :"+cm.getPlayer().getMeso() / 800+"회",1,1,100);
			status = 3;
		} else if (selection == 1 && mode == 1) {
			cm.sendGetNumber("그물안이 해초덩어리나 돌로 가득해도 실망하지말게나...\r\n자, 몇개나 풀어볼텐가?\r\n#b무언가 들어있는 그물 : "+cm.getPlayer().getItemQuantity(4032686,false)+"개",1,1,100);
			status = 4;
		} else if (selection == 2 && mode == 1) {
		cm.sendSimple("허허 오늘은 낚시터 물이 좋은것 같은데 오늘은 누가 대어를 낚을지 기대되는구만 물고기는 내가 다 사겠네 물건이랑 교환도 해주겠다고 허허...\r\n#L100##b크라운피쉬 메소로 판매하기#l\r\n#L101#레인보우피쉬 캐쉬로 판매하기#l\r\n#L102#붐피쉬 EP로 판매하기#l\r\n#L103#해마50마리로 60%무기주문서 랜덤 교환하기#l\r\n#L104#해마50마리로 60%장신구주문서 랜덤 교환하기#l\r\n#L105#???물고기10마리로 돌림판 티켓 뽑기#l");
			status = 5;
		} else if (selection == 4 && mode == 1) {
			cm.warp(910000020);
			cm.dispose();
		} else if (selection == 50 && mode == 1) {
			cm.sendYesNo("이봐 자네 혹시 낚시세트도 없이 낚시터에 온게야? 이런이런 기본이 안되있구만 내 부탁을 들어준다면 내가 근사한 낚시세트하나 선물하지... 허허 사실은 내가 마누라에게 선물을 하고싶어서 말이야... #r돼지의 리본 100개#k면 될것같은데... 혹시 자네가 있을까해서 없다면 구해와 주지 않겠나?");
			status++;
		}
	} else if(status == 2){
			if (cm.haveItem(4000002,100)) {
			cm.gainItem(4000002,-100);
			cm.gainItem(3014000,1);
			cm.gainExp(2000);
			cm.gainMeso(3500);
			cm.sendOk("오오 고맙네 이걸로 이번 마누라 선물걱정은 필요없겠어 나만큼 마누라 생각하는 늙은이도 없을거야 허허 고맙네 이건 작지만 내답례일세\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#b#i3014000# 낚시셋트 , 2000경험치 , 3500메소#k");
			cm.dispose();
			} else {
			cm.sendOk("정말인가!? 그럼 기다리고 있겠네 가능한 빨리 부탁하네...");
			cm.dispose();
			}
	} else if(status == 3){
		if(mode != 1){
			cm.dispose();
			return;
		}
			if (cm.getMeso() >= selection * 800) {
			cm.sendOk("고맙구먼 돈은 잘받았네, 또 부족하면 사러오게나~");
			cm.gainItem(2270008,selection);
			cm.gainMeso(-selection * 800);
			cm.dispose();	
			} else {
			cm.sendOk("가진만큼 가지자라는 명언을 알려주겠네 하하하!");
			cm.dispose();	
			}
	} else if(status == 5){
		if (selection == 100) {
		cm.sendGetNumber("크라운 피쉬라 아주 귀여운 물고기이지 자 거래하지 한마리당 #r850메소#k에 원하는만큼 모두 구입하겠네!\r\n#b보유중인 크라운 피쉬 : "+cm.getPlayer().getItemQuantity(4220011,false)+"마리",1,1,100);
		status = 6;
		} else if (selection == 101) {
		cm.sendGetNumber("오오 레인보우피쉬 오랜만에 들어보는 희귀한 물고기이군 특별히 그물고기는 한마리당 150캐시에 원하는만큼 모두사겠네!\r\n#b보유중인 레인보우 피쉬 : "+cm.getPlayer().getItemQuantity(4220014,false)+"마리",1,1,100);
		status = 7;
		} else if (selection == 102) {
		cm.sendGetNumber("붐피쉬를 교환하고 싶다고? 붐피쉬는 뱃속에 폭탄만제거해서 먹으면 아주 일품이지 자 한마리당 이피온포인트 4점에 원하는만큼 구입하겠네!\r\n#b보유중인 붐 피쉬 : "+cm.getPlayer().getItemQuantity(4220012,false)+"마리",1,1,100);
		status = 8;
		} else if (selection == 103) {
		var sel = Math.floor(Math.random()*HscrollEqp.length);
		if (cm.haveItem(4220013,50)) {
		cm.gainItem(4220013,-50);
		cm.gainItem(HscrollEqp[sel],1);
		cm.sendOk("해마는 잘받았네, 인벤토리에 주문서를 확인하게!");
		cm.dispose();
		} else {
			cm.sendOk("가진만큼 가지자라는 명언을 알려주겠네 하하하!");
			cm.dispose();	
		}
		} else if (selection == 104) {
		var sel = Math.floor(Math.random()*HscrollAcc.length);
		if (cm.haveItem(4220013,50)) {
		cm.gainItem(4220013,-50);
		cm.gainItem(HscrollAcc[sel],1);
		cm.sendOk("해마는 잘받았네, 인벤토리에 주문서를 확인하게!");
		cm.dispose();
		} else {
			cm.sendOk("가진만큼 가지자라는 명언을 알려주겠네 하하하!");
			cm.dispose();	
		}
		} else if (selection == 105) {
		var random = Math.floor(Math.random() * 100);
		if (cm.haveItem(4220015,10)) {
		if (random == 41 || random <= 45) {
		cm.gainItem(4220015,-10);
		cm.gainItem(4001782,2);
		cm.sendOk("좋아좋아 핫타임 돌림판 티켓1장 으로 교환되었네");
		cm.dispose();
		} else if (random == 71 || random <= 73) {
		cm.gainItem(4220015,-10);
		cm.gainItem(4001783,1);
		cm.sendOk("좋아좋아 희귀한 돌림판 티켓1장 으로 교환되었네");
		cm.dispose();
		} else {
		cm.sendOk("에이 시시해 아무것도 나오지 않았어!");
		cm.dispose();
		}
		} else {
			cm.sendOk("가진만큼 가지자라는 명언을 알려주겠네 하하하!");
			cm.dispose();	
		}
	}
	} else if(status == 6){
		if(mode != 1){
			cm.dispose();
			return;
		}
		if (cm.haveItem(4220011,selection)) {
		cm.sendOk("크라운피쉬"+selection+"마리 잘받았네 자, 받겟나 "+selection * 850+"메소");
		cm.gainItem(4220011,-selection);
		cm.gainMeso(selection * 850);
		cm.dispose();
		} else {
			cm.sendOk("가진만큼 가지자라는 명언을 알려주겠네 하하하!");
			cm.dispose();	
		}
	} else if (status == 7) {
		if(mode != 1){
			cm.dispose();
			return;
		}
		if (cm.haveItem(4220014,selection)) {
		cm.sendOk("레인보우피쉬"+selection+"마리 잘받았네 자, 받겟나 "+selection * 150+"캐시");
		cm.gainItem(4220014,-selection);
		cm.getPlayer().modifyCSPoints(1, selection * 150,false);
		cm.dispose();
		} else {
			cm.sendOk("가진만큼 가지자라는 명언을 알려주겠네 하하하!");
			cm.dispose();	
		}
	} else if(status == 8){
		if(mode != 1){
			cm.dispose();
			return;
		}
		if (cm.haveItem(4220012,selection)) {
		cm.gainItem(4220012,-selection);
		var customData = cm.getQuestRecord(50016);
		var point = java.lang.Integer.parseInt(customData.getCustomData());	
		customData.setCustomData(point + (selection * 4)+ "");
		cm.sendOk("붐 피쉬"+selection+"마리 잘받았네 자, 받겟나 "+selection * 4+"EP");
		cm.dispose();
		} else {
			cm.sendOk("가진만큼 가지자라는 명언을 알려주겠네 하하하!");
			cm.dispose();	
		}
	} else if(status == 4){
		if(mode != 1){
			cm.dispose();
			return;
		}
			var fish1 = 0;
			var fish2 = 0;
			var fish3 = 0;
			var fish4 = 0;
			var fish5 = 0;
			var two = 0;
			var three = 0;
			var four = 0;
			var five = 0;
			var six = 0;
			custom = selection;
			if(custom == -1){cm.dispose(); return;}
			if (!cm.haveItem(4032686,custom)) {
				cm.sendOk("가진만큼 가지자라는 명언을 알려주겠네 하하하!");
				cm.dispose();
			} else {
				for(var i = 0; i < custom; i++){
				var rand = Math.floor(Math.random() * 30);
				switch(rand){
					case 0: case 1: case 2: case 3: case 4: case 5: case 6: fish1 = 4220011; two++; break;
					case 7: case 8: case 9: case 10: fish2 = 4220012; three++; break;
					case 11: case 12: case 13: fish3 = 4220013; four++; break;
					case 14: case 15: fish4 = 4220014; five++; break;
					case 16: fish5 = 4220015; six++; break;
					case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30:break;
				}
			}
			var goodsItem = [];
			var goodsCount = [];
			var num = [[4220011,two], [4220012,three], [4220013,four], [4220014,five], [4220015,six]];
			var str = "자 그물을 다풀었네 안에 해초덩어리들도 많더군 그건 내가 다 처리했으니 걱정하지말고 나온 물고기들 가져가게나...\r\n\r\n#b";
			for(var i = 0;i < num.length; i ++){
				if(num[i][1] == 0){
					continue;
				}
				str += "#i"+num[i][0]+"# : " + num[i][1] + "마리\r\n"	
				goodsItem.push(num[i][0]);
				goodsCount.push(num[i][1]);	
			}
			for(var i = 0;i < goodsItem.length; i ++){
				cm.gainItem(goodsItem[i], goodsCount[i])
			}	
			cm.gainItem(4032686,-custom);
			cm.sendOk(str);
			cm.dispose();
		}
}
}
	