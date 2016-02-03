package com.test;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.ArticleSharedDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dao.impl.ArticleSharedDaoImpl;
import com.project.articles.dto.ArticlesResponseDto;
import com.project.articles.entity.Article;
import com.project.articles.entity.ArticleShared;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.entity.UserProfile;

import java.util.*;

/**
 * Created by olivier on 15/01/2016.
 */
public class RandomTest {

    public static void main (String[] args){

        /*ArticleDao articleDao = new ArticleDaoImpl();

        Map<String,List<Article>> articleMap = articleDao.findSearchedArticles(new ArrayList<String>());
        Map<String,List<ArticlesResponseDto>> mapArticle = new HashMap<String, List<ArticlesResponseDto>>();
        for (Map.Entry<String, List<Article>> entry : articleMap.entrySet()) {
            System.out.println("Key : " + entry.getKey() + " Value : " + entry.getValue());
            List<ArticlesResponseDto> finalList = doArticlesMapping(entry.getValue());
            mapArticle.put(entry.getKey(),finalList);
        }

        for(String key: mapArticle.keySet())
            System.out.println(key + " - " + articleMap.get(key));

        Article article =articleDao.read(5);
        System.out.println(article.getArticleTitle());*/

        UserProfileDao userProfileDao = new UserProfileDaoImpl();
        ArticleSharedDao articleSharedDao = new ArticleSharedDaoImpl();
        ArticleDao articleDao = new ArticleDaoImpl();

        UserProfile userProfile = new UserProfile();
            userProfile.setProfileName("hellllo");
        ArticleShared articleShared = new ArticleShared();
        Article article = new Article();
            article.setArticleTitle("hellllllo");
        boolean articleOK = articleDao.create(article);
        boolean userProfileOK = userProfileDao.create(userProfile);

        articleShared.setUserProfile(userProfile);
        articleShared.setArticle(article);
        articleShared.setIdUserProfile(userProfile.getIdUserProfile());
        articleShared.setIdArticle(article.getArticleKey());
        articleShared.setSection("main");



        article.getUserProfileList().add(articleShared);
        // Also add the association object to the employee.
        userProfile.getArticleListFromShared().add(articleShared);



        boolean articleSharedOK = articleSharedDao.create(articleShared);



        System.out.println(articleOK);
        System.out.println(userProfileOK);
        System.out.println(articleSharedOK);

    }
    public static List<ArticlesResponseDto> doArticlesMapping(List<Article> lastArticlesList) {
        List<ArticlesResponseDto> finalList = new ArrayList();
        for (Article article: lastArticlesList){
            ArticlesResponseDto articlesResponseDto = new ArticlesResponseDto();
            articlesResponseDto.setArticleDate(article.getArticleDate());
            articlesResponseDto.setArticleKey(article.getArticleKey());
            //articlesResponseDto.setArticleText(article.getArticleText());
            articlesResponseDto.setArticleTitle(article.getArticleTitle());
            articlesResponseDto.setArticlePicture(article.getArticlePicture());
            articlesResponseDto.setArticleDescription(article.getArticleDescription());
            //articlesResponseDto.setArticleApprove(article.getArticleApprove());
            articlesResponseDto.setProfileName(article.getUserProfile().getProfileName());
            articlesResponseDto.setProfilePicture(article.getUserProfile().getProfilePicture());
            finalList.add(articlesResponseDto);
        }
        return finalList;
    }


}
