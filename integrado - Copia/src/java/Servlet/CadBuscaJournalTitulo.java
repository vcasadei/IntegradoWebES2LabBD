/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import Banco.BuscaDadosJournalDAO;
import Banco.PubMedDAOException;
import Bean.Journal;
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

/**
 *
 * @author Ian
 */
public class CadBuscaJournalTitulo extends HttpServlet {

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
            out.println("<title>Servlet CadBuscaJournalTitulo</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet CadBuscaJournalTitulo at " + request.getContextPath() + "</h1>");
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
            String title = request.getParameter("journalTitle");
            Usuario user = new Usuario(/*request.getParameter("user"), request.getParameter("senha")*/"labbd05", "bananassaoazuis");
            Journal journal;
            BuscaDadosJournalDAO cadArtigo = new BuscaDadosJournalDAO(user);
            journal = cadArtigo.buscaJournalTitulo(title);
            String dados;

            if (journal != null) {
                dados = journal.getNlmUniqueID() + "|@" + journal.getISSN() + "|@" + journal.getTitle() + "|@" + journal.getAbreviation();
            } else {
                dados = "Vazio";
            }

            response.setContentType("text/html;charset=UTF-8");
            PrintWriter writer = response.getWriter();
            writer.print(dados);
            writer.close();


        } catch (PubMedDAOException e) {
            Logger.getLogger(CadBuscaJournalTitulo.class.getName()).log(Level.SEVERE, null, e);
            throw new ServletException(e.getMessage());
        } catch (SQLException e) {
            Logger.getLogger(CadBuscaJournalTitulo.class.getName()).log(Level.SEVERE, null, e);
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
