/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Banco;

import Bean.Journal;
import Bean.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Ian
 */
public class BuscaDadosJournalDAO {
    private Connection conn; 
    
    public BuscaDadosJournalDAO(Usuario user) throws PubMedDAOException, SQLException{
        this.conn = ConnectionPubMed.getConnection(user);
    }
    
    public Journal buscaJournalNlmID(String nlmID) throws SQLException, PubMedDAOException {
        PreparedStatement ps;
        Journal retorno;       
        String SQL = "SELECT * FROM Journal WHERE nlmUniqueID LIKE '" + nlmID + "'";
        ps = conn.prepareStatement(SQL);
        ResultSet rs = ps.executeQuery();
        if (rs.next()) {
            Journal jr = new Journal();
            jr.setAttrInicias(rs.getString("issn"), rs.getString("title"), rs.getString("abreviation"), rs.getString("NlmUniqueID"));
            retorno = jr;
        }else{
            retorno = null;
        }
        ConnectionPubMed.close(conn, ps, rs);
        return retorno;
    }
    
    public Journal buscaJournalIssn(String issn) throws SQLException, PubMedDAOException {
        PreparedStatement ps;
        Journal retorno;       
        String SQL = "SELECT * FROM Journal WHERE issn LIKE '" + issn + "'";
        ps = conn.prepareStatement(SQL);
        ResultSet rs = ps.executeQuery();
        if (rs.next()) {
            Journal jr = new Journal();
            jr.setAttrInicias(rs.getString("issn"), rs.getString("title"), rs.getString("abreviation"), rs.getString("NlmUniqueID"));
            retorno = jr;
        }else{
            retorno = null;
        }
        ConnectionPubMed.close(conn, ps, rs);
        return retorno;
    }
    
    public Journal buscaJournalTitulo(String title) throws SQLException, PubMedDAOException {
        PreparedStatement ps;
        Journal retorno;       
        String SQL = "SELECT * FROM Journal WHERE title LIKE '" + title + "'";
        ps = conn.prepareStatement(SQL);
        ResultSet rs = ps.executeQuery();
        if (rs.next()) {
            Journal jr = new Journal();
            jr.setAttrInicias(rs.getString("issn"), rs.getString("title"), rs.getString("abreviation"), rs.getString("NlmUniqueID"));
            retorno = jr;
        }else{
            retorno = null;
        }
        ConnectionPubMed.close(conn, ps, rs);
        return retorno;
    }
}