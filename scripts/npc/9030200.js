var status = 0;

function action(mode, type, selection) {
var person = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar());
if (status == 0) {
if (person.getMapId() != 910000020) {
cm.sendOk("거래자를 찾을수 없어 거래가 종료됩니다.");
person.setTradeid(0);
person.setTrademeso(0);
person.setTradechar(0);
cm.getPlayer().setTrademe(0);
cm.getPlayer().setTradechar(0);
cm.dispose();
} else {
cm.sendYesNo("#e<거래 신청자 : "+person.getName()+">#n\r\n\r\n#r거래 아이템 :#k #i"+person.getTradeid()+"# #t"+person.getTradeid()+"#\r\n#b거래 금액 :#k "+person.getTrademeso()+"메소\r\n\r\n위의 내용으로 거래신청이 들어왔습니다 구매를 원하시면 확인버튼을, 원하지 않으실경우에는 취소버튼을 눌러주세요.");
status ++;
}
} else if (status == 1){
if (mode != 1) {
cm.getPlayer().dropMessage(1,"거래를 거부하였습니다.");
person.dropMessage(1,"상대방이 거래를 거부하였습니다.");
person.setTradeid(0);
person.setTrademeso(0);
person.setTradechar(0);
cm.getPlayer().setTrademe(0);
cm.getPlayer().setTradechar(0);
cm.dispose();
} else {
if (person.haveItem(person.getTradeid())) {
if (person.hasEquipped(person.getTradeid())) {
cm.getPlayer().dropMessage(1,"상대방이 아이템을 착용하고있어 거래가 취소되었습니다.");
person.dropMessage(1,"상대방이 아이템을 착용하고있어 거래가 취소되었습니다.");
person.setTradeid(0);
person.setTrademeso(0);
person.setTradechar(0);
cm.getPlayer().setTrademe(0);
cm.getPlayer().setTradechar(0);
cm.dispose();
} else {
cm.getPlayer().dropMessage(1,"거래가 성사되었습니다.");
person.dropMessage(1,"거래가 성사되었습니다.");
cm.gainItem(person.getTradeid(),1);
cm.gainMeso(-person.getTrademeso());
person.gainMeso(person.getTrademeso(),true);
person.removeItem(person.getTradeid(),-1);
person.setTradeid(0);
person.setTrademeso(0);
person.setTradechar(0);
cm.getPlayer().setTrademe(0);
cm.getPlayer().setTradechar(0);
cm.dispose();
}
} else {
cm.sendOk("상대방의 인벤토리에서 거래아이템을 찾을수없습니다.");
person.setTradeid(0);
person.setTrademeso(0);
person.setTradechar(0);
cm.getPlayer().setTrademe(0);
cm.getPlayer().setTradechar(0);
cm.dispose();
}
}
}
}