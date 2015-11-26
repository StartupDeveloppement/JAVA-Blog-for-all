package com.test.dao;

import com.user.dao.UserDao;
import com.user.dao.UserDaoImpl;
import com.user.entity.User;

/**
 * Created by olivier on 26/11/2015.
 */
public class TestDao {

    public static void main (String[] args){

        User user1 = new User();
            user1.setEmail("hello@hello.com");
            user1.setPassword("world");
        User user2 = new User();
            user2.setEmail("world@world.com");
            user2.setPassword("hello");

        UserDao userDao = new UserDaoImpl();
        boolean user1Ok = userDao.create(user1);
        boolean user2Ok =userDao.create(user2);

        System.out.println("User1: " + user1Ok);
        System.out.println("User2: " + user2Ok);


    }

}
