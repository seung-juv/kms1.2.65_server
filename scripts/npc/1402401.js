
var status = 0;

function action(mode, type, selection){

if (status == 0) {
cm.sendSimple("지금은 사라져버린 고대도시 아스완의 슬픔은 자네는 아는가 우리는 국가를 위해 노력을 해왔는데 어떻게 우리 도시를 매장시켜버릴수 있는 것이지 나는 이 분노의 복수를 힐라님과 함께하겠다.\r\n#b#L0#힐라의 탑으로 입장한다. (Lv.100)#l\r\n");
status++;
} else if (status == 1) {
if (selection == 0) {
if (cm.getPlayer().getLevel() >= 100) {
cm.warp(262030000);
cm.playMusic(true,"Bgm14/DragonLoad");
cm.dispose();
} else {
cm.sendOk("Lv.100 이상의 모험가만 입장할수 있습니다.");
cm.dispose();
}
}
}
}