﻿var status = 0;

function action(mode, type, selection){
if(status == 0){
cm.sendSimple("쉼터에서만 이용하실수 있는 특별한 게이트 이다. 워프캡슐을통하여 어디든 이동이가능하며 이전에 저장되있던 맵, 낚시터도 이동할수 있는 것 같다.\r\n#L0##b저장된 맵으로 이동한다.#l\r\n#L1#이피온 워프캡슐을 사용한다.#l\r\n#L2#이피온월드 낚시터로 이동한다.#l\r\n");
status++;
} else if(status == 1){
if (selection == 0) {
cm.warp(cm.getPlayer().getLocation());
cm.dispose();
} else if (selection == 1) {
cm.sendSimple(" #e<#n #i4220000# #r이피온 프리미엄워프캡슐 : 현재 "+cm.getPlayer().getItemQuantity(4220000,false)+"개 보유중#k#e >#n \r\n#L100000000##b헤네시스#l　#L200000000#오르비스#l　#L220000000#루디브리엄#l\r\n#L230000000#아쿠아리움#l#L222000000#아랫마을#l　#L211000000#엘나스#l\r\n#L240000000#리프레#l      #L261000000#마가티아#l   #L221000000#지구방위본부#l\r\n#L250000000#무릉도원#l   #L260000000#아리안트#l   #L300000000#엘린 숲#l");
status++;
} else if (selection == 2) {
if (cm.getPlayer().getClient().getChannel() == 1) {
cm.warp(123456788);
cm.dispose();
} else {
cm.sendOk("1채널에서 이용가능한 서비스 이다.");
cm.dispose();
}
}
} else if(status == 2){
if (cm.haveItem(4220000,1)) {
cm.warp(selection);
cm.gainItem(4220000,-1);
cm.dispose();
} else {
cm.sendOk("이피온 프리미엄 워프캡슐이 없으면 사용할수없다.");
cm.dispose();
}
}
}