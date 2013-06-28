/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Banco;

import Bean.Article;
import Bean.Author;
import Bean.Usuario;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Ian
 */
public class AlterarArticleDAO {

    private Connection conn;

    public AlterarArticleDAO(Usuario user) throws PubMedDAOException, SQLException {
        this.conn = ConnectionPubMed.getConnection(user);
    }

    public void alterarArticle(Article artigo) throws SQLException, PubMedDAOException {

        PreparedStatement ps;
        String chemicals = "",
                publicationType = "",
                meshHeading = "",
                authorFirstName = "",
                authorSecondName = "",
                authorInitials = "",
                keyword = "";

        if (artigo.getChemical() == null) {
            chemicals = null;
        } else {
            for (String valor : artigo.getChemical()) {
                chemicals += valor + ";";
            }
        }

        if (artigo.getPublicationType() == null) {
            publicationType = null;
        } else {
            for (String valor : artigo.getPublicationType()) {
                publicationType += valor + ";";
            }
        }

        if (artigo.getMeshHeading() == null) {
            meshHeading = null;
        } else {
            for (String valor : artigo.getMeshHeading()) {
                meshHeading += valor + ";";
            }
        }

        if (artigo.getAutores() == null) {
            authorFirstName = null;
            authorSecondName = null;
            authorInitials = null;
        } else {
            for (Author valor : artigo.getAutores()) {
                authorFirstName = valor.getForeName() + ";";
                authorSecondName = valor.getLastName() + ";";
                authorInitials = valor.getInitials() + ";";
            }
        }

        if (artigo.getKeyWord() == null) {
            keyword = null;
        } else {
            for (String valor : artigo.getKeyWord()) {
                keyword += valor + ";";
            }
        }

        String SQL = "EXEC updateArticle @titlej = '"+artigo.getJournal().getTitle()+"', @issn = '"+artigo.getJournal().getISSN()+"', @abrev = '"+artigo.getJournal().getAbreviation()+"'," + "@nlm = '"+artigo.getJournal().getNlmUniqueID()+"', @tit = '"+artigo.getTitle()+"', @artid  = '"+artigo.getArticleID()+"', @pubsta = '"+artigo.getPublicationStatus() +"',@artdate = '"+artigo.getArticleDate()+"', @pag = '"+artigo.getPagination()+"', @vol = '"+artigo.getVolume()+"', @issue = '"+artigo.getIssue()+"', @affi = '"+artigo.getAffiliation()+"', @resumo = '"+artigo.getResumo()+"', @chemicalList = '"+chemicals+"',@publicationTypeList = '"+publicationType+"', @meshHeadingList = '"+meshHeading+"',@authorNameList = '"+authorFirstName+"', @authorLNameList = '"+authorSecondName+"',@authorInitialsList = '"+authorInitials+"', @keyWordList = '"+keyword+"'";
        ps = conn.prepareCall(SQL);
        ResultSet rs = null;

        ps.execute();
        ConnectionPubMed.close(conn, ps, rs);
    }
}
