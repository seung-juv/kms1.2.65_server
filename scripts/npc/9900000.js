﻿var status = 0;

function action(mode, type, selection){

if (status == 0) {
cm.sendSimple("안녕하세요 저는 이피온월드 드랍정보 도우미 엔피시 입니다. 원하시는 몬스터의 드랍정보를 보다 정확하게 알고싶다면 언제든지 이용해주시기 바랍니다.\r\n#b#L0#몬스터 드랍정보를 알고싶습니다.#l\r\n#L1#몬스터의 코드를 확인하고 싶습니다.#l");
status++;
} else if (status == 1) {
if (selection == 0) {
cm.sendGetText("몬스터의 드랍정보를 알려드립니다. 아래의 확인하시고 싶은 몬스터의 코드를 입력해주세요.\r\n");
status ++;
} else if (selection == 1) {
cm.sendOk("#r코드#k : 100100 / #b몬스터 이름#k : 달팽이\r\n#r코드#k : 100101 / #b몬스터 이름#k : 파란 달팽이\r\n#r코드#k : 120100 / #b몬스터 이름#k : 스포아\r\n#r코드#k : 130100 / #b몬스터 이름#k : 스텀프\r\n#r코드#k : 130101 / #b몬스터 이름#k : 빨간 달팽이\r\n#r코드#k : 210100 / #b몬스터 이름#k : 슬라임\r\n#r코드#k : 1110100 / #b몬스터 이름#k : 초록버섯\r\n#r코드#k : 1110101 / #b몬스터 이름#k : 다크 스텀프\r\n#r코드#k : 1120100 / #b몬스터 이름#k : 옥토퍼스\r\n#r코드#k : 1130100 / #b몬스터 이름#k : 엑스텀프\r\n#r코드#k : 1140100 / #b몬스터 이름#k : 고스텀프\r\n#r코드#k : 1210100 / #b몬스터 이름#k : 돼지\r\n#r코드#k : 1210101 / #b몬스터 이름#k : 리본 돼지\r\n#r코드#k : 1210102 / #b몬스터 이름#k : 주황버섯\r\n#r코드#k : 1210103 / #b몬스터 이름#k : 버블링\r\n#r코드#k : 2100100 / #b몬스터 이름#k : 흰 모래토끼\r\n#r코드#k : 2100101 / #b몬스터 이름#k : 갈색 모래토끼\r\n#r코드#k : 2100102 / #b몬스터 이름#k : 주니어 카투스\r\n#r코드#k : 2100103 / #b몬스터 이름#k : 카투스\r\n#r코드#k : 2100104 / #b몬스터 이름#k : 로얄 카투스\r\n#r코드#k : 2100105 / #b몬스터 이름#k : 벨라모아\r\n#r코드#k : 2100106 / #b몬스터 이름#k : 귀마개 프릴드\r\n#r코드#k : 2100107 / #b몬스터 이름#k : 목도리 프릴드\r\n#r코드#k : 2100108 / #b몬스터 이름#k : 미요캐츠\r\n#r코드#k : 2110200 / #b몬스터 이름#k : 뿔버섯\r\n#r코드#k : 2110300 / #b몬스터 이름#k : 모래 두더지\r\n#r코드#k : 2110301 / #b몬스터 이름#k : 스콜피언\r\n#r코드#k : 2130100 / #b몬스터 이름#k : 다크 엑스텀프\r\n#r코드#k : 2130103 / #b몬스터 이름#k : 주니어 네키\r\n#r코드#k : 2220000 / #b몬스터 이름#k : 마노\r\n#r코드#k : 2220100 / #b몬스터 이름#k : 파란버섯\r\n#r코드#k : 2230100 / #b몬스터 이름#k : 이블아이\r\n#r코드#k : 2230101 / #b몬스터 이름#k : 좀비버섯\r\n#r코드#k : 2230102 / #b몬스터 이름#k : 와일드보어\r\n#r코드#k : 2230103 / #b몬스터 이름#k : 트릭스터\r\n#r코드#k : 2230104 / #b몬스터 이름#k : 그린 트릭스터\r\n#r코드#k : 2230105 / #b몬스터 이름#k : 씨클\r\n#r코드#k : 2230106 / #b몬스터 이름#k : 씨코\r\n#r코드#k : 2230107 / #b몬스터 이름#k : 크라피\r\n#r코드#k : 2230108 / #b몬스터 이름#k : 핀붐\r\n#r코드#k : 2230109 / #b몬스터 이름#k : 버블피쉬\r\n#r코드#k : 2230110 / #b몬스터 이름#k : 우드 마스크\r\n#r코드#k : 2230111 / #b몬스터 이름#k : 스톤 마스크\r\n#r코드#k : 2230200 / #b몬스터 이름#k : 플라워 피쉬\r\n#r코드#k : 2300100 / #b몬스터 이름#k : 스티지\r\n#r코드#k : 3000000 / #b몬스터 이름#k : 스톤볼\r\n#r코드#k : 3000001 / #b몬스터 이름#k : 페어리\r\n#r코드#k : 3000002 / #b몬스터 이름#k : 페어리\r\n#r코드#k : 3000003 / #b몬스터 이름#k : 페어리\r\n#r코드#k : 3000004 / #b몬스터 이름#k : 페어리\r\n#r코드#k : 3000005 / #b몬스터 이름#k : 브라운테니\r\n#r코드#k : 3000006 / #b몬스터 이름#k : 크립\r\n#r코드#k : 3100101 / #b몬스터 이름#k : 모래난쟁이\r\n#r코드#k : 3100102 / #b몬스터 이름#k : 키요\r\n#r코드#k : 3110100 / #b몬스터 이름#k : 리게이터\r\n#r코드#k : 3110101 / #b몬스터 이름#k : 핑크테니\r\n#r코드#k : 3110102 / #b몬스터 이름#k : 라츠\r\n#r코드#k : 3110300 / #b몬스터 이름#k : 큐브슬라임\r\n#r코드#k : 3110301 / #b몬스터 이름#k : 붉은 모래난쟁이\r\n#r코드#k : 3110302 / #b몬스터 이름#k : 루모\r\n#r코드#k : 3110303 / #b몬스터 이름#k : 트리플 루모\r\n#r코드#k : 3210100 / #b몬스터 이름#k : 파이어보어\r\n#r코드#k : 3210200 / #b몬스터 이름#k : 주니어 샐리온\r\n#r코드#k : 3210201 / #b몬스터 이름#k : 주니어 라이오너\r\n#r코드#k : 3210202 / #b몬스터 이름#k : 주니어 그류핀\r\n#r코드#k : 3210203 / #b몬스터 이름#k : 팬더테니\r\n#r코드#k : 3210206 / #b몬스터 이름#k : 치크세이버\r\n#r코드#k : 3210204 / #b몬스터 이름#k : 더키 패밀리\r\n#r코드#k : 3210205 / #b몬스터 이름#k : 블랙 라츠\r\n#r코드#k : 3210207 / #b몬스터 이름#k : 티키\r\n#r코드#k : 3210208 / #b몬스터 이름#k : 레츠\r\n#r코드#k : 3210450 / #b몬스터 이름#k : 스쿠버 페페\r\n#r코드#k : 3210800 / #b몬스터 이름#k : 루팡\r\n#r코드#k : 3220000 / #b몬스터 이름#k : 스텀피\r\n#r코드#k : 3220001 / #b몬스터 이름#k : 데우\r\n#r코드#k : 3230100 / #b몬스터 이름#k : 커즈아이\r\n#r코드#k : 3230101 / #b몬스터 이름#k : 주니어 레이스\r\n#r코드#k : 3230102 / #b몬스터 이름#k : 로랑\r\n#r코드#k : 3230303 / #b몬스터 이름#k : 핑크세이버\r\n#r코드#k : 3230306 / #b몬스터 이름#k : 크로노스\r\n#r코드#k : 3230307 / #b몬스터 이름#k : 처프\r\n#r코드#k : 3230400 / #b몬스터 이름#k : 북치는 토끼\r\n#r코드#k : 3230103 / #b몬스터 이름#k : 킹 블록퍼스\r\n#r코드#k : 3230104 / #b몬스터 이름#k : 마스크피쉬\r\n#r코드#k : 3230304 / #b몬스터 이름#k : 스카이세이버\r\n#r코드#k : 3230308 / #b몬스터 이름#k : 트위터\r\n#r코드#k : 3230305 / #b몬스터 이름#k : 장난감 목마\r\n#r코드#k : 3230200 / #b몬스터 이름#k : 스타픽시\r\n#r코드#k : 3230300 / #b몬스터 이름#k : 주니어 부기\r\n#r코드#k : 3230301 / #b몬스터 이름#k : 주니어 부기\r\n#r코드#k : 3230302 / #b몬스터 이름#k : 블록퍼스\r\n#r코드#k : 3230405 / #b몬스터 이름#k : 주니어 씰\r\n#r코드#k : 4090000 / #b몬스터 이름#k : 아이언 호그\r\n#r코드#k : 4110300 / #b몬스터 이름#k : 아이언 뮤테\r\n#r코드#k : 4110301 / #b몬스터 이름#k : 강화된 아이언 뮤테\r\n#r코드#k : 4110302 / #b몬스터 이름#k : 미스릴 뮤테\r\n#r코드#k : 4130100 / #b몬스터 이름#k : 카파 드레이크\r\n#r코드#k : 4130101 / #b몬스터 이름#k : 엄티\r\n#r코드#k : 4130102 / #b몬스터 이름#k : 다크 네펜데스\r\n#r코드#k : 4130103 / #b몬스터 이름#k : 롬바드\r\n#r코드#k : 4130104 / #b몬스터 이름#k : 다크 네펜데스\r\n#r코드#k : 4220000 / #b몬스터 이름#k : 세르프\r\n#r코드#k : 4220001 / #b몬스터 이름#k : 세르프\r\n#r코드#k : 4230100 / #b몬스터 이름#k : 콜드아이\r\n#r코드#k : 4230101 / #b몬스터 이름#k : 좀비루팡\r\n#r코드#k : 4230102 / #b몬스터 이름#k : 레이스\r\n#r코드#k : 4230103 / #b몬스터 이름#k : 아이언 호그\r\n#r코드#k : 4230104 / #b몬스터 이름#k : 클랑\r\n#r코드#k : 4230105 / #b몬스터 이름#k : 네펜데스\r\n#r코드#k : 4230106 / #b몬스터 이름#k : 루나픽시\r\n#r코드#k : 4230107 / #b몬스터 이름#k : 플라이아이\r\n#r코드#k : 4230108 / #b몬스터 이름#k : 주니어 불독\r\n#r코드#k : 4230109 / #b몬스터 이름#k : 블록골렘\r\n#r코드#k : 4230110 / #b몬스터 이름#k : 킹 블록골렘\r\n#r코드#k : 4230111 / #b몬스터 이름#k : 로보토이\r\n#r코드#k : 4230112 / #b몬스터 이름#k : 마스터 로보\r\n#r코드#k : 4230113 / #b몬스터 이름#k : 틱톡\r\n#r코드#k : 4230114 / #b몬스터 이름#k : 플래툰 크로노스\r\n#r코드#k : 4230115 / #b몬스터 이름#k : 마스터 크로노스\r\n#r코드#k : 4250001 / #b몬스터 이름#k : 트리로드\r\n#r코드#k : 4230116 / #b몬스터 이름#k : 바나드 그레이\r\n#r코드#k : 4230117 / #b몬스터 이름#k : 제타 그레이\r\n#r코드#k : 4230118 / #b몬스터 이름#k : 울트라 그레이\r\n#r코드#k : 4230119 / #b몬스터 이름#k : 마티안\r\n#r코드#k : 4230120 / #b몬스터 이름#k : 플라티안\r\n#r코드#k : 4230121 / #b몬스터 이름#k : 메카티안\r\n#r코드#k : 4230122 / #b몬스터 이름#k : 네펜데스\r\n#r코드#k : 4230123 / #b몬스터 이름#k : 스파커\r\n#r코드#k : 4230124 / #b몬스터 이름#k : 프리져\r\n#r코드#k : 4230125 / #b몬스터 이름#k : 스켈독\r\n#r코드#k : 4230126 / #b몬스터 이름#k : 머미독\r\n#r코드#k : 4230200 / #b몬스터 이름#k : 푸퍼\r\n#r코드#k : 4230201 / #b몬스터 이름#k : 포이즌 푸퍼\r\n#r코드#k : 4230300 / #b몬스터 이름#k : 월묘\r\n#r코드#k : 4230400 / #b몬스터 이름#k : 아이언보어\r\n#r코드#k : 4230500 / #b몬스터 이름#k : 별다람쥐\r\n#r코드#k : 4230501 / #b몬스터 이름#k : 호저\r\n#r코드#k : 4230502 / #b몬스터 이름#k : 흑저\r\n#r코드#k : 4230503 / #b몬스터 이름#k : 청화사\r\n#r코드#k : 4230504 / #b몬스터 이름#k : 홍화사\r\n#r코드#k : 4230505 / #b몬스터 이름#k : 단지\r\n#r코드#k : 4230506 / #b몬스터 이름#k : 삼단지\r\n#r코드#k : 4230600 / #b몬스터 이름#k : 모래거인\r\n#r코드#k : 4240000 / #b몬스터 이름#k : 원로 그레이\r\n#r코드#k : 4250000 / #b몬스터 이름#k : 이끼 달팽이\r\n#r코드#k : 5090000 / #b몬스터 이름#k : 셰이드\r\n#r코드#k : 5090001 / #b몬스터 이름#k : 선인인형\r\n#r코드#k : 5100000 / #b몬스터 이름#k : 주니어 예티\r\n#r코드#k : 5100001 / #b몬스터 이름#k : 주니어 예티\r\n#r코드#k : 5100002 / #b몬스터 이름#k : 파이어봄\r\n#r코드#k : 5100003 / #b몬스터 이름#k : 호돌이\r\n#r코드#k : 5100004 / #b몬스터 이름#k : 삼미호\r\n#r코드#k : 5100005 / #b몬스터 이름#k : 호걸\r\n#r코드#k : 5110300 / #b몬스터 이름#k : 강화된 미스릴 뮤테\r\n#r코드#k : 5110301 / #b몬스터 이름#k : 로이드\r\n#r코드#k : 5110302 / #b몬스터 이름#k : 네오 휴로이드\r\n#r코드#k : 5120000 / #b몬스터 이름#k : 러스터픽시\r\n#r코드#k : 5120001 / #b몬스터 이름#k : 샐리온\r\n#r코드#k : 5120002 / #b몬스터 이름#k : 라이오너\r\n#r코드#k : 5120003 / #b몬스터 이름#k : 그류핀\r\n#r코드#k : 5120100 / #b몬스터 이름#k : 머신 MT-09\r\n#r코드#k : 5120500 / #b몬스터 이름#k : 달곰\r\n#r코드#k : 5120501 / #b몬스터 이름#k : 도라지\r\n#r코드#k : 5120502 / #b몬스터 이름#k : 늙은 도라지\r\n#r코드#k : 5120503 / #b몬스터 이름#k : 훈련용 짚인형\r\n#r코드#k : 5120504 / #b몬스터 이름#k : 훈련용 나무인형\r\n#r코드#k : 5120505 / #b몬스터 이름#k : 천록\r\n#r코드#k : 5120506 / #b몬스터 이름#k : 비급\r\n#r코드#k : 5130100 / #b몬스터 이름#k : 드레이크\r\n#r코드#k : 5130101 / #b몬스터 이름#k : 스톤골렘\r\n#r코드#k : 5130102 / #b몬스터 이름#k : 다크 스톤골렘\r\n#r코드#k : 5130103 / #b몬스터 이름#k : 크로코\r\n#r코드#k : 5130104 / #b몬스터 이름#k : 헥터\r\n#r코드#k : 5130105 / #b몬스터 이름#k : 다크 주니어 예티\r\n#r코드#k : 5130106 / #b몬스터 이름#k : 다크 주니어 예티\r\n#r코드#k : 5130107 / #b몬스터 이름#k : 쿨리 좀비\r\n#r코드#k : 5130108 / #b몬스터 이름#k : 마이너 좀비\r\n#r코드#k : 5140000 / #b몬스터 이름#k : 화이트팽\r\n#r코드#k : 5150000 / #b몬스터 이름#k : 믹스골렘\r\n#r코드#k : 5150001 / #b몬스터 이름#k : 스켈레톤 사병\r\n#r코드#k : 5200000 / #b몬스터 이름#k : 주니어 스톤볼\r\n#r코드#k : 5200001 / #b몬스터 이름#k : 아이스 스톤볼\r\n#r코드#k : 5200002 / #b몬스터 이름#k : 파이어 스톤볼\r\n#r코드#k : 5220003 / #b몬스터 이름#k : 타이머\r\n#r코드#k : 5220000 / #b몬스터 이름#k : 킹크랑\r\n#r코드#k : 5220001 / #b몬스터 이름#k : 킹크랑\r\n#r코드#k : 5220002 / #b몬스터 이름#k : 파우스트\r\n#r코드#k : 5250000 / #b몬스터 이름#k : 이끼버섯\r\n#r코드#k : 5250001 / #b몬스터 이름#k : 스톤버그\r\n#r코드#k : 5250002 / #b몬스터 이름#k : 원시멧돼지\r\n#r코드#k : 5300000 / #b몬스터 이름#k : 리티\r\n#r코드#k : 5300001 / #b몬스터 이름#k : 다크 리티\r\n#r코드#k : 5400000 / #b몬스터 이름#k : 주니어 페페\r\n#r코드#k : 5300100 / #b몬스터 이름#k : 멜러디\r\n#r코드#k : 6090000 / #b몬스터 이름#k : 리치\r\n#r코드#k : 6090001 / #b몬스터 이름#k : 설산의 마녀\r\n#r코드#k : 6090002 / #b몬스터 이름#k : 대나무 무사\r\n#r코드#k : 6090003 / #b몬스터 이름#k : 선비귀신\r\n#r코드#k : 6090004 / #b몬스터 이름#k : 루루모\r\n#r코드#k : 6110300 / #b몬스터 이름#k : 호문\r\n#r코드#k : 6110301 / #b몬스터 이름#k : 사이티\r\n#r코드#k : 6130100 / #b몬스터 이름#k : 레드 드레이크\r\n#r코드#k : 6130101 / #b몬스터 이름#k : 머쉬맘\r\n#r코드#k : 6130102 / #b몬스터 이름#k : 페페\r\n#r코드#k : 6130103 / #b몬스터 이름#k : 페페\r\n#r코드#k : 6130104 / #b몬스터 이름#k : 부기\r\n#r코드#k : 6130200 / #b몬스터 이름#k : 버피\r\n#r코드#k : 6130201 / #b몬스터 이름#k : 깨비\r\n#r코드#k : 6130202 / #b몬스터 이름#k : 깨비\r\n#r코드#k : 6130203 / #b몬스터 이름#k : 판다곰\r\n#r코드#k : 6130204 / #b몬스터 이름#k : 게비알\r\n#r코드#k : 6130207 / #b몬스터 이름#k : 원공\r\n#r코드#k : 6130208 / #b몬스터 이름#k : 크루\r\n#r코드#k : 6130209 / #b몬스터 이름#k : 묘선\r\n#r코드#k : 6220000 / #b몬스터 이름#k : 다일\r\n#r코드#k : 6220001 / #b몬스터 이름#k : 제노\r\n#r코드#k : 6230100 / #b몬스터 이름#k : 와일드카고\r\n#r코드#k : 6230101 / #b몬스터 이름#k : 푸코\r\n#r코드#k : 6230400 / #b몬스터 이름#k : 소울테니\r\n#r코드#k : 6230300 / #b몬스터 이름#k : 레이지 버피\r\n#r코드#k : 6230200 / #b몬스터 이름#k : 다크 페페\r\n#r코드#k : 6230201 / #b몬스터 이름#k : 다크 페페\r\n#r코드#k : 6300000 / #b몬스터 이름#k : 예티\r\n#r코드#k : 6300001 / #b몬스터 이름#k : 예티\r\n#r코드#k : 6300002 / #b몬스터 이름#k : 예티\r\n#r코드#k : 6300003 / #b몬스터 이름#k : 푼코\r\n#r코드#k : 6230500 / #b몬스터 이름#k : 마스터 소울테니\r\n#r코드#k : 6230401 / #b몬스터 이름#k : 주니어 루이넬\r\n#r코드#k : 6230600 / #b몬스터 이름#k : 아이스 드레이크\r\n#r코드#k : 6230601 / #b몬스터 이름#k : 다크 드레이크\r\n#r코드#k : 6230602 / #b몬스터 이름#k : 스켈레톤 장교\r\n#r코드#k : 6300004 / #b몬스터 이름#k : 파츠\r\n#r코드#k : 6300005 / #b몬스터 이름#k : 좀비 머쉬맘\r\n#r코드#k : 6300100 / #b몬스터 이름#k : 버푼\r\n#r코드#k : 6400000 / #b몬스터 이름#k : 다크 예티\r\n#r코드#k : 6400001 / #b몬스터 이름#k : 다크 예티\r\n#r코드#k : 6400002 / #b몬스터 이름#k : 다크 예티\r\n#r코드#k : 6400100 / #b몬스터 이름#k : 딥 버푼\r\n#r코드#k : 6400003 / #b몬스터 이름#k : 쿠스코\r\n#r코드#k : 6400004 / #b몬스터 이름#k : 오파츠\r\n#r코드#k : 6400005 / #b몬스터 이름#k : 좀비머쉬맘\r\n#r코드#k : 7090000 / #b몬스터 이름#k : 자동경비시스템\r\n#r코드#k : 7110300 / #b몬스터 이름#k : D.로이\r\n#r코드#k : 7110301 / #b몬스터 이름#k : 호문쿨루\r\n#r코드#k : 7130000 / #b몬스터 이름#k : 루이넬\r\n#r코드#k : 7130001 / #b몬스터 이름#k : 불독\r\n#r코드#k : 7130002 / #b몬스터 이름#k : 비틀\r\n#r코드#k : 7130003 / #b몬스터 이름#k : 듀얼 비틀\r\n#r코드#k : 7130004 / #b몬스터 이름#k : 헹키\r\n#r코드#k : 7130010 / #b몬스터 이름#k : 데스테니\r\n#r코드#k : 7130020 / #b몬스터 이름#k : 망둥이\r\n#r코드#k : 7130100 / #b몬스터 이름#k : 타우로마시스\r\n#r코드#k : 7130101 / #b몬스터 이름#k : 타우로스피어\r\n#r코드#k : 7130102 / #b몬스터 이름#k : 예티와 페페\r\n#r코드#k : 7130103 / #b몬스터 이름#k : 스켈레톤 지휘관\r\n#r코드#k : 7130104 / #b몬스터 이름#k : 캡틴\r\n#r코드#k : 7130200 / #b몬스터 이름#k : 웨어울프\r\n#r코드#k : 7130300 / #b몬스터 이름#k : 마스터 데스테니\r\n#r코드#k : 7130400 / #b몬스터 이름#k : 노란 왕도깨비\r\n#r코드#k : 7130401 / #b몬스터 이름#k : 파란 왕도깨비\r\n#r코드#k : 7130402 / #b몬스터 이름#k : 초록 왕도깨비\r\n#r코드#k : 7130500 / #b몬스터 이름#k : 레쉬\r\n#r코드#k : 7130501 / #b몬스터 이름#k : 다크 레쉬\r\n#r코드#k : 7130600 / #b몬스터 이름#k : 호브\r\n#r코드#k : 7130601 / #b몬스터 이름#k : 핀호브\r\n#r코드#k : 7130602 / #b몬스터 이름#k : 가시덤불\r\n#r코드#k : 7140000 / #b몬스터 이름#k : 파이렛\r\n#r코드#k : 7160000 / #b몬스터 이름#k : 듀얼 파이렛\r\n#r코드#k : 7220000 / #b몬스터 이름#k : 태륜\r\n#r코드#k : 7220001 / #b몬스터 이름#k : 구미호\r\n#r코드#k : 7220002 / #b몬스터 이름#k : 요괴선사\r\n#r코드#k : 8090000 / #b몬스터 이름#k : 디트와 로이\r\n#r코드#k : 8110300 / #b몬스터 이름#k : 호문스큘러\r\n#r코드#k : 8130100 / #b몬스터 이름#k : 주니어 발록\r\n#r코드#k : 8140000 / #b몬스터 이름#k : 라이칸스로프\r\n#r코드#k : 8140001 / #b몬스터 이름#k : 하프\r\n#r코드#k : 8140002 / #b몬스터 이름#k : 블러드 하프\r\n#r코드#k : 8140100 / #b몬스터 이름#k : 다크 예티와 페페\r\n#r코드#k : 8140101 / #b몬스터 이름#k : 검은 켄타우로스\r\n#r코드#k : 8140102 / #b몬스터 이름#k : 붉은 켄타우로스\r\n#r코드#k : 8140103 / #b몬스터 이름#k : 푸른 켄타우로스\r\n#r코드#k : 8140110 / #b몬스터 이름#k : 버크\r\n#r코드#k : 8140111 / #b몬스터 이름#k : 듀얼 버크\r\n#r코드#k : 8140200 / #b몬스터 이름#k : 클라크\r\n#r코드#k : 8140300 / #b몬스터 이름#k : 다크 클라크\r\n#r코드#k : 8140500 / #b몬스터 이름#k : 파이어독\r\n#r코드#k : 8140555 / #b몬스터 이름#k : 폭렬 망둥이집\r\n#r코드#k : 8140600 / #b몬스터 이름#k : 본피쉬\r\n#r코드#k : 8140700 / #b몬스터 이름#k : 블루 드래곤터틀\r\n#r코드#k : 8140701 / #b몬스터 이름#k : 레드 드래곤터틀\r\n#r코드#k : 8140702 / #b몬스터 이름#k : 리스튼\r\n#r코드#k : 8140703 / #b몬스터 이름#k : 브레스튼\r\n#r코드#k : 8141000 / #b몬스터 이름#k : 바이킹\r\n#r코드#k : 8141100 / #b몬스터 이름#k : 기간틱 바이킹\r\n#r코드#k : 8141300 / #b몬스터 이름#k : 스퀴드\r\n#r코드#k : 8142000 / #b몬스터 이름#k : 팬텀워치\r\n#r코드#k : 8142100 / #b몬스터 이름#k : 리셀스퀴드\r\n#r코드#k : 8143000 / #b몬스터 이름#k : G.팬텀워치\r\n#r코드#k : 8150000 / #b몬스터 이름#k : 크림슨 발록\r\n#r코드#k : 8150100 / #b몬스터 이름#k : 샤크\r\n#r코드#k : 8150101 / #b몬스터 이름#k : 콜드샤크\r\n#r코드#k : 8150200 / #b몬스터 이름#k : 그린코니언\r\n#r코드#k : 8150201 / #b몬스터 이름#k : 다크코니언\r\n#r코드#k : 8150300 / #b몬스터 이름#k : 레드 와이번\r\n#r코드#k : 8150301 / #b몬스터 이름#k : 블루 와이번\r\n#r코드#k : 8150302 / #b몬스터 이름#k : 다크 와이번\r\n#r코드#k : 8160000 / #b몬스터 이름#k : 게이트키퍼\r\n#r코드#k : 8170000 / #b몬스터 이름#k : 타나토스\r\n#r코드#k : 8180000 / #b몬스터 이름#k : 마뇽\r\n#r코드#k : 8180001 / #b몬스터 이름#k : 그리프\r\n#r코드#k : 8190000 / #b몬스터 이름#k : 뉴트주니어\r\n#r코드#k : 8190001 / #b몬스터 이름#k : 뉴트주니어\r\n#r코드#k : 8190002 / #b몬스터 이름#k : 네스트골렘\r\n#r코드#k : 8190003 / #b몬스터 이름#k : 스켈레곤\r\n#r코드#k : 8190004 / #b몬스터 이름#k : 스켈로스\r\n#r코드#k : 8190005 / #b몬스터 이름#k : 네스트골렘\r\n#r코드#k : 8200000 / #b몬스터 이름#k : 시간의 눈\r\n#r코드#k : 8200001 / #b몬스터 이름#k : 추억의 사제\r\n#r코드#k : 8200002 / #b몬스터 이름#k : 추억의 신관\r\n#r코드#k : 8200003 / #b몬스터 이름#k : 추억의 수호병\r\n#r코드#k : 8200004 / #b몬스터 이름#k : 추억의 수호대장\r\n#r코드#k : 8200005 / #b몬스터 이름#k : 후회의 사제\r\n#r코드#k : 8200006 / #b몬스터 이름#k : 후회의 신관\r\n#r코드#k : 8200007 / #b몬스터 이름#k : 후회의 수호병\r\n#r코드#k : 8200008 / #b몬스터 이름#k : 후회의 수호대장\r\n#r코드#k : 8200009 / #b몬스터 이름#k : 망각의 사제\r\n#r코드#k : 8200010 / #b몬스터 이름#k : 망각의 신관\r\n#r코드#k : 8200011 / #b몬스터 이름#k : 망각의 수호병\r\n#r코드#k : 8200012 / #b몬스터 이름#k : 망각의 수호대장\r\n#r코드#k : 8220000 / #b몬스터 이름#k : 엘리쟈\r\n#r코드#k : 8220001 / #b몬스터 이름#k : 스노우맨\r\n#r코드#k : 8220002 / #b몬스터 이름#k : 키메라\r\n#r코드#k : 8220003 / #b몬스터 이름#k : 레비아탄\r\n#r코드#k : 8220004 / #b몬스터 이름#k : 도도\r\n#r코드#k : 8220005 / #b몬스터 이름#k : 릴리노흐\r\n#r코드#k : 8220006 / #b몬스터 이름#k : 라이카\r\n#r코드#k : 8500000 / #b몬스터 이름#k : 시간의 구\r\n#r코드#k : 8500001 / #b몬스터 이름#k : 파풀라투스의 시계\r\n#r코드#k : 8500002 / #b몬스터 이름#k : 파풀라투스\r\n#r코드#k : 8500003 / #b몬스터 이름#k : 로우 다크스타\r\n#r코드#k : 8500004 / #b몬스터 이름#k : 하이 다크스타\r\n#r코드#k : 8510000 / #b몬스터 이름#k : 피아누스\r\n#r코드#k : 8510100 / #b몬스터 이름#k : 블러드붐\r\n#r코드#k : 8520000 / #b몬스터 이름#k : 피아누스\r\n#r코드#k : 8800000 / #b몬스터 이름#k : 자쿰\r\n#r코드#k : 8800001 / #b몬스터 이름#k : 자쿰\r\n#r코드#k : 8800002 / #b몬스터 이름#k : 자쿰\r\n#r코드#k : 8800003 / #b몬스터 이름#k : 자쿰팔1\r\n#r코드#k : 8800004 / #b몬스터 이름#k : 자쿰팔2\r\n#r코드#k : 8800005 / #b몬스터 이름#k : 자쿰팔3\r\n#r코드#k : 8800006 / #b몬스터 이름#k : 자쿰팔4\r\n#r코드#k : 8800007 / #b몬스터 이름#k : 자쿰팔5\r\n#r코드#k : 8800008 / #b몬스터 이름#k : 자쿰팔6\r\n#r코드#k : 8800009 / #b몬스터 이름#k : 자쿰팔7\r\n#r코드#k : 8800010 / #b몬스터 이름#k : 자쿰팔8\r\n#r코드#k : 8810000 / #b몬스터 이름#k : 혼테일의 왼쪽 머리\r\n#r코드#k : 8810001 / #b몬스터 이름#k : 혼테일의 오른쪽 머리\r\n#r코드#k : 8810002 / #b몬스터 이름#k : 혼테일의 머리A\r\n#r코드#k : 8810003 / #b몬스터 이름#k : 혼테일의 머리B\r\n#r코드#k : 8810004 / #b몬스터 이름#k : 혼테일의 머리C\r\n#r코드#k : 8810005 / #b몬스터 이름#k : 혼테일의 왼손\r\n#r코드#k : 8810006 / #b몬스터 이름#k : 혼테일의 오른손\r\n#r코드#k : 8810007 / #b몬스터 이름#k : 혼테일의 날개\r\n#r코드#k : 8810008 / #b몬스터 이름#k : 혼테일의 다리\r\n#r코드#k : 8810009 / #b몬스터 이름#k : 혼테일의 꼬리\r\n#r코드#k : 8810010 / #b몬스터 이름#k : 죽은 혼테일의 머리A\r\n#r코드#k : 8810011 / #b몬스터 이름#k : 죽은 혼테일의 머리B\r\n#r코드#k : 8810012 / #b몬스터 이름#k : 죽은 혼테일의 머리C\r\n#r코드#k : 8810013 / #b몬스터 이름#k : 죽은 혼테일의 왼손\r\n#r코드#k : 8810014 / #b몬스터 이름#k : 죽은 혼테일의 오른손\r\n#r코드#k : 8810015 / #b몬스터 이름#k : 죽은 혼테일의 날개\r\n#r코드#k : 8810016 / #b몬스터 이름#k : 죽은 혼테일의 다리\r\n#r코드#k : 8810017 / #b몬스터 이름#k : 죽은 혼테일의 꼬리\r\n#r코드#k : 8810018 / #b몬스터 이름#k : 혼테일\r\n#r코드#k : 8810019 / #b몬스터 이름#k : 레드 와이번\r\n#r코드#k : 8810020 / #b몬스터 이름#k : 블루 와이번\r\n#r코드#k : 8810021 / #b몬스터 이름#k : 다크 와이번\r\n#r코드#k : 8810022 / #b몬스터 이름#k : 그린 코니언\r\n#r코드#k : 8810023 / #b몬스터 이름#k : 다크 코니언\r\n#r코드#k : 8810024 / #b몬스터 이름#k : 혼테일의 왼쪽 머리 소환\r\n#r코드#k : 8810025 / #b몬스터 이름#k : 혼테일의 오른쪽 머리 소환\r\n#r코드#k : 8810026 / #b몬스터 이름#k : 혼테일 소환\r\n#r코드#k : 8820000 / #b몬스터 이름#k : 핑크빈\r\n#r코드#k : 8820001 / #b몬스터 이름#k : 핑크빈\r\n#r코드#k : 8820002 / #b몬스터 이름#k : 아리엘\r\n#r코드#k : 8820003 / #b몬스터 이름#k : 현자 솔로몬\r\n#r코드#k : 8820004 / #b몬스터 이름#k : 현자 렉스\r\n#r코드#k : 8820005 / #b몬스터 이름#k : 휘긴\r\n#r코드#k : 8820006 / #b몬스터 이름#k : 무닌\r\n#r코드#k : 8820007 / #b몬스터 이름#k : 미니빈\r\n#r코드#k : 8820010 / #b몬스터 이름#k : 핑크빈\r\n#r코드#k : 8820011 / #b몬스터 이름#k : 핑크빈\r\n#r코드#k : 8820012 / #b몬스터 이름#k : 핑크빈\r\n#r코드#k : 8820013 / #b몬스터 이름#k : 핑크빈\r\n#r코드#k : 8820014 / #b몬스터 이름#k : 핑크빈\r\n#r코드#k : 8820015 / #b몬스터 이름#k : 현자 솔로몬\r\n#r코드#k : 8820016 / #b몬스터 이름#k : 현자 렉스\r\n#r코드#k : 8820017 / #b몬스터 이름#k : 휘긴\r\n#r코드#k : 8820018 / #b몬스터 이름#k : 무닌\r\n#r코드#k : 8820019 / #b몬스터 이름#k : 아리엘\r\n#r코드#k : 8820020 / #b몬스터 이름#k : 현자 솔로몬\r\n#r코드#k : 8820021 / #b몬스터 이름#k : 현자 렉스\r\n#r코드#k : 8820022 / #b몬스터 이름#k : 휘긴\r\n#r코드#k : 8820023 / #b몬스터 이름#k : 무닌\r\n#r코드#k : 8820024 / #b몬스터 이름#k : 현자 솔로몬\r\n#r코드#k : 8820025 / #b몬스터 이름#k : 현자 렉스\r\n#r코드#k : 8820026 / #b몬스터 이름#k : 휘긴\r\n#r코드#k : 8820027 / #b몬스터 이름#k : 무닌\r\n#r코드#k : 9000001 / #b몬스터 이름#k : 커즈아이\r\n#r코드#k : 9000002 / #b몬스터 이름#k : 뿔버섯\r\n#r코드#k : 9000100 / #b몬스터 이름#k : 파이어보어\r\n#r코드#k : 9000101 / #b몬스터 이름#k : 루팡\r\n#r코드#k : 9000200 / #b몬스터 이름#k : 이블아이\r\n#r코드#k : 9000201 / #b몬스터 이름#k : 좀비버섯\r\n#r코드#k : 9000300 / #b몬스터 이름#k : 콜드아이\r\n#r코드#k : 9000301 / #b몬스터 이름#k : 파란 버섯\r\n#r코드#k : 9001005 / #b몬스터 이름#k : 파이렛옥토\r\n#r코드#k : 9001006 / #b몬스터 이름#k : 파이렛옥토\r\n#r코드#k : 9001007 / #b몬스터 이름#k : 수련용 허수아비\r\n#r코드#k : 9001008 / #b몬스터 이름#k : 카이린의 분신의 분신\r\n#r코드#k : 9001009 / #b몬스터 이름#k : 변신술사\r\n#r코드#k : 9001010 / #b몬스터 이름#k : 검은 마녀\r\n#r코드#k : 9300019 / #b몬스터 이름#k : 마스터 머슬스톤\r\n#r코드#k : 9300020 / #b몬스터 이름#k : 머슬스톤\r\n#r코드#k : 9300021 / #b몬스터 이름#k : 다크 머슬스톤\r\n#r코드#k : 9300022 / #b몬스터 이름#k : 블랙 나이트\r\n#r코드#k : 9300023 / #b몬스터 이름#k : 미스트 나이트\r\n#r코드#k : 9300024 / #b몬스터 이름#k : 퍼펫골렘\r\n#r코드#k : 9300025 / #b몬스터 이름#k : 가고일\r\n#r코드#k : 9300026 / #b몬스터 이름#k : 주니어 가고일\r\n#r코드#k : 9300027 / #b몬스터 이름#k : 악마 슬라임\r\n#r코드#k : 9300028 / #b몬스터 이름#k : 에레고스\r\n#r코드#k : 9300029 / #b몬스터 이름#k : 사자석상 A\r\n#r코드#k : 9300030 / #b몬스터 이름#k : 사자석상 B\r\n#r코드#k : 9300031 / #b몬스터 이름#k : 기사석상 A\r\n#r코드#k : 9300032 / #b몬스터 이름#k : 기사석상 B\r\n#r코드#k : 9300033 / #b몬스터 이름#k : 주니어 가고일\r\n#r코드#k : 9300034 / #b몬스터 이름#k : 미스트 나이트\r\n#r코드#k : 9300035 / #b몬스터 이름#k : 주니어 가고일\r\n#r코드#k : 9300036 / #b몬스터 이름#k : 블랙 나이트\r\n#r코드#k : 9300037 / #b몬스터 이름#k : 미스트 나이트\r\n#r코드#k : 9300038 / #b몬스터 이름#k : 고스트픽시\r\n#r코드#k : 9300039 / #b몬스터 이름#k : 파파픽시\r\n#r코드#k : 9300050 / #b몬스터 이름#k : 플라잉 부기\r\n#r코드#k : 9300089 / #b몬스터 이름#k : 피닉스\r\n#r코드#k : 9300090 / #b몬스터 이름#k : 프리져\r\n#r코드#k : 9300091 / #b몬스터 이름#k : 어둠의 머슬스톤\r\n#r코드#k : 9300092 / #b몬스터 이름#k : 잊혀진 신전의 주니어 발록\r\n#r코드#k : 9300093 / #b몬스터 이름#k : 타일러스\r\n#r코드#k : 9300094 / #b몬스터 이름#k : 납치범 크림슨 발록\r\n#r코드#k : 9300095 / #b몬스터 이름#k : 납치범 라이칸스로프\r\n#r코드#k : 9300096 / #b몬스터 이름#k : 검은 켄타우로스\r\n#r코드#k : 9300097 / #b몬스터 이름#k : 일그러진 차원의 망둥이\r\n#r코드#k : 9300098 / #b몬스터 이름#k : 일그러진 차원의 본피쉬\r\n#r코드#k : 9300099 / #b몬스터 이름#k : 일그러진 차원의 샤크\r\n#r코드#k : 9300100 / #b몬스터 이름#k : 속성의 타나토스\r\n#r코드#k : 9300101 / #b몬스터 이름#k : 길들일 수 있는 멧돼지\r\n#r코드#k : 9300102 / #b몬스터 이름#k : 호위용 멧돼지\r\n#r코드#k : 9300103 / #b몬스터 이름#k : 바나드 그레이\r\n#r코드#k : 9300104 / #b몬스터 이름#k : 제타 그레이\r\n#r코드#k : 9300105 / #b몬스터 이름#k : 화난 데비존\r\n#r코드#k : 9300106 / #b몬스터 이름#k : 분노한 데비존\r\n#r코드#k : 9300107 / #b몬스터 이름#k : 엿보는 데비존\r\n#r코드#k : 9300108 / #b몬스터 이름#k : 데비존의 단지\r\n#r코드#k : 9300109 / #b몬스터 이름#k : 데비존의 삼단지\r\n#r코드#k : 9300110 / #b몬스터 이름#k : 데비존의 도라지\r\n#r코드#k : 9300111 / #b몬스터 이름#k : 데비존의 늙은 도라지 \r\n#r코드#k : 9300112 / #b몬스터 이름#k : 데비존의 100년 된 도라지\r\n#r코드#k : 9300113 / #b몬스터 이름#k : 데비존의 100년 된 늙은 도라지\r\n#r코드#k : 9300114 / #b몬스터 이름#k : 데비존의 사나운 게비알\r\n#r코드#k : 9300115 / #b몬스터 이름#k : 데비존의 사나운 크루\r\n#r코드#k : 9300116 / #b몬스터 이름#k : 데비존의 사나운 캡틴\r\n#r코드#k : 9300117 / #b몬스터 이름#k : 데비존의 심복 크루\r\n#r코드#k : 9300118 / #b몬스터 이름#k : 데비존의 심복 캡틴\r\n#r코드#k : 9300119 / #b몬스터 이름#k : 데비존\r\n#r코드#k : 9300120 / #b몬스터 이름#k : 데비존의 더 사나운 게비알\r\n#r코드#k : 9300121 / #b몬스터 이름#k : 데비존의 더 사나운 크루 \r\n#r코드#k : 9300122 / #b몬스터 이름#k : 데비존의 더 사나운 캡틴\r\n#r코드#k : 9300123 / #b몬스터 이름#k : 데비존의 게비알\r\n#r코드#k : 9300124 / #b몬스터 이름#k : 데비존의 크루\r\n#r코드#k : 9300125 / #b몬스터 이름#k : 데비존의 캡틴\r\n#r코드#k : 9300126 / #b몬스터 이름#k : 데비존의 사나운 삼단지\r\n#r코드#k : 9300127 / #b몬스터 이름#k : 브라운테니\r\n#r코드#k : 9300128 / #b몬스터 이름#k : 블록퍼스\r\n#r코드#k : 9300129 / #b몬스터 이름#k : 레츠\r\n#r코드#k : 9300130 / #b몬스터 이름#k : 크로노스\r\n#r코드#k : 9300131 / #b몬스터 이름#k : 장난감 목마\r\n#r코드#k : 9300132 / #b몬스터 이름#k : 틱톡\r\n#r코드#k : 9300133 / #b몬스터 이름#k : 로보토이\r\n#r코드#k : 9300134 / #b몬스터 이름#k : 킹 블록골렘\r\n#r코드#k : 9300135 / #b몬스터 이름#k : 마스터 크로노스\r\n#r코드#k : 9300136 / #b몬스터 이름#k : 롬바드\r\n#r코드#k : 9300137 / #b몬스터 이름#k : 줄리엣\r\n#r코드#k : 9300138 / #b몬스터 이름#k : 로미오\r\n#r코드#k : 9300139 / #b몬스터 이름#k : 프랑켄로이드\r\n#r코드#k : 9300140 / #b몬스터 이름#k : 화난 프랑켄로이드\r\n#r코드#k : 9300141 / #b몬스터 이름#k : 폐쇄된 연구실의 호문\r\n#r코드#k : 9300142 / #b몬스터 이름#k : 숨겨진 연구실의 호문쿨루\r\n#r코드#k : 9300143 / #b몬스터 이름#k : 강화된 아이언 뮤테\r\n#r코드#k : 9300144 / #b몬스터 이름#k : 강화된 미스릴 뮤테\r\n#r코드#k : 9300145 / #b몬스터 이름#k : 호문\r\n#r코드#k : 9300146 / #b몬스터 이름#k : 사이티\r\n#r코드#k : 9300147 / #b몬스터 이름#k : 호문쿨루\r\n#r코드#k : 9300148 / #b몬스터 이름#k : 네오 휴로이드\r\n#r코드#k : 9300149 / #b몬스터 이름#k : 로이드\r\n#r코드#k : 9300150 / #b몬스터 이름#k : 네오 휴로이드\r\n#r코드#k : 9300151 / #b몬스터 이름#k : 프랑켄로이드\r\n#r코드#k : 9300152 / #b몬스터 이름#k : 화난 프랑켄로이드\r\n#r코드#k : 9300153 / #b몬스터 이름#k : 방해물 뮤테\r\n#r코드#k : 9300154 / #b몬스터 이름#k : 실험용 네오 휴로이드\r\n#r코드#k : 9300155 / #b몬스터 이름#k : 돼지\r\n#r코드#k : 9300156 / #b몬스터 이름#k : 검은 마법사의 수하\r\n#r코드#k : 9300157 / #b몬스터 이름#k : 스콜피언\r\n#r코드#k : 9300158 / #b몬스터 이름#k : 카이린\r\n#r코드#k : 9300159 / #b몬스터 이름#k : 카이린\r\n#r코드#k : 9300160 / #b몬스터 이름#k : 청화사\r\n#r코드#k : 9300161 / #b몬스터 이름#k : 홍화사\r\n#r코드#k : 9300162 / #b몬스터 이름#k : 델리\r\n#r코드#k : 9300163 / #b몬스터 이름#k : 묘선\r\n#r코드#k : 9300164 / #b몬스터 이름#k : 비급\r\n#r코드#k : 9300165 / #b몬스터 이름#k : 원공\r\n#r코드#k : 9300166 / #b몬스터 이름#k : 폭탄\r\n#r코드#k : 9300167 / #b몬스터 이름#k : 변질된 루모\r\n#r코드#k : 9300168 / #b몬스터 이름#k : 강화된 로이드\r\n#r코드#k : 9300169 / #b몬스터 이름#k : 차원의 라츠\r\n#r코드#k : 9300170 / #b몬스터 이름#k : 차원의 블랙라츠\r\n#r코드#k : 9300171 / #b몬스터 이름#k : 차원의 블록퍼스\r\n#r코드#k : 9300172 / #b몬스터 이름#k : 중독된 트리로드\r\n#r코드#k : 9300173 / #b몬스터 이름#k : 중독된 스톤버그\r\n#r코드#k : 9300174 / #b몬스터 이름#k : 포이즌 플라워\r\n#r코드#k : 9300175 / #b몬스터 이름#k : 중독된 스프라이트\r\n#r코드#k : 9300176 / #b몬스터 이름#k : 멀쩡한 스프라이트\r\n#r코드#k : 9300177 / #b몬스터 이름#k : 더 중독된 트리로드\r\n#r코드#k : 9300178 / #b몬스터 이름#k : 더 중독된 스톤버그\r\n#r코드#k : 9300179 / #b몬스터 이름#k : 더 중독된 스프라이트\r\n#r코드#k : 9300180 / #b몬스터 이름#k : 포이즌 골렘\r\n#r코드#k : 9300181 / #b몬스터 이름#k : 강화형 포이즌 골렘\r\n#r코드#k : 9300182 / #b몬스터 이름#k : 초강화형 포이즌 골렘\r\n#r코드#k : 9300184 / #b몬스터 이름#k : 마노\r\n#r코드#k : 9300185 / #b몬스터 이름#k : 스텀피\r\n#r코드#k : 9300186 / #b몬스터 이름#k : 데우\r\n#r코드#k : 9300187 / #b몬스터 이름#k : 킹슬라임\r\n#r코드#k : 9300188 / #b몬스터 이름#k : 대왕지네\r\n#r코드#k : 9300189 / #b몬스터 이름#k : 파우스트\r\n#r코드#k : 9300190 / #b몬스터 이름#k : 킹크랑\r\n#r코드#k : 9300191 / #b몬스터 이름#k : 머쉬맘\r\n#r코드#k : 9300192 / #b몬스터 이름#k : 알리샤르\r\n#r코드#k : 9300193 / #b몬스터 이름#k : 타이머\r\n#r코드#k : 9300194 / #b몬스터 이름#k : 다일\r\n#r코드#k : 9300195 / #b몬스터 이름#k : 파파픽시\r\n#r코드#k : 9300196 / #b몬스터 이름#k : 좀비머쉬맘\r\n#r코드#k : 9300197 / #b몬스터 이름#k : 제노\r\n#r코드#k : 9300198 / #b몬스터 이름#k : 데비존\r\n#r코드#k : 9300199 / #b몬스터 이름#k : 구미호\r\n#r코드#k : 9300200 / #b몬스터 이름#k : 태륜\r\n#r코드#k : 9300201 / #b몬스터 이름#k : 포이즌골렘\r\n#r코드#k : 9300202 / #b몬스터 이름#k : 요괴선사\r\n#r코드#k : 9300203 / #b몬스터 이름#k : 주니어발록\r\n#r코드#k : 9300204 / #b몬스터 이름#k : 엘리쟈\r\n#r코드#k : 9300205 / #b몬스터 이름#k : 프랑켄로이드\r\n#r코드#k : 9300206 / #b몬스터 이름#k : 키메라\r\n#r코드#k : 9300207 / #b몬스터 이름#k : 포장마차\r\n#r코드#k : 9300208 / #b몬스터 이름#k : 스노우맨\r\n#r코드#k : 9300209 / #b몬스터 이름#k : 블루머쉬맘\r\n#r코드#k : 9300210 / #b몬스터 이름#k : 크림슨 발록\r\n#r코드#k : 9300211 / #b몬스터 이름#k : 마뇽\r\n#r코드#k : 9300212 / #b몬스터 이름#k : 그리프\r\n#r코드#k : 9300213 / #b몬스터 이름#k : 레비아탄\r\n#r코드#k : 9300214 / #b몬스터 이름#k : 파풀라투스\r\n#r코드#k : 9300215 / #b몬스터 이름#k : 무공\r\n#r코드#k : 9300216 / #b몬스터 이름#k : 퇴치 체크용 투명몹\r\n#r코드#k : 9300217 / #b몬스터 이름#k : 파란 달팽이\r\n#r코드#k : 9300218 / #b몬스터 이름#k : 빨간 달팽이\r\n#r코드#k : 9300219 / #b몬스터 이름#k : 스텀프\r\n#r코드#k : 9300220 / #b몬스터 이름#k : 엑스텀프\r\n#r코드#k : 9300221 / #b몬스터 이름#k : 카투스\r\n#r코드#k : 9300222 / #b몬스터 이름#k : 로얄 카투스\r\n#r코드#k : 9300223 / #b몬스터 이름#k : 슬라임\r\n#r코드#k : 9300224 / #b몬스터 이름#k : 검은색 양\r\n#r코드#k : 9300225 / #b몬스터 이름#k : 루팡\r\n#r코드#k : 9300226 / #b몬스터 이름#k : 좀비 루팡\r\n#r코드#k : 9300227 / #b몬스터 이름#k : 로랑\r\n#r코드#k : 9300228 / #b몬스터 이름#k : 클랑\r\n#r코드#k : 9300229 / #b몬스터 이름#k : 주황버섯\r\n#r코드#k : 9300230 / #b몬스터 이름#k : 플래툰 크로노스\r\n#r코드#k : 9300231 / #b몬스터 이름#k : 마스터 크로노스\r\n#r코드#k : 9300232 / #b몬스터 이름#k : 티키\r\n#r코드#k : 9300233 / #b몬스터 이름#k : 틱톡\r\n#r코드#k : 9300234 / #b몬스터 이름#k : 리게이터\r\n#r코드#k : 9300235 / #b몬스터 이름#k : 크로코\r\n#r코드#k : 9300236 / #b몬스터 이름#k : 러스터픽시\r\n#r코드#k : 9300237 / #b몬스터 이름#k : 고스트픽시\r\n#r코드#k : 9300238 / #b몬스터 이름#k : 좀비버섯\r\n#r코드#k : 9300239 / #b몬스터 이름#k : 제타\r\n#r코드#k : 9300240 / #b몬스터 이름#k : 울트라 그레이\r\n#r코드#k : 9300241 / #b몬스터 이름#k : 크루 \r\n#r코드#k : 9300242 / #b몬스터 이름#k : 캡틴\r\n#r코드#k : 9300243 / #b몬스터 이름#k : 삼미호\r\n#r코드#k : 9300244 / #b몬스터 이름#k : 달곰\r\n#r코드#k : 9300245 / #b몬스터 이름#k : 판다곰\r\n#r코드#k : 9300246 / #b몬스터 이름#k : 트리로드\r\n#r코드#k : 9300247 / #b몬스터 이름#k : 스톤버그\r\n#r코드#k : 9300248 / #b몬스터 이름#k : 묘선\r\n#r코드#k : 9300249 / #b몬스터 이름#k : 타우로마시스\r\n#r코드#k : 9300250 / #b몬스터 이름#k : 타우로스피어\r\n#r코드#k : 9300251 / #b몬스터 이름#k : 루이넬\r\n#r코드#k : 9300252 / #b몬스터 이름#k : 강화된 아이언 뮤테\r\n#r코드#k : 9300253 / #b몬스터 이름#k : 강화된 미스릴 뮤테\r\n#r코드#k : 9300254 / #b몬스터 이름#k : 변질된 루모\r\n#r코드#k : 9300255 / #b몬스터 이름#k : 강화된 로이드\r\n#r코드#k : 9300256 / #b몬스터 이름#k : 변신 인형 뽑기 기계(전)\r\n#r코드#k : 9300257 / #b몬스터 이름#k : 변신 인형 뽑기 기계(후)\r\n#r코드#k : 9300258 / #b몬스터 이름#k : 예티\r\n#r코드#k : 9300259 / #b몬스터 이름#k : 파란버섯\r\n#r코드#k : 9300260 / #b몬스터 이름#k : 주니어 발록\r\n#r코드#k : 9300261 / #b몬스터 이름#k : 검은 켄타우로스\r\n#r코드#k : 9300262 / #b몬스터 이름#k : 붉은 켄타우로스\r\n#r코드#k : 9300263 / #b몬스터 이름#k : 푸른 켄타우로스\r\n#r코드#k : 9300264 / #b몬스터 이름#k : 다크 와이번\r\n#r코드#k : 9300265 / #b몬스터 이름#k : 블루 와이번\r\n#r코드#k : 9300266 / #b몬스터 이름#k : 하이 다크스타\r\n#r코드#k : 9300267 / #b몬스터 이름#k : 로우 다크스타\r\n#r코드#k : 9300268 / #b몬스터 이름#k : 태륜\r\n#r코드#k : 9300269 / #b몬스터 이름#k : 소공\r\n#r코드#k : 9300270 / #b몬스터 이름#k : 밍구\r\n#r코드#k : 9300271 / #b몬스터 이름#k : 훈련용 슬라임\r\n#r코드#k : 9300272 / #b몬스터 이름#k : 훈련용 주황버섯\r\n#r코드#k : 9300273 / #b몬스터 이름#k : 훈련용 돼지\r\n#r코드#k : 9300274 / #b몬스터 이름#k : 시니컬한 주황버섯\r\n#r#r코드#k : 9300285 / #b몬스터 이름#k : 인형사\r\n#r코드#k : 9400000 / #b몬스터 이름#k : 까마귀\r\n#r코드#k : 9400001 / #b몬스터 이름#k : 불너구리\r\n#r코드#k : 9400002 / #b몬스터 이름#k : 구름여우\r\n#r코드#k : 9400003 / #b몬스터 이름#k : 망령\r\n#r코드#k : 9400004 / #b몬스터 이름#k : 큰 구름여우\r\n#r코드#k : 9400011 / #b몬스터 이름#k : 제등귀신\r\n#r코드#k : 9400012 / #b몬스터 이름#k : 물도깨비\r\n#r코드#k : 9400013 / #b몬스터 이름#k : 몽롱귀신\r\n#r코드#k : 9400014 / #b몬스터 이름#k : 천구\r\n#r코드#k : 9400205 / #b몬스터 이름#k : 블루머쉬맘\r\n#r코드#k : 9410000 / #b몬스터 이름#k : 들개\r\n#r코드#k : 9410001 / #b몬스터 이름#k : 멋쟁이 들개\r\n#r코드#k : 9410002 / #b몬스터 이름#k : 험악한 들개\r\n#r코드#k : 9410003 / #b몬스터 이름#k : 광대 원숭이\r\n#r코드#k : 9410004 / #b몬스터 이름#k : 폭주족 원숭이\r\n#r코드#k : 9410005 / #b몬스터 이름#k : 레드 버블티\r\n#r코드#k : 9410006 / #b몬스터 이름#k : 옐로우 버블티\r\n#r코드#k : 9410007 / #b몬스터 이름#k : 그린 버블티\r\n#r코드#k : 9410008 / #b몬스터 이름#k : 예티 인형자판기\r\n#r코드#k : 9410009 / #b몬스터 이름#k : 예티 인형\r\n#r코드#k : 9410010 / #b몬스터 이름#k : 주니어페페 인형자판기\r\n#r코드#k : 9410011 / #b몬스터 이름#k : 주니어페페 인형\r\n#r코드#k : 9410012 / #b몬스터 이름#k : 인형자판기\r\n#r코드#k : 9410013 / #b몬스터 이름#k : 인형뽑기 기계\r\n#r코드#k : 9410014 / #b몬스터 이름#k : 포장마차\r\n#r코드#k : 9410015 / #b몬스터 이름#k : 포장마차\r\n#r코드#k : 9420000 / #b몬스터 이름#k : 두꺼비\r\n#r코드#k : 9420001 / #b몬스터 이름#k : 개구리\r\n#r코드#k : 9420002 / #b몬스터 이름#k : 구렁이\r\n#r코드#k : 9420003 / #b몬스터 이름#k : 빨간 도마뱀\r\n#r코드#k : 9420004 / #b몬스터 이름#k : 노란 도마뱀\r\n#r코드#k : 9420005 / #b몬스터 이름#k : 흰 닭\r\n#r코드#k : 9500128 / #b몬스터 이름#k : 다크 예티\r\n#r코드#k : 9500129 / #b몬스터 이름#k : 타우로스피어\r\n#r코드#k : 9500130 / #b몬스터 이름#k : 파란 왕도깨비\r\n#r코드#k : 9500131 / #b몬스터 이름#k : 루이넬\r\n#r코드#k : 9500132 / #b몬스터 이름#k : 웨어울프\r\n#r코드#k : 9500133 / #b몬스터 이름#k : 예티와 페페\r\n#r코드#k : 9500134 / #b몬스터 이름#k : 라이칸스로프\r\n#r코드#k : 9500135 / #b몬스터 이름#k : 데스테니\r\n#r코드#k : 9500136 / #b몬스터 이름#k : 기간틱 바이킹\r\n#r코드#k : 9500137 / #b몬스터 이름#k : G.팬텀워치\r\n#r코드#k : 9500138 / #b몬스터 이름#k : 파이어 독\r\n#r코드#k : 9500139 / #b몬스터 이름#k : 주니어 발록\r\n#r코드#k : 9500140 / #b몬스터 이름#k : 크림슨 발록\r\n#r코드#k : 9500141 / #b몬스터 이름#k : 예티\r\n#r코드#k : 9500142 / #b몬스터 이름#k : 페페\r\n#r코드#k : 9500143 / #b몬스터 이름#k : 코-크 돼지\r\n#r코드#k : 9500144 / #b몬스터 이름#k : 코-크 달팽이\r\n#r코드#k : 9500145 / #b몬스터 이름#k : 코-크 씰\r\n#r코드#k : 9500146 / #b몬스터 이름#k : 플레이 씰\r\n#r코드#k : 9500147 / #b몬스터 이름#k : 예티와 코-크텀프\r\n#r코드#k : 9500148 / #b몬스터 이름#k : 이글루 터틀\r\n#r코드#k : 9500149 / #b몬스터 이름#k : 코-크 골렘\r\n#r코드#k : 9500150 / #b몬스터 이름#k : 아이스 골렘\r\n#r코드#k : 9500151 / #b몬스터 이름#k : 코-크 슬라임\r\n#r코드#k : 9500152 / #b몬스터 이름#k : 코-크 버섯\r\n#r코드#k : 9500153 / #b몬스터 이름#k : 코-크텀프\r\n#r코드#k : 9500154 / #b몬스터 이름#k : 코-크텀프 라이트\r\n#r코드#k : 9500155 / #b몬스터 이름#k : 삼미호\r\n#r코드#k : 9500156 / #b몬스터 이름#k : 레이스\r\n#r코드#k : 9500157 / #b몬스터 이름#k : 주니어 레이스\r\n#r코드#k : 9500158 / #b몬스터 이름#k : 노란 왕도깨비\r\n#r코드#k : 9500159 / #b몬스터 이름#k : 파란 왕도깨비\r\n#r코드#k : 9500160 / #b몬스터 이름#k : 초록 왕도깨비\r\n#r코드#k : 9500161 / #b몬스터 이름#k : 헹키\r\n#r코드#k : 9500162 / #b몬스터 이름#k : 하프\r\n#r코드#k : 9500163 / #b몬스터 이름#k : 블러드 하프\r\n#r코드#k : 9500164 / #b몬스터 이름#k : 검은 켄타우로스\r\n#r코드#k : 9500165 / #b몬스터 이름#k : 붉은 켄타우로스\r\n#r코드#k : 9500166 / #b몬스터 이름#k : 푸른 켄타우로스\r\n#r코드#k : 9500167 / #b몬스터 이름#k : 황금돼지\r\n#r코드#k : 9500168 / #b몬스터 이름#k : 킹슬라임\r\n#r코드#k : 9500169 / #b몬스터 이름#k : 주니어 발록\r\n#r코드#k : 9500170 / #b몬스터 이름#k : 파파 픽시\r\n#r코드#k : 9500171 / #b몬스터 이름#k : 크림슨 발록\r\n#r코드#k : 9500172 / #b몬스터 이름#k : 알리샤르\r\n#r코드#k : 9500173 / #b몬스터 이름#k : 그리프\r\n#r코드#k : 9500174 / #b몬스터 이름#k : 마뇽\r\n#r코드#k : 9500175 / #b몬스터 이름#k : 데비존\r\n#r코드#k : 9500176 / #b몬스터 이름#k : 블루 머쉬맘\r\n#r코드#k : 9500177 / #b몬스터 이름#k : 대왕지네\r\n#r코드#k : 9500178 / #b몬스터 이름#k : 포장마차(변신전)\r\n#r코드#k : 9500179 / #b몬스터 이름#k : 포장마차(변신후)\r\n#r코드#k : 9500180 / #b몬스터 이름#k : 파풀라투스의 시계\r\n#r코드#k : 9500181 / #b몬스터 이름#k : 파풀라투스\r\n");
cm.dispose();
}
} else if (status == 2) {
cm.sendOk(cm.checkDrop(cm.getText()));
cm.dispose();
}
} 