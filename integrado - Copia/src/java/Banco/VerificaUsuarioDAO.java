/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Banco;

import Bean.Usuario;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.CallableStatement;

/**
 *
 * @author Caah
 */
public class VerificaUsuarioDAO {

    /*Atributo da conexão*/
    private Connection conn;

    public VerificaUsuarioDAO(Usuario usuario) throws PubMedDAOException, SQLException {
        
        try {
        /*Estabelece conexão com o banco*/
            this.conn = ConnectionPubMed.getConnection(usuario);
        } catch (SQLException e){
            throw new SQLException("", "", e.getErrorCode());
        }
    }

    /*Retorna 1 se o usuário for um Admin e 0 caso contrário*/
    public int verificarTipoUsuario() throws SQLException, PubMedDAOException {

        try {
            int res;
            
            CallableStatement cstmt = conn.prepareCall("{call dbo.verificaTipoUsuario(?)}");
            cstmt.registerOutParameter(1, java.sql.Types.INTEGER);
            cstmt.execute();
            res = cstmt.getInt(1);
            ConnectionPubMed.close(conn, null, null);

            return res;
        } catch (SQLException e) {
            throw new SQLException(e.getMessage());
        }
    }

    /*Retorna 1 caso o usuário passado seja o atual usuário logado no banco e 1 caso contrário*/
    public int verificaDono(String dono) throws SQLException, PubMedDAOException {

        try {
            int res;
            
            /*Prepara pra executar a procedure*/
            CallableStatement cstmt = conn.prepareCall("{call dbo.verificarDono(?, ?)}");
            
            cstmt.registerOutParameter(2, java.sql.Types.INTEGER);
            cstmt.setString(1, dono);
            cstmt.execute();
            res = cstmt.getInt(2);
            
            /*Fecha a conexão*/
            ConnectionPubMed.close(conn, null, null);

            return res;
        } catch (SQLException e) {
            throw new SQLException(e.getMessage());
        }
    }
    
    /*Verifica se o login passado como parâmetro existe*/
    public int verificarLogin(String login) throws PubMedDAOException, SQLException{
        
        try {
            int res;
            
            /*Prepara pra executar a procedure*/
            CallableStatement cstmt = conn.prepareCall("{call dbo.verificarLogin(?, ?)}");
            
            cstmt.registerOutParameter(2, java.sql.Types.INTEGER);
            cstmt.setString(1, login);
            cstmt.execute();
            res = cstmt.getInt(2);
            
            /*Fecha a conexão*/
            ConnectionPubMed.close(conn, null, null);

            return res;
        } catch (SQLException e) {
            throw new SQLException(e.getMessage());
        }
    }
    
    /*Altera o tpo de um usuário cadastrado no banco*/
    public void alterarLogin(String login, String tipoA, String nTipo) throws PubMedDAOException, SQLException{
        try {
            
            /*Prepara pra executar a procedure*/
            CallableStatement cstmt = conn.prepareCall("{call dbo.alterarTipoLogin(?, ?, ?)}");
            
            cstmt.setString(1, login);
            cstmt.setString(2, tipoA);
            cstmt.setString(3, nTipo);
            cstmt.execute();
            
            /*Fecha a conexão*/
            ConnectionPubMed.close(conn, null, null);
            
        } catch (SQLException e) {
            throw new SQLException(e.getMessage());
        }
    }
}
