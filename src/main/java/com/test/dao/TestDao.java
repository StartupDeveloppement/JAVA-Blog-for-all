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
            userProfile.setProfileName("megan");
            userProfile.setProfilePicture("./images/test/profile-test.jpg");

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
            article1.setArticleTitle("Star wars the force awakens");
            article1.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article1.setIdUserProfile(1);
            article1.getArticleKeyWordList().add(articleKeyWord1);
            article1.getArticleKeyWordList().add(articleKeyWord2);
            article1.getArticleKeyWordList().add(articleKeyWord3);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 24);
                calendar.set(Calendar.YEAR, 2013);
                myDate = calendar.getTime();
            article1.setArticleDate(myDate);
            article1.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
            article1.setArticleDescription("Cum autem commodis portularum, exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article1.setArticleApprove(5);

        Article article2 = new Article();
            article2.setArticleDivider("resultDividerRed");
            article2.setArticleTitle("Fatal fury");
            article2.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article2.setIdUserProfile(1);
            article2.getArticleKeyWordList().add(articleKeyWord1);
            article2.getArticleKeyWordList().add(articleKeyWord2);
            article2.getArticleKeyWordList().add(articleKeyWord3);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 14);
                calendar.set(Calendar.YEAR, 2014);
                myDate = calendar.getTime();
            article2.setArticleDate(myDate);
            article2.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
            article2.setArticleDescription("Cum autem commodis exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article2.setArticleApprove(1);

        Article article3 = new Article();
            article3.setArticleDivider("resultDividerBlue");
            article3.setArticleTitle("The Flash 2014");
            article3.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article3.setIdUserProfile(1);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 14);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article3.setArticleDate(myDate);
            article3.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
            article3.setArticleDescription("Cum autem commodis anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum fieri.");
            article3.setArticleApprove(145);

        Article article4 = new Article();
            article4.setArticleDivider("resultDividerRed");
            article4.setArticleTitle("Comment Air France compte revenir à la croissance");
            article4.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article4.setIdUserProfile(1);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 10);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article4.setArticleDate(myDate);
            article4.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
            article4.setArticleDescription("Cum sportularum, vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article4.setArticleApprove(155);

        Article article5 = new Article();
            article5.setArticleDivider("resultDividerBlue");
            article5.setArticleTitle("Dragon Ball Super: nouvel episode");
            article5.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article5.setIdUserProfile(1);
                calendar.set(Calendar.MONTH, 8);
                calendar.set(Calendar.DATE, 5);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article5.setArticleDate(myDate);
            article5.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
            article5.setArticleDescription("Cum autem commodis coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article5.setArticleApprove(15);

        Article article6 = new Article();
            article6.setArticleDivider("resultDividerRed");
            article6.setArticleTitle("Les dernières tendances du secteur High-Tech");
            article6.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article6.setIdUserProfile(1);
                calendar.set(Calendar.MONTH, 3);
                calendar.set(Calendar.DATE, 21);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article6.setArticleDate(myDate);
            article6.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
            article6.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article6.setArticleApprove(65);

        Article article7 = new Article();
            article7.setArticleDivider("resultDividerRed");
            article7.setArticleTitle("Les français à la CES");
            article7.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article7.setIdUserProfile(1);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 2);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article7.setArticleDate(myDate);
            article7.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
            article7.setArticleDescription("Cum a tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article7.setArticleApprove(15);

        Article article8 = new Article();
            article8.setArticleDivider("resultDividerBlue");
            article8.setArticleTitle("15 nouveautés pour courir au chaud cet hiver");
            article8.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article8.setIdUserProfile(1);
                calendar.set(Calendar.MONTH, 1);
                calendar.set(Calendar.DATE, 5);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article8.setArticleDate(myDate);
            article8.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
            article8.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article8.setArticleApprove(5);

        Article article9 = new Article();
            article9.setArticleDivider("resultDividerRed");
            article9.setArticleTitle("Facebook, Twitter, Google, Pinterest: How to stay wired in");
            article9.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
            article9.setIdUserProfile(1);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 6);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article9.setArticleDate(myDate);
            article9.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
            article9.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
            article9.setArticleApprove(145);

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
            System.out.println("article user name: " + userProfileDao.read(article.getIdUserProfile()).getProfileName());
        }

    }

}
