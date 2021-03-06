package com.project.articles.dao.impl;

import com.common.dao.AbstractDao;
import com.project.articles.dao.ArticleDao;
import com.project.articles.entity.Article;
import com.project.user.entity.UserProfile;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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


    public Map<String, List<Article>> findSearchedArticles(List<String> listRequest) {
        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();

        final Integer maxCategoryResult = 10;
        Map<String, List<Article>> articleMap = new HashMap<String, List<Article>>();
        List<Article> highRollersList = null;
        List<Article> onTheWayList = null;
        List<Article> newbiesList = null;
        String reqHighRollers = null;
        String reqOnTheWays = null;
        String reqNewbies = null;

        String req = "SELECT * FROM Article a WHERE 1=1";
        String reqCount = "SELECT count(*) FROM Article a WHERE 1=1";
        String params = "";
        for (String elem: listRequest){
            params = params + " AND a.articleTitle LIKE '%"+elem+"%'";
        }
        req = req + params + " ORDER BY a.articleApprove DESC";
        reqCount = reqCount + params;

        try {
            t.begin();
            Query queryCount = em.createQuery(reqCount);
            Long count = (Long) queryCount.getSingleResult();
            //queryCount.si
            long indice = count/3;
            if (indice < maxCategoryResult){
                reqHighRollers = req + " LIMIT 0,"+(indice);
                reqOnTheWays = req + " LIMIT "+indice+","+(indice);
                reqNewbies = req + " LIMIT "+(indice*2)+","+(indice+count%3);
            }else{
                reqHighRollers = req + " LIMIT 0,"+maxCategoryResult;
                reqOnTheWays = req + " LIMIT "+indice+","+maxCategoryResult;
                reqNewbies = req + " LIMIT "+(indice*2)+","+maxCategoryResult;
            }
            Query queryHighRollers = em.createNativeQuery(reqHighRollers,Article.class);
            highRollersList = queryHighRollers.getResultList();
            Query queryOnTheWays = em.createNativeQuery(reqOnTheWays,Article.class);
            onTheWayList = queryOnTheWays.getResultList();
            Query queryNewbies = em.createNativeQuery(reqNewbies,Article.class);
            newbiesList = queryNewbies.getResultList();
            articleMap.put("highRollers",highRollersList);
            articleMap.put("onTheWay",onTheWayList);
            articleMap.put("newbies",newbiesList);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
        return articleMap;
    }

    public List<Article> findSectionArticles(String sectionName, Integer idUserProfile) {
        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();
        List<Article> articleList = null;

        try {
            t.begin();
            TypedQuery<Article> typedQuery = em.createQuery("Select a from Article a Where a.articleSection =:sectionName and a.userProfile.idUserProfile = :idUserProfile Order by a.articleDate DESC",Article.class);
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
