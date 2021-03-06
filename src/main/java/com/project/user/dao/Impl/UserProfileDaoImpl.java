package com.project.user.dao.impl;

import com.common.dao.AbstractDao;
import com.project.user.dao.UserProfileDao;
import com.project.user.entity.UserProfile;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

/**
 * Created by olivier on 11/12/2015.
 */
public class UserProfileDaoImpl extends AbstractDao<UserProfile,Integer> implements UserProfileDao {



    public UserProfile findProfileUsingUserEmail(String email) {
        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();
        UserProfile userProfile = null;

        try{
            t.begin();
            Query query = em.createQuery("select p from UserProfile p where p.user.email = :email");
            query.setParameter("email",email);
            userProfile = (UserProfile) query.getSingleResult();
            t.commit();
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return userProfile;
    }



}
