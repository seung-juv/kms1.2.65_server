var status = 0;

var C = new Array(1902108,1902110,1902116,1902117,1902118,1902119,1902121,1902124,1902131,1902132,1902136,1902139,1902140,1902145,1902148,1902149,1902156,1902157,1902158,1902163,1902164,1902165,1902167,1902169,1902170,1902172,1902176,1902179,1902180,1902182,1902185,1902187,1902188,1902189,1902186,1902161,1902141,1902127,1902113,1902103,1902104,1902105,1902106,1902107,1902108,1902110,1902116,1902117,1902118,1902119,1902121,1902124,1902131,1902132,1902136,1902139,1902140,1902145,1902148,1902149,1902156,1902157,1902158,1902163,1902164,1902165,1902167,1902169,1902170,1902172,1902176,1902179,1902180,1902182,1902185,1902187,1902188,1902189,1902186,1902161,1902141,1902127,1902113,1902103,1902104,1902105,1902106,1902107,1902108,1902110,1902116,1902117,1902118,1902119,1902121,1902124,1902131,1902132,1902136,1902139,1902140,1902145,1902148,1902149,1902156,1902157,1902158,1902163,1902164,1902165,1902167,1902169,1902170,1902172,1902176,1902179,1902180,1902182,1902185,1902187,1902188,1902189,1902186,1902161,1902141,1902127,1902113,1902103,1902104,1902105,1902106,1902107,1902108,1902110,1902116,1902117,1902118,1902119,1902121,1902124,1902131,1902132,1902136,1902139,1902140,1902145,1902100,1902101,1902102,1902103,1902104,1902105,1902106,1902107,1902109,1902111,1902112,1902113,1902114,1902115,1902122,1902123,1902125,1902126,1902127,1902128,1902129,1902130,1902135,1902137,1902138,1902140,1902141,1902142,1902143,1902144,1902146,1902147,1902110,1902116,1902117,1902118,1902119,1902121,1902124,1902131,1902132,1902136,1902139,1902140,1902145,1902148,1902149,1902156,1902157,1902158,1902150,1902152,1902153,1902154,1902155,1902159,1902160,1902161,1902162,1902166,1902171,1902173,1902174,1902175,1902177,1902178,1902181,1902183,1902184,1902186,1902108,1902110,1902116,1902117,1902118,1902119,1902121,1902124,1902131,1902132,1902136,1902139,1902140,1902145,1902148,1902149,1902156,1902157,1902158,1902163,1902164,1902165,1902167,1902169,1902170,1902172,1902176,1902179,1902180,1902182,1902185,1902187,1902188,1902189,1902186,1902161,1902141,1902127,1902113,1902103,1902104,1902105,1902106,1902107);
var Cr = Math.floor(Math.random()*C.length);

var S = new Array(1902108,1902110,1902116,1902117,1902118,1902119,1902121,1902124,1902131,1902132,1902136,1902139,1902140,1902145,1902148,1902149,1902156,1902157,1902158,1902163,1902164,1902165,1902167,1902169,1902170,1902172,1902176,1902179,1902180,1902182,1902185,1902187,1902188,1902189,1902186,1902161,1902141,1902127,1902113,1902103,1902104,1902105,1902106,1902107,1902100,1902101,1902102,1902103,1902104,1902105,1902106,1902107,1902109,1902111,1902112,1902113,1902114,1902115,1902122,1902123,1902125,1902126,1902127,1902128,1902129,1902130,1902135,1902137,1902138,1902140,1902141,1902142,1902143,1902144,1902146,1902147,1902150,1902152,1902153,1902154,1902155,1902159,1902160,1902161,1902162,1902166,1902171,1902173,1902174,1902175,1902177,1902178,1902181,1902183,1902184,1902186,1902108,1902110,1902116,1902117,1902118,1902119,1902121,1902124,1902131,1902132,1902136,1902139,1902140,1902145,1902148,1902149,1902156,1902157,1902158,1902163,1902164,1902165,1902167,1902169,1902170,1902172,1902176,1902179,1902180,1902182,1902185,1902187,1902188,1902189,1902186,1902161,1902141,1902127,1902113,1902103,1902104,1902105,1902106,1902107);
var Sr = Math.floor(Math.random()*S.length);

random = Math.floor(Math.random() * 20);

function action(mode, type, selection){

if(status == 0){
cm.sendSimple("안녕하세요 오늘도 이피온월드는 평화로운것 같군요 저도 항상 그에 본받아 평화롭고 따스한 마음으로 동물들을 돌보고 있습니다 모험가님도 여행할때 매우 유용하게 도움이 되는 파트너를 만들어보지 않겠어요?\r\n#b#L0#DS 에그을 부화시키고 싶습니다.#l\r\n#L1#상급라이딩을 감정하고 싶습니다.#l\r\n#L2#상급라이딩의 인증코드를 알고싶습니다.#l\r\n#L3#부화 컨텐츠의 소개를 듣고싶습니다.#l\r\n#L4#스페셜 몬스터의 전리품을 사용하고싶습니다.#l");
status++;
} else if(status == 1){
if (selection == 0) {
if (cm.haveItem(4170012,1)) {
cm.sendSimple("DS 에그를 부화시키기 위해서는 따스한 봄의 기운이 필요합니다. 아래중 소유하고있는 아이템이 있다면 얼마든지 부화시켜 드리지요.\r\n#b#L0##i4032264#봄날의 꽃씨를 이용하겠습니다.\r\n#L1##i4032265#봄날의 꽃잎을 이용하겠습니다.\r\n");
status++;
} else {
cm.sendOk("DS 에그를 가지고 있는게 확실한가요?");
cm.dispose();
}
} else if (selection == 1) {
if (cm.haveItem(4033875,1)) {
cm.sendGetNumber("옵션을 부여하실 상급 라이딩의 인증코드를 적어주세요.",1,1,2000000);
status = 123;
} else {
cm.sendOk("A급이상의 라이딩을 감정하려면 #i4033875##b감정의 물약#k이 필요합니다.");
cm.dispose();
}
} else if (selection == 2) {
cm.sendOk("#e#r< S급 라이딩 >#n#k\r\n알라딘 : 1902100\r\n꼬꼬닭 : 1902102\r\n오늘은 신데렐라 : 1902115\r\n카이저 재규어 : 1902120\r\n내친구 돌피 : 1902122\r\n페가수스 : 1902135\r\n블랙빈 열기구 : 1902143\r\n핑크빈 열기구 : 1902144\r\n오닉스 재규어 : 1902151\r\n드래곤 마스터  : 1902154\r\n거대 토끼 : 1902162\r\n스노우 재규어 : 1902168\r\n홀리헤븐 유니콘 : 1902173\r\n다크 드래곤 : 1902109\r\n근두운 : 1902126\r\n페리카나 : 1902130\r\n데비존 해적선 : 1902137\r\n오늘은 풍선을 타고 : 1902138\r\n천사의 수호 : 1902142\r\n푹신푹신 클라우드 : 1902146\r\n겨울왕국 : 1902147\r\n와이번정복자 : 1902150\r\n핑크 유니콘 : 1902155\r\n어둠의 견마 : 1902160\r\n삐까번적 붕붕이 : 1902166\r\n화이트 유니콘 : 1902171\r\n베이비 유니콘 : 1902174\r\n슈피겔만의 열기구 : 1902175\r\n\r\n#e#r<A급 라이딩>#n#k\r\n예티 : 1902101\r\n힐라의 붕붕이 : 1902103\r\n스키장오빠의 붕붕이 : 1902104\r\n오르카의 붕붕이 : 1902105\r\n시그너스의 붕붕이 : 1902106\r\n나인하트의 붕붕이 : 1902107\r\n빠라바라빠라밤 : 1902111\r\n별에서온 그대 : 1902112\r\n나는야지식인 : 1902113\r\n벨룸 미니어쳐 : 1902114\r\n어둠의 불독 : 1902123\r\n가고일 : 1902125\r\n메가톤 펀치 : 1902127\r\n시그너스윙 : 1902128\r\n푸치의 잔디깎기 : 1902141\r\n아리아와 드라이브 : 1902152\r\n팬텀과 드라이브 : 1902153\r\n핑크테니 열기구 : 1902159\r\n트렌스 포머 : 1902161\r\n자가용 빨간비행기 : 1902177\r\n자가용 초록비행기 : 1902178\r\n레오나르도 : 1902181\r\n메카닉 : 1902183\r\n백두산호랑이 : 1902184\r\n주니어 발록 : 1902186");
cm.dispose();
} else if (selection == 3) {
cm.sendOk("안녕하세요 이피온월드의 라이딩목장 주인입니다. 우선 컨텐츠를 소개(설명) 해드리도록 하겠습니다. DS에그와 봄날의꽃씨/꽃잎이 있다면 알을 부화시킬수있는데요 꽃씨는 C급과 B급라이딩 또한 극소수의 A급라이딩이 부화되며 3시간의 부화과정이 필요합니다. 꽃잎은 모든급수의 라이딩중 하나가 부화되며 총 5시간의 부화시간이 필요합니다 여기서 눈부신 햇살이 있다면 부화시간은 2시간단축됩니다. 주의사항은 부화도중에는 재접속 , 캐시샵 , 쉼터나가기가 불가능합니다 이를 행할시 부화는 실패해버립니다. 또한 A급이상의 라이딩에는 잠재된 옵션을 랜덤으로 감정됩니다.");
cm.dispose();
} else if (selection == 4) {
cm.sendSimple("스페셜 몬스터를 쓰러뜨리고 전리품을 획득하셧나요? 스페셜 몬스터의 전리품을 저에게 주신다면 아주 특별한 보상을 해드리겠습니다.\r\n#b#L0#호수의침전물로 체력 300 강화.\r\n#L1#호수의침전물로 마력 150 강화.\r\n#L2#불길한나무토막으로 올스텟 2강화.\r\n#L3#스칼리온의발바닥으로 감정의 물약 교환.\r\n#L4#붉은계약구슬로 DS에그 교환.\r\n");
status = 99;
}
} else if (status == 123) {
if (cm.haveItem(selection,1)) {
if (selection == 1902100 || selection == 1902102 || selection == 1902115 || selection == 1902122 || selection == 1902135 || selection == 1902143 || selection == 1902144 || selection == 1902154 || selection == 1902162 || selection == 1902173){
cm.sendSimple("인증이 성공적으로 완료되었습니다. 아래의 라이딩이 맞으시다면 #r(S++급) 라이딩#k 감정을 시작하시겠습니까?\r\n#b"+cm.ChoiceEquipList(selection,cm.getPlayer().getClient()));
status = 124;
} else if (selection == 1902109 || selection == 1902126 || selection == 1902130 || selection == 1902137 || selection == 1902138 || selection == 1902142 || selection == 1902146 || selection == 1902147 || selection == 1902150 || selection == 1902155 || selection == 1902160 || selection == 1902166 || selection == 1902171 || selection == 1902174 || selection == 1902175) {
cm.sendSimple("인증이 성공적으로 완료되었습니다. 아래의 라이딩이 맞으시다면 #r(S급) 라이딩#k 감정을 시작하시겠습니까?\r\n#b"+cm.ChoiceEquipList(selection,cm.getPlayer().getClient()));
status = 125;
} else if (selection == 1902181 || selection == 1902184) {
cm.sendSimple("인증이 성공적으로 완료되었습니다. 아래의 라이딩이 맞으시다면 #r(A++급) 라이딩#k 감정을 시작하시겠습니까?\r\n#b"+cm.ChoiceEquipList(selection,cm.getPlayer().getClient()));
status = 126;
} else if (selection == 1902101 || selection == 1902103 || selection == 1902104 || selection == 1902105 || selection == 1902106 || selection == 1902107 || selection == 1902111 || selection == 1902112 || selection == 1902113 || selection == 1902114 || selection == 1902123 || selection == 1902125 || selection == 1902127 || selection == 1902128 || selection == 1902141 || selection == 1902152 || selection == 1902153 || selection == 1902159 || selection == 1902161 || selection == 1902177 || selection == 1902178 || selection == 1902183 || selection == 1902186) {
cm.sendSimple("인증이 성공적으로 완료되었습니다. 아래의 라이딩이 맞으시다면 #r(A급) 라이딩#k 감정을 시작하시겠습니까?\r\n#b"+cm.ChoiceEquipList(selection,cm.getPlayer().getClient()));
status = 127;
} else if (selection == 1902120 || selection == 1902151 || selection == 1902168) {
cm.sendSimple("인증이 성공적으로 완료되었습니다. 아래의 라이딩이 맞으시다면 #r(S++ 급) 재규어#k 감정을 시작하시겠습니까?\r\n#b"+cm.ChoiceEquipList(selection,cm.getPlayer().getClient()));
status = 128;
} else {
cm.sendOk("A급 미만의 라이딩은 감정할수 없습니다.");
cm.dispose();
}
} else {
cm.sendOk("입력하신 인증코드의 라이딩이 없는것 같은데요? 만약 착용중이라면 착용 해제후 다시시도해주세요.");
cm.dispose();
}


// 재구어감정

} else if (status == 128) {
cm.gainItem(4033875,-1);
if (random >= 0 && random <= 1) {
cm.changeStat2(selection,0,60);
cm.changeStat2(selection,1,60);
cm.changeStat2(selection,2,60);
cm.changeStat2(selection,3,60);
cm.changeStat2(selection,4,3000);
cm.changeStat2(selection,5,2900);
cm.setOwner(selection,0,"★★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 2 && random <= 4) {
cm.changeStat2(selection,0,50);
cm.changeStat2(selection,1,50);
cm.changeStat2(selection,2,50);
cm.changeStat2(selection,3,50);
cm.changeStat2(selection,4,2800);
cm.changeStat2(selection,5,2700);
cm.setOwner(selection,0,"★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 5 && random <= 10) {
cm.changeStat2(selection,0,40);
cm.changeStat2(selection,1,40);
cm.changeStat2(selection,2,40);
cm.changeStat2(selection,3,40);
cm.changeStat2(selection,4,2600);
cm.changeStat2(selection,5,2500);
cm.setOwner(selection,0,"★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r중급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 11 && random <= 15) {
cm.changeStat2(selection,0,30);
cm.changeStat2(selection,1,30);
cm.changeStat2(selection,2,30);
cm.changeStat2(selection,3,30);
cm.changeStat2(selection,4,2000);
cm.changeStat2(selection,5,1900);
cm.setOwner(selection,0,"★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r하급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 16 && random <= 20) {
cm.changeStat2(selection,0,20);
cm.changeStat2(selection,1,20);
cm.changeStat2(selection,2,20);
cm.changeStat2(selection,3,20);
cm.changeStat2(selection,4,1500);
cm.changeStat2(selection,5,1300);
cm.setOwner(selection,0,"★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최하급#k으로 감정되었습니다.");
cm.dispose();
}

// S++감정

} else if (status == 124) {
cm.gainItem(4033875,-1);
if (random >= 0 && random <= 1) {
cm.changeStat2(selection,0,40);
cm.changeStat2(selection,1,40);
cm.changeStat2(selection,2,40);
cm.changeStat2(selection,3,40);
cm.changeStat2(selection,4,2000);
cm.changeStat2(selection,5,1700);
cm.setOwner(selection,0,"★★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 2 && random <= 4) {
cm.changeStat2(selection,0,30);
cm.changeStat2(selection,1,30);
cm.changeStat2(selection,2,30);
cm.changeStat2(selection,3,30);
cm.changeStat2(selection,4,1800);
cm.changeStat2(selection,5,1500);
cm.setOwner(selection,0,"★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 5 && random <= 10) {
cm.changeStat2(selection,0,25);
cm.changeStat2(selection,1,25);
cm.changeStat2(selection,2,25);
cm.changeStat2(selection,3,25);
cm.changeStat2(selection,4,1600);
cm.changeStat2(selection,5,1300);
cm.setOwner(selection,0,"★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r중급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 11 && random <= 15) {
cm.changeStat2(selection,0,20);
cm.changeStat2(selection,1,20);
cm.changeStat2(selection,2,20);
cm.changeStat2(selection,3,20);
cm.changeStat2(selection,4,1300);
cm.changeStat2(selection,5,1100);
cm.setOwner(selection,0,"★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r하급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 16 && random <= 20) {
cm.changeStat2(selection,0,15);
cm.changeStat2(selection,1,15);
cm.changeStat2(selection,2,15);
cm.changeStat2(selection,3,15);
cm.changeStat2(selection,4,1000);
cm.changeStat2(selection,5,800);
cm.setOwner(selection,0,"★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최하급#k으로 감정되었습니다.");
cm.dispose();
}

// s 감정

} else if (status == 125) {
cm.gainItem(4033875,-1);
if (random >= 0 && random <= 1) {
cm.changeStat2(selection,0,30);
cm.changeStat2(selection,1,30);
cm.changeStat2(selection,2,30);
cm.changeStat2(selection,3,30);
cm.changeStat2(selection,4,1800);
cm.changeStat2(selection,5,1500);
cm.setOwner(selection,0,"★★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 2 && random <= 4) {
cm.changeStat2(selection,0,25);
cm.changeStat2(selection,1,25);
cm.changeStat2(selection,2,25);
cm.changeStat2(selection,3,25);
cm.changeStat2(selection,4,1600);
cm.changeStat2(selection,5,1300);
cm.setOwner(selection,0,"★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 5 && random <= 10) {
cm.changeStat2(selection,0,20);
cm.changeStat2(selection,1,20);
cm.changeStat2(selection,2,20);
cm.changeStat2(selection,3,20);
cm.changeStat2(selection,4,1300);
cm.changeStat2(selection,5,1100);
cm.setOwner(selection,0,"★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r중급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 11 && random <= 15) {
cm.changeStat2(selection,0,15);
cm.changeStat2(selection,1,15);
cm.changeStat2(selection,2,15);
cm.changeStat2(selection,3,15);
cm.changeStat2(selection,4,1000);
cm.changeStat2(selection,5,800);
cm.setOwner(selection,0,"★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r하급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 16 && random <= 20) {
cm.changeStat2(selection,0,10);
cm.changeStat2(selection,1,10);
cm.changeStat2(selection,2,10);
cm.changeStat2(selection,3,10);
cm.changeStat2(selection,4,700);
cm.changeStat2(selection,5,500);
cm.setOwner(selection,0,"★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최하급#k으로 감정되었습니다.");
cm.dispose();
}

// a++ 감정

} else if (status == 126) {
cm.gainItem(4033875,-1);
if (random >= 0 && random <= 1) {
cm.changeStat2(selection,0,35);
cm.changeStat2(selection,1,35);
cm.changeStat2(selection,2,35);
cm.changeStat2(selection,3,35);
cm.setOwner(selection,0,"★★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 2 && random <= 4) {
cm.changeStat2(selection,0,30);
cm.changeStat2(selection,1,30);
cm.changeStat2(selection,2,30);
cm.changeStat2(selection,3,30);
cm.setOwner(selection,0,"★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 5 && random <= 10) {
cm.changeStat2(selection,0,25);
cm.changeStat2(selection,1,25);
cm.changeStat2(selection,2,25);
cm.changeStat2(selection,3,25);
cm.setOwner(selection,0,"★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r중급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 11 && random <= 15) {
cm.changeStat2(selection,0,20);
cm.changeStat2(selection,1,20);
cm.changeStat2(selection,2,20);
cm.changeStat2(selection,3,20);
cm.setOwner(selection,0,"★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r하급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 16 && random <= 20) {
cm.changeStat2(selection,0,15);
cm.changeStat2(selection,1,15);
cm.changeStat2(selection,2,15);
cm.changeStat2(selection,3,15);
cm.setOwner(selection,0,"★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최하급#k으로 감정되었습니다.");
cm.dispose();
}

// a 감정

} else if (status == 127) {
cm.gainItem(4033875,-1);
if (random >= 0 && random <= 1) {
cm.changeStat2(selection,0,15);
cm.changeStat2(selection,1,15);
cm.changeStat2(selection,2,15);
cm.changeStat2(selection,3,15);
cm.changeStat2(selection,4,600);
cm.changeStat2(selection,5,500);
cm.setOwner(selection,0,"★★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 2 && random <= 4) {
cm.changeStat2(selection,0,10);
cm.changeStat2(selection,1,10);
cm.changeStat2(selection,2,10);
cm.changeStat2(selection,3,10);
cm.changeStat2(selection,4,500);
cm.changeStat2(selection,5,400);
cm.setOwner(selection,0,"★★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r상급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 5 && random <= 10) {
cm.changeStat2(selection,0,8);
cm.changeStat2(selection,1,8);
cm.changeStat2(selection,2,8);
cm.changeStat2(selection,3,8);
cm.changeStat2(selection,4,400);
cm.changeStat2(selection,5,300);
cm.setOwner(selection,0,"★★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r중급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 11 && random <= 15) {
cm.changeStat2(selection,0,4);
cm.changeStat2(selection,1,4);
cm.changeStat2(selection,2,4);
cm.changeStat2(selection,3,4);
cm.changeStat2(selection,4,300);
cm.changeStat2(selection,5,200);
cm.setOwner(selection,0,"★★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r하급#k으로 감정되었습니다.");
cm.dispose();
} else if (random >= 16 && random <= 20) {
cm.changeStat2(selection,0,2);
cm.changeStat2(selection,1,2);
cm.changeStat2(selection,2,2);
cm.changeStat2(selection,3,2);
cm.changeStat2(selection,4,200);
cm.changeStat2(selection,5,100);
cm.setOwner(selection,0,"★");
cm.getPlayer().reloadChar();
cm.sendOk("이 라이딩은 #r최하급#k으로 감정되었습니다.");
cm.dispose();
}
} else if (status == 2) {
// 하급 부화 준비
if (selection == 0) {
if (cm.haveItem(4032264,1)) {
if (cm.haveItem(4032266,1)) {
cm.sendYesNo("좋습니다. 이제 부화를 준비해 볼까요? 어... 잠시만요 혹시 #r눈부신 햇살#k을 가지고 계신것 같은데 눈부신 햇살을 사용할시 부화에 걸리는 시간이 2시간이 단축됩니다 사용하시겠습니까?");
status = 10;
} else {
cm.gainItem(4032264,-1);
cm.gainItem(4170012,-1);
cm.timeGiveItem(C[Cr],10800);
cm.sendOk("#r#e(!)#n 주의사항을 알려드립니다.#k\r\n알이 부화되는 시간동안은 쉼터에서 나간다던지 캐쉬샵 , 재접속 및 채널이동시 부화가 실패합니다. 또한 중복으로 부화할시 부화중이던 알을 실패합니다. 마지막으로 부화가 되기 전까지는 장비 인벤토리 1칸을 꼭 비워주시기 바랍니다.");
cm.dispose();
}
} else {
cm.sendOk("#i4032264##b봄날의 꽃씨#k를 가지고 있는게 확실한가요?");
cm.dispose();
}

// 상급 부화 준비
} else if (selection == 1) {
if (cm.haveItem(4032265,1)) {
if (cm.haveItem(4032266,1)) {
cm.sendYesNo("좋습니다. 이제 부화를 준비해 볼까요? 어... 잠시만요 혹시 #r눈부신 햇살#k을 가지고 계신것 같은데 눈부신 햇살을 사용할시 부화에 걸리는 시간이 3시간이 단축됩니다 사용하시겠습니까?");
status = 11;
} else {
cm.gainItem(4032265,-1);
cm.gainItem(4170012,-1);
cm.timeGiveItem(S[Sr],14400);
cm.sendOk("#r#e(!)#n 주의사항을 알려드립니다.#k\r\n알이 부화되는 시간동안은 쉼터에서 나간다던지 캐쉬샵 , 재접속 및 채널이동시 부화가 실패합니다. 또한 중복으로 부화할시 부화중이던 알을 실패합니다. 마지막으로 부화가 되기 전까지는 장비 인벤토리 1칸을 꼭 비워주시기 바랍니다.");
cm.dispose();
}
} else {
cm.sendOk("#i4032265##b봄날의 꽃잎#k를 가지고 있는게 확실한가요?");
cm.dispose();
}
}
// 하급 시작
} else if (status == 10) {
if (mode == 1) {
cm.gainItem(4032264,-1);
cm.gainItem(4170012,-1);
cm.gainItem(4032266,-1);
cm.timeGiveItem(C[Cr],3600);
cm.getPlayer().dropMessage(1,"햇살을 빛춰 부화시간이 2시간 단축되었습니다.");
cm.sendOk("#r#e(!)#n 주의사항을 알려드립니다.#k\r\n알이 부화되는 시간동안은 쉼터에서 나간다던지 캐쉬샵 , 재접속 및 채널이동시 부화가 실패합니다. 또한 중복으로 부화할시 부화중이던 알을 실패합니다. 마지막으로 부화가 되기 전까지는 장비 인벤토리 1칸을 꼭 비워주시기 바랍니다.");
cm.dispose();
} else {
cm.gainItem(4032264,-1);
cm.gainItem(4170012,-1);
cm.timeGiveItem(C[Cr],7200);
cm.getPlayer().dropMessage(1,"햇살을 사용하지않아 원래부화시간으로 진행됩니다.");
cm.sendOk("#r#e(!)#n 주의사항을 알려드립니다.#k\r\n알이 부화되는 시간동안은 쉼터에서 나간다던지 캐쉬샵 , 재접속 및 채널이동시 부화가 실패합니다. 또한 중복으로 부화할시 부화중이던 알을 실패합니다. 마지막으로 부화가 되기 전까지는 장비 인벤토리 1칸을 꼭 비워주시기 바랍니다.");
cm.dispose();
}
// 상급 시작
} else if (status == 11) {
if (mode == 1) {
cm.gainItem(4032265,-1);
cm.gainItem(4170012,-1);
cm.gainItem(4032266,-1);
cm.timeGiveItem(S[Sr],7200);
cm.getPlayer().dropMessage(1,"햇살을 빛춰 부화시간이 2시간 단축되었습니다.");
cm.sendOk("#r#e(!)#n 주의사항을 알려드립니다.#k\r\n알이 부화되는 시간동안은 쉼터에서 나간다던지 캐쉬샵 , 재접속 및 채널이동시 부화가 실패합니다. 또한 중복으로 부화할시 부화중이던 알을 실패합니다. 마지막으로 부화가 되기 전까지는 장비 인벤토리 1칸을 꼭 비워주시기 바랍니다.");
cm.dispose();
} else {
cm.gainItem(4032265,-1);
cm.gainItem(4170012,-1);
cm.timeGiveItem(S[Sr],14400);
cm.getPlayer().dropMessage(1,"햇살을 사용하지않아 원래부화시간으로 진행됩니다.");
cm.sendOk("#r#e(!)#n 주의사항을 알려드립니다.#k\r\n알이 부화되는 시간동안은 쉼터에서 나간다던지 캐쉬샵 , 재접속 및 채널이동시 부화가 실패합니다. 또한 중복으로 부화할시 부화중이던 알을 실패합니다. 마지막으로 부화가 되기 전까지는 장비 인벤토리 1칸을 꼭 비워주시기 바랍니다.");
cm.dispose();
}
} else if(status == 99){
if (selection == 0) {
if (cm.haveItem(4000992,1)) {
cm.gainItem(4000992,-1);
cm.getPlayer().getStat().setMaxHp(cm.getPlayer().getStat().getMaxHp()+300,cm.getPlayer());
cm.getPlayer().reloadChar();
cm.sendOk("교환이 성사 되었습니다.");
cm.dispose();
} else {
cm.sendOk("선택하신 스페셜 몬스터의 전리품이 없는것 같은데요?");
cm.dispose();
}
} else if (selection == 1) {
if (cm.haveItem(4000992,1)) {
cm.gainItem(4000992,-1);
cm.getPlayer().getStat().setMaxMp(cm.getPlayer().getStat().getMaxMp()+150,cm.getPlayer());
cm.getPlayer().reloadChar();
cm.sendOk("교환이 성사 되었습니다.");
cm.dispose();
} else {
cm.sendOk("선택하신 스페셜 몬스터의 전리품이 없는것 같은데요?");
cm.dispose();
}
} else if (selection == 2) {
if (cm.haveItem(4033087,1)) {
cm.gainItem(4033087,-1);
cm.getPlayer().getStat().setStr(cm.getPlayer().getStat().getStr()+2,cm.getPlayer());
cm.getPlayer().getStat().setDex(cm.getPlayer().getStat().getDex()+2,cm.getPlayer());
cm.getPlayer().getStat().setInt(cm.getPlayer().getStat().getInt()+2,cm.getPlayer());
cm.getPlayer().getStat().setLuk(cm.getPlayer().getStat().getLuk()+2,cm.getPlayer());
cm.getPlayer().reloadChar();
cm.sendOk("교환이 성사 되었습니다.");
cm.dispose();
} else {
cm.sendOk("선택하신 스페셜 몬스터의 전리품이 없는것 같은데요?");
cm.dispose();
}
} else if (selection == 3) {
if (cm.haveItem(4000688,1)) {
cm.gainItem(4000688,-1);
cm.gainItem(4033875,1);
cm.sendOk("교환이 성사 되었습니다.");
cm.dispose();
} else {
cm.sendOk("선택하신 스페셜 몬스터의 전리품이 없는것 같은데요?");
cm.dispose();
}
} else if (selection == 4) {
if (cm.haveItem(4000633,1)) {
cm.gainItem(4000633,-1);
cm.gainItem(4170012,1);
cm.sendOk("교환이 성사 되었습니다.");
cm.dispose();
} else {
cm.sendOk("선택하신 스페셜 몬스터의 전리품이 없는것 같은데요?");
cm.dispose();
}
}
}
}