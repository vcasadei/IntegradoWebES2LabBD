/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import Banco.BuscaArtigosDAO;
import Banco.PubMedDAOException;
import Bean.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Caah
 */
public class BuscaTitArticle extends HttpServlet {

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
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet BuscaTitArticle</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet BuscaTitArticle at " + request.getContextPath() + "</h1>");
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
        
         try {
             
            List<String> listaTitulos;
            String valor = request.getParameter("tit");
            String tipo = request.getParameter("tipo");
            int cont = 0;
            Usuario user = new Usuario();
            
            /*pega usuario da sessão*/
            HttpSession session = request.getSession(false);
            if (session != null){
                user.setAttrUsuario((String) session.getAttribute("username"), (String)session.getAttribute("password"));
            } else {
                user.setAttrUsuario("Visitante", "V1s1t4nt3!");
            }
            
            BuscaArtigosDAO busca = new BuscaArtigosDAO(user);

            /*Verifica se é pra fazer o autocomplete de título ou de keyword*/
            if (tipo.equals("titulo")){
                listaTitulos = busca.autocompleteTitulo(valor);
            } else {
                listaTitulos = busca.autocompleteKeyword(valor);
            }

            /*Transforma a lista de strings retornadas em uma lista em json*/
            valor = "[";
            for (String tit : listaTitulos) {
                if (cont != 0) {
                    valor += ", ";
                }
                valor += "\"" + tit + "\"";
                cont++;
            }
            valor += "]";

            /*Retorna a lista como um objeto json*/
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(valor);

        } catch (PubMedDAOException ex) {
            Logger.getLogger(BuscaTitJournal.class.getName()).log(Level.SEVERE, null, ex);
            throw new ServletException(ex.getMessage());
        } catch (SQLException ex) {
            Logger.getLogger(BuscaTitJournal.class.getName()).log(Level.SEVERE, null, ex);
            throw new ServletException(ex.getMessage());
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
