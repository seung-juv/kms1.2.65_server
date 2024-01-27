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

import server.ServerProperties;
import tools.Pair;

import java.net.ServerSocket;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.logging.Logger;

public class LoginServer {

    public static final int PORT = Integer.parseInt(ServerProperties.getProperty("ports.login"));
    private static final Logger _log = Logger.getLogger(LoginServer.class.getName());
    private static final HashMap<Integer, Pair<String, String>> loginAuth = new HashMap<Integer, Pair<String, String>>();
    private static final HashSet<String> loginIPAuth = new HashSet<String>();
    private static final HashMap<Integer, String> CodeHash = new HashMap<Integer, String>();
    private static LoginServerThread thread;
    private static Map<Integer, Integer> load = new HashMap<Integer, Integer>();
    private static String serverName, eventMessage;
    private static byte flag;
    private static int maxCharacters, userLimit, usersOn = 0;
    private static boolean finishedShutdown = true, adminOnly = false;

    public static void setCodeHash(Integer key, String v) {
        CodeHash.put(key, v);
    }

    public static String getCodeHash(Integer key) {
        return CodeHash.remove(key);
    }

    public static void putLoginAuth(int chrid, String ip, String tempIP) {
        loginAuth.put(chrid, new Pair<String, String>(ip, tempIP));
        loginIPAuth.add(ip);
    }

    public static Pair<String, String> getLoginAuth(int chrid) {
        return loginAuth.remove(chrid);
    }

    public static boolean containsIPAuth(String ip) {
        return loginIPAuth.contains(ip);
    }

    public static void removeIPAuth(String ip) {
        loginIPAuth.remove(ip);
    }

    public static void addIPAuth(String ip) {
        loginIPAuth.add(ip);
    }

    public static final void addChannel(final int channel) {
        load.put(channel, 0);
    }

    public static final void removeChannel(final int channel) {
        load.remove(channel);
    }

    public static final void run_startup_configurations() throws Exception {
        userLimit = Integer.parseInt(ServerProperties.getProperty("login.user-limit"));
        serverName = ServerProperties.getProperty("server.name");
        eventMessage = ServerProperties.getProperty("server.event-message");
        flag = Byte.parseByte(ServerProperties.getProperty("login.flag"));
        adminOnly = Boolean.parseBoolean(ServerProperties.getProperty("login.admin", "false"));
        maxCharacters = Integer.parseInt(ServerProperties.getProperty("server.max-characters"));
        thread = new LoginServerThread();
        thread._serverSocket = new ServerSocket(PORT);
    }

    public static final void shutdown() {
        if (finishedShutdown) {
            return;
        }
        System.out.println("Shutting down login...");
        finishedShutdown = true; // nothing. lol
    }

    public static final String getServerName() {
        return serverName;
    }

    public static final String getTrueServerName() {
        return getServerName();
    }

    public static final String getEventMessage() {
        return eventMessage;
    }

    public static final void setEventMessage(final String newMessage) {
        eventMessage = newMessage;
    }

    public static final byte getFlag() {
        return flag;
    }

    public static final void setFlag(final byte newflag) {
        flag = newflag;
    }

    public static final int getMaxCharacters() {
        return maxCharacters;
    }

    public static final Map<Integer, Integer> getLoad() {
        return load;
    }

    public static void setLoad(final Map<Integer, Integer> load_, final int usersOn_) {
        load = load_;
        usersOn = usersOn_;
    }

    public static final int getUserLimit() {
        return userLimit;
    }

    public static final void setUserLimit(final int newLimit) {
        userLimit = newLimit;
    }

    public static final int getUsersOn() {
        return usersOn;
    }

    public static final boolean isAdminOnly() {
        return adminOnly;
    }

    public static final boolean isShutdown() {
        return finishedShutdown;
    }

    public static final void setOn() {
        finishedShutdown = false;
        thread.start();
    }
}
