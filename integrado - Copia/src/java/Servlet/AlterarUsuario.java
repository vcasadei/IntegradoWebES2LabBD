/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import Banco.PubMedDAOException;
import Banco.VerificaUsuarioDAO;
import Bean.Usuario;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
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
public class AlterarUsuario extends HttpServlet {

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
            out.println("<title>Servlet BuscaUsuario</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet BuscaUsuario at " + request.getContextPath() + "</h1>");
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

        try {

            Usuario user = new Usuario();
            String dados;

            /*Pegar os valores da sessão*/
            HttpSession session = request.getSession(false);
            if (session != null) {
                user.setAttrUsuario((String) session.getAttribute("username"), (String) session.getAttribute("password"));
            }

            String login = request.getParameter("login");
            VerificaUsuarioDAO verUser = new VerificaUsuarioDAO(user);

            dados = Integer.toString(verUser.verificarLogin(login));

            response.setContentType("text/html;charset=UTF-8");
            PrintWriter writer = response.getWriter();
            writer.print(dados);
            writer.close();

        } catch (PubMedDAOException e) {
            Logger.getLogger(BuscaJournalNlmIssn.class.getName()).log(Level.SEVERE, null, e);
            throw new ServletException(e.getMessage());
        } catch (SQLException e) {
            Logger.getLogger(BuscaJournalNlmIssn.class.getName()).log(Level.SEVERE, null, e);
            throw new ServletException(e.getMessage());
        }
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

            Usuario user = new Usuario();
            
            /*Pega o usuário da sessão*/
            HttpSession session = request.getSession(false);
            if (session != null) {
                user.setAttrUsuario((String) session.getAttribute("username"), (String) session.getAttribute("password"));
            }

            String login, tipo, nTipo;

            login = request.getParameter("login");
            tipo = request.getParameter("tipo");

            /*Verifica qual o tipo atual pra poder alterar*/
            if (tipo.equals("Comum")) {
                nTipo = "Administrador";
            } else {
                nTipo = "Comum";
            }

            /*Altera o tpo do usuário*/
            VerificaUsuarioDAO alterar = new VerificaUsuarioDAO(user);
            alterar.alterarLogin(login, tipo, nTipo);


        } catch (PubMedDAOException e) {
            Logger.getLogger(CadastrarArtigo.class.getName()).log(Level.SEVERE, null, e);
            throw new ServletException(e.getMessage());
        } catch (SQLException e) {
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
