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
 * PortalName : speargate_open
 * Location : 990000400 (샤레니안 - 기사의 홀)
 * 
 * @author T-Sun
 *
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    if (pi.getMap().getReactorByName("speargate").getState() == 4) {
        pi.playPortalSE();
        if (eim.getProperty("gainGP00") == null) {
            pi.gainGP(20);
            eim.setProperty("gainGP00","1");
        }
        pi.warp(990000401);
    } else {
        var map = pi.getPlayer().getEventInstance().getMapFactory().getMap(990000440);
        if (map.getReactorByName("spear1").getState() >= 1 && map.getReactorByName("spear2").getState() >= 1 &&
            map.getReactorByName("spear3").getState() >= 1 && map.getReactorByName("spear4").getState() >= 1) {
            pi.playPortalSE();
            if (eim.getProperty("gainGP00") == null) {
                pi.gainGP(20);
                eim.setProperty("gainGP00","1");
            }
            pi.warp(990000401);
            return;
        }
        pi.playerMessage("지금은 포탈이 닫혀있습니다.");
    }
}
