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
package handling.login;

import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.ServerProperties;
import tools.Triple;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LoginInformationProvider {

    private final static LoginInformationProvider instance = new LoginInformationProvider();
    protected final List<String> ForbiddenName = new ArrayList<String>();
    //gender, val, job
    protected final Map<Triple<Integer, Integer, Integer>, List<Integer>> makeCharInfo = new HashMap<Triple<Integer, Integer, Integer>, List<Integer>>();
    protected LoginInformationProvider() {
        final String WZpath = ServerProperties.getProperty("server.wz-path");
        final MapleDataProvider prov = MapleDataProviderFactory.getDataProvider(new File(WZpath + "/Etc.wz"));
        MapleData nameData = prov.getData("ForbiddenName.img");
        for (final MapleData data : nameData.getChildren()) {
            ForbiddenName.add(MapleDataTool.getString(data));
        }
        nameData = prov.getData("Curse.img");
        for (final MapleData data : nameData.getChildren()) {
            ForbiddenName.add(MapleDataTool.getString(data).split(",")[0]);
        }
        ForbiddenName.add("티썬");
        ForbiddenName.add("하켄");
        ForbiddenName.add("샤썬");
        ForbiddenName.add("EI썬");
        ForbiddenName.add("El썬");
        ForbiddenName.add("TSun");
        ForbiddenName.add("T1Sun");
        ForbiddenName.add("doomgate17");
        ForbiddenName.add("히나");
        ForbiddenName.add("기쿠");
        final MapleData infoData = prov.getData("MakeCharInfo.img");
        final MapleData data = infoData;//.getChildByPath("Info");
        for (MapleData dat : data) {
            int val = -1;
            if (dat.getName().endsWith("Male")) {
                val = 0;
            } else if (dat.getName().endsWith("Female")) {
                val = 1;
            } else {
                continue;
            }
            final int job = JobType.getByJob(dat.getName()).type;
            for (MapleData da : dat) {
                final Triple<Integer, Integer, Integer> key = new Triple<Integer, Integer, Integer>(val, Integer.parseInt(da.getName()), job);
                List<Integer> our = makeCharInfo.get(key);
                if (our == null) {
                    our = new ArrayList<Integer>();
                    makeCharInfo.put(key, our);
                }
                for (MapleData d : da) {
                    our.add(MapleDataTool.getInt(d, -1));
                }
            }
        }
    }
    //0 = eyes 1 = hair 2 = haircolor 3 = skin 4 = top 5 = bottom 6 = shoes 7 = weapon

    public static LoginInformationProvider getInstance() {
        return instance;
    }

    public final boolean isForbiddenName(final String in) {
        for (final String name : ForbiddenName) {
            if (in.toLowerCase().contains(name.toLowerCase())) {
                return true;
            }
        }

        return false;
    }

    public final boolean isEligibleItem(final int gender, final int val, final int job, final int item) {
        if (item < 0) {
            return false;
        }
        final Triple<Integer, Integer, Integer> key = new Triple<Integer, Integer, Integer>(gender, val, job);
        final List<Integer> our = makeCharInfo.get(key);
        if (our == null) {
            return false;
        }
        return our.contains(item);
    }

    public enum JobType {

        UltimateAdventurer(-1, "Ultimate", 0, 130000000),
        Resistance(0, "Resistance", 3000, 931000000),
        Adventurer(1, "", 0, 0),
        Cygnus(2, "Premium", 1000, 913040000),
        Aran(3, "Orient", 2000, 914000000),
        Evan(4, "Evan", 2001, 900090000),
        Mercedes(5, "", 2002, 910150000),
        Demon(6, "", 3001, 931050310);
        //    PHANTOM((byte) 7),
//    DUALBLADE((byte) 8),
//    MIKHAIL((byte) 9);
        public int type, id, map;
        public String job;

        JobType(int type, String job, int id, int map) {
            this.type = type;
            this.job = job;
            this.id = id;
            this.map = map;
        }

        public static JobType getByJob(String g) {
            for (JobType e : JobType.values()) {
                if (e.job.length() > 0 && g.startsWith(e.job)) {
                    return e;
                }
            }
            return Adventurer;
        }

        public static JobType getByType(int g) {
            for (JobType e : JobType.values()) {
                if (e.type == g) {
                    return e;
                }
            }
            return Adventurer;
        }

        public static JobType getById(int g) {
            for (JobType e : JobType.values()) {
                if (e.id == g) {
                    return e;
                }
            }
            return Adventurer;
        }
    }
}
