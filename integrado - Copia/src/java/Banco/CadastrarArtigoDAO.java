/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Banco;

import Bean.Article;
import Bean.Author;
import Bean.Journal;
import Bean.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author Ian
 */
public class CadastrarArtigoDAO {

    private Connection conn;

    public CadastrarArtigoDAO(Usuario user) throws PubMedDAOException, SQLException {
        this.conn = ConnectionPubMed.getConnection(user);
    }

    public Journal buscaJournalNlmID(String nlmID) throws SQLException, PubMedDAOException {
        PreparedStatement ps;
        Journal retorno;
        String SQL = "SELECT * FROM Journal WHERE nlmUniqueID LIKE '" + nlmID + "'";
        ps = conn.prepareStatement(SQL);
        ResultSet rs = ps.executeQuery();
        if (rs.next()) {
            retorno = new Journal(rs.getString("nlmUniqueID"), rs.getString("issn"), rs.getString("title"), rs.getString("abreviation"));
        } else {
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
            retorno = new Journal(rs.getString("nlmUniqueID"), rs.getString("issn"), rs.getString("title"), rs.getString("abreviation"));
        } else {
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
            retorno = new Journal(rs.getString("nlmUniqueID"), rs.getString("issn"), rs.getString("title"), rs.getString("abreviation"));
        } else {
            retorno = null;
        }
        ConnectionPubMed.close(conn, ps, rs);
        return retorno;
    }

    public ArrayList<Journal> buscaJournalTituloParc(String title) throws SQLException, PubMedDAOException {
        PreparedStatement ps;
        ArrayList<Journal> retorno = new ArrayList();
        String SQL = "SELECT * FROM Journal WHERE title LIKE '%" + title + "%'";
        ps = conn.prepareStatement(SQL);
        ResultSet rs = ps.executeQuery();
        if (rs.next()) {
            retorno.add(new Journal(rs.getString("nlmUniqueID"), rs.getString("issn"), rs.getString("title"), rs.getString("abreviation")));
        } else {
            retorno = null;
        }
        ConnectionPubMed.close(conn, ps, rs);
        return retorno;
    }

    public void cadastraArtigo(Article artigo) throws SQLException, PubMedDAOException {
        PreparedStatement ps;
        ArrayList<Journal> retorno = new ArrayList();
        String chemicals = "", 
               publicationType = "",
               meshHeading = "",
               authorFirstName = "",
               authorSecondName = "",
               authorInitials = "",
               keyword = "";
        
        if(artigo.getChemical() == null){
            chemicals = null;
        }else{
            for (String valor : artigo.getChemical()){
                chemicals += valor + ";";
            }
        }
        
        if(artigo.getPublicationType() == null){
            publicationType = null;
        }else{
            for (String valor : artigo.getPublicationType()){
                publicationType += valor + ";";
            }
        }
        
        if(artigo.getMeshHeading() == null){
            meshHeading = null;
        }else{
            for(String valor : artigo.getMeshHeading()){
                meshHeading += valor + ";";
            }
        }
        
        if(artigo.getAutores() == null){
            authorFirstName = null;
            authorSecondName = null;
            authorInitials = null;
        }else{
            for(Author valor : artigo.getAutores()){
                authorFirstName = valor.getForeName()+ ";";
                authorSecondName = valor.getLastName()+ ";";
                authorInitials = valor.getInitials() + ";";
            }
        }
        
        if(artigo.getKeyWord() == null){
            keyword = null;
        }else{
            for(String valor : artigo.getKeyWord()){
                keyword += valor + ";";
            }
        }

        String SQL = "EXECUTE inserirArticle @titlej = '" + artigo.getJournal().getTitle()+ "', @issn = '" + artigo.getJournal().getISSN()+ "', "
                + "@abrev = '" + artigo.getJournal().getAbreviation() + "', @nlm = '" + artigo.getJournal().getNlmUniqueID()+ "', "
                + "@tit = '" + artigo.getTitle() + "', @artid = '" + artigo.getArticleID() + "', @pubsta = '" + artigo.getPublicationStatus() + "',"
                + "@artdate = '" + artigo.getArticleDate() + "', @pag = '" + artigo.getPagination() + "', @vol = '" + artigo.getVolume() + "',  "
                + "@issue = '" + artigo.getIssue() + "', @affi = '" + artigo.getAffiliation() + "',  "
                + "@resumo = '" + artigo.getResumo() + "', @chemicalList = '" + chemicals + "',  @publicationTypeList = '" + publicationType + "', "
                + "@meshHeadingList = '" + meshHeading + "', @authorNameList = '" + authorFirstName + "', @authorLNameList = '" + authorSecondName + "',  "
                + "@authorInitialsList = '" + authorInitials + "', @keyWordList = '" + keyword + "'";
        ps = conn.prepareCall(SQL);
        ResultSet rs = null;
        
        ps.execute();
        ConnectionPubMed.close(conn, ps, rs);
    }
}