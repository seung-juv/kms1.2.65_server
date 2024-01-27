var status = 0;

var min = 60;
var max = 90;

function action(mode, type, selection){
if(status == 0){
cm.sendSimple("#e#r<파티 퀘스트 : 암벽너머의 괴음>#k#n\r\n\r\n#b권장레벨 : Lv.60~90\r\n파티인원수 : 3~6명#k\r\n수십년간 수면기에 든 도중 몇일전부터 몸속 어딘가에서 나를 지배하려드는 사악한 기운이 느껴지기 시작하였다 부디 나를 통제해주기를...\r\n#b#L0#파티원들과 당신의 몸속을 탐사하겠습니다.\r\n#L1#아이템을 교환하고싶습니다.#l\r\n#L2#페리온으로 귀환하고 싶습니다.#l");
status++;
} else if (status == 1) {
if (selection == 1) {
cm.sendSimple("내 몸속에 악의 근원을 저지한 증거를 가져온다면 수호신 이라는 이름에 걸맞는 보상을 선물하도록 하지.\r\n#e#r\r\n<거미의 더듬이>#k#n#b\r\n#L0#체력 50 교환하기 (2개)#l\r\n#L1#마력 30 교환하기 (2개)#l\r\n\r\n#k\r\n#r#e<반짝이는 더듬이>#n#k\r\n#b#L2#크리세 구원자의 훈장 (30개)#l\r\n#L3#불멸의 파라오의 반지 (25개)#l\r\n#L4#불멸의 파라오의 신발 (25개)#l\r\n#L5#불멸의 파라오의 벨트 (25개)#l\r\n#L6#베인 스워드 (20개)#l\r\n#L7#베인 롱보우 (20개)#l\r\n#L8#베인 바이터 (20개)#l\r\n#L9#베인 슈터 (20개)#l\r\n#L10#베인 윙즈 (20개)#l");
status++;
} else if (selection == 2) {
cm.warp(102000000);
cm.dispose();
} else if (selection == 0) {
if (cm.getParty() != null) {
if (cm.isLeader()) {
if (cm.getPlayer().getParty().getMembers().size() >= 3) {
if (cm.getPlayer().partyMembersInMap() == cm.getPlayer().getParty().getMembers().size()) {
if (cm.getPlayerCount(240093000) == 0 && cm.getPlayerCount(240093310) == 0 && cm.getPlayerCount(240093100) == 0) {
if (cm.getPlayer().getLevel() >= min && cm.getPlayer().getLevel() <= max) {
var party = cm.getParty().getMembers();
var it = party.iterator();
 while (it.hasNext()) {
            var cPlayer = it.next();
            if (cPlayer.getLevel() >= min && cPlayer.getLevel() <= max) {
cm.removeAll(4001008);
cm.removeAll(4001007);
cm.warpParty(240093000);
cm.partyMessage("제한시간 안에 몬스터를 쓰러뜨려 타락의 근원을 찾아내세요.");
cm.showEffect(true, "monsterPark/stageEff/stage");
cm.showEffect(true, "monsterPark/stageEff/number/1");
cm.showEffect(true, "Gstar/start");
cm.dispose();
            } else {
cm.warpParty(240092101);
cm.sendOk("권장레벨에 맞지 않은 파티원이 존재합니다.");
cm.dispose();
            }
}
            } else {
cm.warpParty(240092101);
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
if (cm.haveItem(4009041,2)) {
cm.gainItem(4009041,-2);
cm.getPlayer().getStat().setMaxHp(cm.getPlayer().getStat().getMaxHp()+50,cm.getPlayer());
cm.getPlayer().reloadChar();
cm.sendOk("자네의 최대 HP 가 50 상승하였네.");
cm.dispose();
} else {
cm.sendOk("거미의 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 1) {
if (cm.haveItem(4009041,2)) {
cm.gainItem(4009041,-2);
cm.getPlayer().getStat().setMaxMp(cm.getPlayer().getStat().getMaxMp()+30,cm.getPlayer());
cm.getPlayer().reloadChar();
cm.sendOk("자네의 최대 MP 가 30 상승하였네.");
cm.dispose();
} else {
cm.sendOk("거미의 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 2) {
if (cm.haveItem(4000990,30)) {
cm.gainItem(4000990,-30);
cm.gainItem(1142259,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 3) {
if (cm.haveItem(4000990,25)) {
cm.gainItem(4000990,-30);
cm.gainItem(1112682,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 4) {
if (cm.haveItem(4000990,25)) {
cm.gainItem(4000990,-25);
cm.gainItem(1072619,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 5) {
if (cm.haveItem(4000990,25)) {
cm.gainItem(4000990,-25);
cm.gainItem(1132013,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 6) {
if (cm.haveItem(4000990,20)) {
cm.gainItem(4000990,-20);
cm.gainItem(1402062,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 7) {
if (cm.haveItem(4000990,20)) {
cm.gainItem(4000990,-20);
cm.gainItem(1452071,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 8) {
if (cm.haveItem(4000990,20)) {
cm.gainItem(4000990,-20);
cm.gainItem(1472086,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 9) {
if (cm.haveItem(4000990,20)) {
cm.gainItem(4000990,-20);
cm.gainItem(1492037,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
} else if (selection == 10) {
if (cm.haveItem(4000990,20)) {
cm.gainItem(4000990,-20);
cm.gainItem(1382068,1);
cm.sendOk("자 인벤토리를 확인해보게.");
cm.dispose();
} else {
cm.sendOk("반짝이는 더듬이가 확실하게 있는지 확인해보게.");
cm.dispose();
}
}
}
}