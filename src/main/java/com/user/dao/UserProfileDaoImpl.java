package com.user.dao;

import com.common.AbstractDao;
import com.common.Dao;
import com.user.entity.UserProfile;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

/**
 * Created by olivier on 11/12/2015.
 */
public class UserProfileDaoImpl extends AbstractDao<UserProfile,String> implements UserProfileDao {


    @Override
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
