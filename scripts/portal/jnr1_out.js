function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
            pi.playPortalSE();
	pi.warp(926110100,0);
    } else {
	pi.playerMessage(5, "지금은 포탈이 닫혀있습니다.");
    }
}