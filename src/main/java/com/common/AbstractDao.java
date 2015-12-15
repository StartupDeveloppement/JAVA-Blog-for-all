package com.common;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

/**
 * Created by olivier on 20/11/15.
 */
public abstract class AbstractDao<T, PK> implements Dao<T, PK> {

    private String pu = "BlogProjectPU";

    private Class<T> type;

    public void setType(){
        //lines to add when using generic Class<T>
        Type t = getClass().getGenericSuperclass();
        ParameterizedType pt = (ParameterizedType) t;
        type = (Class) pt.getActualTypeArguments()[0];
    }

    public EntityManager getEntityManager(){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory(pu);
        EntityManager em = emf.createEntityManager();
        return em;
    }



    @Override
    public boolean create(T obj) {
        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();
        boolean persisted = false;

        try{
            t.begin();
            em.persist(obj);
            em.flush();
            t.commit();
            persisted = true;
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return persisted;
    }

    @Override
    public T read(PK id) {

        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();
        T obj = null;
        setType();  //line to add when using generic Class<T>

        try{
            t.begin();
            obj = em.find(type,id);
            t.commit();
        }catch(Exception e){
            e.printStackTrace();
        }finally {
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }
        return obj;
    }


    @Override
    public void update(T obj) {

        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();

        try {
            t.begin();
            em.merge(obj);
            t.commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (t.isActive()) {
                t.rollback();
                em.close();
            }
        }
    }

    @Override
    public void delete(T obj) {

        EntityManager em = getEntityManager();
        EntityTransaction t = em.getTransaction();

        try
        {
            t.begin();
            /***
             * Extrait StackOverflow pour le futur:
             *  http://stackoverflow.com/questions/17027398/java-lang-illegalargumentexception-removing-a-detached-instance-com-test-user5
             *
             * To remove properly and avoid the "java.lang.IllegalArgumentException: Removing a detached instance"
             * EntityManager#remove() works only on entities which are managed in the current transaction/context.
             * In your case, you're retrieving the entity in an earlier transaction, storing it in the HTTP session
             * and then attempting to remove it in a different transaction/context. This just won't work.
             *
             * You need to check if the entity is managed by EntityManager#contains() and if not, then make
             * it managed it EntityManager#merge().
             */
            em.remove(em.contains(obj) ? obj : em.merge(obj));
            t.commit();
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            if (t.isActive()){
                t.rollback();
                em.close();
            }
        }

    }
}
