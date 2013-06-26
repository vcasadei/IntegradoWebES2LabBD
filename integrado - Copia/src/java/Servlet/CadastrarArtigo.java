/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import Bean.Article;
import Bean.Author;
import Bean.Journal;
import Bean.Usuario;
import Banco.CadastrarArtigoDAO;
import Banco.PubMedDAOException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Ian
 */
public class CadastrarArtigo extends HttpServlet {

    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet CadastrarArtigo</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet CadastrarArtigo at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        } finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try{
            
            Usuario user = new Usuario("labbd05","bananassaoazuis");
            Article artigo = new Article();
            artigo.setAffiliation(request.getParameter("affiliation"));
            artigo.setArticleID(request.getParameter("articleId"));
            artigo.setTitle(request.getParameter("titulo"));
            artigo.setArticleDate(request.getParameter("data"));
            artigo.setPublicationStatus(request.getParameter("publication"));
            artigo.setResumo(request.getParameter("resumo"));
            artigo.setPagination(request.getParameter("pagination"));
            artigo.setIssue(request.getParameter("issue"));
            artigo.setVolume(request.getParameter("volume"));
            artigo.setUsername(user.getLogin());
            
            Journal journal = new Journal(request.getParameter("issn"), request.getParameter("journalTitle"), request.getParameter("abreviation"), request.getParameter("nlmuniqueid"));
            if(journal.getISSN().isEmpty() || journal.getNlmUniqueID().isEmpty() || journal.getTitle().isEmpty()){
                journal = null;
            }
            artigo.setJournal(journal);
            
            ArrayList<Author> autores = new ArrayList();
            String [] nome = request.getParameterValues("Iforename");
            String [] sNome = request.getParameterValues("Ilastname");
            String [] iniciais = request.getParameterValues("Iinitialsname");
            if(nome == null || sNome == null || iniciais == null){
                autores = null;
            }else{
                for(int i = 0; i < nome.length; i++){
                    autores.add(new Author(nome[i], sNome[i], iniciais[i]));
                }
            }
            artigo.setAutores(autores);
            
            ArrayList <String> keys = new ArrayList();
            String [] keyword = request.getParameterValues("nomeKeyword");
            if(keyword == null){
                keys = null;
            }else{
                for (int i = 0; i < keyword.length; i++){
                    keys.add(keyword[i]);
                }
            }
            artigo.setKeyWord(keys);
            
            ArrayList<String> mesh = new ArrayList();
            String [] meshHeading = request.getParameterValues("nomeMesh");
            if(meshHeading == null){
                mesh = null;
            }else{
                for (int i = 0; i < meshHeading.length; i++){
                    mesh.add(meshHeading[i]);
                }
            }
            artigo.setMeshHeading(mesh);
            
            ArrayList<String> chemical = new ArrayList();
            String [] chemicalList = request.getParameterValues("nomeChemical");
            if(chemicalList == null){
                chemical = null;
            }else{
                for (int i = 0; i < chemicalList.length; i++){
                    chemical.add(chemicalList[i]);
                }
            }
            artigo.setChemical(chemical);
            
            
            ArrayList<String> pubtype = new ArrayList();
            String [] pubtypeList = request.getParameterValues("nomePubtype");
            if(pubtypeList == null){
                pubtype = null;
            }else{
                for (int i = 0; i < pubtypeList.length; i++){
                    pubtype.add(pubtypeList[i]);
                }
            }
            artigo.setPublicationType(pubtype);
            
            CadastrarArtigoDAO cadArtigo = new CadastrarArtigoDAO(user);
            cadArtigo.cadastraArtigo(artigo);
              
            request.setAttribute("artigo", artigo);
            
            //RequestDispatcher rd;
            //rd = request.getRequestDispatcher("/resultados.jsp");
            //rd.forward(request, response);
            
            
        }catch(PubMedDAOException e){
            Logger.getLogger(CadastrarArtigo.class.getName()).log(Level.SEVERE, null, e);
            throw new ServletException(e.getMessage());
        }catch(SQLException e){
            Logger.getLogger(CadastrarArtigo.class.getName()).log(Level.SEVERE, null, e);
            throw new ServletException(e.getMessage());
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
