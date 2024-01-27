/*
 * 4th Job Rush Quest.
 */

function init() {
    em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("4jrush");

    em.setProperty("state", "1");
    eim.setInstanceMap(910500100).resetFully();
    eim.startEventTimer(1200000);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(910500100);
    player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    em.setProperty("state", "0");
    eim.disposeIfPlayerBelow(100, 105090700);
}

function changedMap(eim, player, mapid) {
    if (mapid != 910500100) {
        eim.unregisterPlayer(player);
        em.setProperty("state", "0");

        eim.disposeIfPlayerBelow(0, 0);
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {
    em.setProperty("state", "0");
    eim.disposeIfPlayerBelow(100, 105090700);
}

function playerExit(eim, player) {
    em.setProperty("state", "0");
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(105090700);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ(eim) {
    em.setProperty("state", "0");
    eim.disposeIfPlayerBelow(100, 105090700);
}

function allMonstersDead(eim) {
//has nothing to do with monster killing
}

function cancelSchedule() {
}