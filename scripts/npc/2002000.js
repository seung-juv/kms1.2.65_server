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
 * NPCID : 2002000
 * ScriptName : go_victoria
 * NPCNameFunc : 루피
 * Location : 209000000 (히든스트리트 - 행복한마을)
 * 
 * @author T-Sun
 *
 */

var status = -1;
function action(mode, type, selection) {
    if (mode == 1 && type != 1) {
        status++;
    } else {
        if (mode == 0 && type == 1) {
            status++;
            selection = 0;
        } else if (mode == 1 && type == 1) {
            status++;
            selection = 1;
        } else {
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        returnmap = cm.getSavedLocation("CHRISTMAS");
        cm.sendYesNo("이전에 계셨던 #b#m"+returnmap+"##k 맵으로 돌아가고 싶으신가요?");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendOk("그래요? 마음이 바뀌면 다시 찾아오세요~");
            cm.dispose();
        } else {
            cm.clearSavedLocation("CHRISTMAS");
            cm.warp(returnmap);
            cm.dispose();
        }
    }
}