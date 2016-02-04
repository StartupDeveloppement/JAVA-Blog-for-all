package com.project.articles.dao.impl;

import com.common.dao.AbstractDao;
import com.project.articles.dao.ArticleSharedDao;
import com.project.articles.entity.Article;
import com.project.articles.entity.ArticleShared;
import com.project.articles.entity.ArticleSharedId;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by olivier on 04/02/2016.
 */
public class ArticleSharedDaoImpl extends AbstractDao<ArticleShared,ArticleSharedId> implements ArticleSharedDao {

    public List<Article> findAllSharedArticleForGivenSection(Integer idUserProfile, String sectionName) {
        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Article> articleList = null;

        try {
            t.begin();
            TypedQuery<Article> typedQuery = em.createQuery("Select a.article from ArticleShared a Where a.idUserProfile =:idUserProfile and a.section=:sectionName Order by a.article.articleDate DESC",Article.class);
                typedQuery.setMaxResults(30);
                typedQuery.setParameter("sectionName",sectionName);
                typedQuery.setParameter("idUserProfile",idUserProfile);
            articleList = typedQuery.getResultList();
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return articleList;
    }

}
