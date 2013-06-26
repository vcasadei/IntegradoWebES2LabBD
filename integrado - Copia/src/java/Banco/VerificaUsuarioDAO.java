/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Banco;

import Bean.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Caah
 */
public class VerificaUsuarioDAO {

    /*Atributo da conexão*/
    private Connection conn;

    public VerificaUsuarioDAO(Usuario usuario) throws PubMedDAOException, SQLException {
        /*Estabelece conexão com o banco*/
        this.conn = ConnectionPubMed.getConnection(usuario);
    }

    /*Retorna 1 se o usuário for um Admin e 0 caso contrário*/
    public int verificarTipoUsuario() throws SQLException, PubMedDAOException {

        try {
        String SQL = "EXEC verificaTipoUsuario";
        int res;

        System.out.println("Aqui5");
        PreparedStatement ps = conn.prepareStatement(SQL);
        ResultSet rs = ps.executeQuery();

        rs.next();
        res = rs.getInt(1);
        
        System.out.println("Res: ");

        ConnectionPubMed.close(conn, ps, rs);
        System.out.println("Aqui6");

        return res;
        } catch(SQLException e){
            System.out.println("erro: " + e.getMessage());
            throw new SQLException(e.getMessage());
        }
    }

    /*Retorna 1 caso o usuário passado seja o atual usuário logado no banco e 1 caso contrário*/
    public int verificaDono(String dono) throws SQLException, PubMedDAOException {

        String SQL = "EXEC verificarDono";
        int res;
        ResultSet rs;

        PreparedStatement ps = conn.prepareCall(SQL);
        rs = ps.executeQuery();

        rs.next();
        res = rs.getInt(1);

        ConnectionPubMed.close(conn, ps, rs);

        return res;
    }
}
