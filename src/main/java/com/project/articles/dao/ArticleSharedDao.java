package com.project.articles.dao;

import com.common.dao.Dao;
import com.project.articles.entity.Article;
import com.project.articles.entity.ArticleShared;
import com.project.articles.entity.ArticleSharedId;

import java.util.List;

/**
 * Created by olivier on 04/02/2016.
 */
public interface ArticleSharedDao extends Dao<ArticleShared,ArticleSharedId> {

    public List<Article> findAllSharedArticleForGivenSection(Integer idUserProfile, String sectionName);

}
