package com.test.dao;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dao.ArticleKeyWordDao;
import com.project.articles.dao.impl.ArticleKeyWordDaoImpl;
import com.project.articles.entity.Article;
import com.project.articles.entity.ArticleKeyWord;
import com.project.user.dao.UserAuthDao;
import com.project.user.dao.impl.UserAuthDaoImpl;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.entity.UserAuth;
import com.project.user.entity.UserProfile;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

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


        ArticleKeyWord articleKeyWord1 = new ArticleKeyWord();
            articleKeyWord1.setLabel("fighter");
        ArticleKeyWord articleKeyWord2 = new ArticleKeyWord();
            articleKeyWord2.setLabel("street");
        ArticleKeyWord articleKeyWord3 = new ArticleKeyWord();
            articleKeyWord3.setLabel("fatal");
        ArticleKeyWordDao articleKeyWordDao = new ArticleKeyWordDaoImpl();
        boolean articleKeyWord1Ok = articleKeyWordDao.create(articleKeyWord1);
        boolean articleKeyWord2Ok = articleKeyWordDao.create(articleKeyWord2);
        boolean articleKeyWord3Ok = articleKeyWordDao.create(articleKeyWord3);


        List<ArticleKeyWord> articleKeyWordList = new ArrayList<ArticleKeyWord>();
            articleKeyWordList.add(articleKeyWord1);
            articleKeyWordList.add(articleKeyWord2);
            articleKeyWordList.add(articleKeyWord3);

        Date myDate;
        Calendar calendar = Calendar.getInstance();


        Article article1 = new Article();
            article1.setArticleDivider("resultDividerBlue");
            article1.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article1.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article1.setUserProfile(userProfile);
            article1.getArticleKeyWordList().add(articleKeyWord1);
            article1.getArticleKeyWordList().add(articleKeyWord2);
            article1.getArticleKeyWordList().add(articleKeyWord3);
                calendar.set(Calendar.MONTH, 8);
                calendar.set(Calendar.DATE, 24);
                calendar.set(Calendar.YEAR, 2013);
                myDate = calendar.getTime();
            article1.setArticleDate(myDate);

        Article article2 = new Article();
            article2.setArticleDivider("resultDividerRed");
            article2.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article2.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article2.setUserProfile(userProfile);
            article2.getArticleKeyWordList().add(articleKeyWord1);
            article2.getArticleKeyWordList().add(articleKeyWord2);
            article2.getArticleKeyWordList().add(articleKeyWord3);
                calendar.set(Calendar.MONTH, 8);
                calendar.set(Calendar.DATE, 14);
                calendar.set(Calendar.YEAR, 2014);
                myDate = calendar.getTime();
            article2.setArticleDate(myDate);

        Article article3 = new Article();
            article3.setArticleDivider("resultDividerBlue");
            article3.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article3.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article3.setUserProfile(userProfile);
                calendar.set(Calendar.MONTH, 8);
                calendar.set(Calendar.DATE, 14);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article3.setArticleDate(myDate);

        Article article4 = new Article();
            article4.setArticleDivider("resultDividerRed");
            article4.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article4.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article4.setUserProfile(userProfile);
                calendar.set(Calendar.MONTH, 8);
                calendar.set(Calendar.DATE, 10);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article4.setArticleDate(myDate);

        Article article5 = new Article();
            article5.setArticleDivider("resultDividerBlue");
            article5.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article5.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article5.setUserProfile(userProfile);
                calendar.set(Calendar.MONTH, 10);
                calendar.set(Calendar.DATE, 5);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article5.setArticleDate(myDate);

        Article article6 = new Article();
            article6.setArticleDivider("resultDividerRed");
            article6.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article6.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article6.setUserProfile(userProfile);
                calendar.set(Calendar.MONTH, 2);
                calendar.set(Calendar.DATE, 21);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article6.setArticleDate(myDate);

        Article article7 = new Article();
            article7.setArticleDivider("resultDividerRed");
            article7.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article7.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article7.setUserProfile(userProfile);
                calendar.set(Calendar.MONTH, 8);
                calendar.set(Calendar.DATE, 22);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article7.setArticleDate(myDate);

        Article article8 = new Article();
            article8.setArticleDivider("resultDividerBlue");
            article8.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article8.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article8.setUserProfile(userProfile);
                calendar.set(Calendar.MONTH, 18);
                calendar.set(Calendar.DATE, 5);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article8.setArticleDate(myDate);

        Article article9 = new Article();
            article9.setArticleDivider("resultDividerRed");
            article9.setArticleTitle("Profitetur aut secretiora quaedam se nosse confingit");
            article9.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article9.setUserProfile(userProfile);
                calendar.set(Calendar.MONTH, 8);
                calendar.set(Calendar.DATE, 6);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article9.setArticleDate(myDate);

        ArticleDao articleDao = new ArticleDaoImpl();
        boolean article1Ok = articleDao.create(article1);
        boolean article2Ok = articleDao.create(article2);
        boolean article3Ok = articleDao.create(article3);
        boolean article4Ok = articleDao.create(article4);
        boolean article5Ok = articleDao.create(article5);
        boolean article6Ok = articleDao.create(article6);
        boolean article7Ok = articleDao.create(article7);
        boolean article8Ok = articleDao.create(article8);
        boolean article9Ok = articleDao.create(article9);


        System.out.println("User1: " + user1Ok);
        System.out.println("User2: " + user2Ok);
        System.out.println("UserProfile1: " + userProfile1Ok);
        System.out.println("Article1: " + article1Ok);
        System.out.println("Article2: " + article2Ok);
        System.out.println("Article3: " + article3Ok);
        System.out.println("Article4: " + article4Ok);
        System.out.println("Article5: " + article5Ok);
        System.out.println("Article6: " + article6Ok);
        System.out.println("Article7: " + article7Ok);
        System.out.println("Article8: " + article8Ok);
        System.out.println("Article9: " + article9Ok);

        for (Article article : articleDao.findLastArticles()){
            System.out.println("-----------------");
            System.out.println("article id: " + article.getArticleKey());
            System.out.println("article title: " + article.getArticleTitle());
        }

    }

}
