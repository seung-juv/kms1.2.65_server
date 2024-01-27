importPackage(Packages.server.maps);
var status = 0;
function action(mode,type,selection)
{
	if(mode <= 0) {
		cm.dispose();
		return;
	} 
	status++;
	
	if (cm.getPlayer().hasGmLevel(6)) {
		if (status == 1) {
			cm.sendGetNumber("hp",0,0,999999999);
			return;
		}
		var map = cm.getPlayer().getMap();
		var mob = map.getMonsterById(8800002);
		mob.setHp(selection);
		map.broadcastMessage(Packages.tools.packet.MobPacket.healMonster(mob.getObjectId(), -10000000));
	}
	cm.dispose();
}