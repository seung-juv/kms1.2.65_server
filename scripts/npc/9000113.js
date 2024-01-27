var status = 0;
var custom = 0;

var cap = [[1003393,2100],[1004004,1600],[1004003,1600],[1003903,2100],[1003953,4700],[1003279,1900],[1003910,1700],[1003268,2000],[1003269,2000],[1002995,1000]];
var top = [[1042158,1650],[1042194,1100],[1042214,900],[1042127,1200]];
var pants = [[1062054,800]];
var longcoat = [[1052587,1500],[1052671,2800],[1052209,1800]];
var glove = [[1082493,2600]];
var shose = [[1072867,600]];
var cape = [[1102381,1500],[1102669,1800],[1102290,3800],[1102338,990]];
var weapone = [[1702488,1600],[1702196,1600],[1702174,2400],[1702299,2100],[1702456,2050]];
var acc = [[1022079,800],[1012412,1000],[1022075,1000],[1012415,1000],[1092067,1400],[1012289,800]];

var sp = [[1132174,20000],[1132175,20000],[1132176,20000],[1132177,20000],[1132178,20000],[1082543,18000],[1082544,18000],[1082545,18000],[1082546,18000],[1082547,18000],[4251101,4000],[4250801,4000],[4250901,4000],[4251001,4000],[4440101,2000],[4441101,2000],[4442101,2000],[4443101,2000],[4440001,3500],[4441001,3500],[4442001,3500],[4443001,3500]];

function action(mode, type, selection){
	if(status == 0){
	//cm.gainItem(4031448,1);
	cm.sendSimple("안녕하시게나 난 이피온월드의 탑리치이자 스폰서인 골드리치 라고하지 후원을통해 얻은 리얼코인은 나에게만 사용할수있다구. 자 자네는 리얼코인으로 하고싶은게 무엇이지?#b\r\n#L0#후원방법을 알고싶습니다.#l\r\n#L1#리얼코인을 사용하고 싶습니다.#l\r\n#L2#오늘의 #k#r한정판#k#b 상점을 이용하겠습니다.#l\r\n");
		status++;
	}else if(status == 1){
		if (selection == 0) {
			cm.sendPrev("#b< 후원수단 안내 >#k\r\n컬쳐,해피머니 상품권 , 계좌이체 , 모바일 티머니 선물\r\n\r\n#b< 결제 안내 >#k\r\n1천원당 1000리얼코인이 지급됩니다. 계좌이체로 결제하는 경우에는 보너스코인이 지급됩니다.\r\n\r\n#b< 후원 방법 >#k\r\n후원을 원하시는 분은 #r카톡ID : epions#k 로문의주세요. 다른 스텝이나 관리자에게 후원적발시 #r영구벤처리#k 합니다. 오직 토리(epionms_)에게만 후원이 가능합니다.");
			status = 0;
		} else if (selection == 1) {
			cm.sendSimple("안녕하시게나 난 이피온월드의 탑리치이자 스폰서인 골드리치 라고하지 후원을통해 얻은 리얼코인은 나에게만 사용할수있다구. 자 자네는 리얼코인으로 하고싶은게 무엇이지?\r\n#b#L0#리얼 아이템상점 이용하기#l\r\n#L1#장비 아이템 업그레이드 하기#l\r\n#L2#프리미엄 뷰티샵 이용하기#l");
			status++;
		} else if (selection == 2) {
					var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < sp.length; i++){
				basetext += "#L"+i+"##i"+sp[i][0]+"# #t"+sp[i][0]+"# < " +sp[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 987;
		}
	} else if(status == 2) {
		if (selection == 0) {
			cm.sendSimple("안녕하시게나 난 이피온월드의 탑리치이자 스폰서인 골드리치 라고하지 후원을통해 얻은 리얼코인은 나에게만 사용할수있다구. 자 자네는 리얼코인으로 하고싶은게 무엇이지?#b\r\n#L0#신규 캐시 아이템 쇼핑하기#l\r\n#L1#고급 잡화 아이템 쇼핑하기#l");
			status++;
		} else 	if (selection == 1) {
			cm.sendSimple("안녕하시게나 난 이피온월드의 탑리치이자 스폰서인 골드리치 라고하지 후원을통해 얻은 리얼코인은 나에게만 사용할수있다구. 자 자네는 리얼코인으로 하고싶은게 무엇이지?#b\r\n#L1001#STR 구매하기#l\r\n#L1002#DEX 구매하기#l\r\n#L1003#INT 구매하기#l\r\n#L1004#LUK 구매하기#l\r\n#L1000#업그레이드슬롯 구매하기#l");
			status++;
		} else 	if (selection == 2) {
			cm.dispose();
			cm.openNpc(1012117);
		}
	} else if(status == 3){
		if (selection == 0) {
			cm.sendSimple("안녕하시게나 난 이피온월드의 탑리치이자 스폰서인 골드리치 라고하지 후원을통해 얻은 리얼코인은 나에게만 사용할수있다구. 자 자네는 리얼코인으로 하고싶은게 무엇이지?\r\n#b#L500#모자#l   #L501#상의#l   #L502#하의#l\r\n#L503#한벌옷#l#L504#장갑#l   #L505#신발#l\r\n#L506#망토#l   #L508#무기#l   #L507#악세사리#l");
			status = 200;
		} else if (selection == 1) {
			cm.sendSimple("안녕하시게나 난 이피온월드의 탑리치이자 스폰서인 골드리치 라고하지 후원을통해 얻은 리얼코인은 나에게만 사용할수있다구. 자 자네는 리얼코인으로 하고싶은게 무엇이지?\r\n#b#L100#부화기 12개 세트#l\r\n#L101#눈부신 햇살#l\r\n#L103#핫타임 돌림판 티켓#l\r\n#L102#요정의 책갈피#l\r\n#L104#상급 쥬얼 보석함 패키지#l\r\n");
			status = 20;
  		} else if (selection == 1000) {
			cm.sendSimple("\r\n상품명 : 업그레이드 가능 횟수 + 1\r\n상품가격 : 1500 리얼코인\r\n#r주의사항 : 캐쉬템에는 적용되지않습니다.#k\r\n#b"+cm.EquipList(cm.getPlayer().getClient()));
			status = 10;
		} else if (selection == 1001) {
			cm.sendGetNumber("STR은 + 1 당 300 리얼코인이지 신중하게 선택해.\r\n가능한 스텟 구매 횟수 : + "+cm.getPlayer().getItemQuantity(4310092,false) / 300+"회",1,1,10);
			status = 1001;
			} else if (selection == 1002) {
			cm.sendGetNumber("DEX는 + 1 당 300 리얼코인이지 신중하게 선택해.\r\n가능한 스텟 구매 횟수 : + "+cm.getPlayer().getItemQuantity(4310092,false) / 300+"회",1,1,10);
			status = 1002;
			} else if (selection == 1003) {
			cm.sendGetNumber("INT는 + 1 당 300 리얼코인이지 신중하게 선택해.\r\n가능한 스텟 구매 횟수 : + "+cm.getPlayer().getItemQuantity(4310092,false) / 300+"회",1,1,10);
			status = 1003;
			} else if (selection == 1004) {
			cm.sendGetNumber("LUK은 + 1 당 300 리얼코인이지 신중하게 선택해.\r\n가능한 스텟 구매 횟수 : + "+cm.getPlayer().getItemQuantity(4310092,false) / 300+"회",1,1,10);
			status = 1004;
		}
	} else if(status == 20){
		if (selection == 100) {
			cm.sendSimple("#e<부화기 12개 세트>#n\r\n\r\n#i5060002# 프리미엄 부화기 12개\r\n\r\n패키지 가격 : 3,300 리얼코인\r\n보유중인 코인 : "+cm.getPlayer().getItemQuantity(4310092,false)+" 리얼코인\r\n구매후 나의코인 : "+(cm.getPlayer().getItemQuantity(4310092,false) - 3300)+" 리얼코인\r\n#b#L100#선택한 아이템을 구매하겠습니다.#l\r\n#L10000#구매하지 않겠습니다.");
			status = 4;
		} else if (selection == 102) {
			cm.sendSimple("#e<요정의 책갈피>#n\r\n\r\n#i4000995# 요정의 책갈피 1개\r\n\r\n패키지 가격 : 1600 리얼코인\r\n보유중인 코인 : "+cm.getPlayer().getItemQuantity(4310092,false)+" 리얼코인\r\n구매후 나의코인 : "+(cm.getPlayer().getItemQuantity(4310092,false) - 1600)+" 리얼코인\r\n#b#L101#선택한 아이템을 구매하겠습니다.#l\r\n#L10000#구매하지 않겠습니다.");
			status = 4;
		} else if (selection == 104) {
		if (cm.getInvSlots(4) >= 9) {
			cm.sendSimple("#e<상급 쥬얼 보석함 패키지>#n\r\n\r\n#i4031606# 상급 쥬얼 보석함 패키지\r\n\r\n패키지 가격 : 8300 리얼코인\r\n보유중인 코인 : "+cm.getPlayer().getItemQuantity(4310092,false)+" 리얼코인\r\n구매후 나의코인 : "+(cm.getPlayer().getItemQuantity(4310092,false) - 8300)+" 리얼코인\r\n#b#L195#선택한 아이템을 구매하겠습니다.#l\r\n#L10000#구매하지 않겠습니다.");
			status = 4;
			} else {
			cm.sendOk("기타 인벤토리의 여유공간 9칸을 만드신후 시도해주세요.");
 			cm.dispose();
			}
		} else if (selection == 101) {
		cm.sendSimple("#e<눈부신 햇살>#n\r\n#i4032266# #b눈부신 햇살#k\r\n\r\n아이템 가격 : 1750 리얼코인\r\n보유중인 코인 : "+cm.getPlayer().getItemQuantity(4310092,false)+" 리얼코인\r\n구매후 나의코인 : "+(cm.getPlayer().getItemQuantity(4310092,false) - 1750)+" 리얼코인\r\n#b#L0#선택한 아이템을 구매하겠습니다.#l\r\n#L1#구매하지 않겠습니다.");
		status = 123;
		} else if (selection == 103) {
		cm.sendGetNumber("#e<핫타임 돌림판 티켓>#n\r\n#i4001782# #b핫타임 돌림판 티켓 1장#k\r\n\r\n아이템 가격 : 500 리얼코인\r\n현재 구매가능한 티켓수 : "+cm.getPlayer().getItemQuantity(4310092,false) / 500+"장",1,1,100);
		status = 124;
		}
	} else if (status == 200) {
		if (selection == 500) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < cap.length; i++){
				basetext += "#L"+i+"##i"+cap[i][0]+"# #t"+cap[i][0]+"# < " +cap[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 201;
		} else if (selection == 501) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < top.length; i++){
				basetext += "#L"+i+"##i"+top[i][0]+"# #t"+top[i][0]+"# < " +top[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 202;
		} else if (selection == 502) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < pants.length; i++){
				basetext += "#L"+i+"##i"+pants[i][0]+"# #t"+pants[i][0]+"# < " +pants[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 203;
		} else if (selection == 503) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < longcoat.length; i++){
				basetext += "#L"+i+"##i"+longcoat[i][0]+"# #t"+longcoat[i][0]+"# < " +longcoat[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 204;
		} else if (selection == 504) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < glove.length; i++){
				basetext += "#L"+i+"##i"+glove[i][0]+"# #t"+glove[i][0]+"# < " +glove[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 205;
		} else if (selection == 505) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < shose.length; i++){
				basetext += "#L"+i+"##i"+shose[i][0]+"# #t"+shose[i][0]+"# < " +shose[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 206;
		} else if (selection == 506) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < cape.length; i++){
				basetext += "#L"+i+"##i"+cape[i][0]+"# #t"+cape[i][0]+"# < " +cape[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 207;
		} else if (selection == 507) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < acc.length; i++){
				basetext += "#L"+i+"##i"+acc[i][0]+"# #t"+acc[i][0]+"# < " +acc[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 208;
		} else if (selection == 508) {
		var basetext = "자자 요즘 값진 신상품들이 많이나왔으니 어서 둘러보고 유행에 뒤쳐지기전에 사가란말이지 유행이란 오래가지 않는 것 이니 말이야!\r\n#b";
			for(var i = 0; i < weapone.length; i++){
				basetext += "#L"+i+"##i"+weapone[i][0]+"# #t"+weapone[i][0]+"# < " +weapone[i][1]+" 코인 >\r\n";
			}
			cm.sendSimple(basetext);
			status = 209;
		}
		} else if (status == 987) {
		if (cm.haveItem(4310092,sp[selection][1])) {
            if (!cm.canHold(sp[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
cm.gainItem(4310092,-sp[selection][1]);
			cm.gainItem(sp[selection][0],1);
			cm.sendOk("#b#i"+sp[selection][0]+"# #t"+sp[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 201) {
		if (cm.haveItem(4310092,cap[selection][1])) {
            if (!cm.canHold(cap[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-cap[selection][1]);
			cm.gainItem(cap[selection][0],1);
			cm.sendOk("#b#i"+cap[selection][0]+"# #t"+cap[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 202) {
		if (cm.haveItem(4310092,top[selection][1])) {
            if (!cm.canHold(top[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-top[selection][1]);
			cm.gainItem(top[selection][0],1);
			cm.sendOk("#b#i"+top[selection][0]+"# #t"+top[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 203) {
		if (cm.haveItem(4310092,pants[selection][1])) {
            if (!cm.canHold(pants[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-pants[selection][1]);
			cm.gainItem(pants[selection][0],1);
			cm.sendOk("#b#i"+pants[selection][0]+"# #t"+pants[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 204) {
		if (cm.haveItem(4310092,longcoat[selection][1])) {
            if (!cm.canHold(longcoat[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-longcoat[selection][1]);
			cm.gainItem(longcoat[selection][0],1);
			cm.sendOk("#b#i"+longcoat[selection][0]+"# #t"+longcoat[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 205) {
		if (cm.haveItem(4310092,glove[selection][1])) {
            if (!cm.canHold(glove[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-glove[selection][1]);
			cm.gainItem(glove[selection][0],1);
			cm.sendOk("#b#i"+glove[selection][0]+"# #t"+glove[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 206) {
		if (cm.haveItem(4310092,shose[selection][1])) {
            if (!cm.canHold(shose[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-shose[selection][1]);
			cm.gainItem(shose[selection][0],1);
			cm.sendOk("#b#i"+shose[selection][0]+"# #t"+shose[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 207) {
		if (cm.haveItem(4310092,cape[selection][1])) {
            if (!cm.canHold(cape[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-cape[selection][1]);
			cm.gainItem(cape[selection][0],1);
			cm.sendOk("#b#i"+cape[selection][0]+"# #t"+cape[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 208) {
		if (cm.haveItem(4310092,acc[selection][1])) {
            if (!cm.canHold(acc[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-acc[selection][1]);
			cm.gainItem(acc[selection][0],1);
			cm.sendOk("#b#i"+acc[selection][0]+"# #t"+acc[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if (status == 209) {
		if (cm.haveItem(4310092,weapone[selection][1])) {
            if (!cm.canHold(weapone[selection][0])) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
			cm.gainItem(4310092,-weapone[selection][1]);
			cm.gainItem(weapone[selection][0],1);
			cm.sendOk("#b#i"+weapone[selection][0]+"# #t"+weapone[selection][0]+"##k를 구매하였습니다.");
			cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
	} else if(status == 123){
		if(selection ==0) {
		if (cm.haveItem(4310092,1750)) {
            if (!cm.canHold(4032266)) {
                cm.sendOk("인벤토리가 부족합니다.");
                cm.safeDispose();
                return;
            }
		cm.gainItem(4032266,1);
		cm.gainItem(4310092,-1750);
		cm.sendOk("구매가 완료되었습니다.");
		cm.dispose();
		} else {
			cm.sendOk("선택하신 아이템을 구매하기엔 코인이 부족합니다.")
			cm.dispose();
		}
} else if(selection ==1) {
cm.dispose();
}
	} else if(status == 124){
		if(mode != 1){
			cm.sendOk("다시 생각해 보시고 말을 걸어주세요.");
			cm.dispose();
			return;
		}
		if (cm.haveItem(4310092,500 * selection)) {
		cm.gainItem(4310092,-500*selection);
		cm.gainItem(4001782,selection);
		cm.sendOk("#b핫타임 돌림판 티켓 "+selection+"장#k을 기타 인벤토리에 너어놓았다네.");
		cm.dispose();
		} else {
		cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
		cm.dispose();
		}
	} else if(status == 1001){
		if(mode != 1){
			cm.sendOk("다시 생각해 보시고 말을 걸어주세요.");
			cm.dispose();
			return;
		}
	custom = selection;
	cm.sendSimple("스텟을 부여하고 싶은 아이템을 선택해주세요.\r\n#b"+cm.EquipList(cm.getPlayer().getClient()));
	status = 2001;
	} else if(status == 1002){
		if(mode != 1){
			cm.sendOk("다시 생각해 보시고 말을 걸어주세요.");
			cm.dispose();
			return;
		}
	custom = selection;
	cm.sendSimple("스텟을 부여하고 싶은 아이템을 선택해주세요.\r\n#b"+cm.EquipList(cm.getPlayer().getClient()));
	status = 2002;

	} else if(status == 1003){
		if(mode != 1){
			cm.sendOk("다시 생각해 보시고 말을 걸어주세요.");
			cm.dispose();
			return;
		}
	custom = selection;
	cm.sendSimple("스텟을 부여하고 싶은 아이템을 선택해주세요.\r\n#b"+cm.EquipList(cm.getPlayer().getClient()));
	status = 2003;

	} else if(status == 1004){
		if(mode != 1){
			cm.sendOk("다시 생각해 보시고 말을 걸어주세요.");
			cm.dispose();
			return;
		}
	custom = selection;
	cm.sendSimple("스텟을 부여하고 싶은 아이템을 선택해주세요.\r\n#b"+cm.EquipList(cm.getPlayer().getClient()));
	status = 2004;

	} else if(status == 10){
		if (cm.haveItem(4310092,1500)) {
		cm.changeStat2(selection,15,cm.getItemStat(selection,15) + 1);
		cm.gainItem(4310092,-1500);
		cm.getPlayer().reloadChar();
		cm.sendOk("아이템의 업그레이드가능횟수가 #r+ 1#k 증가되었습니다.");
		cm.dispose();
		} else {
		cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
		cm.dispose();
		}
	} else if(status == 2001){
		if (cm.haveItem(4310092,300 * custom)) {
		if (cm.getItemStat(selection,0) <= 100) {
		cm.gainItem(4310092,-(300 * custom));
		cm.changeStat2(selection,0,cm.getItemStat(selection,0) + custom);
		cm.getPlayer().reloadChar();
		cm.sendOk("아이템의 STR이 #r+ "+custom+"#k 증가되었습니다.");
		cm.dispose();
		} else {
		cm.sendOk("선택하신 아이템의 STR 구매한도가 초과되었습니다.");
		cm.dispose();
		}
		} else {
		cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
		cm.dispose();
		}
	} else if(status == 2002){
		if (cm.haveItem(4310092,300 * custom)) {
		if (cm.getItemStat(selection,1) <= 100) {
		cm.gainItem(4310092,-(300 * custom));
		cm.changeStat2(selection,1,cm.getItemStat(selection,1) + custom);
		cm.getPlayer().reloadChar();
		cm.sendOk("아이템의 DEX가 #r+ "+custom+"#k 증가되었습니다.");
		cm.dispose();
		} else {
		cm.sendOk("선택하신 아이템의 DEX 구매한도가 초과되었습니다.");
		cm.dispose();
		}
		} else {
		cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
		cm.dispose();
		}
	} else if(status == 2003){
		if (cm.haveItem(4310092,300 * custom)) {
		if (cm.getItemStat(selection,2) <= 100) {
		cm.gainItem(4310092,-(300 * custom));
		cm.changeStat2(selection,2,cm.getItemStat(selection,2) + custom);
		cm.getPlayer().reloadChar();
		cm.sendOk("아이템의 INT가 #r+ "+custom+"#k 증가되었습니다.");
		cm.dispose();
		} else {
		cm.sendOk("선택하신 아이템의 INT 구매한도가 초과되었습니다.");
		cm.dispose();
		}
		} else {
		cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
		cm.dispose();
		}
	} else if(status == 2004){
		if (cm.haveItem(4310092,300 * custom)) {
		if (cm.getItemStat(selection,3) <= 100) {
		cm.gainItem(4310092,-(300 * custom));
		cm.changeStat2(selection,3,cm.getItemStat(selection,3) + custom);
		cm.getPlayer().reloadChar();
		cm.sendOk("아이템의 LUK이 #r+ "+custom+"#k 증가되었습니다.");
		cm.dispose();
		} else {
		cm.sendOk("선택하신 아이템의 LUK 구매한도가 초과되었습니다.");
		cm.dispose();
		}
		} else {
		cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
		cm.dispose();
		}
	} else if(status == 4){
		if (selection == 0) {
			if (cm.haveItem(4310092,3200)) {
			cm.gainItem(1003776,1);
			cm.gainItem(1082493,1);
			cm.gainItem(1052587,1);
			cm.gainItem(4310092,-3200);
			cm.sendOk("허허 좋아좋아, 거래가 성사되었다네.\r\n 앞으로 새로운 물건이 많이들어올 예정이니 기대하라구!");
			cm.dispose();
			} else {
			cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
			cm.dispose();
			}
			} else if (selection == 1) {
			if (cm.haveItem(4310092,4800)) {
			cm.gainItem(1003968,1);
			cm.gainItem(1082552,1);
			cm.gainItem(1072867,1);
			cm.gainItem(1052667,1);
			cm.gainItem(1702467,1);
			cm.gainItem(4310092,-4800);
			cm.sendOk("허허 좋아좋아, 거래가 성사되었다네.\r\n 앞으로 새로운 물건이 많이들어올 예정이니 기대하라구!");
			cm.dispose();
			} else {
			cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
			cm.dispose();
			}
		} else if (selection == 100) {
			if (cm.haveItem(4310092,3300)) {
			cm.gainItem(5060002,12);
			cm.gainItem(4310092,-3300);
			cm.sendOk("허허 좋아좋아, 거래가 성사되었다네.\r\n 앞으로 새로운 물건이 많이들어올 예정이니 기대하라구!");
			cm.dispose();
			} else {
			cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
			cm.dispose();
			}
		} else if (selection == 101) {
			if (cm.haveItem(4310092,1600)) {
			cm.gainItem(4000995,1);
			cm.gainItem(4310092,-1600);
			cm.sendOk("허허 좋아좋아, 거래가 성사되었다네.\r\n 앞으로 새로운 물건이 많이들어올 예정이니 기대하라구!");
			cm.dispose();
			} else {
			cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
			cm.dispose();
			}
		} else if (selection == 195) {
			if (cm.haveItem(4310092,8300)) {
			var SA = 0;
			var SD = 0;
			var SI = 0;
			var SL = 0;
			var AA = 0;
			var AD = 0;
			var AI = 0;
			var AL = 0;	
			var RC = 0;	
			var three = 0;
			var two = 0;
			var one = 0;
			var four = 0;
			var five = 0;
			var six = 0;
			var seven = 0;
			var eight = 0;
			var nine = 0;
				for(var i = 0; i < 10; i++){
				var rand = Math.floor(Math.random() * 19);
				switch(rand){
					case 0:SA = 4440001; one++; break;
					case 1:SD = 4441001; two++; break;
					case 2:SI = 4442001; three++; break;
					case 3:SL = 4443001; four++; break;
					case 4:AA = 4440101; five++; break;
					case 5:AD = 4441101; six++; break;
					case 6:AI = 4442101; seven++; break;
					case 7:AL = 4443101; eight++; break;
					case 8: RC = 4021037; nine++; break;
					case 9:AA = 4440101; five++; break;
					case 10:AD = 4441101; six++; break;
					case 11:AI = 4442101; seven++; break;
					case 12:AL = 4443101; eight++; break;
					case 13:RC = 4021037; nine++; break;
					case 14:
					case 15:
					case 16:
					case 17:
					case 18:
					case 19:break;

				}
			}
			var goodsItem = [];
			var goodsCount = [];
			var num = [[4440001,one], [4441001,two], [4442001,three], [4443001,four], [4440101,five], [4441101,six], [4442101,seven], [4443101,eight], [4021037,nine]];
			var str = "자 보석함을 열어서 주겠네 이보석함은 나밖에는 열수 없으니 말이야 안에 내용물들을 확인해보라구\r\n#b";
			for(var i = 0;i < num.length; i ++){
				if(num[i][1] == 0){
					continue;
				}
				str += "#i"+num[i][0]+"# #t"+num[i][0]+"# : " + num[i][1] + "개\r\n"	
				goodsItem.push(num[i][0]);
				goodsCount.push(num[i][1]);	
			}
			for(var i = 0;i < goodsItem.length; i ++){
				cm.gainItem(goodsItem[i], goodsCount[i])
		
			}	
			cm.gainItem(4310092,-8300);
			cm.sendOk(str);		
			cm.dispose();
			} else {
			cm.sendOk("선택한 아이템을 구매하기에는 코인이 부족한거같은데 말이야...");
			cm.dispose();
			}
		} else if (selection == 10000) {
			cm.sendOk("다른아이템도 많으니 천천히 둘러보게나.");
			cm.dispose();
		} 
	}
}