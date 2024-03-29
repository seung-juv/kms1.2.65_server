/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3
as published by the Free Software Foundation. You may not use, modify
or distribute this program under any other version of the
GNU Affero General Public License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
 * NPCID : 1052009
 * ScriptName : subway_get2
 * NPCNameFunc : 보물상자
 * Location : 103000905 (3호선공사장 - B2<지하철기지창>)
 * 
 * @author T-Sun
 *
 */

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
	cm.sendOk("Alright, see you next time.");
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    }
    else {
	status--;
    }
    if (status == 0) {
	if (cm.getQuestStatus(2056) == 1 && !cm.haveItem(4031040)) {
	    cm.gainItem(4031040, 1); // Shumi's Roll of Cash
	    cm.warp(103000000, 0);
	}
	else {
	    var rand = 1 + Math.floor(Math.random() * 7);
	    if (rand == 1) {
		cm.gainItem(4020005, 2); // Sapphire Ore
	    }
	    else if (rand == 2) {
		cm.gainItem(4020006, 2); // Topaz Ore
	    }
	    else if (rand == 3) {
		cm.gainItem(4020004, 2); // Opal Ore
	    }
	    else if (rand == 4) {
		cm.gainItem(4020001, 2); // Amethyst Ore
	    }
	    else if (rand == 5) {
		cm.gainItem(4020003, 2); // Emerald Ore
	    }
	    else if (rand == 6) {
		cm.gainItem(4020000, 2); // Garnet Ore
	    }
	    else if (rand == 7) {
		cm.gainItem(4020002, 2); // AquaMarine Ore
	    }
	    cm.warp(103000000, 0);
	}
	cm.dispose();
    }
}	


