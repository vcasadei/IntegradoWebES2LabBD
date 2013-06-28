/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Banco;

import Bean.Usuario;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Caah
 */
public class ConnectionPubMed {

    public static Connection getConnection(Usuario user) throws PubMedDAOException, SQLException {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();
            String conexao = "jdbc:sqlserver://localhost;databaseName=Projeto;integratedSecurity=true";
            Connection conn = DriverManager.getConnection(conexao);
            return conn;
        } catch (SQLException e){
            throw new SQLException("", "", e.getErrorCode());
        } catch (Exception e) {
            throw new PubMedDAOException(e.getMessage());
        }
    }

    public static void close(Connection conn, Statement ps, ResultSet rs) throws PubMedDAOException {
        try {
            if (rs != null) {
                rs.close();
            }
            if (ps != null) {
                ps.close();
            }
            if (conn != null) {
                conn.close();
            }
        } catch (Exception e) {
            throw new PubMedDAOException(e.getMessage());
        }
    }
}