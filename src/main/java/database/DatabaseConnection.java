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
package database;

import org.apache.commons.dbcp.ConnectionFactory;
import org.apache.commons.dbcp.DriverManagerConnectionFactory;
import org.apache.commons.dbcp.PoolingDataSource;
import org.apache.commons.pool.impl.GenericObjectPool;
import server.ServerProperties;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.SQLException;

/**
 * All OdinMS servers maintain a Database Connection. This class therefore
 * "singletonices" the connection per process.
 *
 * @author Frz
 */
public class DatabaseConnection {

    public static final int CLOSE_CURRENT_RESULT = 1;
    /**
     * The constant indicating that the current <code>ResultSet</code> object
     * should not be closed when calling <code>getMoreResults</code>.
     *
     * @since 1.4
     */
    public static final int KEEP_CURRENT_RESULT = 2;
    /**
     * The constant indicating that all <code>ResultSet</code> objects that
     * have previously been kept open should be closed when calling
     * <code>getMoreResults</code>.
     *
     * @since 1.4
     */
    public static final int CLOSE_ALL_RESULTS = 3;
    /**
     * The constant indicating that a batch statement executed successfully
     * but that no count of the number of rows it affected is available.
     *
     * @since 1.4
     */
    public static final int SUCCESS_NO_INFO = -2;
    /**
     * The constant indicating that an error occured while executing a
     * batch statement.
     *
     * @since 1.4
     */
    public static final int EXECUTE_FAILED = -3;
    /**
     * The constant indicating that generated keys should be made
     * available for retrieval.
     *
     * @since 1.4
     */
    public static final int RETURN_GENERATED_KEYS = 1;
    /**
     * The constant indicating that generated keys should not be made
     * available for retrieval.
     *
     * @since 1.4
     */
    public static final int NO_GENERATED_KEYS = 2;
    public static DataSource dataSource;
    public static GenericObjectPool connectionPool;
    public static final String databaseHost = ServerProperties.getProperty("database.host");
    public static final String databasePort = ServerProperties.getProperty("database.port");
    /**
     * MySQL 5.0.51 community -> MySQL
     */
    public static String databaseScheme = ServerProperties.getProperty("database.schema");
    public static final String databaseUsername = ServerProperties.getProperty("database.username");
    public static final String databasePassword = ServerProperties.getProperty("database.password");
    /**
     * MySQL 5.0.51 community -> 5
     */
    public static int databaseMajorVersion;
    /**
     * MySQL 5.0.51 community -> 0
     */
    public static int databaseMinorVersion;
    public static String databaseProductVersion;
    public static String databaseUrl = "jdbc:mysql://" + databaseHost + ":" + databasePort + "/" + databaseScheme + "?autoReconnect=true&characterEncoding=euckr&maxReconnects=5";
    public static int databaseMinConnection = Integer.parseInt(ServerProperties.getProperty("database.min-connection"));
    public static int databaseMaxConnection = Integer.parseInt(ServerProperties.getProperty("database.max-connection"));

    /**
     * 데이터베이스 연결 함수. Apache common의 dbcp api를 사용하여 커넥션 풀을 생성.
     */
    public synchronized static void init() throws Exception {
        if (dataSource != null) {
            return;
        }

        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
        } catch (Throwable ex) {
            System.exit(1);
        }

        connectionPool = new GenericObjectPool();

        if (databaseMinConnection > databaseMaxConnection) {
            databaseMaxConnection = databaseMinConnection;
        }

        connectionPool.setMaxIdle(databaseMinConnection);
        connectionPool.setMaxActive(databaseMaxConnection);
        connectionPool.setTestOnBorrow(true);
        connectionPool.setMaxWait(5000);

        dataSource = setupDataSource();
        Connection c = getConnection();
        DatabaseMetaData dmd = c.getMetaData();
        databaseScheme = dmd.getDatabaseProductName();
        databaseMajorVersion = dmd.getDatabaseMajorVersion();
        databaseMinorVersion = dmd.getDatabaseMinorVersion();
        databaseProductVersion = dmd.getDatabaseProductVersion();
        c.close();
    }

    private static DataSource setupDataSource() {
        ConnectionFactory conFactory = new DriverManagerConnectionFactory(databaseUrl, databaseUsername, databasePassword);

        new PoolableConnectionFactoryAE(conFactory, connectionPool, null, 1, false, true);

        return new PoolingDataSource(connectionPool);
    }

    public static synchronized void shutdown() {
        try {
            connectionPool.close();
        } catch (Exception e) {
        }

        dataSource = null;
    }

    public static Connection getConnection() throws SQLException {
        if (connectionPool.getNumIdle() == 0) {
            connectionPool.setMaxActive(Math.min(connectionPool.getMaxActive() + 1, 10000));
        }
        return dataSource.getConnection();
    }

    public static int getActiveConnections() {
        return connectionPool.getNumActive();
    }

    public static int getIdleConnections() {
        return connectionPool.getNumIdle();
    }


}
