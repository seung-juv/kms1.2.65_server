package server;

import constants.ServerConstants;
import database.DatabaseConnection;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

public class ServerProperties {
    private static final Properties props = new Properties();

    static {
        List<String> loads = Arrays.asList(
                "/channel.properties",
                "/ports.properties",
                "/database.properties",
                "/login.properties",
                "/server.properties"
        );
        for (String load : loads) {
            loadProperties(load);
        }
    }

    public static void loadProperties(String name) {
        try {
            InputStream inputStream = ServerProperties.class.getResourceAsStream(name);
            props.load(inputStream);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    public static String getProperty(String s) {
        return props.getProperty(s);
    }

    public static void setProperty(String prop, String newInf) {
        props.setProperty(prop, newInf);
    }

    public static String getProperty(String s, String def) {
        return props.getProperty(s, def);
    }
}
