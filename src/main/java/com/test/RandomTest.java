package com.test;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dto.ArticlesResponseDto;
import com.project.articles.entity.Article;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.entity.UserProfile;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

/**
 * Created by olivier on 15/01/2016.
 */
public class RandomTest {

    public static void main (String[] args){

        ArticleDao articleDao = new ArticleDaoImpl();

        /*Map<String,List<Article>> articleMap = articleDao.findSearchedArticles2(new ArrayList<String>());

        for(String key: articleMap.keySet())
            System.out.println(key + " - " + articleMap.get(key));*/

        Article article =articleDao.read(5);
        System.out.println(article.getArticleTitle());

    }
}
