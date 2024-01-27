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
 * NPCID : 9001107
 * ScriptName : outRabbitJump
 * NPCNameFunc : 안내 월묘
 * Location : 922231000 (히든스트리트 - 월묘들의 놀이마당)
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
    if (cm.getMapId() == cm.getSavedLocation("FISHING")) {
        if (status == 0) {
            cm.sendSimple("그만 놀이마당을 떠나시겠어요? 당신이 원래 있던 지역의 가까운 마을로 보내드리겠습니다. 지금 나가시겠어요?");
        } else if (status == 1) {
        } else if (status == 2) {
        } else if (status == 2) {
            if (selection == 1) {
                cm.warp(cm.getSavedLocation("FISHING"));
                cm.clearSavedLocation("FISHING");
                cm.dispose();
            } else {
                cm.sendOk("아직 볼일이 남아 있는 모양이에요.");
                cm.dispose();
            }
        }
    } else {
        if (status == 0) {
            cm.sendSimple("그만 놀이마당을 떠나시겠어요? 당신이 원래 있던 지역의 가까운 마을로 보내드리겠습니다. 지금 나가시겠어요?#l");;
        } else if (status == 1) {
            cm.sendYesNo("지금 #b#m"+cm.getSavedLocation("FISHING")+"##k 마을로 돌아가시겠어요?");
        } else if (status == 2) {
            if (selection == 0) {
                cm.sendOk("아직 볼일이 남아 있는 모양이군요.");
                cm.dispose();
            } else if (selection == 1) {
                cm.warp(cm.getSavedLocation("FISHING"));
                cm.clearSavedLocation("FISHING");
                cm.dispose();
            }
        }
    }
}
    
    

