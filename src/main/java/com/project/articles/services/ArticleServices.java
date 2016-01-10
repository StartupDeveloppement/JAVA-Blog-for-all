package com.project.articles.services;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.entity.Article;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by olivier on 19/12/2015.
 */
@Path("/articles")
public class ArticleServices {

    private ArticleDao articleDao = new ArticleDaoImpl();;

    @Path("/lastarticles")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> findLastArticles(){
        List<Article> finalList = new ArrayList();
        finalList = articleDao.findLastArticles();
        return finalList;
    }


}
