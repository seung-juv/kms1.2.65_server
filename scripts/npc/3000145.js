
var status = 0;

function action(mode, type, selection){

if (status == 0) {
cm.sendSimple("저는 그들의 눈을 속이기 위해 이런모습을 하고 있지만 저의 정신은 완전히 돌아온 상태랍니다 당신들 이부디 검은마법사의 사제 아카이럼을 저지해주시기 바랍니다.\r\n#b#L0#아카이럼의 제단 앞으로 입장한다. (Lv.120)#l\r\n");
status++;
} else if (status == 1) {
if (selection == 0) {
if (cm.getPlayer().getLevel() >= 120) {
cm.warpParty(272020110);
cm.playMusic(true,"Bgm16/Duskofgod");
cm.dispose();
} else {
cm.sendOk("Lv.120 이상의 모험가만 입장할수 있습니다.");
cm.dispose();
}
}
}
}