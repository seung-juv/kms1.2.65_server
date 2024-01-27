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
 * NPCID : 2112016
 * ScriptName : q3367npc
 * NPCNameFunc : 숨겨진 문서들
 * Location : 926130102 (히든스트리트 - 유레테의 실험실2)
 * 
 * @author T-Sun
 *
 */

var status = -1;
function action(mode, type, selection) {
    if (mode == 1 && type != 1) {
        status++;
    } else {
        if (type == 1 && mode == 1) {
            status++;
            selection = 1;
        } else if (type == 1 && mode == 0) {
            status++;
            selection = 0;
        } else {
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        if (cm.getDistance() > 8000) {
            cm.playerMessage(5, "너무 멀어 조사할 수 없다.");
            cm.dispose();
            return;
        }
        var eim = cm.getEventInstance();
        if (eim.getProperty(cm.getObjectId()) == null) {
            cm.gainItem(4031797, 1);
            eim.setProperty(cm.getObjectId(), "1");
        }
        cm.dispose();
    }
}