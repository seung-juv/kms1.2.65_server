package server;

import client.MapleCharacter;
import client.SkillFactory;
import client.inventory.MapleInventoryIdentifier;
import constants.ServerConstants;
import database.DatabaseConnection;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.etc.EtcServer;
import handling.etc.handler.EtcHandler;
import handling.login.LoginInformationProvider;
import handling.login.LoginServer;
import handling.world.World;
import handling.world.family.MapleFamily;
import handling.world.guild.MapleGuild;
import server.Timer.*;
import server.events.MapleOxQuizFactory;
import server.life.MapleLifeFactory;
import server.life.MapleMonsterInformationProvider;
import server.life.MobSkillFactory;
import server.life.PlayerNPC;
import server.log.DBLogger;
import server.marriage.MarriageManager;
import server.quest.MapleQuest;
import server.shops.MinervaOwlSearchTop;
import tools.*;

import java.net.InetAddress;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Start {

    public static final Start instance = new Start();
    public static long startTime = System.currentTimeMillis();
    public static AtomicInteger CompletedLoadingThreads = new AtomicInteger(0);
    public static MapleCharacter mc;

    public static void main(final String[] args) throws Exception {
        instance.run();
    }

    public static void BroadcastMsgSchedule(final String msg, long schedule) {
        Timer.CloneTimer.getInstance().schedule(new Runnable() {
            @Override
            public void run() {
                World.Broadcast.broadcastMessage(MaplePacketCreator.yellowChat(msg));
            }
        }, schedule);
    }

    public static void 출석초기화스케쥴(long schedule) {
        Timer.CloneTimer.getInstance().schedule(new Runnable() {
            @Override
            public void run() {
                try {
                    World.Broadcast.출석초기화();
                } catch (SQLException ex) {
                    Logger.getLogger(Start.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }, schedule);
    }

    public void run() throws Exception {
        DatabaseConnection.init();

        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            con = DatabaseConnection.getConnection();
            ps = con.prepareStatement("SELECT * FROM auth_server_channel_ip");
            rs = ps.executeQuery();
            while (rs.next()) {
                ServerProperties.setProperty(rs.getString("name") + rs.getInt("channelid"), rs.getString("value"));
            }
            rs.close();
            ps.close();
        } catch (SQLException ex) {
            ex.printStackTrace();
            System.exit(0);
        } finally {
            try {
                if (con != null) con.close();
                if (ps != null) ps.close();
                if (rs != null) rs.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }

        if (Boolean.parseBoolean(ServerProperties.getProperty("login.admin")) || ServerConstants.Use_Localhost) {
            ServerConstants.Use_Fixed_IV = false;
            System.out.println("[!!! Admin Only Mode Active !!!]");
        }

        // Set up ip address
        String ip = ServerProperties.getProperty("server.ip");
        InetAddress address = InetAddress.getByName(ip);
        ServerConstants.Gateway_IP = address.getAddress();

        try {
            con = DatabaseConnection.getConnection();
            ps = con.prepareStatement("UPDATE accounts SET loggedin = 0");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException ex) {
            throw new RuntimeException("[EXCEPTION] Please check if the SQL server is active.");
        } finally {
            try {
                if (con != null) con.close();
                if (ps != null) ps.close();
                if (rs != null) rs.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }

        World.init();
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        PingTimer.getInstance().start();
        LoadingThread WorldLoader = new LoadingThread(new Runnable() {
            public void run() {
                MapleGuildRanking.getInstance().load();
                MapleGuild.loadAll(); //(this);
            }
        }, "WorldLoader", this);
        LoadingThread MarriageLoader = new LoadingThread(new Runnable() {
            public void run() {
                MarriageManager.getInstance();
            }
        }, "MarriageLoader", this);
        LoadingThread MedalRankingLoader = new LoadingThread(new Runnable() {
            public void run() {
                MedalRanking.loadAll();
            }
        }, "MedalRankingLoader", this);
        LoadingThread FamilyLoader = new LoadingThread(new Runnable() {
            public void run() {
                MapleFamily.loadAll(); //(this);
            }
        }, "FamilyLoader", this);
        LoadingThread QuestLoader = new LoadingThread(new Runnable() {
            public void run() {
                MapleLifeFactory.loadQuestCounts();
                MapleQuest.initQuests();
            }
        }, "QuestLoader", this);
        LoadingThread ProviderLoader = new LoadingThread(new Runnable() {
            public void run() {
                MapleItemInformationProvider.getInstance().runEtc();
            }
        }, "ProviderLoader", this);
        LoadingThread MonsterLoader = new LoadingThread(new Runnable() {
            public void run() {
                MapleMonsterInformationProvider.getInstance().load();
                //BattleConstants.init();
            }
        }, "MonsterLoader", this);
        LoadingThread ItemLoader = new LoadingThread(new Runnable() {
            public void run() {
                MapleItemInformationProvider.getInstance().runItems();
            }
        }, "ItemLoader", this);
        LoadingThread SkillFactoryLoader = new LoadingThread(new Runnable() {
            public void run() {
                SkillFactory.load();
            }
        }, "SkillFactoryLoader", this);
        LoadingThread BasicLoader = new LoadingThread(new Runnable() {
            public void run() {
                LoginInformationProvider.getInstance();
                RandomRewards.load();
                RandomRewards.loadGachaponRewardFromINI("ini/gachapon.ini");
                MapleOxQuizFactory.getInstance();
                MapleCarnivalFactory.getInstance();
                MobSkillFactory.getInstance();
                SpeedRunner.loadSpeedRuns();
                MinervaOwlSearchTop.getInstance().loadFromFile();
            }
        }, "BasicLoader", this);
        LoadingThread MIILoader = new LoadingThread(new Runnable() {
            public void run() {
                MapleInventoryIdentifier.getInstance();
            }
        }, "MIILoader", this);
        LoadingThread CashItemLoader = new LoadingThread(new Runnable() {
            public void run() {
                CashItemFactory.getInstance().initialize();
            }
        }, "CashItemLoader", this);

        LoadingThread[] LoadingThreads = {WorldLoader, FamilyLoader, QuestLoader, ProviderLoader, SkillFactoryLoader, BasicLoader, CashItemLoader, MIILoader, MonsterLoader, ItemLoader, MarriageLoader, MedalRankingLoader};

        for (Thread t : LoadingThreads) {
            t.start();
        }
        synchronized (this) {
            wait();
        }
        while (CompletedLoadingThreads.get() != LoadingThreads.length) {
            synchronized (this) {
                wait();
            }
        }
        MapleItemInformationProvider.getInstance().runQuest();

        try {
            LoginServer.run_startup_configurations();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        try {
            ChannelServer.startChannel_Main();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        try {
            CashShopServer.run_startup_configurations();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        //threads.
        CheatTimer.getInstance().register(AutobanManager.getInstance(), 60000);
        Runtime.getRuntime().addShutdownHook(new Thread(new Shutdown()));
        World.registerRespawn();
        //ChannelServer.getInstance(1).getMapFactory().getMap(910000000).spawnRandDrop(); //start it off
        ShutdownServer.registerMBean();
        ServerConstants.registerMBean();
        PlayerNPC.loadAll();// touch - so we see database problems early...
//        MapleMonsterInformationProvider.getInstance().addExtra();
        try {
            EtcServer.start();
        } catch (Exception e) {
            throw new RuntimeException();
        }
        DatabaseBackup.getInstance().startTasking();
        LoginServer.setOn(); //now or later


        /* Handle Event */
        if (SystemUtils.getTimeMillisByDay(2013, 9, 18) < System.currentTimeMillis() && System.currentTimeMillis() < SystemUtils.getTimeMillisByDay(2013, 9, 23)) {
            Runnable eventStart = new Runnable() {
                @Override
                public void run() {
                    LoginServer.setFlag((byte) 1);
                    LoginServer.setEventMessage("#r18일 14시 ~ 22일 16시#k\r\r#b경험치 두배#k\r#b드롭률 두배#k");
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setExpRate(2);
                        cserv.setDropRate(2);
                        cserv.setServerMessage("");
                    }
                }
            };
            Runnable eventEnd = new Runnable() {
                @Override
                public void run() {
                    LoginServer.setFlag((byte) 0);
                    LoginServer.setEventMessage("");
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        cserv.setExpRate(1);
                        cserv.setDropRate(1);
                    }
                }
            };
            SystemUtils.setScheduleAtTime(2013, 9, 18, 14, 0, 0, eventStart);
            SystemUtils.setScheduleAtTime(2013, 9, 22, 16, 0, 0, eventEnd);
            LoginServer.setEventMessage("#r18일 14시 ~ 22일 16시#k\r\r#b경험치 두배#k\r#b드롭률 두배#k\r\r9월 19일 목요일\r#b오후 3시#k \r#r온타임 이벤트#k");
        }

        if (ServerConstants.Use_Localhost) {
            new PacketSender().setVisible(true);
        }
        new MemoryUsageWatcher(88).start();
//        new Debugger().setVisible(true);
        new DeadLockDetector(60, DeadLockDetector.RESTART).start();
        DBLogger.getInstance().clearLog(14, 30, 21); //Log Clear interval 14/30/21 days
        EtcHandler.handle((short) 0, null, null); // initialize class
//        new PacketSender().setVisible(true);
    }

    public static class Shutdown implements Runnable {

        @Override
        public void run() {
            ShutdownServer.getInstance().run();
            ShutdownServer.getInstance().run();
        }
    }

    private static class LoadingThread extends Thread {

        protected String LoadingThreadName;

        private LoadingThread(Runnable r, String t, Object o) {
            super(new NotifyingRunnable(r, o, t));
            LoadingThreadName = t;
        }

        @Override
        public synchronized void start() {
            super.start();
        }
    }

    private static class NotifyingRunnable implements Runnable {

        private final Object ToNotify;
        private final String LoadingThreadName;
        private final Runnable WrappedRunnable;
        private long StartTime;

        private NotifyingRunnable(Runnable r, Object o, String name) {
            WrappedRunnable = r;
            ToNotify = o;
            LoadingThreadName = name;
        }

        public void run() {
            StartTime = System.currentTimeMillis();
            WrappedRunnable.run();
            synchronized (ToNotify) {
                CompletedLoadingThreads.incrementAndGet();
                ToNotify.notify();
            }
        }
    }

    private static class AutoShutdown implements Runnable {

        protected static Thread t = null;

        @Override
        public void run() {
            t = new Thread(ShutdownServer.getInstance());
            ShutdownServer.getInstance().shutdown();
            t.start();
        }
    }
}
