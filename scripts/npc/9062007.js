var status = 0;
random = Math.floor(Math.random() * 10);


var cap = [[1003589,1003172],[1003590,1003173],[1003591,1003174],[1003592,1003175],[1003593,1003176]];
var cape = [[1102275],[1102276],[1102277],[1102278],[1102279]];
var coat = [[1052498,1052314],[1052499,1052315],[1052500,1052316],[1052501,1052317],[1052502,1052318]];
var glove = [[1082466,1082295],[1082467,1082296],[1082468,1082297],[1082469,1082298],[1082470,1082299]];
var shose = [[1072703,1072485],[1072704,1072486],[1072705,1072487],[1072706,1072488],[1072707,1072489]];
var wp = [[1302228,1302152],[1332194,1332130],[1372140,1372084],[1382169,1382104],[1402152,1402095],[1432139,1432086],[1442183,1442116],[1452171,1452111],[1462160,1462099],[1472180,1472122],[1482141,1482084],[1492153,1492085]];

function action(mode, type, selection){
var level = cm.getQuestRecord(56666);
var exp = cm.getQuestRecord(57777);
var basetext = "저는 피엥 파스니르족의 연금술사 입니다. 저희 파스니르족은 37년전 대 연금시대 혁명 당시 왕 족으로 인해 저희 파스니르 족의 연금술이 금지되었었지요 하지만 모험을 하는 시대인 지금 새로운 이피온월드의 왕 토리님께서 연금기술 금지법을 다시 개정하여 2014년 3월 5일부터 다시 연금시대가 열리게 될것입니다.\r\n#r현재 연금술 레벨 : "+level.getCustomData()+"급\r\n현재 연금술 경험치 : "+exp.getCustomData()+"/99999#k#b\r\n";
if (level.getCustomData() == null || level.getCustomData() == 0){
level.setCustomData("1");
exp.setCustomData("0");
cm.showEffect(false,"adventureStory/brandNew");
//cm.showEffect(false,"lightning/screenMsg/7");
cm.getPlayer().dropMessage(5,"연금술의 봉인이 해방되었습니다 지금부터 연금술을 이용할수있습니다.");
cm.dispose();
}
var sexp = java.lang.Integer.parseInt(exp.getCustomData());
var slevel = java.lang.Integer.parseInt(level.getCustomData());
if(status == 0){
if (sexp >= 10000 && slevel == 1) {
cm.showEffect(false,"WU_PartyQuest/RankedIn");
cm.getPlayer().dropMessage(5,"많은 경험을 쌓아 연금술의 등급이 상승하였습니다.");
level.setCustomData((slevel+1)+"");
exp.setCustomData("0");
cm.dispose();
} else if (sexp >= 15000 && slevel == 2) {
cm.showEffect(false,"WU_PartyQuest/RankedIn");
cm.getPlayer().dropMessage(5,"많은 경험을 쌓아 연금술의 등급이 상승하였습니다.");
level.setCustomData((slevel+1)+"");
exp.setCustomData("0");
cm.dispose();
} else if (sexp >= 20000 && slevel == 3) {
cm.showEffect(false,"WU_PartyQuest/RankedIn");
cm.getPlayer().dropMessage(5,"많은 경험을 쌓아 연금술의 등급이 상승하였습니다.");
level.setCustomData((slevel+1)+"");
exp.setCustomData("0");
cm.dispose();
} else if (sexp >= 25000 && slevel == 4) {
cm.showEffect(false,"WU_PartyQuest/RankedIn");
cm.getPlayer().dropMessage(5,"많은 경험을 쌓아 연금술의 등급이 상승하였습니다.");
level.setCustomData((slevel+1)+"");
exp.setCustomData("0");
cm.dispose();
} else if (sexp >= 30000 && slevel == 5) {
cm.showEffect(false,"WU_PartyQuest/RankedIn");
cm.getPlayer().dropMessage(5,"많은 경험을 쌓아 연금술의 등급이 상승하였습니다.");
level.setCustomData((slevel+1)+"");
exp.setCustomData("0");
cm.dispose();
} else {
cm.sendSimple(basetext+"#L0#연금 아이템 제작하기#l\r\n#L1#스페셜 레시피 조합하기#l\r\n#L2#각성의 날개의 힘 해방하기#l\r\n");
status++;
}
} else if (status == 1) {
if (selection == 0) {
cm.sendSimple(basetext+"#L0#각성의 날개#l\r\n#L5#여제의 장비#l\r\n#L1#모자 조합하기#l\r\n#L3#장갑 조합하기#l\r\n#L2#장신구 조합하기#l\r\n#L4#망토 조합하기#l\r\n");
status++;
} else if (selection == 3) {
if (cm.getMeso() >= 1000000){
exp.setCustomData((sexp+8000)+"");
cm.gainMeso(-1000000);
cm.dispose();
} else {
cm.sendOk("메소가 부족합니다.");
cm.dispose();
}
} else if (selection == 1) {
cm.sendSimple(basetext+"\r\n#b#L0#요정의 마법가루#l\r\n#L1#핑크 드롭 워터#l\r\n#L2#반짝이는 날개#l\r\n#L3#검은 기운#l\r\n#L4#위습의 결정#l\r\n#L5#따듯한 깃털#l\r\n#L6#스카이 롬#l\r\n#L7#스파티움의 잎#l\r\n#L8#황금 모루#l\r\n#L9#겸손의 마법석#l\r\n#L10#에피도트#l\r\n#L11#소더라이트#l\r\n#L12#성배#l\r\n#L13#카오스의 구슬#l\r\n#L14#마족의 돌#l\r\n#L15#시간의 돌#l\r\n#L16#꿈의 조각#l\r\n#L17#태양의 불꽃#l\r\n#L18#페리도트#l\r\n");
status = 10;
} else if (selection == 2) {
if (cm.haveItem(4033106,1)) {
cm.sendGetText("보유중이신 각성의 날개의 인증코드를 확인하신후 아래 입력칸에 입력해주시기 바랍니다.\r\n#e#r<각성의날개 인증코드>#k#n\r\n페어리 테일 : 1102310\r\n엔젤 케루빔 : 1102511\r\n프쉬케 플로라 : 1102376\r\n프쉬케 미스틱 : 1102377\r\n프쉬케 멜로디: 1102378\r\n안젤리크 아우라 : 1102450\r\n다크니스 아우라 : 1102451\r\n페어리 아우라 : 1102452\r\n자수정의 꿈 : 1102547\r\n파랑새의 꿈 : 1102546\r\n잎새의 꿈 : 1102548\r\n사파이어 윙즈 : 1102551\r\n라임그린 윙즈 : 1102550\r\n그라테스 아우라 : 1102572\r\n우라노스 아우라 : 1102624\r\n노빌리타스 아우라 : 1102466\r\n라이트 윙 케루빔 : 1102532\r\n골든 에이지 : 1102643\r\n암염의 속죄가 : 1102632");
status = 50;
} else {
cm.sendOk("날개의 잠재된 힘을 해방하기 위해서는 상급 스페셜 레시피인 #i4033106##b 소더라이트#k가 필요합니다.");
cm.dispose();
} 
}
} else if (status == 50) {
if (cm.getText() == 1102310 || cm.getText() == 1102511 || cm.getText() == 1102376 || cm.getText() == 1102377 || cm.getText() == 1102378) {
cm.sendSimple("입력하신 날개의 인증코드가 아래의 날개와 일치한다면 클릭해주세요.\r\n"+cm.ChoiceEquipList(cm.getText(),cm.getPlayer().getClient()));
status = 51;
} else if (cm.getText() == 1102450 || cm.getText() == 1102451 || cm.getText() == 1102452 || cm.getText() == 1102546 || cm.getText() == 1102547 || cm.getText() == 1102548) {
cm.sendSimple("입력하신 날개의 인증코드가 아래의 날개와 일치한다면 클릭해주세요.\r\n"+cm.ChoiceEquipList(cm.getText(),cm.getPlayer().getClient()));
status = 52;
} else if (cm.getText() == 1102551 || cm.getText() == 1102550) {
cm.sendSimple("입력하신 날개의 인증코드가 아래의 날개와 일치한다면 클릭해주세요.\r\n"+cm.ChoiceEquipList(cm.getText(),cm.getPlayer().getClient()));
status = 53;
} else if (cm.getText() == 1102572 || cm.getText() == 1102624 || cm.getText() == 1102466) {
cm.sendSimple("입력하신 날개의 인증코드가 아래의 날개와 일치한다면 클릭해주세요.\r\n"+cm.ChoiceEquipList(cm.getText(),cm.getPlayer().getClient()));
status = 54;
} else if (cm.getText() == 1102532) {
cm.sendSimple("입력하신 날개의 인증코드가 아래의 날개와 일치한다면 클릭해주세요.\r\n"+cm.ChoiceEquipList(cm.getText(),cm.getPlayer().getClient()));
status = 55;
} else if (cm.getText() == 1102643) {
cm.sendSimple("입력하신 날개의 인증코드가 아래의 날개와 일치한다면 클릭해주세요.\r\n"+cm.ChoiceEquipList(cm.getText(),cm.getPlayer().getClient()));
status = 56;
} else if (cm.getText() == 1102632) {
cm.sendSimple("입력하신 날개의 인증코드가 아래의 날개와 일치한다면 클릭해주세요.\r\n"+cm.ChoiceEquipList(cm.getText(),cm.getPlayer().getClient()));
status = 57;
} else {
cm.sendOk("인증코드를 다시한번 확인해주시기 바랍니다.");
cm.dispose();
}
} else if (status == 57) {
cm.changeStat2(selection,6,18);
cm.changeStat2(selection,7,16);
cm.setOwner(selection,0,"검은 지옥");
cm.getPlayer().reloadChar();
cm.sendOk("암염의 속죄가의 잠재된힘이 해방되었습니다.");
cm.gainItem(4033106,-1);
cm.dispose();
} else if (status == 51) {
cm.changeStat2(selection,0,3);
cm.changeStat2(selection,1,3);
cm.changeStat2(selection,2,3);
cm.changeStat2(selection,3,3);
cm.setOwner(selection,0,"잿빛 각성");
cm.getPlayer().reloadChar();
cm.sendOk("자 이제 날개의 잠재된 힘이 해방되었습니다.");
cm.gainItem(4033106,-1);
cm.dispose();
} else if (status == 52) {
cm.changeStat2(selection,0,6);
cm.changeStat2(selection,1,6);
cm.changeStat2(selection,2,6);
cm.changeStat2(selection,3,6);
cm.changeStat2(selection,4,500);
cm.changeStat2(selection,5,300);
cm.changeStat2(selection,6,2);
cm.changeStat2(selection,7,1);
cm.setOwner(selection,0,"희미한 각성");
cm.getPlayer().reloadChar();
cm.sendOk("자 이제 날개의 잠재된 힘이 해방되었습니다.");
cm.gainItem(4033106,-1);
cm.dispose();
} else if (status == 53) {
cm.changeStat2(selection,0,14);
cm.changeStat2(selection,1,14);
cm.changeStat2(selection,2,14);
cm.changeStat2(selection,3,14);
cm.changeStat2(selection,4,1000);
cm.changeStat2(selection,5,900);
cm.changeStat2(selection,6,9);
cm.changeStat2(selection,7,7);
cm.setOwner(selection,0," 화려한 각성");
cm.getPlayer().reloadChar();
cm.sendOk("자 이제 날개의 잠재된 힘이 해방되었습니다.");
cm.gainItem(4033106,-1);
cm.dispose();
} else if (status == 54) {
cm.changeStat2(selection,4,800);
cm.changeStat2(selection,5,700);
cm.changeStat2(selection,6,15);
cm.changeStat2(selection,7,13);
cm.setOwner(selection,0,"화려한 각성");
cm.getPlayer().reloadChar();
cm.sendOk("자 이제 날개의 잠재된 힘이 해방되었습니다.");
cm.gainItem(4033106,-1);
cm.dispose();
} else if (status == 55) {
cm.changeStat2(selection,0,38);
cm.changeStat2(selection,1,38);
cm.changeStat2(selection,2,38);
cm.changeStat2(selection,3,38);
cm.changeStat2(selection,4,2000);
cm.changeStat2(selection,5,1800);
cm.changeStat2(selection,6,16);
cm.changeStat2(selection,7,15);
cm.setOwner(selection,0,"절대 각성");
cm.getPlayer().reloadChar();
cm.sendOk("자 이제 날개의 잠재된 힘이 해방되었습니다.");
cm.gainItem(4033106,-1);
cm.dispose();
} else if (status == 56) {
cm.changeStat2(selection,4,1500);
cm.changeStat2(selection,5,1200);
cm.changeStat2(selection,6,39);
cm.changeStat2(selection,7,35);
cm.setOwner(selection,0,"절대 각성");
cm.getPlayer().reloadChar();
cm.sendOk("자 이제 날개의 잠재된 힘이 해방되었습니다.");
cm.gainItem(4033106,-1);
cm.dispose();
} else if (status == 2) {
if (selection == 0) {
cm.sendSimple(basetext+"\r\n#e#k<1급용 각성의 날개>#n\r\n#b#L0#(정령계) 페어리 테일#l\r\n\r\n\r\n#e#k<2급용 각성의 날개>#n#b\r\n#L1#(정령계) 프쉬케 플로라#l\r\n#L2#(정령계) 프쉬케 미스틱#l\r\n#L3#(정령계) 프쉬케 멜로디#l\r\n#L4#(천상계) 엔젤 케루빔#l\r\n\r\n\r\n#e#k<3급용 각성의 날개>#n#b\r\n#L5#(정령계) 안젤리크 아우라#l\r\n#L6#(정령계) 다크니스 아우라#l\r\n#L7#(정령계) 페어리 아우라#l\r\n#L8#(천상계) 자수정의 꿈#l\r\n#L10#(천상계) 파랑새의 꿈#l\r\n#L9#(천상계) 잎새의 꿈#l\r\n\r\n\r\n#e#k<4급용 각성의 날개>#n#b\r\n#L11#(정령계) 사파이어 윙즈#l\r\n#L12#(정령계) 라임그린 윙즈#l\r\n#L13#(천상계) 그라테스 아우라#l\r\n#L14#(천상계) 우라노스 아우라#l\r\n#L15#(천상계) 노빌리타스 아우라#l\r\n\r\n\r\n#e#k<5급용 각성의 날개>#n#b\r\n#L16#(정령계) 라이트 윙 케루빔#l\r\n#L17#(천상계) 골든 에이지#l");
status++;
} else if (selection == 1) {
cm.sendSimple(basetext+"\r\n#b#L20#(2급) 카오스 자쿰의 투구#l");
status = 33;
} else if (selection == 2) {
cm.sendSimple(basetext+"#b\r\n#L20#(2급) 완전한 렉스의 그린 이어링#l\r\n#L21#(2급) 완전한 렉스의 레드 이어링#l\r\n#L22#(2급) 완전한 렉스의 블루 이어링#l");
status = 34;
} else if (selection == 3) {
cm.sendSimple(basetext+"#b\r\n#L30#(3급) 자쿰의 돌주먹#l\r\n");
status = 35;
} else if (selection == 4) {
cm.sendSimple(basetext+"#b\r\n#L20#(2급) 암염의 속죄가#l\r\n");
status = 36;
} else if (selection == 5) {
cm.sendSimple(basetext+"#b#L0#모자 제작하기#l\r\n#L1#갑옷 제작하기#l\r\n#L2#장갑 제작하기#l\r\n#L3#신발 제작하기#l\r\n#L4#망토 제작하기#l\r\n#L5#무기 제작하기#l");
status = 37;
}


// 여제

} else if (status == 37) {
if (selection == 0) {
for(var i = 0; i < cap.length; i++){
basetext += "#L"+i+"##t"+cap[i][1]+"#\r\n";
}
cm.sendSimple(basetext);
status = 150;
} else if (selection == 1) {
for(var i = 0; i < coat.length; i++){
basetext += "#L"+i+"##t"+coat[i][1]+"#\r\n";
}
cm.sendSimple(basetext);
status = 151;
} else if (selection == 2) {
for(var i = 0; i < glove.length; i++){
basetext += "#L"+i+"##t"+glove[i][1]+"#\r\n";
}
cm.sendSimple(basetext);
status = 152;
} else if (selection == 3) {
for(var i = 0; i < shose.length; i++){
basetext += "#L"+i+"##t"+shose[i][1]+"#\r\n";
}
cm.sendSimple(basetext);
status = 153;
} else if (selection == 4) {
for(var i = 0; i < cape.length; i++){
basetext += "#L"+i+"##t"+cape[i][0]+"#\r\n";
}
cm.sendSimple(basetext);
status = 154;
} else if (selection == 5) {
for(var i = 0; i < wp.length; i++){
basetext += "#L"+i+"##t"+wp[i][1]+"#\r\n";
}
cm.sendSimple(basetext);
status = 155;
}

} else if (status == 150) {
if (cm.haveItem(cap[selection][0]) && cm.haveItem(4001433,1) && cm.haveItem(4032861,1)) {
if (!cm.canHold(cap[selection][1])) {
cm.sendOk("인벤토리가 부족합니다.");
cm.dispose();
}
cm.gainItem(cap[selection][0],-1);
cm.gainItem(cap[selection][1],1);
cm.gainItem(4001433,-1);
cm.gainItem(4032861,-1);
cm.sendOk("#b#i"+cap[selection][1]+"# #t"+cap[selection][1]+"##k를 제작하였습니다.");
exp.setCustomData((sexp+3000)+"");
cm.dispose();
} else {
cm.sendOk("#i"+cap[selection][1]+"##b #t"+cap[selection][1]+"##k를 제작하기 위해서는 페리도트 와 #t"+cap[selection][0]+"# 마지막으로 태양의 불꽃이 필요합니다..")
cm.dispose();
}
} else if (status == 151) {
if (cm.haveItem(coat[selection][0]) && cm.haveItem(4001433,1) && cm.haveItem(4032861,1)) {
if (!cm.canHold(coat[selection][1])) {
cm.sendOk("인벤토리가 부족합니다.");
cm.dispose();
}
cm.gainItem(coat[selection][0],-1);
cm.gainItem(coat[selection][1],1);
cm.gainItem(4001433,-1);
cm.gainItem(4032861,-1);
cm.sendOk("#b#i"+coat[selection][1]+"# #t"+coat[selection][1]+"##k를 제작하였습니다.");
exp.setCustomData((sexp+3000)+"");
cm.dispose();
} else {
cm.sendOk("#i"+coat[selection][1]+"##b #t"+coat[selection][1]+"##k를 제작하기 위해서는 페리도트 와 #t"+coat[selection][0]+"# 마지막으로 태양의 불꽃이 필요합니다..")
cm.dispose();
}
} else if (status == 152) {
if (cm.haveItem(glove[selection][0]) && cm.haveItem(4001433,1) && cm.haveItem(4032861,1)) {
if (!cm.canHold(glove[selection][1])) {
cm.sendOk("인벤토리가 부족합니다.");
cm.dispose();
}
cm.gainItem(glove[selection][0],-1);
cm.gainItem(glove[selection][1],1);
cm.gainItem(4001433,-1);
cm.gainItem(4032861,-1);
cm.sendOk("#b#i"+glove[selection][1]+"# #t"+glove[selection][1]+"##k를 제작하였습니다.");
exp.setCustomData((sexp+3000)+"");
cm.dispose();
} else {
cm.sendOk("#i"+glove[selection][1]+"##b #t"+glove[selection][1]+"##k를 제작하기 위해서는 페리도트 와 #t"+glove[selection][0]+"# 마지막으로 태양의 불꽃이 필요합니다..")
cm.dispose();
}
} else if (status == 153) {
if (cm.haveItem(shose[selection][0]) && cm.haveItem(4001433,1) && cm.haveItem(4032861,1)) {
if (!cm.canHold(shose[selection][1])) {
cm.sendOk("인벤토리가 부족합니다.");
cm.dispose();
}
cm.gainItem(shose[selection][0],-1);
cm.gainItem(shose[selection][1],1);
cm.gainItem(4001433,-1);
cm.gainItem(4032861,-1);
cm.sendOk("#b#i"+shose[selection][1]+"# #t"+shose[selection][1]+"##k를 제작하였습니다.");
exp.setCustomData((sexp+3000)+"");
cm.dispose();
} else {
cm.sendOk("#i"+shose[selection][1]+"##b #t"+shose[selection][1]+"##k를 제작하기 위해서는 페리도트 와 #t"+shose[selection][0]+"# 마지막으로 태양의 불꽃이 필요합니다..")
cm.dispose();
}
} else if (status == 154) {
if (cm.haveItem(4001115,1) && cm.haveItem(4001433,1) && cm.haveItem(4032861,1)) {
if (!cm.canHold(cape[selection][0])) {
cm.sendOk("인벤토리가 부족합니다.");
cm.dispose();
}
cm.gainItem(4001115,-1);
cm.gainItem(cape[selection][0],1);
cm.gainItem(4001433,-1);
cm.gainItem(4032861,-1);
cm.sendOk("#b#i"+cape[selection][0]+"# #t"+cape[selection][0]+"##k를 제작하였습니다.");
exp.setCustomData((sexp+3000)+"");
cm.dispose();
} else {
cm.sendOk("#i"+cape[selection][0]+"##b #t"+cape[selection][0]+"##k를 제작하기 위해서는 페리도트 와 #t4001115# 마지막으로 태양의 불꽃이 필요합니다..")
cm.dispose();
}
} else if (status == 155) {
if (cm.haveItem(wp[selection][0]) && cm.haveItem(4001433,1) && cm.haveItem(4032861,1)) {
if (!cm.canHold(wp[selection][1])) {
cm.sendOk("인벤토리가 부족합니다.");
cm.dispose();
}
cm.gainItem(wp[selection][0],-1);
cm.gainItem(wp[selection][1],1);
cm.gainItem(4001433,-1);
cm.gainItem(4032861,-1);
cm.sendOk("#b#i"+wp[selection][1]+"# #t"+wp[selection][1]+"##k를 제작하였습니다.");
exp.setCustomData((sexp+3000)+"");
cm.dispose();
} else {
cm.sendOk("#i"+wp[selection][1]+"##b #t"+wp[selection][1]+"##k를 제작하기 위해서는 페리도트 와 #t"+wp[selection][0]+"# 마지막으로 태양의 불꽃이 필요합니다..")
cm.dispose();
}
// 망토

} else if (status == 36) {
if (selection == 20) {
if (slevel >= 2) {
if (cm.haveItem(4032002,1) && cm.haveItem(4033785,1) && cm.haveItem(4001433,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+1300)+"");
cm.gainItem(4032002,-1);
cm.gainItem(4033785,-1);
cm.gainItem(4001433,-1);
cm.gainItem(1102632,1);
cm.sendOk("#i1102632##b암염의 속죄가#k 조합에 성공하여 #r경험치 1300#k 획득.");
cm.dispose();
} else {
cm.gainItem(4032002,-1);
cm.gainItem(4033785,-1);
cm.gainItem(4001433,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102632# #b#t1102632##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4033785# #t4033785#\r\n#i4032002# #t4032002##k\r\n#i4001433# #t4001433#");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
}
//모자
} else if (status == 33) {
if (selection == 20) {
if (slevel >= 2) {
if (cm.haveItem(1002357,1) && cm.haveItem(4032002,1) && cm.haveItem(4033012,1)) {
if (random >= 0 && random <= 4) {
exp.setCustomData((sexp+1300)+"");
cm.gainItem(1002357,-1);
cm.gainItem(4032002,-1);
cm.gainItem(4033012,-1);
cm.gainItem(1003112,1);
cm.sendOk("#i1003112##b카오스 자쿰의투구#k 조합에 성공하여 #r경험치 1300#k 획득.");
cm.dispose();
} else {
cm.gainItem(1002357,-1);
cm.gainItem(4032002,-1);
cm.gainItem(4033012,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1003112# #b#t1003112##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r40%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1002357# #t1002357#\r\n#i4032002# #t4032002##k\r\n#i4033012# #t4033012#");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
}

// 장갑

} else if (status == 35) {
if (selection == 30) {
if (slevel >= 2) {
if (cm.haveItem(1002357,1) && cm.haveItem(4033785,1)) {
if (random >= 0 && random <= 3) {
exp.setCustomData((sexp+600)+"");
cm.gainItem(1002357,-1);
cm.gainItem(4033785,-1);
cm.gainItem(1082447,1);
cm.sendOk("#i1082447##b자쿰의 돌주먹#k 조합에 성공하여 #r경험치 600#k 획득.");
cm.dispose();
} else {
cm.gainItem(1002357,-1);
cm.gainItem(4033785,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1082447# #b#t1082447##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r30%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1002357# #t1002357#\r\n#i4033785# #t4033785##k");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
}
//악세
} else if (status == 34) {
if (selection == 20) {
if (slevel >= 2) {
if (cm.haveItem(1032077,1) && cm.haveItem(4033785,1) && cm.haveItem(4032002,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+900)+"");
cm.gainItem(1032102,1);
cm.gainItem(1032077,-1);
cm.gainItem(4033785,-1);
cm.gainItem(4032002,-1);
cm.sendOk("#i1032102##b#t1032102##k 조합에 성공하여 #r경험치 900#k 획득.");
cm.dispose();
} else {
cm.gainItem(1032077,-1);
cm.gainItem(4033785,-1);
cm.gainItem(4032002,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1032102# #b#t1032102##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1032077# #t1032077#\r\n#i4032002# #t4032002##k\r\n#i4033785# #t4033785#");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 21) {
if (slevel >= 2) {
if (cm.haveItem(1032078,1) && cm.haveItem(4033785,1) && cm.haveItem(4032002,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+900)+"");
cm.gainItem(1032103,1);
cm.gainItem(1032078,-1);
cm.gainItem(4033785,-1);
cm.gainItem(4032002,-1);
cm.sendOk("#i1032103##b#t1032103##k 조합에 성공하여 #r경험치 900#k 획득.");
cm.dispose();
} else {
cm.gainItem(1032078,-1);
cm.gainItem(4033785,-1);
cm.gainItem(4032002,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1032103# #b#t1032103##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1032078# #t1032078#\r\n#i4032002# #t4032002##k\r\n#i4033785# #t4033785#");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 22) {
if (slevel >= 2) {
if (cm.haveItem(1032079,1) && cm.haveItem(4033785,1) && cm.haveItem(4032002,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+900)+"");
cm.gainItem(1032104,1);
cm.gainItem(1032079,-1);
cm.gainItem(4033785,-1);
cm.gainItem(4032002,-1);
cm.sendOk("#i1032104##b#t1032104##k 조합에 성공하여 #r경험치 900#k 획득.");
cm.dispose();
} else {
cm.gainItem(1032079,-1);
cm.gainItem(4033785,-1);
cm.gainItem(4032002,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1032104# #b#t1032104##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1032079# #t1032079#\r\n#i4032002# #t4032002##k\r\n#i4033785# #t4033785#");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
}
} else if (status == 3) {
if (selection == 0) {
if (cm.haveItem(4000994,1) && cm.haveItem(4000035,200)) {
if (random >= 0 && random <= 4) {
exp.setCustomData((sexp+1200)+"");
cm.gainItem(1102310,1);
cm.gainItem(4000035,-200);
cm.gainItem(4000994,-1);
cm.sendOk("#i1102310##b페어리 테일#k 조합에 성공하여 #r경험치 1200#k 획득.");
cm.dispose();
} else {
cm.gainItem(4000035,-200);
cm.gainItem(4000994,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102310# #b#t1102310##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r30%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000035# 식탁보 200개\r\n#i4000994# 요정의 마법가루 1개");
cm.dispose();
}

// 2급용 레시피

} else if (selection == 1) {
if (slevel >= 2) {
if (cm.haveItem(1102310,1) && cm.haveItem(4000238,200) && cm.haveItem(4250401,1)) {
if (random >= 0 && random <= 4) {
exp.setCustomData((sexp+2100)+"");
cm.gainItem(1102376,1);
cm.gainItem(4000238,-200);
cm.gainItem(1102310,-1);
cm.gainItem(4250401,-1);
cm.sendOk("#i1102376##b프쉬케 플로라#k 조합에 성공하여 #r경험치 2100#k 획득.");
cm.dispose();
} else {
cm.gainItem(4000238,-200);
cm.gainItem(4250401,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102376# #b#t1102376##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r40%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000238# 하프의 날개깃털 200개\r\n#i4250401# 중급 자수정\r\n#i1102310# 페어리 테일#k");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}

} else if (selection == 2) {
if (slevel >= 2) {
if (cm.haveItem(1102310,1) && cm.haveItem(4000238,200) && cm.haveItem(4251301,1)) {
if (random >= 0 && random <= 4) {
exp.setCustomData((sexp+2100)+"");
cm.gainItem(1102377,1);
cm.gainItem(4000238,-200);
cm.gainItem(1102310,-1);
cm.gainItem(4251301,-1);
cm.sendOk("#i1102377##b프쉬케 미스틱#k 조합에 성공하여 #r경험치 2100#k 획득.");
cm.dispose();
} else {
cm.gainItem(4000238,-200);
cm.gainItem(4251301,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102377# #b#t1102377##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r40%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000238# 하프의 날개깃털 200개\r\n#i4251301# 중급 흑수정\r\n#i1102310# 페어리 테일#k");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}

} else if (selection == 3) {
if (slevel >= 2) {
if (cm.haveItem(1102310,1) && cm.haveItem(4000238,200) && cm.haveItem(4250101,1)) {
if (random >= 0 && random <= 4) {
exp.setCustomData((sexp+2100)+"");
cm.gainItem(1102378,1);
cm.gainItem(4000238,-200);
cm.gainItem(1102310,-1);
cm.gainItem(4250101,-1);
cm.sendOk("#i1102378##b프쉬케 멜로디#k 조합에 성공하여 #r경험치 2100#k 획득.");
cm.dispose();
} else {
cm.gainItem(4000238,-200);
cm.gainItem(4250101,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102378# #b#t1102378##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r40%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000238# 하프의 날개깃털 200개\r\n#i4250101# 중급 사파이어\r\n#i1102310# 페어리 테일#k");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}

} else if (selection == 4) {
if (slevel >= 2) {
if (cm.haveItem(1102310,1) && cm.haveItem(4001115,1) && cm.haveItem(4003005,30)) {
if (random >= 0 && random <= 4) {
exp.setCustomData((sexp+2200)+"");
cm.gainItem(1102511,1);
cm.gainItem(4001115,-1);
cm.gainItem(1102310,-1);
cm.gainItem(4003005,-30);
cm.sendOk("#i1102378##b엔젤 케루빔#k 조합에 성공하여 #r경험치 2200#k 획득.");
cm.dispose();
} else {
cm.gainItem(1102310,-1);
cm.gainItem(4003005,-30);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102511# #b#t1102511##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r40%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4001115# #t4001115#\r\n#i1102310# 페어리 테일#k\r\n#i4003005# 부드러운 깃털 30개");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"2급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}

// 3급용 각성의 날개

} else if (selection == 5) {
if (slevel >= 3) {
if (cm.haveItem(1102376,1) && cm.haveItem(4031989,1) && cm.haveItem(4000991,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+3400)+"");
cm.gainItem(1102450,1);
cm.gainItem(1102376,-1);
cm.gainItem(4031989,-1);
cm.gainItem(4000991,-1);
cm.sendOk("#i1102450##b안젤리크 아우라#k 조합에 성공하여 #r경험치 3400#k 획득.");
cm.dispose();
} else {
cm.gainItem(4031989,-1);
cm.gainItem(4000991,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102450# #b#t1102450##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102376# 프쉬케 플로라\r\n#i4031989# 핑크 드롭 워터#k\r\n#i4000991# 반짝이는 날개");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"3급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 6) {
if (slevel >= 3) {
if (cm.haveItem(1102377,1) && cm.haveItem(4033012,1) && cm.haveItem(4000991,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+3400)+"");
cm.gainItem(1102451,1);
cm.gainItem(1102377,-1);
cm.gainItem(4033012,-1);
cm.gainItem(4000991,-1);
cm.sendOk("#i1102451##b다크니스 아우라#k 조합에 성공하여 #r경험치 3400#k 획득.");
cm.dispose();
} else {
cm.gainItem(4033012,-1);
cm.gainItem(4000991,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102451# #b#t1102451##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102377# 프쉬케 미스틱\r\n#i4033012# 검은 기운#k\r\n#i4000991# 반짝이는 날개");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"3급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 7) {
if (slevel >= 3) {
if (cm.haveItem(1102378,1) && cm.haveItem(4000993,1) && cm.haveItem(4000991,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+3400)+"");
cm.gainItem(1102452,1);
cm.gainItem(1102378,-1);
cm.gainItem(4000993,-1);
cm.gainItem(4000991,-1);
cm.sendOk("#i1102451##b페어리 아우라#k 조합에 성공하여 #r경험치 3400#k 획득.");
cm.dispose();
} else {
cm.gainItem(4000993,-1);
cm.gainItem(4000991,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102452# #b#t1102452##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102378# 프쉬케 멜로디\r\n#i4000993# 위습의 결정#k\r\n#i4000991# 반짝이는 날개");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"3급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 8) {
if (slevel >= 3) {
if (cm.haveItem(1102511,1) && cm.haveItem(4031989,1) && cm.haveItem(4033204,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+3400)+"");
cm.gainItem(1102547,1);
cm.gainItem(1102511,-1);
cm.gainItem(4031989,-1);
cm.gainItem(4033204,-1);
cm.sendOk("#i1102547##b자수정의 꿈#k 조합에 성공하여 #r경험치 3400#k 획득.");
cm.dispose();
} else {
cm.gainItem(4031989,-1);
cm.gainItem(4033204,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102547# #b#t1102547##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102511# 엔젤 케루빔\r\n#i4031989# 핑크 드롭 워터#k\r\n#i4033204# 따듯한 깃털");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"3급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 9) {
if (slevel >= 3) {
if (cm.haveItem(1102511,1) && cm.haveItem(4000993,1) && cm.haveItem(4033204,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+3400)+"");
cm.gainItem(1102548,1);
cm.gainItem(1102511,-1);
cm.gainItem(4000993,-1);
cm.gainItem(4033204,-1);
cm.sendOk("#i1102548##b잎새의 꿈#k 조합에 성공하여 #r경험치 3400#k 획득.");
cm.dispose();
} else {
cm.gainItem(4000993,-1);
cm.gainItem(4033204,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102548# #b#t1102548##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102511# 엔젤 케루빔\r\n#i4000993# 위습의 결정#k\r\n#i4033204# 따듯한 깃털");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"3급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 10) {
if (slevel >= 3) {
if (cm.haveItem(1102511,1) && cm.haveItem(4031574,1) && cm.haveItem(4000991,1)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+3400)+"");
cm.gainItem(1102546,1);
cm.gainItem(1102511,-1);
cm.gainItem(4031574,-1);
cm.gainItem(4033204,-1);
cm.sendOk("#i1102546##b파랑새의 꿈#k 조합에 성공하여 #r경험치 3400#k 획득.");
cm.dispose();
} else {
cm.gainItem(4031574,-1);
cm.gainItem(4033204,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102546# #b#t1102546##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102511# 엔젤 케루빔\r\n#i4031574# 스카이 롬#k\r\n#i4033204# 따듯한 깃털");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"3급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}

// 4급 각성의 날개

} else if (selection == 11) {
if (slevel >= 4) {
if (cm.haveItem(1102451,1) && cm.haveItem(1102452,1) && cm.haveItem(4033824,6)) {
if (random >= 0 && random <= 6) {
exp.setCustomData((sexp+3800)+"");
cm.gainItem(1102551,1);
cm.gainItem(1102451,-1);
cm.gainItem(1102452,-1);
cm.gainItem(4033824,-6);
cm.sendOk("#i1102551##b사파이어 윙즈#k 조합에 성공하여 #r경험치 3800#k 획득.");
cm.dispose();
} else {
cm.gainItem(1102451,-1);
cm.gainItem(4033824,-6);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102551# #b#t1102551##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r60%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102451# 다크니스 아우라\r\n#i1102452# 페어리 아우라#k\r\n#i4033824# 스파티움의 잎 6장");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"3급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 12) {
if (slevel >= 4) {
if (cm.haveItem(1102450,1) && cm.haveItem(1102452,1) && cm.haveItem(4033824,6)) {
if (random >= 0 && random <= 6) {
exp.setCustomData((sexp+3800)+"");
cm.gainItem(1102550,1);
cm.gainItem(1102450,-1);
cm.gainItem(1102452,-1);
cm.gainItem(4033824,-6);
cm.sendOk("#i1102550##b라임그린 윙즈#k 조합에 성공하여 #r경험치 3800#k 획득.");
cm.dispose();
} else {
cm.gainItem(1102450,-1);
cm.gainItem(4033824,-6);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102550# #b#t1102550##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r60%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102450# 안젤리크 아우라\r\n#i1102452# 페어리 아우라#k\r\n#i4033824# 스파티움의 잎 6장");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"3급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}


} else if (selection == 13) {
if (slevel >= 4) {
if (cm.haveItem(1102548,1) && cm.haveItem(4031980,1) && cm.haveItem(4031739,1)) {
if (random >= 0 && random <= 6) {
exp.setCustomData((sexp+3800)+"");
cm.gainItem(1102572,1);
cm.gainItem(1102548,-1);
cm.gainItem(4031980,-1);
cm.gainItem(4031739,-1);
cm.sendOk("#i1102572##b그라테스 아우라#k 조합에 성공하여 #r경험치 3800#k 획득.");
cm.dispose();
} else {
cm.gainItem(4031980,-1);
cm.gainItem(4031739,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102572# #b#t1102572##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r60%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102548# 잎새의 꿈\r\n#i4031980# 황금 모루#k\r\n#i4031739# 겸손의 마법석");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"4급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 14) {
if (slevel >= 4) {
if (cm.haveItem(1102546,1) && cm.haveItem(4031980,1) && cm.haveItem(4031739,1)) {
if (random >= 0 && random <= 6) {
exp.setCustomData((sexp+3800)+"");
cm.gainItem(1102624,1);
cm.gainItem(1102546,-1);
cm.gainItem(4031980,-1);
cm.gainItem(4031739,-1);
cm.sendOk("#i1102624##b우라노스 아우라#k 조합에 성공하여 #r경험치 3800#k 획득.");
cm.dispose();
} else {
cm.gainItem(4031980,-1);
cm.gainItem(4031739,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102624# #b#t1102624##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r60%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102546# 파랑새의 꿈\r\n#i4031980# 황금 모루#k\r\n#i4031739# 겸손의 마법석");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"4급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 15) {
if (slevel >= 4) {
if (cm.haveItem(1102547,1) && cm.haveItem(4031980,1) && cm.haveItem(4031739,1)) {
if (random >= 0 && random <= 6) {
exp.setCustomData((sexp+3800)+"");
cm.gainItem(1102466,1);
cm.gainItem(1102547,-1);
cm.gainItem(4031980,-1);
cm.gainItem(4031739,-1);
cm.sendOk("#i1102466##b노빌리타스 아우라#k 조합에 성공하여 #r경험치 3800#k 획득.");
cm.dispose();
} else {
cm.gainItem(4031980,-1);
cm.gainItem(4031739,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102466# #b#t1102466##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r60%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102547# 자수정의 꿈\r\n#i4031980# 황금 모루#k\r\n#i4031739# 겸손의 마법석");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"4급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}

// 5급 날개

} else if (selection == 16) {
if (slevel >= 5) {
if (cm.haveItem(1102550,1) && cm.haveItem(1102551,1) && cm.haveItem(4033105,1)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+6600)+"");
cm.gainItem(1102532,1);
cm.gainItem(1102550,-1);
cm.gainItem(1102551,-1);
cm.gainItem(4033105,-1);
cm.sendOk("#i1102532##b라이트 윙 케루빔#k 조합에 성공하여 #r경험치 6600#k 획득.");
cm.dispose();
} else {
cm.gainItem(1102550,-1);
cm.gainItem(4033105,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102532# #b#t1102532##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102550# 라임 그린 윙즈\r\n#i1102551# 사파이어 윙즈#k\r\n#i4033105# 에피도트");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"5급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
} else if (selection == 17) {
if (slevel >= 5) {
if (cm.haveItem(1102466,1) && cm.haveItem(1102624,1) && cm.haveItem(1102572,1) && cm.haveItem(4031454,1) && cm.haveItem(4033105,1)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+7200)+"");
cm.gainItem(1102643,1);
cm.gainItem(1102466,-1);
cm.gainItem(1102624,-1);
cm.gainItem(1102572,-1);
cm.gainItem(4033105,-1);
cm.gainItem(4031454,-1);
cm.sendOk("#i1102643##b골든 에이지#k 조합에 성공하여 #r경험치 7200#k 획득.");
cm.dispose();
} else {
cm.gainItem(1102466,-1);
cm.gainItem(4033105,-1);
cm.gainItem(4031454,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 레시피는 #i1102643# #b#t1102643##k의 대표적인 조합레시피 입니다. 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i1102466# 노빌리타스 아우라\r\n#i1102624# 우라노스 아우라#k\r\n#i1102572# 그라테스 아우라#k\r\n#i4031454# 성배#k\r\n#i4033105# 에피도트");
cm.dispose();
}
} else {
cm.getPlayer().dropMessage(1,"5급 이상의 연금술사만 레시피를 볼수 있습니다.");
cm.dispose();
}
}


// 레시피


} else if (status == 10) {
if (selection == 0) {
if (cm.haveItem(4000068,25) && cm.haveItem(4007005,10)) {
if (random >= 0 && random <= 5) {
exp.setCustomData((sexp+300)+"");
cm.gainItem(4000994,1);
cm.gainItem(4000068,-25);
cm.gainItem(4007005,-10);
cm.sendOk("레시피 조합에 성공하여 #r경험치 300#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000068,-25);
cm.gainItem(4007005,-10);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4000994# #b#t4000994##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000068# 페어리의 더듬이 25개\r\n#i4007005# 마법의 가루(보라) 10개");
cm.dispose();
}
} else if (selection == 1) {
if (cm.haveItem(4000282,200) && cm.haveItem(2022040,30) && cm.haveItem(4011008,3)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+550)+"");
cm.gainItem(4031989,1);
cm.gainItem(4000282,-200);
cm.gainItem(2022040,-30);
cm.gainItem(4011008,-3);
cm.sendOk("레시피 조합에 성공하여 #r경험치 550#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000282,-200);
cm.gainItem(2022040,-30);
cm.gainItem(4011008,-3);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4031989# #b#t4031989##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000282# 천도씨앗 200개\r\n#i2022040# 공기방울 30개\r\n#i4011008# 리튬 3개");
cm.dispose();
}
} else if (selection == 2) {
if (cm.haveItem(4000994,1) && cm.haveItem(4000990,2) && cm.haveItem(4000332,200)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+550)+"");
cm.gainItem(4000994,-1);
cm.gainItem(4000332,-200);
cm.gainItem(4000990,-2);
cm.gainItem(4000991,1);
cm.sendOk("레시피 조합에 성공하여 #r경험치 550#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000994,-1);
cm.gainItem(4000332,-200);
cm.gainItem(4000990,-2);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4000991# #b#t4000991##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000332# 금모래가루 200개\r\n#i4000990# 반짝이는 더듬이 2개\r\n#i4000994# 요정의 마법 가루 1개");
cm.dispose();
}
} else if (selection == 3) {
if (cm.haveItem(4000028,200) && cm.haveItem(4000074,100) && cm.haveItem(4021008,5)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+550)+"");
cm.gainItem(4000028,-200);
cm.gainItem(4000074,-100);
cm.gainItem(4021008,-5);
cm.gainItem(4033012,1);
cm.sendOk("레시피 조합에 성공하여 #r경험치 550#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000028,-200);
cm.gainItem(4000074,-100);
cm.gainItem(4021008,-5);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4033012# #b#t4033012##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000028# 타우로마시스의 뿔 200개\r\n#i4000074# 루이넬의 꼬리 100개\r\n#i4021008# 흑수정 5개");
cm.dispose();
}
} else if (selection == 4) {
if (cm.haveItem(4000059,200) && cm.haveItem(4000027,100) && cm.haveItem(4021003,5)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+600)+"");
cm.gainItem(4000993,1);
cm.gainItem(4000059,-200);
cm.gainItem(4000027,-100);
cm.gainItem(4021003,-5);
cm.sendOk("레시피 조합에 성공하여 #r경험치 600#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000059,-200);
cm.gainItem(4000027,-100);
cm.gainItem(4021003,-5);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4000993# #b#t4000993##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000059# #t4000059# 200개\r\n#i4000027# #t4000027# 100개\r\n#i4021003# #t4021003# 5개");
cm.dispose();
}
} else if (selection == 5) {
if (cm.haveItem(4000052,100) && cm.haveItem(4000048,200) && cm.haveItem(4003005,30)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+2000)+"");
cm.gainItem(4033204,1);
cm.gainItem(4000048,-200);
cm.gainItem(4000052,-100);
cm.gainItem(4003005,-30);
cm.sendOk("레시피 조합에 성공하여 #r경험치 2000#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000048,-200);
cm.gainItem(4000052,-100);
cm.gainItem(4003005,-30);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4033204# #b#t4033204##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000048# #t4000048# 200개\r\n#i4000052# #t4000052# 100개\r\n#i4003005# #t4003005# 30개");
cm.dispose();
}
} else if (selection == 6) {
if (cm.haveItem(4000061,200) && cm.haveItem(4000125,100) && cm.haveItem(4011008,3)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+690)+"");
cm.gainItem(4031574,1);
cm.gainItem(4000061,-200);
cm.gainItem(4000125,-100);
cm.gainItem(4011008,-3);
cm.sendOk("레시피 조합에 성공하여 #r경험치 690#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000061,-200);
cm.gainItem(4000125,-100);
cm.gainItem(4011008,-3);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4031574# #b#t4031574##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000061# #t4000061# 200개\r\n#i4000125# #t4000125# 100개\r\n#i4011008# #t4011008# 3개");
cm.dispose();
}
} else if (selection == 7) {
if (cm.haveItem(4000058,80) && cm.haveItem(4000361,50) && cm.haveItem(4000271,100)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+700)+"");
cm.gainItem(4033824,1);
cm.gainItem(4000058,-80);
cm.gainItem(4000361,-50);
cm.gainItem(4000271,-100);
cm.sendOk("레시피 조합에 성공하여 #r경험치 700#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000058,-80);
cm.gainItem(4000361,-50);
cm.gainItem(4000271,-100);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4033824# #b#t4033824##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000058# #t4000058# 80개\r\n#i4000361# #t4000361# 50개\r\n#i4000271# #t4000271# 100개");
cm.dispose();
}
} else if (selection == 8) {
if (cm.haveItem(4011006,5) && cm.haveItem(4000332,100) && cm.haveItem(4007004,50)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+500)+"");
cm.gainItem(4031980,1);
cm.gainItem(4011006,-5);
cm.gainItem(4000332,-100);
cm.gainItem(4007004,-50);
cm.sendOk("레시피 조합에 성공하여 #r경험치 500#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4011006,-5);
cm.gainItem(4000332,-100);
cm.gainItem(4007004,-50);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4031980# #b#t4031980##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4011006# #t4011006# 5개\r\n#i4000332# #t4000332# 100개\r\n#i4007004# #t4007004# 50개");
cm.dispose();
}
} else if (selection == 9) {
if (cm.haveItem(2210006,5) && cm.haveItem(4001116,1) && cm.haveItem(4021007,3)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+900)+"");
cm.gainItem(4031739,1);
cm.gainItem(4001116,-1);
cm.gainItem(4021007,-3);
cm.gainItem(2210006,-5);
cm.sendOk("레시피 조합에 성공하여 #r경험치 900#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4001116,-1);
cm.gainItem(4021007,-3);
cm.gainItem(2210006,-5);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4031739# #b#t4031739##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4001116# #t4001116# 1개\r\n#i4021007# #t4021007# 3개\r\n#i2210006# #t2210006# 5개");
cm.dispose();
}
} else if (selection == 10) {
if (cm.haveItem(4000736,2) && cm.haveItem(4033805,2) && cm.haveItem(4000899,2) && cm.haveItem(4260008,20) && cm.haveItem(4021019,30)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+850)+"");
cm.gainItem(4033105,1);
cm.gainItem(4000736,-2);
cm.gainItem(4033805,-2);
cm.gainItem(4000899,-2);
cm.gainItem(4260008,-20);
cm.gainItem(4021019,-30);
cm.sendOk("레시피 조합에 성공하여 #r경험치 850#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000736,-2);
cm.gainItem(4033805,-2);
cm.gainItem(4000899,-2);
cm.gainItem(4260008,-20);
cm.gainItem(4021019,-30);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4033105# #b#t4033105##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000736# #t4000736# 2개\r\n#i4033805# #t4033805# 2개\r\n#i4000899# #t4000899# 2개\r\n#i4260008# #t4260008# 20개\r\n#i4021019# #t4021019# 30개");
cm.dispose();
}
} else if (selection == 11) {
if (cm.haveItem(4000994,1) && cm.haveItem(4021019,10)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+850)+"");
cm.gainItem(4033106,1);
cm.gainItem(4000994,-1);
cm.gainItem(4021019,-10);
cm.sendOk("레시피 조합에 성공하여 #r경험치 850#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000994,-1);
cm.gainItem(4021019,-10);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4033106# #b#t4033106##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000994# #t4000994# 1개\r\n#i4021019# #t4021019# 10개");
cm.dispose();
}
} else if (selection == 12) {
if (cm.haveItem(2012000,30) && cm.haveItem(4440101,1) && cm.haveItem(4441101,1) && cm.haveItem(4441201,1) && cm.haveItem(4441301,1) && cm.haveItem(4031980,1) && cm.haveItem(4310010,2) && cm.haveItem(4000244,1)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+1500)+"");
cm.gainItem(4031454,1);
cm.gainItem(2012000,-30);
cm.gainItem(4440101,-1);
cm.gainItem(4441101,-1);
cm.gainItem(4442101,-1);
cm.gainItem(4443101,-1);
cm.gainItem(4031980,-1);
cm.gainItem(4310010,-2);
cm.gainItem(4000244,-1);
cm.sendOk("레시피 조합에 성공하여 #r경험치 1500#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(2012000,-30);
cm.gainItem(4440101,-1);
cm.gainItem(4441101,-1);
cm.gainItem(4442101,-1);
cm.gainItem(4443101,-1);
cm.gainItem(4031980,-1);
cm.gainItem(4310010,-2);
cm.gainItem(4000244,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4031454# #b#t4031454##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i2012000# #t2012000# 30개\r\n#i4000244# #t4000244# 1개\r\n#i4031980# #t4031980# 1개\r\n#i4440101# #t4440101# 1개\r\n#i4441101# #t4441101# 1개\r\n#i4442101# #t4442101# 1개\r\n#i4443101# #t4443101# 1개\r\n#i4310010# #t4310010# 2개");
cm.dispose();
}
} else if (selection == 13) {
if (cm.haveItem(4000736,1) && cm.haveItem(4000742,1) && cm.haveItem(4000899,1) && cm.haveItem(4033805,1)) {
if (random >= 0 && random <= 6) {
exp.setCustomData((sexp+700)+"");
cm.gainItem(4032002,1);
cm.gainItem(4000736,-1);
cm.gainItem(4000742,-1);
cm.gainItem(4000899,-1);
cm.gainItem(4033805,-1);
cm.sendOk("레시피 조합에 성공하여 #r경험치 700#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000736,-1);
cm.gainItem(4000742,-1);
cm.gainItem(4000899,-1);
cm.gainItem(4033805,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4032002# #b#t4032002##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r60%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4000736# #t4000736# 1개\r\n#i4000742# #t4000742# 1개\r\n#i4033805# #t4033805# 1개\r\n#i4000899# #t4000899# 1개");
cm.dispose();
}
} else if (selection == 14) {
if (cm.haveItem(4000040,3) && cm.haveItem(4000036,100) && cm.haveItem(2049100,1)) {
if (random >= 0 && random <= 6) {
exp.setCustomData((sexp+400)+"");
cm.gainItem(4033785,1);
cm.gainItem(4000040,-1);
cm.gainItem(4000036,-3);
cm.gainItem(2049100,-1);
cm.sendOk("레시피 조합에 성공하여 #r경험치 400#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4000040,-1);
cm.gainItem(4000036,-3);
cm.gainItem(2049100,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4033785# #b#t4033785##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r60%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i2049100# #t2049100# 1개\r\n#i4000040# #t4000040# 3개\r\n#i4000036# #t4000036# 100개");
cm.dispose();
}
} else if (selection == 15) {
if (cm.haveItem(4020009,3)) {
if (random >= 0 && random <= 4) {
exp.setCustomData((sexp+100)+"");
cm.gainItem(4021010,1);
cm.gainItem(4020009,-3);
cm.sendOk("레시피 조합에 성공하여 #r경험치 100#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4020009,-3);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4021010# #b#t4021010##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r50%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4020009# #t4020009# 3개");
cm.dispose();
}
} else if (selection == 16) {
if (cm.haveItem(4021019,1)) {
if (random >= 0 && random <= 3) {
exp.setCustomData((sexp+100)+"");
cm.gainItem(4020013,2);
cm.gainItem(4021019,-1);
cm.sendOk("레시피 조합에 성공하여 #r경험치 100#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4021019,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4020013# #b#t4020013##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r40%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4021019# #t4021019# 1개");
cm.dispose();
}
} else if (selection == 17) {
if (cm.haveItem(4033302,1) && cm.haveItem(4033311,1) && cm.haveItem(4033304,1) && cm.haveItem(4033303,1)) {
if (random >= 0 && random <= 9) {
exp.setCustomData((sexp+4000)+"");
cm.gainItem(4001433,1);
cm.gainItem(4033302,-1);
cm.gainItem(4033311,-1);
cm.gainItem(4033304,-1);
cm.gainItem(4033303,-1);
cm.sendOk("레시피 조합에 성공하여 #r경험치 4000#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4033302,-1);
cm.gainItem(4033311,-1);
cm.gainItem(4033304,-1);
cm.gainItem(4033303,-1);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4001433# #b#t4001433##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r90%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4033302# #t4033302#\r\n#i4033303# #t4033303#\r\n#i4033304# #t4033304#\r\n#i4033311# #t4033311#\r\n");
cm.dispose();
}
} else if (selection == 18) {
if (cm.haveItem(4033312,1) && cm.haveItem(4020013,30)) {
if (random >= 0 && random <= 8) {
exp.setCustomData((sexp+2000)+"");
cm.gainItem(4032861,1);
cm.gainItem(4033312,-1);
cm.gainItem(4020013,-30);
cm.sendOk("레시피 조합에 성공하여 #r경험치 2000#k 획득 하였습니다.");
cm.dispose();
} else {
cm.gainItem(4033312,-1);
cm.gainItem(4020013,-30);
cm.getPlayer().dropMessage(1,"조합에 실패하였습니다.\r\n실패의 리스크로 레시피를 모두 잃었습니다.");
cm.dispose();
}
} else {
cm.sendOk("아래의 아이템은 #i4032861# #b#t4032861##k의 대표적인 조합재료 입니다. 이 레시피의 조합성공확률은 #r80%#k이니 이점 알아두시고 조합을 진행하시길 바랍니다.\r\n-----------------------------------\r\n#i4033312# #t4033312#\r\n#i4020013# #t4020013# 30개");
cm.dispose();
}
}
}
}