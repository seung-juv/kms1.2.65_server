
var status = 0;
var h = new Array(1142394,1142395,1142396,1003579,1702444,1032093,5060002,2044706,2044906,2044813,2044811,2044506,2044606,2044206,2044406,2044306,2044006,2044106,2040415,2040528,2040522,2040524,2040526,2040615,2040819,2040821,2040718,2040722,2040720,2040021,2040019,2040313,2040910,2041044,2041046,2041042,2041052,2041054,2041048,2041050,2041056,2043806,2043706,2043011,2043106,2043306,2043206); 
var hs = Math.floor(Math.random()*h.length);
var random = Math.floor(Math.random() * 100);

var ult1;
var ult2;
var ult3;

function action(mode, type, selection){


var data = cm.getQuestRecord(54321);
var dataa = cm.getQuestRecord(54322);

if (status == 0) {
cm.sendSimple("부디 아스완의 주민들이 편히 눈감을수있도록 모험가 여러분께서 힐라님의 노여움을 막아주셨으면 합니다. 우리의 희생으로 세상이 평화로워지기를...\r\n#b#L0#힐라의 왕좌로 입장하고싶습니다.#l\r\n#L1#라이징썬 이어링을 강화하고싶습니다.#l\r\n#L3#힐라군단의 보급품 상자를 열고싶습니다.#l\r\n#L2##k#r(Lv.140)#k#b 절대기술을 배우고 싶습니다.#l\r\n");
status++;
} else if (status == 1) {
if (selection == 0) {
if (cm.haveItem(4032002,1)) {
if (cm.getPlayer().getParty().getMembers().size() >= 1) {
if (cm.getPlayerCount(262030300) == 0) {
cm.gainItem(4032002,-1);
cm.warpParty(262030300);
cm.killAllMob();
cm.spawnMob(8870000,134,196);
cm.playMusic(true,"Bgm14/DragonNest");
cm.getPlayer().ServerNotice("보스알림 : "+cm.getPlayer().getName()+"님과 그의 일행들이 힐라원정에 도전합니다.");
cm.dispose();
} else {
cm.sendOk("이미 다른파티가 도전중입니다.");
cm.dispose();
}
} else {
cm.sendOk("왕좌의 최소 입장 조건은 파티원 3명 입니다.");
cm.dispose();
}
} else {
cm.sendOk("힐라의 왕좌에 입장하기 위해서는 #b카오스 구슬#k이 필요합니다.");
cm.dispose();
}
} else if (selection == 1){
cm.sendSimple("힐라의 머리카락으로 라이징썬 팬던트의 업그레이드 횟수 강화를 할수 있습니다. 성공 확률은 #r40%#k 입니다.\r\n#b"+cm.ChoiceEquipList(1032093,cm.getPlayer().getClient()));
status = 5;
} else if (selection == 3){
if (cm.haveItem(4033950,1)) {
cm.sendOk("힐라군단의 보급품에서 #i"+h[hs]+"# #b#t"+h[hs]+"##k를 획득하셨습니다.");
cm.gainItem(4033950,-1);
cm.gainItem(h[hs],1);
cm.dispose();
} else {
cm.sendOk("힐라군단의 보급품이 없으신것 같은데요?");
cm.dispose();
}
} else if (selection == 2){
if (cm.getPlayer().getLevel() >= 140) {
if (cm.getJob() == 112) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#기가 슬래쉬 #k#r(공격형)#k#b을 배우고 싶습니다.#l");
status = 112;
} else if (cm.getJob() == 122) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#작룡전인 #k#r(공격형)#k#b을 배우고 싶습니다.#l");
status = 122;
} else if (cm.getJob() == 132) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#다크 임페일 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#다크 스피어 #k#r(보조형)#k#b을 배우고 싶습니다.#l");
status = 132;
} else if (cm.getJob() == 212) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#데드 임페르도 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#헬 파이어 #k#r(보조형)#k#b을 배우고 싶습니다.#l");
status = 212;
} else if (cm.getJob() == 222) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#엘리멘탈 바이킹 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#일렉트릭 필드 #k#r(보조형)#k#b을 배우고 싶습니다.#l");
status = 222;
} else if (cm.getJob() == 232) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#오펀의 활 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#절대 보조스킬 3가지 #k#r(지원형)#k#b를 배우고 싶습니다.#l");
status = 232;
} else if (cm.getJob() == 312) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#멀티 스나이핑 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#알바트로스 #k#r(각성형)#k#b을 배우고 싶습니다.#l");
status = 312;
} else if (cm.getJob() == 322) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#격풍의 시 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#갓 오브 에로우 #k#r(강화형)#k#b을 배우고 싶습니다.#l");
status = 322;
} else if (cm.getJob() == 412) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#커터 블레이드 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#어쎄신 트랩 #k#r(보조형)#k#b을 배우고 싶습니다.#l");
status = 412;
} else if (cm.getJob() == 422) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#블러드 스크래치 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#사신지도 #k#r(각성형)#k#b을 배우고 싶습니다.#l");
status = 422;
} else if (cm.getJob() == 522) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#드래곤 핑크 포탈 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#스탠스 #k#r(강화형)#k#b을 배우고 싶습니다.#l");
status = 522;
} else if (cm.getJob() == 512) {
cm.sendSimple("절대 기술은 현재까지 사용되는 기술과는 비교할수 없는 절대적인 기술 입니다. 그런 기술을 몸에 익히기 위해서는 엄청난 노력과 시간이 필요한법이지요.\r\n#b#L0#캡틴 후크 #k#r(공격형)#k#b을 배우고 싶습니다.#l\r\n#L1#해수강림 #k#r(보조형)#k#b을 배우고 싶습니다.#l");
status = 512;
}
} else {
cm.sendOk("절대기술은 아무나 배울수있는게 아닙니다 기초적인 수행과 노력의 결실을 바탕으로 이루워지는것이지요 당신은 아직 배울 자격이 되지못하는 것 같습니다.");
cm.dispose();
}
}
} else if (status == 5) {
if (selection >= 0) {
if (cm.haveItem(4033304,1)) {
cm.gainItem(4033304,-1);
if (random >= 1 && random <= 46) {
cm.changeStat2(selection,15,cm.getItemStat(selection,15) + 1);
cm.getPlayer().reloadChar();
cm.sendOk("축하드립니다. 강화의 성공하여 라이징썬 이어링의 업그레이드 횟수가 #b증가#k하였습니다.");
cm.dispose();
} else {
cm.sendOk("죄송합니다. 강화의 #r실패#k 하였습니다.");
cm.dispose();
}
} else {
cm.sendOk("업그레이드 횟수를 증가시키기 위해서는 힐라의 머리카락이 필요합니다.")
cm.dispose();
}
} else {
cm.dispose();
}
} else if (status == 112) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 11101004;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 11101004;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b기가 슬레쉬 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 히어로) 님이 기가 슬레쉬를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b기가 슬레쉬 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
}
} else if (status == 122) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 11111006;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 11111006;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b작룡전인 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 팔라딘) 님이 작룡전인을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b작룡전인 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
}
} else if (status == 132) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 9001006;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 9001006;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b다크 임페일 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 다크나이트) 님이 다크 임페일을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b다크 임페일 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 11001004;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 11001004;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b다크 스피어 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 다크나이트) 님이 다크 스피어를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b다크 스피어 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}
} else if (status == 212) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 12111006;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 12111006;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b데드 임페르도 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 아크메이지) 님이 데드 임페르도를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b데드 임페르도 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 12001004;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 12001004;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b헬 파이어 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 아크메이지) 님이 헬 파이어를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b헬 파이어 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}
} else if (status == 222) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 12101006;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 12101006;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b엘리멘탈 바이킹 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 아크메이지) 님이 엘리멘탈 바이킹을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b엘리멘탈 바이킹 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 12111005;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 12111005;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b일렉트릭 필드 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 아크메이지) 님이 일렉트릭 필드를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b일렉트릭 필드 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}
} else if (status == 232) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 12101002;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 12101002;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b오펀의 활 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 비숍) 님이 오펀의 활을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b오펀의 활 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 9001003;
ult2 = 15111005;
ult3 = 12111004;
cm.getPlayer().changeKeybinding(40,1,ult1);
cm.getPlayer().changeKeybinding(41,1,ult2);
cm.getPlayer().changeKeybinding(43,1,ult3);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 9001003;
ult2 = 15111005;
ult3 = 12111004;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.teachSkill(ult2,cm.getMaxLevel(ult2),cm.getMaxLevel(ult2));
cm.teachSkill(ult3,cm.getMaxLevel(ult3),cm.getMaxLevel(ult3));
cm.getPlayer().changeKeybinding(40,1,ult1);
cm.getPlayer().changeKeybinding(41,1,ult2);
cm.getPlayer().changeKeybinding(43,1,ult3);
dataa.setCustomData("완료");
cm.sendOk("#b절대 보조스킬들 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창을 열어 저장된 스킬을 확인해주세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 비숍) 님이 절대 보조스킬들을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b절대 보조스킬들 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}

} else if (status == 312) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 13111000;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 13111000;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b멀티 스나이핑 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 보우마스터) 님이 멀티 스나이핑을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b멀티 스나이핑 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 13111005;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 13111005;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b알바트로스 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 보우마스터) 님이 알바트로스를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b알바트로스 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}

} else if (status == 322) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 13111002;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 13111002;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b격풍의 시 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 신궁) 님이 격풍의 시를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b격풍의 시 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 13001002;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 13001002;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b갓 오브 에로우 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 신궁) 님이 갓 오브 에로우를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b갓 오브 에로우 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}

} else if (status == 412) {
if (selection == 0) {
if (data.getCustomData() == "완료" || cm.getPlayer().getName() == "꼬마") {
ult1 = 14101006;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 14101006;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b커터 블레이드 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 나이트로드) 님이 커터 블레이드를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b커터 블레이드 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 14001005;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 14001005;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b어쎄신 트랩 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 나이트로드) 님이 어쎄신 트랩을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b어쎄신 트랩 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}

} else if (status == 422) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 15111007;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 15111007;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b블러드 스크래치 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 섀도어) 님이 블러드 스크래치를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b블러드 스크래치 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 11101003;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 11101003;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b사신지도 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 섀도어) 님이 사신지도를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b사신지도 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}


} else if (status == 512) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 15001001;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 15001001;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b캡틴 후크 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 바이퍼) 님이 캡틴 후크를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b캡틴 후크 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 15001004;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 15001004;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b해수강림 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 바이퍼) 님이 해수강림을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b해수강림 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}

} else if (status == 522) {
if (selection == 0) {
if (data.getCustomData() == "완료") {
ult1 = 15001002;
cm.getPlayer().changeKeybinding(42,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 20000000 && cm.haveItem(4020013,30) && cm.haveItem(4250801,1) && cm.haveItem(4250901,1) && cm.haveItem(4251001,1) && cm.haveItem(4251101,1) && cm.haveItem(4251401,1) && cm.haveItem(4440001,1) && cm.haveItem(4441001,1) && cm.haveItem(4442001,1) && cm.haveItem(4443001,1) && cm.haveItem(4000460,1)&& cm.haveItem(4000462,1)) {
cm.gainMeso(-20000000);cm.gainItem(4250801,-1);cm.gainItem(4250901,-1);cm.gainItem(4251001,-1);cm.gainItem(4251101,-1);cm.gainItem(4251401,-1);cm.gainItem(4440001,-1);cm.gainItem(4441001,-1);cm.gainItem(4442001,-1);cm.gainItem(4443001,-1);cm.gainItem(4000462,-1);cm.gainItem(4000461,-1);cm.gainItem(4000460,-1);cm.gainItem(4020013,-30);
ult1 = 15001002;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(42,1,ult1);
data.setCustomData("완료");
cm.sendOk("#b드래곤 핑크포탈 (Lv.max)#k을 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #rSHIFT#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 캡틴) 님이 드래곤 핑크포탈을 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b드래곤 핑크포탈 (Lv.max)#k을 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n#r(중급)#k 힘,지혜,민첩,행운,어둠의 크리스탈\r\n#r(S급)#k  힘,지혜,민첩,행운의 쥬얼\r\n도도 , 리릴노흐 , 라이카의 전리품\r\n꿈의 조각 30개\r\n20,000,000 메소");
cm.dispose();
}
}
} else if (selection == 1) {
if (dataa.getCustomData() == "완료") {
ult1 = 1121002;
cm.getPlayer().changeKeybinding(41,1,ult1);
cm.sendOk("채널을 이동해주시기 바랍니다.");
cm.dispose();
} else {
if (cm.getMeso() >= 10000000 && cm.haveItem(4001433,1) && cm.haveItem(4033959,1) && cm.haveItem(4011007,1) && cm.haveItem(4021009,1)) {
cm.gainMeso(-10000000); cm.gainItem(4001433,-1); cm.gainItem(4033959,-1); cm.gainItem(4011007,-1); cm.gainItem(4021009,-1);
ult1 = 1121002;
cm.teachSkill(ult1,cm.getMaxLevel(ult1),cm.getMaxLevel(ult1));
cm.getPlayer().changeKeybinding(41,1,ult1);
dataa.setCustomData("완료");
cm.sendOk("#b스탠스 (Lv.max)#k를 완전하게 익혔습니다.\r\n채널 이동후 키보드 창의 #r` (캐쉬샵이동키)#k키를 확인해보세요.");
cm.getPlayer().ServerNotice("서버안내 : "+cm.getPlayer().getName()+" (Lv."+cm.getPlayer().getLevel()+" 캡틴) 님이 스탠스를 배우셨습니다.");
cm.dispose();
} else {
cm.sendOk("#b스탠스 (Lv.max)#k를 완전히 익히기 위해서는 아래와 같은 고급 아이템을 필요로 합니다 절대적인 기술은 노력만으로는 몸에 익힐수 없기 때문입니다. 여러가지 마법의 힘이깃든 아이템들의 기운을 이용해야 합니다. 아래의 아이템은 흔히 볼수있는 아이템들이 아니기때문에. 엄청난 노력이 필요할것 입니다.\r\n--------------------------------------------\r\n태양의 불꽃\r\n달의 돌과, 별의 돌\r\n아카이럼군단의 모래시계\r\n10,000,000 메소");
cm.dispose();
}
}
}
}
}