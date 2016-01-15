package com.project.articles.dao.impl;

import com.common.dao.AbstractDao;
import com.project.articles.dao.ArticleDao;
import com.project.articles.entity.Article;
import com.project.user.entity.UserProfile;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by olivier on 19/12/2015.
 */
public class ArticleDaoImpl extends AbstractDao<Article,Integer> implements ArticleDao {


    public List<Article> findLastArticles() {

        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Article> articleList = null;

        try {
            t.begin();
            TypedQuery<Article> typedQuery = em.createQuery("Select a from Article a Order by a.articleDate DESC",Article.class);
                typedQuery.setMaxResults(7);
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

    public List<Article> findSearchedArticles(List<String> listRequest) {
        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Article> articleList = null;

        String req = "SELECT a FROM Article a WHERE 1=1";
        for (String elem: listRequest){
            req = req + " AND articleTitle LIKE '%"+elem+"%'";
        }

        try {
            t.begin();
            TypedQuery<Article> query = em.createQuery(req,Article.class);
                query.setMaxResults(45);
            articleList = query.getResultList();
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
