var status = -1;
var beauty = 0;
var newAvatar;
var needItemHair = 4310092;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
       cm.sendSimple("안녕하세요, 이피온 스페셜 뷰티샵에 오신 것을 환영해요.\r\n단돈 #r2000 리얼코인#k으로 최신유행하는 헤어,얼굴로 스페셜 하게 바꿔드립니다.\r\n#b#L0#최신 스타일로 머리자르기#l\r\n#L1#최신 스타일로 성형하기#l\r\n");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            newAvatar = [];
            beauty = 1;
            var curColor = hair % 10;
            var customData = cm.getQuestRecord(50011);
            if (customData.getCustomData() == "남자") {
                newAvatar = [33150,36680,33280,36310,35180,35190,35210,33430,31990,36770,35090,36900,35060,35070,36920,35050,36400,35000,35020,35030,36430,36980,36450,36860,36790,36800,36810,36830,36820,36780,36750,36760,36690,36700,36710,36720,36730,36300,36640,36650,36580,36590,36570,36530,36510,36520,36350,36420,36330,36470,36410,36380];
            } else {
                newAvatar = [31800,34770,37560,38310,34210,34450,34250,38290,37190,38070,38110,38120,37920,38090,38100,37880,38020,38030,38040,38060,37990,38000,38010,37980,37960,37940,37950,37620,37860,37790,37840,37750,37760,37740,37770,37850,37830,37810,37780,37800,37730,37720,37690,37580,37570,37700,37640,37260,37380,37370,37520,37450,37510,37710,37630,37500];
            }
            cm.askAvatar("오호호~ 어떤 헤어스타일을 원하시나요 고객님?", newAvatar);
        } else if (selection == 1) {
	cm.dispose();
	cm.openNpc(2430011);
        }
    } else if (status == 2) {
        if (beauty == 1){
		if (cm.haveItem(4310092,2000)) {
            if (cm.setAvatar(needItemHair, newAvatar[selection]) == 1) {
                cm.sendOk("자~ 다 되었답니다. 어떠세요? 저희 미용실만의 최고의 솜씨를 발휘해 보았답니다.");
		cm.gainItem(4310092,-1999);
            } else {
                cm.sendOk("죄송하지만 리얼코인이 부족한것 같은데요?");
            }
	    } else {
		cm.sendOk("죄송하지만 리얼코인이 부족한것 같은데요?");
		}
        }
        cm.dispose();
    }
}
