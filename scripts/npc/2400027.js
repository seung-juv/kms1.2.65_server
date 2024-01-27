var status = 0;

var gpshop = [[5122000,2000],[5121015,1800],[5121016,1600]];

function action(mode, type, selection) {

if (status == 0) {
if (cm.getPlayer().getTrademe() == 0) {
cm.sendSimple("안녕하세요 저는 워레나 입니다. 교환할수 없는 기타 아이템이나 또는 캐쉬아이템을 거래하고싶어서 오셨다면 잘 찾아오셨습니다. 거래를 하기전에는 #r주의사항#k을 꼭 읽어보시고 거래해주시기 바랍니다.\r\n#b#L0#캐쉬아이템을 거래하고싶습니다.#l\r\n#L1#기타아이템을 거래하고싶습니다.#l");
status++;
} else {
cm.dispose();
cm.openNpc(9030200);
}
} else if (status == 1){
if (selection == 0) {
if (cm.getPlayer().getTradeid() == 0) {
cm.sendGetText("캐쉬아이템을 거래할 유저의 닉네임을 입력해주세요.\r\n#r#e(!)#n 거래상대가 쉼터에 있을시 거래됩니다.#k");
status = 2;
} else { 
cm.sendOk("먼저하신 거래를 완료하신후 진행해주세요.");
cm.dispose();
}
} else if (selection == 1) {
if (cm.getPlayer().getTradeid() == 0) {
cm.sendGetText("기타아이템을 거래할 유저의 닉네임을 입력해주세요.\r\n#r#e(!)#n 거래상대가 쉼터에 있을시 거래됩니다.#k");
status = 3;
} else { 
cm.sendOk("먼저하신 거래를 완료하신후 진행해주세요.");
cm.dispose();
}
} else if (selection == 2) {
var basetext = "한 길드의 구성원이라면 길드의 노력의 결실인 #rGP#k로 아래의 상품을 구매 또는 선물을 할수있습니다.\r\n#b";
for(var i = 0; i < gpshop.length; i++){
basetext += "#L"+i+"#"+gpshop[i][1]+"GP :  #i"+gpshop[i][0]+"# #t"+gpshop[i][0]+"#\r\n";
}
cm.sendSimple(basetext);
status = 100;
}
} else if (status == 100) {
if (cm.getGP() >= gpshop[selection][1]) {
cm.sendOk("#i"+gpshop[selection][0]+"# #b#t"+gpshop[selection][0]+"##k (#r"+gpshop[selection][1]+"GP#k)를 구매하였습니다.");
cm.gainGP(-gpshop[selection][1]);
cm.gainItem(gpshop[selection][0],1);
cm.dispose();
} else {
cm.sendOk("아이템을 구매하시기에는 길드포인트(GP)가 부족합니다.");
cm.dispose();
}
} else if (status == 2){
if (cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()).getMapId() == 910000020) {
cm.getPlayer().setTradechar(cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()).getId());
cm.sendSimple("아래의 리스트는 당신의 장비 인벤토리의 목록 입니다.\r\n어떤 아이템을 거래하시겠습니까?\r\n#r#e(!)#n 캐쉬아이템의 옵션은 초기화 되서 거래됩니다.\r\n#k#b"+cm.EquipListToid(cm.getPlayer().getClient()));
status = 10;
} else {
cm.sendOk("거래대상을 쉼터에서 찾을수 없습니다.");
cm.dispose();
}
} else if (status == 3){
if (cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()).getMapId() == 910000020) {
cm.getPlayer().setTradechar(cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText()).getId());
cm.sendSimple("아래의 리스트는 당신의 기타 인벤토리의 목록 입니다.\r\n어떤 아이템을 거래하시겠습니까?\r\n#b"+cm.ETCListToid(cm.getPlayer().getClient()));
status = 11;
} else {
cm.sendOk("거래대상을 쉼터에서 찾을수 없습니다.");
cm.dispose();
}
} else if (status == 10){
cm.getPlayer().setTradeid(selection);
if (cm.isCash(cm.getPlayer().getTradeid())) {
cm.sendGetText("아래에 원하시는 거래 금액을 입력해주세요.");
status = 20;
} else {
cm.sendOk("캐쉬아이템만 거래가 가능합니다.");
cm.getPlayer().setTradeid(0);
cm.dispose();
}
} else if (status == 11){
cm.getPlayer().setTradeid(selection);
cm.sendGetText("아래에 원하시는 거래 금액을 입력해주세요.");
status = 21;
} else if (status == 20) {
cm.getPlayer().setTrademeso(cm.getText());
cm.sendYesNo("#r거래 아이템 :#k #i"+cm.getPlayer().getTradeid()+"# #t"+cm.getPlayer().getTradeid()+"#\r\n#b거래 금액 :#k "+cm.getPlayer().getTrademeso()+"메소\r\n\r\n위의 내용으로 거래를 신청하시려면 확인버튼을 눌러주시기 바랍니다. 상대방이 수락이 이루어질시 거래가 성사되며 메소는 자동으로 지급됩니다.");
status = 30;
} else if (status == 21) {
cm.getPlayer().setTrademeso(cm.getText());
cm.sendYesNo("#r거래 아이템 :#k #i"+cm.getPlayer().getTradeid()+"# #t"+cm.getPlayer().getTradeid()+"#\r\n#b거래 금액 :#k "+cm.getPlayer().getTrademeso()+"메소\r\n\r\n위의 내용으로 거래를 신청하시려면 확인버튼을 눌러주시기 바랍니다. 상대방이 수락이 이루어질시 거래가 성사되며 메소는 자동으로 지급됩니다.");
status = 31;
} else if (status == 30) {
if (mode != 1) {
cm.getPlayer().dropMessage(1,"거래가 취소되었습니다.");
cm.getPlayer().setTradeid(0);
cm.getPlayer().setTrademeso(0);
cm.getPlayer().setTradechar(0);
cm.dispose();
} else {
if (cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).getTradechar() == 0) {
if (cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).getMeso() >= cm.getPlayer().getTrademeso()) {
cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).setTradechar(cm.getPlayer().getId());
cm.getPlayer().dropMessage(1,"상대방에게 거래를 신청하였습니다.\r\n거래 여부를 결정중이니 잠시만 기다려주세요.");
cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).dropMessage(1,"거래신청을 받았습니다.\r\n쉼터에 워레나를 찾아주세요.");
cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).setTrademe(1);
cm.dispose();
} else {
cm.getPlayer().setTradeid(0);
cm.getPlayer().setTrademeso(0);
cm.getPlayer().setTradechar(0);
cm.sendOk("상대방의 메소가 부족합니다.");
cm.dispose();
}
} else {
cm.getPlayer().setTradeid(0);
cm.getPlayer().setTrademeso(0);
cm.getPlayer().setTradechar(0);
cm.sendOk("상대방은 이미 다른 거래중입니다.");
cm.dispose();
}
}
} else if (status == 31) {
if (mode != 1) {
cm.getPlayer().dropMessage(1,"거래가 취소되었습니다.");
cm.getPlayer().setTradeid(0);
cm.getPlayer().setTrademeso(0);
cm.getPlayer().setTradechar(0);
cm.dispose();
} else {
if (cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).getTradechar() == 0) {
if (cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).getMeso() >= cm.getPlayer().getTrademeso()) {
cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).setTradechar(cm.getPlayer().getId());
cm.getPlayer().dropMessage(1,"상대방에게 거래를 신청하였습니다.\r\n거래 여부를 결정중이니 잠시만 기다려주세요.");
cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).dropMessage(1,"거래신청을 받았습니다.\r\n쉼터에 워레나를 찾아주세요.");
cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(cm.getPlayer().getTradechar()).setTrademe(1);
cm.dispose();
} else {
cm.getPlayer().setTradeid(0);
cm.getPlayer().setTrademeso(0);
cm.getPlayer().setTradechar(0);
cm.sendOk("상대방의 메소가 부족합니다.");
cm.dispose();
}
} else {
cm.getPlayer().setTradeid(0);
cm.getPlayer().setTrademeso(0);
cm.getPlayer().setTradechar(0);
cm.sendOk("상대방은 이미 다른 거래중입니다.");
cm.dispose();
}
}
}
}