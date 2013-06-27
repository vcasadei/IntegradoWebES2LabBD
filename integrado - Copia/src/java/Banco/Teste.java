/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Banco;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Caah
 */
public class Teste {

    public static void main(String args[]) throws PubMedDAOException, SQLException {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();
            String conexao = "jdbc:sqlserver://localhost;databaseName=Projeto;integratedSecurity=true;";
            String usuario = "Caah", senha = "Caah";
            Connection conn = DriverManager.getConnection(conexao/*, usuario, senha*/);

            CallableStatement cstmt = conn.prepareCall("{call dbo.verificarLogin(?, ?)}");
            
            cstmt.registerOutParameter(2, java.sql.Types.INTEGER);
            cstmt.setString(1, "Caah");
            cstmt.execute();
            System.out.println(cstmt.getInt(2));
            
            /*Fecha a conexão*/
            ConnectionPubMed.close(conn, null, null);
            
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getErrorCode());
            throw new SQLException("", "", e.getErrorCode());
        } catch (Exception e) {
            throw new PubMedDAOException(e.getMessage());
        }
    }
}
