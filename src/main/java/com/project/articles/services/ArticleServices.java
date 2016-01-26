package com.project.articles.services;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dto.ArticleResponseDto;
import com.project.articles.dto.ArticlesResponseDto;
import com.project.articles.entity.Article;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.entity.UserProfile;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

/**
 * Created by olivier on 19/12/2015.
 */
@Path("/articles")
public class ArticleServices {

    private ArticleDao articleDao = new ArticleDaoImpl();
    private UserProfileDao userProfileDao = new UserProfileDaoImpl();

    @Path("/lastarticles")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<ArticlesResponseDto> findLastArticles(){
        List<Article> lastArticlesList = articleDao.findLastArticles();
        List<ArticlesResponseDto> finalList = doArticlesMapping(lastArticlesList);
        return finalList;
    }

    @Path("/readarticle")
    @POST
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public Article findArticle(@FormParam("idContent") Integer idContent){

        // mapping goes here

        return articleDao.read(5);
    }

    @Path("/searchedarticles")
    @POST
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public List<ArticlesResponseDto> findSearchedArticles(@FormParam("search") String search){
        List<String> requestList = new ArrayList<String>();
        if (search !=null) {
            StringTokenizer st = new StringTokenizer(search);
            while (st.hasMoreTokens()) {
                requestList.add(st.nextToken());
            }
        }
        List<Article> searchedArticlesList = articleDao.findSearchedArticles(requestList);
        List<ArticlesResponseDto> finalList = doArticlesMapping(searchedArticlesList);
        return finalList;
    }

    @Path("/searchedarticles2")
    @POST
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String,List<Article>> findSearchedArticles2(@FormParam("search") String search){
        List<String> requestList = new ArrayList<String>();
        if (search !=null) {
            StringTokenizer st = new StringTokenizer(search);
            while (st.hasMoreTokens()) {
                requestList.add(st.nextToken());
            }
        }
        Map<String, List<Article>> searchedArticlesMap = articleDao.findSearchedArticles2(requestList);
        //searchedArticlesList.size();
        //Map<String,List<ArticlesResponseDto>> mapArticle = null;
        //List<ArticlesResponseDto> finalList = doArticlesMapping(searchedArticlesList);
        return searchedArticlesMap;
    }

    private List<ArticlesResponseDto> doArticlesMapping(List<Article> lastArticlesList) {
        List<ArticlesResponseDto> finalList = new ArrayList();
        for (Article article: lastArticlesList){
            ArticlesResponseDto articlesResponseDto = new ArticlesResponseDto();
                articlesResponseDto.setArticleDate(article.getArticleDate());
                //articlesResponseDto.setArticleKeyWordList(article.getArticleKeyWordList());
                articlesResponseDto.setArticleKey(article.getArticleKey());
                articlesResponseDto.setArticleDivider(article.getArticleDivider());
                articlesResponseDto.setArticleText(article.getArticleText());
                articlesResponseDto.setArticleTitle(article.getArticleTitle());
                articlesResponseDto.setArticlePicture(article.getArticlePicture());
                articlesResponseDto.setArticleDescription(article.getArticleDescription());
                articlesResponseDto.setArticleApprove(article.getArticleApprove());
                articlesResponseDto.setProfileName(article.getUserProfile().getProfileName());
                articlesResponseDto.setProfilePicture(article.getUserProfile().getProfilePicture());
            finalList.add(articlesResponseDto);
        }
        return finalList;
    }

}