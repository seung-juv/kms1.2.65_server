var status = 0;
var two = [[4440101,35],[4441101,35],[4442101,35],[4443101,35],[4000995,50]];

var cap = [[1003589,1002776],[1003590,1002777],[1003591,1002778],[1003592,1002779],[1003593,1002780]];
var coat = [[1052498,1052155],[1052499,1052156],[1052500,1052157],[1052501,1052158],[1052502,1052159]];
var glove = [[1082466,1082234],[1082467,1082235],[1082468,1082236],[1082469,1082237],[1082470,1082238]];
var shose = [[1072703,1072355],[1072704,1072356],[1072705,1072357],[1072706,1072358],[1072707,1072359]];
var wp = [[1302228,1302081],[1332194,1332073],[1372140,1372044],[1382169,1382057],[1402152,1402046],[1432139,1432047],[1442183,1442063],[1452171,1452057],[1462160,1462050],[1472180,1472068],[1482141,1482023],[1492153,1492023]];

function action(mode, type, selection){
var cd = cm.getQuestRecord(58516);
if(status == 0){
cm.sendSimple("#e<스페셜 컨텐츠 : 엘나스 성벽>#n\r\n비참한 이 곳 사자왕의 성까지 어쩐일로 찾아오셨는지 모르겠군요 혹 저희의 원한을 풀어주시기위해 힘써주신다 한들 아주 힘겨운 일이 될것입니다.\r\n#r피로도 상태 : "+cm.getPlayer().getSHp()+" / 100\r\n현재 나의 성벽 등급 : "+cd.getCustomData()+"급#k#b\r\n#L0#전리품으로 피로도를 회복하고 싶습니다.\r\n#L1#등급별 기능을 이용하고 싶습니다.\r\n#L2#장미정원의 입장 권한을 얻고 싶습니다.\r\n");
status++;
} else if (status == 1) {
if (selection == 0) {
cm.sendSimple("반레온의 수하들을 쓰러뜨리고 얻은 전리품으로 피로도를 회복시켜줄수가 있지 어떤 자네는 전리품을 가지고있지?\r\n#b#L0#크로키의 투구 30개로 피로도 10 회복하기#l\r\n#L1#베어울프의 모닝스타 30개로 피로도 20 회복하기#l\r\n#L2#그레이벌쳐의 어깨장식 30개로 피로도 25 회복하기#l\r\n");
status = 20;
} else if (selection == 1) {
cm.sendSimple("성벽에서는 몬스터를 일정량만큼 쓰러뜨리면 등급이 상승한다네 이 곳은 성인만큼 각 등급별로 이용할수있는 기능이 다르지 자신의 등급에 맞는 기능을 잘 활용하도록.\r\n#L1##k#r(1급)#k#b 아이템 교환하기#l\r\n#L2##k#r(2급)#k#b 체력마력 강화하기#l\r\n#L3##k#r(3급)#k#b 반 레온 퇴치하기#l\r\n#L4##k#r(4급)#k#b 고급 아이템 제작#l\r\n");
status = 30;
} else if (selection == 2) {
if (cm.haveItem(4000629,50)) {
cm.gainItem(4032836,1);
cm.gainItem(4000629,-50);
cm.sendOk("캐슬골램의 벽돌 50개잘 받았습니다. 당신은 정말 강한 용사이군요 당신이라면 악에 물든 이피아님의 장미정원을 정화시킬수 있을거라 믿습니다. #i4032836# #b#t4032836##k를 가지고 오른쪽 포탈을 이용해주세요. 참고로 파티전원이 함께 입장됩니다.");
cm.dispose();
} else {
cm.sendOk("장미정원은 이미 손댈수없을만큼 사악한 기운으로 물들어졌습니다. 당신의 실력을 인증하신다면 장미정원의 열쇠를 드리도록하지요.#b캐슬골렘의 벽돌 50개#k를 모아와주세요.");
cm.dispose();
}
}
} else if (status == 30) {
if (selection == 0) {
cm.sendOk("1급 기능은 현재 준비중입니다.");
cm.dispose();
} else if (selection == 4) {
if (cd.getCustomData() >= 4) {
cm.sendSimple("자네는 최고등급인 4등급이군 정말 대단한 모험가야 인정하지 대단한만큼 당신의 장비도 더욱 대단해야 할것인데 말이야.\r\n#b#L0#모자 제작하기#l\r\n#L1#갑옷 제작하기#l\r\n#L2#장갑 제작하기#l\r\n#L3#신발 제작하기#l\r\n#L4#무기 제작하기#l");
status = 15;
} else {
cm.sendOk("4급 미만의 플레이어는 이용할수 없습니다.");
cm.dispose();
}
} else if (selection == 3) {
if (cd.getCustomData() >= 3) {
if (cm.haveItem(4000630,30)) {
cm.warpParty(211070100);
cm.killAllMob();
cm.spawnMob(8840000,1,-181);
cm.getPlayer().ServerNotice("보스알림 : "+cm.getPlayer().getName()+"님과 그의 일행들이 반 레온 원정에 도전합니다.");
cm.showEffect(true,"monsterPark/extremeBoss");
cm.gainItem(4000630,-30);
cm.dispose();
} else {
cm.sendOk("#r정화의 토템 30개#k를 모아온다면 자네의 실력을 인정하고 파티원들과 함께 알현실로 입장시켜주겠네.");
cm.dispose();
}
} else {
cm.sendOk("3급 미만의 플레이어는 이용할수 없습니다.");
cm.dispose();
}
} else if (selection == 2) {
if (cd.getCustomData() >= 2) {
cm.sendSimple("정화의 토템 30개만 있다면 자네의 체력과 마력을 상향시킬수 있지 사자왕 반 레온의 공격력은 아주 높으니 미리 준비를 해놓는것도 나쁘지 않을게야.\r\n#b#L0#체력 100 상향하기#l\r\n#b#L1#마력 80 상향하기#l");
status = 32;
} else {
cm.sendOk("2급 미만의 플레이어는 이용할수 없습니다.");
cm.dispose();
}
} else if (selection == 1) {
if (cd.getCustomData() >= 1) {
var basetext = "2급상점에서는 메소가 아닌 #r정화의 토템#k으로 거래가 된다네. 토템이 충분하다면 아래 아이템들과 교환해주지.\r\n#b";
			for(var i = 0; i < two.length; i++){
				basetext += "#L"+i+"##i"+two[i][0]+"# #t"+two[i][0]+"# < " +two[i][1]+" 개 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 31;
} else {
cm.sendOk("1급 미만의 플레이어는 이용할수 없습니다.");
cm.dispose();
}
}
} else if (status == 15) {
if (selection == 0) {
var basetext = "아래중 자신에 맞는 장비를 선택하여 제작에 필요한 아이템을 확인한후 가져온다면 아이템을 제작해주도록 하겠네.\r\n#b";
			for(var i = 0; i < cap.length; i++){
				basetext += "#L"+i+"##t"+cap[i][0]+"#\r\n";
			}
			cm.sendSimple(basetext);
			status = 150;
} else if (selection == 1) {
var basetext = "아래중 자신에 맞는 장비를 선택하여 제작에 필요한 아이템을 확인한후 가져온다면 아이템을 제작해주도록 하겠네.\r\n#b";
			for(var i = 0; i < coat.length; i++){
				basetext += "#L"+i+"##t"+coat[i][0]+"#\r\n";
			}
			cm.sendSimple(basetext);
			status = 151;
} else if (selection == 2) {
var basetext = "아래중 자신에 맞는 장비를 선택하여 제작에 필요한 아이템을 확인한후 가져온다면 아이템을 제작해주도록 하겠네.\r\n#b";
			for(var i = 0; i < glove.length; i++){
				basetext += "#L"+i+"##t"+glove[i][0]+"#\r\n";
			}
			cm.sendSimple(basetext);
			status = 152;
} else if (selection == 3) {
var basetext = "아래중 자신에 맞는 장비를 선택하여 제작에 필요한 아이템을 확인한후 가져온다면 아이템을 제작해주도록 하겠네.\r\n#b";
			for(var i = 0; i < shose.length; i++){
				basetext += "#L"+i+"##t"+shose[i][0]+"#\r\n";
			}
			cm.sendSimple(basetext);
			status = 153;
} else if (selection == 4) {
var basetext = "아래중 자신에 맞는 장비를 선택하여 제작에 필요한 아이템을 확인한후 가져온다면 아이템을 제작해주도록 하겠네.\r\n#b";
			for(var i = 0; i < wp.length; i++){
				basetext += "#L"+i+"##t"+wp[i][0]+"#\r\n";
			}
			cm.sendSimple(basetext);
			status = 154;
}
} else if (status == 150) {
		if (cm.haveItem(cap[selection][1]) && cm.haveItem(4310009,2) && cm.haveItem(4030034,1)) {
            if (!cm.canHold(cap[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(cap[selection][1],-1);
			cm.gainItem(cap[selection][0],1);
			cm.gainItem(4310009,-2);
			cm.gainItem(4030034,-1);
			cm.sendOk("#b#i"+cap[selection][0]+"# #t"+cap[selection][0]+"##k를 제작하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("#i"+cap[selection][0]+"##b #t"+cap[selection][0]+"##k를 제작하기 위해서는 사자왕의 노블 메달 2개와 #t"+cap[selection][1]+"# 마지막으로 장미 한송이가 필요하다네.")
			cm.dispose();
}
} else if (status == 151) {
		if (cm.haveItem(coat[selection][1]) && cm.haveItem(4310009,2) && cm.haveItem(4030034,1)) {
            if (!cm.canHold(coat[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(coat[selection][1],-1);
			cm.gainItem(coat[selection][0],1);
			cm.gainItem(4310009,-2);
			cm.gainItem(4030034,-1);
			cm.sendOk("#b#i"+coat[selection][0]+"# #t"+coat[selection][0]+"##k를 제작하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("#i"+coat[selection][0]+"##b #t"+coat[selection][0]+"##k를 제작하기 위해서는 사자왕의 노블 메달 2개와 #t"+coat[selection][1]+"# 마지막으로 장미 한송이가 필요하다네.")
			cm.dispose();
}
} else if (status == 152) {
		if (cm.haveItem(glove[selection][1]) && cm.haveItem(4310009,2) && cm.haveItem(4030034,1)) {
            if (!cm.canHold(glove[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(glove[selection][1],-1);
			cm.gainItem(glove[selection][0],1);
			cm.gainItem(4310009,-2);
			cm.gainItem(4030034,-1);
			cm.sendOk("#b#i"+glove[selection][0]+"# #t"+glove[selection][0]+"##k를 제작하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("#i"+glove[selection][0]+"##b #t"+glove[selection][0]+"##k를 제작하기 위해서는 사자왕의 노블 메달 2개와 #t"+glove[selection][1]+"# 마지막으로 장미 한송이가 필요하다네.")
			cm.dispose();
}
} else if (status == 153) {
		if (cm.haveItem(shose[selection][1]) && cm.haveItem(4310009,2) && cm.haveItem(4030034,1)) {
            if (!cm.canHold(shose[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(shose[selection][1],-1);
			cm.gainItem(shose[selection][0],1);
			cm.gainItem(4310009,-2);
			cm.gainItem(4030034,-1);
			cm.sendOk("#b#i"+shose[selection][0]+"# #t"+shose[selection][0]+"##k를 제작하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("#i"+shose[selection][0]+"##b #t"+shose[selection][0]+"##k를 제작하기 위해서는 사자왕의 노블 메달 2개와 #t"+shose[selection][1]+"# 마지막으로 장미 한송이가 필요하다네.")
			cm.dispose();
}
} else if (status == 154) {
		if (cm.haveItem(wp[selection][1]) && cm.haveItem(4310010,2) && cm.haveItem(4030034,1)) {
            if (!cm.canHold(wp[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(wp[selection][1],-1);
			cm.gainItem(wp[selection][0],1);
			cm.gainItem(4310010,-2);
			cm.gainItem(4030034,-1);
			cm.sendOk("#b#i"+wp[selection][0]+"# #t"+wp[selection][0]+"##k를 제작하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("#i"+wp[selection][0]+"##b #t"+wp[selection][0]+"##k를 제작하기 위해서는 사자왕의 로얄 메달 2개와 #t"+wp[selection][1]+"# 마지막으로 장미 한송이가 필요하다네.")
			cm.dispose();
}
	} else if (status == 32) {
	if (selection == 0){
	if (cm.haveItem(4000630,30)) {
	cm.gainItem(4000630,-30);
	cm.getPlayer().getStat().setMaxHp(cm.getPlayer().getStat().getMaxHp()+100,cm.getPlayer());
	cm.getPlayer().reloadChar();
	cm.dispose();
	} else {
	cm.sendOk("정화의 토템이 부족한것 같군.");
	cm.dispose();
	}
	} else if (selection == 1){
	if (cm.haveItem(4000630,30)) {
	cm.gainItem(4000630,-30);
	cm.getPlayer().getStat().setMaxMp(cm.getPlayer().getStat().getMaxMp()+80,cm.getPlayer());
	cm.getPlayer().reloadChar();
	cm.dispose();
	} else {
	cm.sendOk("정화의 토템이 부족한것 같군.");
	cm.dispose();
	}
	}
	} else if (status == 31) {
		if (cm.haveItem(4000630,two[selection][1])) {
            if (!cm.canHold(two[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4000630,-two[selection][1]);
			cm.gainItem(two[selection][0],1);
			cm.sendOk("#b#i"+two[selection][0]+"# #t"+two[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택한 아이템을 교환하기엔 토템이 부족한것 같은데?")
			cm.dispose();
}
} else if (status == 20) {
if (selection == 0) {
if (cm.haveItem(4000625,30)) {
cm.gainItem(4000625,-30);
cm.getPlayer().setSHp(cm.getPlayer().getSHp() - 10);
cm.sendOk("피로도가 선택한 수치만큼 회복 되었네");
cm.dispose();
} else {
cm.sendOk("전리품을 30개이상 가지고있는지 다시 확인해보게.");
cm.dispose();
}
} else if (selection == 1) {
if (cm.haveItem(4000627,30)) {
cm.gainItem(4000627,-30);
cm.getPlayer().setSHp(cm.getPlayer().getSHp() - 20);
cm.sendOk("피로도가 선택한 수치만큼 회복 되었네");
cm.dispose();
} else {
cm.sendOk("전리품을 30개이상 가지고있는지 다시 확인해보게.");
cm.dispose();
}
} else if (selection == 2) {
if (cm.haveItem(4000628,30)) {
cm.gainItem(4000628,-30);
cm.getPlayer().setSHp(cm.getPlayer().getSHp() - 25);
cm.sendOk("피로도가 선택한 수치만큼 회복 되었네");
cm.dispose();
} else {
cm.sendOk("전리품을 30개이상 가지고있는지 다시 확인해보게.");
cm.dispose();
}
}
}
}