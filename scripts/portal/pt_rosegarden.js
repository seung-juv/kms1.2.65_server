function enter(pi) {
if (pi.haveItem(4032836)) {
pi.gainItem(4032836, -1);
	pi.warpParty(211080000); 
	} else {
	pi.playerMessage(5,"장미정원에 입장하기 위해서는 장미정원의 열쇠가 필요합니다.");
}
}