package com.test.dao;

import com.user.dao.UserDao;
import com.user.dao.UserDaoImpl;
import com.user.dao.UserProfileDao;
import com.user.dao.UserProfileDaoImpl;
import com.user.entity.User;
import com.user.entity.UserProfile;

import java.util.Date;

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

        UserProfile userProfile = new UserProfile();
            userProfile.setBirthday(new Date());
            userProfile.setFirstname("hellofirstname");
            userProfile.setLastname("hellolastname");
            userProfile.setUser(user1);

        UserProfileDao userProfileDao = new UserProfileDaoImpl();
        boolean userProfile1Ok = userProfileDao.create(userProfile);

        System.out.println("User1: " + user1Ok);
        System.out.println("User2: " + user2Ok);
        System.out.println("UserProfile1: " + userProfile1Ok);

    }

}
