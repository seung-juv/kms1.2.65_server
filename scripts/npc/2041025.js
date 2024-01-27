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
 * NPCID : 2041025
 * ScriptName : Populatus01
 * NPCNameFunc : 기계장치
 * Location : 220080001 (시계탑최하층 - 시계탑의 근원)
 * 
 * @author T-Sun
 *
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("삐삐.. 저를 통해서 안전한 곳으로 나가실 수 있습니다. 삐삐.. 정말 이곳을 나가시겠습니까?");
    } else if (status == 1) {
        cm.warp(220080000);
        cm.dispose();
    } else {
        cm.dispose();
    }
}
