package com.test.dao;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.ArticleDaoImpl;
import com.project.articles.entity.Article;
import com.project.user.dao.UserAuthDao;
import com.project.user.dao.UserAuthDaoImpl;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.UserProfileDaoImpl;
import com.project.user.entity.User;
import com.project.user.entity.UserAuth;
import com.project.user.entity.UserProfile;

import java.util.Date;

/**
 * Created by olivier on 26/11/2015.
 */
public class TestDao {

    public static void main (String[] args){

        UserAuth user1 = new UserAuth();
            user1.setEmail("hello@hello.com");
            user1.setPassword("world");
        UserAuth user2 = new UserAuth();
            user2.setEmail("world@world.com");
            user2.setPassword("hello");

        UserAuthDao userAuthDao = new UserAuthDaoImpl();
        boolean user1Ok = userAuthDao.create(user1);
        boolean user2Ok = userAuthDao.create(user2);

        UserProfile userProfile = new UserProfile();
            userProfile.setBirthday(new Date());
            userProfile.setFirstname("hellofirstname");
            userProfile.setLastname("hellolastname");
            userProfile.setUser(user1);

        UserProfileDao userProfileDao = new UserProfileDaoImpl();
        boolean userProfile1Ok = userProfileDao.create(userProfile);


        /*{articleTitle:'Profitetur aut secretiora quaedam se nosse confingit', articleDivider:'resultDividerBlue',
                articleText:'Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.' ,
                profilePicture:'./images/test/profile-test.jpg', profileName:'Claire', articleKey:'1'},
                */

        Article article1 = new Article();
            article1.setArticleDivider("resultDividerBlue");
            article1.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article1.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article1.setUserProfile(userProfile);

        Article article2 = new Article();
            article2.setArticleDivider("resultDividerRed");
            article2.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article2.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article2.setUserProfile(userProfile);

        Article article3 = new Article();
            article3.setArticleDivider("resultDividerBlue");
            article3.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article3.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article3.setUserProfile(userProfile);

        Article article4 = new Article();
            article4.setArticleDivider("resultDividerRed");
            article4.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article4.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article4.setUserProfile(userProfile);

        Article article5 = new Article();
            article5.setArticleDivider("resultDividerBlue");
            article5.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article5.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article5.setUserProfile(userProfile);

        Article article6 = new Article();
            article6.setArticleDivider("resultDividerRed");
            article6.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article6.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article6.setUserProfile(userProfile);

        ArticleDao articleDao = new ArticleDaoImpl();
        boolean article1Ok = articleDao.create(article1);
        boolean article2Ok = articleDao.create(article2);
        boolean article3Ok = articleDao.create(article3);
        boolean article4Ok = articleDao.create(article4);
        boolean article5Ok = articleDao.create(article5);
        boolean article6Ok = articleDao.create(article6);


        System.out.println("User1: " + user1Ok);
        System.out.println("User2: " + user2Ok);
        System.out.println("UserProfile1: " + userProfile1Ok);
        System.out.println("Article1: " + article1Ok);
        System.out.println("Article2: " + article2Ok);
        System.out.println("Article3: " + article3Ok);
        System.out.println("Article4: " + article4Ok);
        System.out.println("Article5: " + article5Ok);
        System.out.println("Article6: " + article6Ok);

    }

}
