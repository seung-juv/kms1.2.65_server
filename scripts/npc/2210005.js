var status = 0;

var min = 83;
var max = 110;

function action(mode, type, selection){
if(status == 0){
cm.sendSimple("#e#r<파티 퀘스트 : 숲의 위협>#k#n\r\n\r\n#b권장레벨 : Lv.83~100\r\n파티인원수 : 3~6명#k\r\n역시나도 암벽상층 너머에는 수호신을 지배하려들던 다른 소행들이 침공중이였어요 전보다는 더욱 강력한 몬스터들인것 같습니다. 부디 여러분이 힘을모아 몬스터들을 저지해주시기 바랍니다.\r\n#b#L0#암벽너머로 입장하겠습니다.\r\n#L1#아이템을 교환하고싶습니다.#l\r\n#L2#페리온으로 귀환하고 싶습니다.#l");
status++;
} else if (status == 1) {
if (selection == 1) {
cm.sendSimple("좋습니다 당신이 암벽 너머에서 다가오는 위협을 저지했다는 증거만 있다면 그에 걸맞는 아이템으로 교환해드리도록 하겠습니다. 아래중 선택해주세요.\r\n\r\n#r#e<크세르 크세스의 목걸이>#k#n\r\n#b#L0#세계수의 수호자 훈장 (30개)#l\r\n#b#L3#렉스의 그린 이어링 (25개)#l\r\n#b#L4#렉스의 레드 이어링 (25개)#l\r\n#b#L5#렉스의 블루 이어링 (25개)#l");
status++;
} else if (selection == 2) {
cm.warp(102000000);
cm.dispose();
} else if (selection == 0) {
if (cm.getParty() != null) {
if (cm.isLeader()) {
if (cm.getPlayer().getParty().getMembers().size() >= 3) {
if (cm.getPlayer().partyMembersInMap() == cm.getPlayer().getParty().getMembers().size()) {
if (cm.getPlayerCount(240090400) == 0) {
if (cm.getPlayer().getLevel() >= min && cm.getPlayer().getLevel() <= max) {
var party = cm.getParty().getMembers();
var it = party.iterator();
 while (it.hasNext()) {
            var cPlayer = it.next();
            if (cPlayer.getLevel() >= min && cPlayer.getLevel() <= max) {
cm.removeAll(4001008);
cm.removeAll(4001007);
cm.warpParty(240090400);
cm.partyMessage("지미를 통해 파티퀘스트를 진행해주세요.");
cm.showEffect(true, "Gstar/start");
cm.dispose();
            } else {
cm.warpParty(240092000);
cm.sendOk("권장레벨에 맞지 않은 파티원이 존재합니다.");
cm.dispose();
            }
}
            } else {
cm.sendOk("권장레벨에 맞지 않은 파티원이 존재합니다.");
cm.dispose();
            }
            } else {
cm.sendOk("이미 다른파티가 도전중입니다.");
cm.dispose();
            }
} else {
cm.sendOk("파티원이 모두 맵에 모여있지 않습니다.");
cm.dispose();
}
} else {
cm.sendOk("최소 파티인원은 3명입니다.");
cm.dispose();
}
} else {
cm.sendOk("파티장을 통해 입장해주세요.");
cm.dispose();
}
} else {
cm.sendOk("파티를 생성또는 가입후 도전하실수 있습니다.");
cm.dispose();
}
}
} else if (status == 2) {
if (selection == 0) {
if (cm.haveItem(4032911,30)) {
cm.gainItem(4032911,-30);
cm.gainItem(1142536,1);
cm.sendOk("아이템을 교환해드렸습니다 인벤토리를 확인해주세요.");
cm.dispose();
} else {
cm.sendOk("크세르 크세스의 목걸이가 부족한것 같습니다.");
cm.dispose();
}
} else if (selection == 1) {
if (cm.haveItem(4032911,20)) {
cm.gainItem(4032911,-20);
cm.gainItem(1003039,1);
cm.sendOk("아이템을 교환해드렸습니다 인벤토리를 확인해주세요.");
cm.dispose();
} else {
cm.sendOk("크세르 크세스의 목걸이가 부족한것 같습니다.");
cm.dispose();
}
} else if (selection == 2) {
if (cm.haveItem(4032911,30)) {
cm.gainItem(4032911,-30);
cm.gainItem(1022114,1);
cm.sendOk("아이템을 교환해드렸습니다 인벤토리를 확인해주세요.");
cm.dispose();
} else {
cm.sendOk("크세르 크세스의 목걸이가 부족한것 같습니다.");
cm.dispose();
}
} else if (selection == 3) {
if (cm.haveItem(4032911,20)) {
cm.gainItem(4032911,-20);
cm.gainItem(1003039,1);
cm.sendOk("아이템을 교환해드렸습니다 인벤토리를 확인해주세요.");
cm.dispose();
} else {
cm.sendOk("크세르 크세스의 목걸이가 부족한것 같습니다.");
cm.dispose();
}
} else if (selection == 3) {
if (cm.haveItem(4032911,20)) {
cm.gainItem(4032911,-20);
cm.gainItem(1032077,1);
cm.sendOk("아이템을 교환해드렸습니다 인벤토리를 확인해주세요.");
cm.dispose();
} else {
cm.sendOk("크세르 크세스의 목걸이가 부족한것 같습니다.");
cm.dispose();
}
} else if (selection == 4) {
if (cm.haveItem(4032911,20)) {
cm.gainItem(4032911,-20);
cm.gainItem(1032078,1);
cm.sendOk("아이템을 교환해드렸습니다 인벤토리를 확인해주세요.");
cm.dispose();
} else {
cm.sendOk("크세르 크세스의 목걸이가 부족한것 같습니다.");
cm.dispose();
}
} else if (selection == 5) {
if (cm.haveItem(4032911,20)) {
cm.gainItem(4032911,-20);
cm.gainItem(1032079,1);
cm.sendOk("아이템을 교환해드렸습니다 인벤토리를 확인해주세요.");
cm.dispose();
} else {
cm.sendOk("크세르 크세스의 목걸이가 부족한것 같습니다.");
cm.dispose();
}
}
}
}