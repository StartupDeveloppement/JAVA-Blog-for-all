package com.project.articles.services;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dto.ArticlesResponseDto;
import com.project.articles.entity.Article;
import com.project.user.dao.UserAuthDao;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserAuthDaoImpl;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.entity.UserProfile;

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

    private ArticleDao articleDao = new ArticleDaoImpl();
    private UserProfileDao userProfileDao = new UserProfileDaoImpl();

    @Path("/lastarticles")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<ArticlesResponseDto> findLastArticles(){
        List<ArticlesResponseDto> finalList = new ArrayList();
        List<Article> articleList = articleDao.findLastArticles();
        for (Article article: articleList){
            ArticlesResponseDto articlesResponseDto = new ArticlesResponseDto();
                articlesResponseDto.setArticleDate(article.getArticleDate());
                articlesResponseDto.setArticleKeyWordList(article.getArticleKeyWordList());
                articlesResponseDto.setArticleKey(article.getArticleKey());
                articlesResponseDto.setArticleDivider(article.getArticleDivider());
                articlesResponseDto.setArticleText(article.getArticleText());
                articlesResponseDto.setArticleTitle(article.getArticleTitle());
                UserProfile userProfile = userProfileDao.read(article.getIdUserProfile());
                articlesResponseDto.setProfileName(userProfile.getProfileName());
                articlesResponseDto.setProfilePicture(userProfile.getProfilePicture());
            finalList.add(articlesResponseDto);
        }
        return finalList;
    }


}
