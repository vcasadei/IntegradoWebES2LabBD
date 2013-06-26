/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Banco;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author Caah
 */
public class Teste {

    public static void main(String args[]) throws PubMedDAOException, SQLException {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();
            String conexao = "jdbc:sqlserver://localhost;databaseName=Projeto;";
            String usuario = "Caah1", senha = "Caah";
            Connection conn = DriverManager.getConnection(conexao, usuario, senha);

            String SQL = "Select * from keyword";

            Statement ps = conn.createStatement();
            ResultSet rs = ps.executeQuery(SQL);

            rs.next();
            System.out.println(rs.getString(1));

        } catch (SQLException e) {
            System.out.println(e.getErrorCode());
            throw new SQLException("", "", e.getErrorCode());
        } catch (Exception e) {
            throw new PubMedDAOException(e.getMessage());
        }
    }
}
