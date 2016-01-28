package com.project.articles.dao;

import com.common.dao.Dao;
import com.project.articles.entity.Article;
import com.project.user.entity.UserProfile;

import java.util.List;
import java.util.Map;

/**
 * Created by olivier on 19/12/2015.
 */
public interface ArticleDao extends Dao<Article,Integer> {

    List<Article> findLastArticles();
    Map<String, List<Article>> findSearchedArticles(List<String> listRequest);

}
