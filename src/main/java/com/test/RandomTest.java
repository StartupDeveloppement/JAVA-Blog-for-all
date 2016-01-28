package com.test;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dto.ArticlesResponseDto;
import com.project.articles.entity.Article;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.entity.UserProfile;

import java.util.*;

/**
 * Created by olivier on 15/01/2016.
 */
public class RandomTest {

    public static void main (String[] args){

        ArticleDao articleDao = new ArticleDaoImpl();

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
        System.out.println(article.getArticleTitle());

    }
    public static List<ArticlesResponseDto> doArticlesMapping(List<Article> lastArticlesList) {
        List<ArticlesResponseDto> finalList = new ArrayList();
        for (Article article: lastArticlesList){
            ArticlesResponseDto articlesResponseDto = new ArticlesResponseDto();
            articlesResponseDto.setArticleDate(article.getArticleDate());
            articlesResponseDto.setArticleKey(article.getArticleKey());
            articlesResponseDto.setArticleDivider(article.getArticleDivider());
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
