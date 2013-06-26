/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import Bean.Usuario;
import Banco.ConnectionPubMed;
import Banco.PubMedDAOException;
import Banco.VerificaUsuarioDAO;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
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
public class FazerLogin extends HttpServlet {

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
            out.println("<title>Servlet FazerLogin</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet FazerLogin at " + request.getContextPath() + "</h1>");
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
            System.out.println("Aqui1");
            String login, senha;
            login = request.getParameter("login");
            senha = request.getParameter("senha");

            /*Tenta conetar no banco*/
            Usuario user = new Usuario(login, senha);
            System.out.println(user.getLogin() + " " + user.getSenha());
            System.out.println("Aqui2");
            VerificaUsuarioDAO conexao = new VerificaUsuarioDAO(user);
            System.out.println("Aqui3");

            /*Verificar se é admin ou comum e atribuir a variável tipo*/
            int tipo = conexao.verificarTipoUsuario();
            System.out.println("Aqui4");
            /*Conexão com o banco é fechada nesse método*/

            System.out.println("Aqui");
            System.out.println("\n\n\n\n\nTIIIIIIPO" + tipo);

            /*Cria a conexão e seta os atributos de login e senha*/
            HttpSession session = request.getSession();
            session.setAttribute("username", login);
            session.setAttribute("password", senha);
            session.setAttribute( "tipo", tipo);
            
            /*Manda pra aplicação que o login foi realizado com sucesso*/
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter writer = response.getWriter();
            writer.print("1");
            writer.close();

        } catch (PubMedDAOException ex) {
            Logger.getLogger(FazerLogin.class.getName()).log(Level.SEVERE, null, ex);
            throw new ServletException(ex.getMessage());
        } catch (SQLException e) {
            if (e.getErrorCode() == 18456) {
                /*Manda pra aplicação o usuário ou senha são inválidas*/
                response.setContentType("text/html;charset=UTF-8");
                PrintWriter writer = response.getWriter();
                writer.print("0");
                writer.close();
            }
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