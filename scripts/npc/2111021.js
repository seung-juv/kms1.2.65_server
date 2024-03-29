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
 * NPCID : 2111021
 * ScriptName : alceCircle2
 * NPCNameFunc : 두번째 마법진
 * Location : 261040000 (히든스트리트 - 검은 마법사의 연구실)
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
        if (cm.isQuestActive(3345)) {
            var qr = cm.getQuestRecord(3345);
            if (qr.getCustomData() == null) {
                qr.setCustomData("0");
            }
            if (qr.getCustomData().equals("1") && cm.haveItem(4031740, 1)) {
                cm.setQuestByInfo(3345, "2", false);
                cm.showNpcSpecialEffect("act33452");
                cm.mapMessage(5, "두번째 마법진이 반응했습니다.");
                cm.gainItem(4031740, -1);
            }
        }
        cm.dispose();
    }
}