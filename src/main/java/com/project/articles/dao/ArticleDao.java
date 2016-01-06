package com.project.articles.dao;

import com.common.dao.Dao;
import com.project.articles.entity.Article;

import java.util.List;

/**
 * Created by olivier on 19/12/2015.
 */
public interface ArticleDao extends Dao<Article,Integer> {

    public List<Article> findLastArticles();

}
