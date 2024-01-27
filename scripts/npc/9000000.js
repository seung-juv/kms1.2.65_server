/* 
EpionWorld Season.2 : REVOLUTION
The client version is the release KMS 1.2.65
All of Server structure made by : 토리(epionms_)
Please do not sharing all of them
*/

importPackage(java.util);

var selections;
var now = new Date();
var year= now.getFullYear();
var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
var hour = now.getHours();
var minutes = now.getMinutes();
var item = [[5060002,1000,1],[4220000, 350 , 1], [2070010, 1100, 1], [4004004,500,1]];
var cmode = 0;
var wantt = 12;
var prize = new Array(5060002,5060002,5060002,5060002,5060002,4220000,2000004,2000005,2049100,4032266,4020013,4020009);
var qty = new Array(3,3,1,4,5,2,50,30,1,1,1,1); 
var ca = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(direct, type, select) {
    if (direct == -1) {
        cm.dispose();
    } else {
        if (direct == 0 && status >= 0) {
            cm.dispose();
            return;
        }
        if (direct == 1)
            status++;
        else
            status--;
	if (status == 0) {
	var customData = cm.getQuestRecord(123457);
	if(customData.getCustomData() == null){
		customData.setCustomData("0");
	}
	if (cm.getPlayer().getLevel() >= 30) {
	var time = java.lang.Long.parseLong(customData.getCustomData());
	    		if(time + wantt * 1000 * 3600 < java.lang.System.currentTimeMillis()){
			customData.setCustomData(java.lang.System.currentTimeMillis()+"");
     var sel = Math.floor(Math.random()*prize.length);
     cm.gainItem(prize[sel],qty[sel]);
	cm.gainMeso(50000);
	cm.sendOk("#e#r오늘의 출석체크가 완료되었습니다!#k#n\r\n오늘도 이피온 월드에 방문해주셔서 감사합니다. 항상 저희 서버를 즐겨주시는 "+cm.getPlayer().getName()+"님께 작은 선물을 드리겠습니다!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i"+prize[sel]+"##b #t"+prize[sel]+"# "+qty[sel]+"개\r\n#i4430000# 50,000메소");
	//cm.getPlayer().ServerNotice("알림 : "+cm.getPlayer().getName()+"(Lv."+cm.getPlayer().getLevel()+") 님이 출석체크 하셨습니다.");
	cm.dispose();
		} else {
            cm.sendSimple("안녕하세요 저는 이피온월드에 메인엔피시인 폴 이라고 합니다 오늘은 참 날씨가좋네요 이런날 토리님이 이벤트한번 딱 쏴줘야하는데말이죠 안그런가요?\r\n#r현재 총 접속자 : "+cm.getPlayer().getAllconnection()+"\r\n핫타임 일정 : 없음\r\n#b#L0#이피온월드 랭킹확인하기#l\r\n#L4#퀘스트보상 못받은것 받기#l\r\n#L127#몬스터 드랍정보 확인하기#l\r\n#L130#캐릭터 중성화 하기 / 해제하기#l\r\n");
	    }
		} else {
	cm.sendSimple("안녕하세요 저는 이피온월드에 메인엔피시인 폴 이라고 합니다 오늘은 참 날씨가좋네요 이런날 토리님이 이벤트한번 딱 쏴줘야하는데말이죠 안그런가요?\r\n#r현재 총 접속자 : "+cm.getPlayer().getAllconnection()+"\r\n핫타임 일정 : 없음\r\n#b#L0#이피온월드 랭킹확인하기#l\r\n#L4#퀘스트보상 못받은것 받기#l\r\n#L127#몬스터 드랍정보 확인하기#l\r\n#L130#캐릭터 중성화 하기#l\r\n");
}
	    } else if (status == 1) {
	    if (select == 0) {
		//if (cm.TimeCheck(18,20)) {
            selections = "#L0#토탈월드랭킹 확인하기#l\r\n";
            selections += "#L1#직업별랭킹 확인하기#l\r\n";
            selections += "#L2#마이랭킹 확인하기#l\r\n";
            selections += "#L3#길드랭킹 확인하기#l";
            if (hour > 12) {
                hour = hour - 12;
                var nowing = "오후";
            } else {
                var nowing = "오전";
            }
            cm.sendSimple("#e<Epion Ranking>#n\r\n안녕하세요 이피온월드의 종합랭킹을 알려드립니다.\r\n마지막 랭킹 업데이트 : #r" + year +"년 " + mon +"월 " + day +"일 " + nowing +  " " + hour +"시 " + minutes +"분#k\r\n#b" + selections);
	//} else {
		//cm.sendOk("랭킹 종합 결산은 오후 6시부터 8시에 진행됩니다.");
		//cm.dispose();
//}   
	 } else if (select == 1) {
	    cm.warp(123456788);
            cm.dispose();
	    } else if (select == 126) {
  cm.getClient().getChannelServer().reloadEvents();
	cm.sendOk("이제 카니발이 가능합니다.");
		cm.dispose();
	    } else if (select == 127) {
		cm.dispose();
		cm.openNpc(9900000);
		} else if (select == 130) {
	var customData = cm.getQuestRecord(50011);
	if (cm.getPlayer().getGender() != 2) {
	cm.getPlayer().setGender(2);
	cm.getPlayer().saveToDB(false,false);
	cm.getPlayer().reloadChar();
	cm.sendOk("#e#r<주의사항>#n#k\r\n중성상태가되어 이제부터 최신모자를 착용할수 있습니다. 하지만 성별별로 보상을주는 퀘스트나, 결혼 , 커플링등 성별별로 하는 시스템을 이용할때엔 다시이버튼을 눌러서 중성상태를 해제해주세요.");
	cm.dispose();
	} else if (cm.getPlayer().getGender() == 2 && customData.getCustomData() == "남자") {
	cm.getPlayer().setGender(0);
	cm.getPlayer().saveToDB(false,false);
	cm.getPlayer().reloadChar();
	cm.sendOk("중성상태가 해제되었습니다.");
	cm.dispose();
	} else if (cm.getPlayer().getGender() == 2 && customData.getCustomData() == "여자") {
	cm.getPlayer().setGender(1);
	cm.getPlayer().saveToDB(false,false);
	cm.getPlayer().reloadChar();
	cm.sendOk("중성상태가 해제되었습니다.");
	cm.dispose();
	}
	    } else if (select == 2) {
	    cm.sendSimple("\r\n현재 진행중인 이벤트 리스트 입니다.\r\n#b#L1000#(01/17 ~ 02/28) 확성기세트 무료로 받기#l\r\n#L1001#(02/1 ~ 02/03) 2014 한복 무료로 받기#l\r\n");
       	    } else if (select == 4) {
	    cm.dispose();
	    cm.openNpc(9900001);
       	    } else if (select == 3) {
		cm.sendSimple("이동기스킬 리스트입니다 해당하는 이동기를 클릭해주세요.\r\n#r(!) 플점은 SP20, 소울런은 SP10을 소모하오니 4차후배우시는걸추천합니다.\r\n#b#L420#플래시점프 배우기 (시프마스터)#l\r\n#L430#소울러너 배우기 (2차이상 전사,궁수,인파이터)#l");
		ca = 1;
}
	 } else if (status == 2) {
		if (ca == 1 && select == 420) {
		if (cm.getJob() == 421 || cm.getJob() == 422) {
	cm.teachSkill(4111006,20,20);
        cm.getPlayer().changeKeybinding(42,1,4111006);
	cm.sendOk("채널을 이동하시면 #bSHIFT#k키에 플래시점프가 장착됩니다.");
	cm.dispose();
		} else {
		cm.sendOk("시프마스터만 배울수 있습니다.");
                cm.dispose();
		}
		}
		if (ca == 1 && select == 430) {
		if (cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 510 || cm.getJob() == 320 || cm.getJob() == 310 || cm.getJob() == 111 || cm.getJob() == 112 || cm.getJob() == 121 || cm.getJob() == 122 || cm.getJob() == 131 || cm.getJob() == 132 || cm.getJob() == 311 || cm.getJob() == 312 || cm.getJob() == 321 || cm.getJob() == 322 || cm.getJob() == 511 || cm.getJob() == 512) {
	cm.teachSkill(11101005,10,10);
        cm.getPlayer().changeKeybinding(42,1,11101005);
	cm.sendOk("채널을 이동하시면 #bSHIFT#k키에 소울러너가 장착됩니다.");
	cm.dispose();
		} else {
		cm.sendOk("2차이상의 전사,궁수,인파이터만 배울수 있습니다.");
                cm.dispose();
		}
		}
            if (select == 0) {
                cm.sendOk("#e<Epion TotalRanking>#n\r\n\r\n"+cm.getRanking("전체"));
                cm.dispose();
	    } else if (select == 1000) {
		cm.sendOk("이벤트가 종료되었습니다.");
		cm.dispose();
	    } else if (select == 1001) {
		cm.sendOk("이벤트가 종료되었습니다.");
		cm.dispose();
	    } else if (select == 1) {
                selections;
                selections = "#L0#전사#l　";
                selections += "#L1#마법사#l　";
                selections += "#L2#궁수#l　";
                selections += "#L3#도적#l　";
                selections += "#L4#해적#l";
                cm.sendSimple("#e<Epion JobRanking>#n\r\n랭킹확인을 하고싶으신 직업을 선택해주세요.\r\n#b"+selections);
            } else if (select == 2) {
                cm.sendOk(cm.getRanking("내랭킹"));
                cm.dispose();
            } else if (select == 3) {
    cm.displayGuildRanks();
                cm.dispose();
            }
        } else if (status == 3) {
            if (select == 0) {
                cm.sendOk("#e<Epion JobRanking>#n\r\n이피온월드 전사랭킹\r\n\r\n"+ cm.getRanking("전사"));
                cm.dispose();
            } else if (select == 1) {
                cm.sendOk("#e<Epion JobRanking>#n\r\n이피온월드 마법사랭킹\r\n\r\n"+ cm.getRanking("마법사"));
                cm.dispose();
            } else if (select == 2) {
                cm.sendOk("#e<Epion JobRanking>#n\r\n이피온월드 궁수랭킹\r\n\r\n"+ cm.getRanking("궁수"));
                cm.dispose();
            } else if (select == 3) {
                cm.sendOk("#e<Epion JobRanking>#n\r\n이피온월드 도적랭킹\r\n\r\n"+ cm.getRanking("도적"));
                cm.dispose();
            } else if (select == 4) {
                cm.sendOk("#e<Epion JobRanking>#n\r\n이피온월드 해적랭킹\r\n\r\n"+ cm.getRanking("해적"));
                cm.dispose();
            }
        }
    }
}

