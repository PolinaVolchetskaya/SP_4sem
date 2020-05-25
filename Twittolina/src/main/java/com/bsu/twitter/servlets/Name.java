package com.bsu.twitter.servlets;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/get")
public class Name extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = request.getParameter("name");
        if (name.length()>100){
            throw new IOException("com.bsu.twitter.servlets.Name is larger than 100 symbols!");
        }
        response.getWriter().write("com.bsu.twitter.servlets.Name is " + name);
    }
}
