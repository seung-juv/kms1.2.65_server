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
 * NPCID : 2001002
 * ScriptName : go_tree2
 * NPCNameFunc : 양동이 눈사람
 * Location : 209000000 (히든스트리트 - 행복한마을)
 * 
 * @author T-Sun
 *
 */
/*
 *  Metal Bucket Snowman - Happy Ville NPC
 */

function start() {
    cm.sendSimple("Hello~ I'm #p2001002#. You can enter the room which has the  humongous tree through me! For more information, talk to #b#p2001000##k. Which room will you enter? \n\r #b#L0#The room with the 1st tree#l \n\r #L1#The room with the 2nd tree#l \n\r #L2#The room with the 3rd tree#l \n\r #L3#The room with the 4th tree#l \n\r #L4#The room with the 5th tree#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000006 + selection, 0);
    }
    cm.dispose();
}
