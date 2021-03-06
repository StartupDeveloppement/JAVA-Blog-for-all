package com.test.dao;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.ArticleSharedDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dao.ArticleKeyWordDao;
import com.project.articles.dao.impl.ArticleKeyWordDaoImpl;
import com.project.articles.dao.impl.ArticleSharedDaoImpl;
import com.project.articles.entity.Article;
import com.project.articles.entity.ArticleKeyWord;
import com.project.articles.entity.ArticleShared;
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

        UserAuth megan = new UserAuth();
            megan.setEmail("megan@megan.com");
            megan.setPassword("hello");
        UserAuth helen = new UserAuth();
            helen.setEmail("helen@helen.com");
            helen.setPassword("hello");
        UserAuth carole = new UserAuth();
            carole.setEmail("carole@carole.com");
            carole.setPassword("hello");

        /*List<UserAuth> meganList = new ArrayList<UserAuth>();
            meganList.add(helen);
        List<UserAuth> helenList = new ArrayList<UserAuth>();
            helenList.add(megan);
        List<UserAuth> caroleList = new ArrayList<UserAuth>();
            caroleList.add(helen);*/

       /* megan.getFollowingList().add(helen);
        helen.getFollowingList().add(megan);
        carole.getFollowingList().add(megan);
        carole.getFollowingList().add(helen);*/


        UserAuthDao userAuthDao = new UserAuthDaoImpl();
        boolean meganOk = userAuthDao.create(megan);
        boolean helenOk = userAuthDao.create(helen);
        boolean caroleOk = userAuthDao.create(carole);



        UserProfile meganProfile = new UserProfile();
            /*userProfile.setBirthday(new Date());
            userProfile.setFirstname("hellofirstname");
            userProfile.setLastname("hellolastname");*/
            meganProfile.setUser(megan);
            meganProfile.setProfileName("megan");
            meganProfile.setProfilePicture("./images/test/profile-test.jpg");
            meganProfile.setUniversityName("Harvard");
            meganProfile.setUniversityCity("Cambridge");
            meganProfile.setStatus("open to projects");

        UserProfile helenProfile = new UserProfile();
            /*userProfile.setBirthday(new Date());
            userProfile.setFirstname("hellofirstname");
            userProfile.setLastname("hellolastname");*/
        helenProfile.setUser(helen);
        helenProfile.setProfileName("Helen");
        helenProfile.setProfilePicture("./images/test/profile-chinese.jpg");
        helenProfile.setUniversityName("Stanford");
        helenProfile.setUniversityCity("San Francisco");
        helenProfile.setStatus("work peacefully");

        UserProfile caroleProfile = new UserProfile();
            /*userProfile.setBirthday(new Date());
            userProfile.setFirstname("hellofirstname");
            userProfile.setLastname("hellolastname");*/
        caroleProfile.setUser(carole);
        caroleProfile.setProfileName("Carole");
        caroleProfile.setProfilePicture("./images/test/profile-martinique.jpg");
        caroleProfile.setBannerPicture("./images/test/banner-picture-example.jpg");
        caroleProfile.setUniversityName("Centrale Paris");
        caroleProfile.setUniversityCity("Paris");
        caroleProfile.setStatus("open to projects");


        UserProfileDao userProfileDao = new UserProfileDaoImpl();
        boolean meganProfileOk = userProfileDao.create(meganProfile);
        boolean helenProfileOk = userProfileDao.create(helenProfile);
        boolean caroleProfileOk = userProfileDao.create(caroleProfile);


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
            article1.setArticleSection("main");
            article1.setArticleTitle("Star wars the force awakens");
            article1.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article1.setUserProfile(meganProfile);
            /*article1.getArticleKeyWordList().add(articleKeyWord1);
            article1.getArticleKeyWordList().add(articleKeyWord2);
            article1.getArticleKeyWordList().add(articleKeyWord3);*/
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 24);
                calendar.set(Calendar.YEAR, 2013);
                myDate = calendar.getTime();
            article1.setArticleDate(myDate);
            article1.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
            article1.setArticleDescription("Cum autem commodis portularum, exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article1.setArticleApprove(5);

        Article article2 = new Article();
            article2.setArticleSection("main");
            article2.setArticleTitle("Fatal fury");
            article2.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            //article2.setIdUserProfile(1);
            article2.setUserProfile(meganProfile);
            /*article2.getArticleKeyWordList().add(articleKeyWord1);
            article2.getArticleKeyWordList().add(articleKeyWord2);
            article2.getArticleKeyWordList().add(articleKeyWord3);*/
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 14);
                calendar.set(Calendar.YEAR, 2014);
                myDate = calendar.getTime();
            article2.setArticleDate(myDate);
            article2.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
            article2.setArticleDescription("Cum autem commodis exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article2.setArticleApprove(1);

        Article article3 = new Article();
            article3.setArticleSection("main");
            article3.setArticleTitle("The Flash 2014");
            article3.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri. Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri. Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri. Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri. Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri. Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri. Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            //article3.setIdUserProfile(1);
            article3.setUserProfile(meganProfile);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 14);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article3.setArticleDate(myDate);
            article3.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
            article3.setArticleDescription("Cum autem commodis anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum fieri.");
            article3.setArticleApprove(145);

        Article article4 = new Article();
            article4.setArticleSection("main");
            article4.setArticleTitle("Comment Air France compte revenir à la croissance");
            article4.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            //article4.setIdUserProfile(1);
            article4.setUserProfile(meganProfile);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 10);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article4.setArticleDate(myDate);
            article4.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
            article4.setArticleDescription("Cum sportularum, vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article4.setArticleApprove(155);

        Article article5 = new Article();
            article5.setArticleSection("main");
            article5.setArticleTitle("Dragon Ball Super: nouvel episode");
            article5.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            //article5.setIdUserProfile(1);
            article5.setUserProfile(meganProfile);
                calendar.set(Calendar.MONTH, 8);
                calendar.set(Calendar.DATE, 5);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article5.setArticleDate(myDate);
            article5.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
            article5.setArticleDescription("Cum autem commodis coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article5.setArticleApprove(15);

        Article article6 = new Article();
            article6.setArticleSection("main");
            article6.setArticleTitle("Les dernières tendances du secteur High-Tech");
            article6.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            //article6.setIdUserProfile(1);
            article6.setUserProfile(meganProfile);
                calendar.set(Calendar.MONTH, 3);
                calendar.set(Calendar.DATE, 21);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article6.setArticleDate(myDate);
            article6.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
            article6.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article6.setArticleApprove(65);

        Article article7 = new Article();
            article7.setArticleSection("main");
            article7.setArticleTitle("Les français à la CES");
            article7.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            //article7.setIdUserProfile(1);
            article7.setUserProfile(meganProfile);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 2);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article7.setArticleDate(myDate);
            article7.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
            article7.setArticleDescription("Cum a tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article7.setArticleApprove(15);

        Article article8 = new Article();
            article8.setArticleSection("main");
            article8.setArticleTitle("15 nouveautés pour courir au chaud cet hiver");
            article8.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            //article8.setIdUserProfile(1);
            article8.setUserProfile(meganProfile);
                calendar.set(Calendar.MONTH, 1);
                calendar.set(Calendar.DATE, 5);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article8.setArticleDate(myDate);
            article8.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
            article8.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
            article8.setArticleApprove(5);

        Article article9 = new Article();
            article9.setArticleSection("main");
            article9.setArticleTitle("Facebook, Twitter, Google, Pinterest: How to stay wired in");
            article9.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
            //article9.setIdUserProfile(1);
            article9.setUserProfile(meganProfile);
                calendar.set(Calendar.MONTH, 6);
                calendar.set(Calendar.DATE, 6);
                calendar.set(Calendar.YEAR, 2015);
                myDate = calendar.getTime();
            article9.setArticleDate(myDate);
            article9.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
            article9.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
            article9.setArticleApprove(145);

        Article article10 = new Article();
        article10.setArticleSection("main");
        article10.setArticleTitle("Star wars revenge of the sith");
        article10.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article10.setUserProfile(meganProfile);
        /*article10.getArticleKeyWordList().add(articleKeyWord1);
        article10.getArticleKeyWordList().add(articleKeyWord2);
        article10.getArticleKeyWordList().add(articleKeyWord3);*/
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 24);
            calendar.set(Calendar.YEAR, 2013);
        myDate = calendar.getTime();
        article10.setArticleDate(myDate);
        article10.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article10.setArticleDescription("Cum autem commodis portularum, exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article10.setArticleApprove(52);

        Article article11 = new Article();
        article11.setArticleSection("my projects");
        article11.setArticleTitle("The king of fighter");
        article11.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article11.setUserProfile(meganProfile);
        /*article11.getArticleKeyWordList().add(articleKeyWord1);
        article11.getArticleKeyWordList().add(articleKeyWord2);
        article11.getArticleKeyWordList().add(articleKeyWord3);*/
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 14);
            calendar.set(Calendar.YEAR, 2014);
        myDate = calendar.getTime();
        article11.setArticleDate(myDate);
        article11.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
        article11.setArticleDescription("Cum autem commodis exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article11.setArticleApprove(1200);

        Article article12 = new Article();
        article12.setArticleSection("my projects");
        article12.setArticleTitle("Supergirl");
        article12.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article12.setUserProfile(meganProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 14);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article12.setArticleDate(myDate);
        article12.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article12.setArticleDescription("Cum autem commodis anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum fieri.");
        article12.setArticleApprove(125);

        Article article13 = new Article();
        article13.setArticleSection("my projects");
        article13.setArticleTitle("Pinterest une compagnie du futur ?");
        article13.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article13.setUserProfile(meganProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 10);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article13.setArticleDate(myDate);
        article13.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
        article13.setArticleDescription("Cum sportularum, vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article13.setArticleApprove(180);

        Article article14 = new Article();
        article14.setArticleSection("my projects");
        article14.setArticleTitle("Dragon Ball Z: retour de Broly");
        article14.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article14.setUserProfile(meganProfile);
            calendar.set(Calendar.MONTH, 8);
            calendar.set(Calendar.DATE, 5);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article14.setArticleDate(myDate);
        article14.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
        article14.setArticleDescription("Cum autem commodis coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article14.setArticleApprove(150);

        Article article15 = new Article();
        article15.setArticleSection("my projects");
        article15.setArticleTitle("Le secteur de la téléphonie en plein boom");
        article15.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article15.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 3);
            calendar.set(Calendar.DATE, 21);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article15.setArticleDate(myDate);
        article15.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article15.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article15.setArticleApprove(650);

        Article article16 = new Article();
        article16.setArticleSection("my projects");
        article16.setArticleTitle("Las Vegas et la CES");
        article16.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article16.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 2);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article16.setArticleDate(myDate);
        article16.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
        article16.setArticleDescription("Cum a tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article16.setArticleApprove(105);

        Article article17 = new Article();
        article17.setArticleSection("my projects");
        article17.setArticleTitle("10 façons d'être plus heureux");
        article17.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article17.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 1);
            calendar.set(Calendar.DATE, 5);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article17.setArticleDate(myDate);
        article17.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article17.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article17.setArticleApprove(50);

        Article article18 = new Article();
        article18.setArticleSection("cinema");
        article18.setArticleTitle("Facebook: le succès innégalé");
        article18.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
        article18.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 6);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article18.setArticleDate(myDate);
        article18.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article18.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
        article18.setArticleApprove(145);

        Article article19 = new Article();
        article19.setArticleSection("cinema");
        article19.setArticleTitle("Sony vs Sega: le duel oublié");
        article19.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
        article19.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 6);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article19.setArticleDate(myDate);
        article19.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article19.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
        article19.setArticleApprove(145);

        Article article20 = new Article();
        article20.setArticleSection("cinema");
        article20.setArticleTitle("Star wars the phantom menace");
        article20.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article20.setUserProfile(helenProfile);
        /*article20.getArticleKeyWordList().add(articleKeyWord1);
        article20.getArticleKeyWordList().add(articleKeyWord2);
        article20.getArticleKeyWordList().add(articleKeyWord3);*/
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 24);
            calendar.set(Calendar.YEAR, 2013);
        myDate = calendar.getTime();
        article20.setArticleDate(myDate);
        article20.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article20.setArticleDescription("Cum autem commodis portularum, exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article20.setArticleApprove(20);

        Article article21 = new Article();
        article21.setArticleSection("cinema");
        article21.setArticleTitle("Terry Bogard vs Andy Bogard");
        article21.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article21.setUserProfile(helenProfile);
        /*article21.getArticleKeyWordList().add(articleKeyWord1);
        article21.getArticleKeyWordList().add(articleKeyWord2);
        article21.getArticleKeyWordList().add(articleKeyWord3);*/
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 14);
            calendar.set(Calendar.YEAR, 2014);
        myDate = calendar.getTime();
        article21.setArticleDate(myDate);
        article21.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
        article21.setArticleDescription("Cum autem commodis exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article21.setArticleApprove(100);

        Article article22 = new Article();
        article22.setArticleSection("cinema");
        article22.setArticleTitle("Daredevil");
        article22.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article22.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 14);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article22.setArticleDate(myDate);
        article22.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article22.setArticleDescription("Cum autem commodis anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum fieri.");
        article22.setArticleApprove(245);

        Article article23 = new Article();
        article23.setArticleSection("cinema");
        article23.setArticleTitle("Sudoku: un jeu d'esprit");
        article23.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article23.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 10);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article23.setArticleDate(myDate);
        article23.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
        article23.setArticleDescription("Cum sportularum, vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article23.setArticleApprove(185);

        Article article24 = new Article();
        article24.setArticleSection("cinema");
        article24.setArticleTitle("Dragon Ball GT: great touring");
        article24.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article24.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 8);
            calendar.set(Calendar.DATE, 5);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article24.setArticleDate(myDate);
        article24.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
        article24.setArticleDescription("Cum autem commodis coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article24.setArticleApprove(278);

        Article article25 = new Article();
        article25.setArticleSection("cinema");
        article25.setArticleTitle("Tech Crunch et la CES");
        article25.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article25.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 3);
            calendar.set(Calendar.DATE, 21);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article25.setArticleDate(myDate);
        article25.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article25.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article25.setArticleApprove(90);

        Article article26 = new Article();
        article26.setArticleSection("cinema");
        article26.setArticleTitle("L'intelligence artificielle et les français");
        article26.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article26.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 2);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article26.setArticleDate(myDate);
        article26.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
        article26.setArticleDescription("Cum a tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article26.setArticleApprove(122);

        Article article27 = new Article();
        article27.setArticleSection("cinema");
        article27.setArticleTitle("Les 10 destinations préférés des français");
        article27.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article27.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 1);
            calendar.set(Calendar.DATE, 5);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article27.setArticleDate(myDate);
        article27.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article27.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article27.setArticleApprove(8);

        Article article28 = new Article();
        article28.setArticleSection("cinema");
        article28.setArticleTitle("Steve Jobs, Bill Gates, Elon Musk, Mark Zuckerberg : les nouveaux héros");
        article28.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
        article28.setUserProfile(helenProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 6);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article28.setArticleDate(myDate);
        article28.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article28.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
        article28.setArticleApprove(148);

        Article article29 = new Article();
        article29.setArticleSection("cinema");
        article29.setArticleTitle("Star wars empire strike back");
        article29.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article29.setUserProfile(helenProfile);
        /*article29.getArticleKeyWordList().add(articleKeyWord1);
        article29.getArticleKeyWordList().add(articleKeyWord2);
        article29.getArticleKeyWordList().add(articleKeyWord3);*/
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 24);
            calendar.set(Calendar.YEAR, 2013);
        myDate = calendar.getTime();
        article29.setArticleDate(myDate);
        article29.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article29.setArticleDescription("Cum autem commodis portularum, exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article29.setArticleApprove(352);

        Article article30 = new Article();
        article30.setArticleSection("mangas");
        article30.setArticleTitle("Marvel vs Capcom");
        article30.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article30.setUserProfile(caroleProfile);
        /*article30.getArticleKeyWordList().add(articleKeyWord1);
        article30.getArticleKeyWordList().add(articleKeyWord2);
        article30.getArticleKeyWordList().add(articleKeyWord3);*/
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 14);
            calendar.set(Calendar.YEAR, 2014);
        myDate = calendar.getTime();
        article30.setArticleDate(myDate);
        article30.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
        article30.setArticleDescription("Cum autem commodis exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article30.setArticleApprove(1240);

        Article article31 = new Article();
        article31.setArticleSection("mangas");
        article31.setArticleTitle("Superman");
        article31.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article31.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 14);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article31.setArticleDate(myDate);
        article31.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article31.setArticleDescription("Cum autem commodis anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum fieri.");
        article31.setArticleApprove(142);

        Article article32 = new Article();
        article32.setArticleSection("mangas");
        article32.setArticleTitle("Le CEO de Pinterest s'exprime");
        article32.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article32.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 10);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article32.setArticleDate(myDate);
        article32.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Torino_Comics_2006_Star_Wars_cosplayers.jpg/800px-Torino_Comics_2006_Star_Wars_cosplayers.jpg");
        article32.setArticleDescription("Cum sportularum, vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article32.setArticleApprove(220);

        Article article33 = new Article();
        article33.setArticleSection("mangas");
        article33.setArticleTitle("Dragon Ball : Piccolo Daimao");
        article33.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article33.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 8);
            calendar.set(Calendar.DATE, 5);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article33.setArticleDate(myDate);
        article33.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
        article33.setArticleDescription("Cum autem commodis coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article33.setArticleApprove(10);

        Article article34 = new Article();
        article34.setArticleSection("mangas");
        article34.setArticleTitle("Le secteur de la japanimation en plein expansion");
        article34.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article34.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 3);
            calendar.set(Calendar.DATE, 21);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article34.setArticleDate(myDate);
        article34.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article34.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article34.setArticleApprove(64);

        Article article35 = new Article();
        article35.setArticleSection("mangas");
        article35.setArticleTitle("Los Angeles ou San Francisco");
        article35.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article35.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 2);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article35.setArticleDate(myDate);
        article35.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
        article35.setArticleDescription("Cum a tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article35.setArticleApprove(80);

        Article article36 = new Article();
        article36.setArticleSection("mangas");
        article36.setArticleTitle("Les 10 femmes les plus sexys de 2015");
        article36.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article36.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 1);
            calendar.set(Calendar.DATE, 5);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article36.setArticleDate(myDate);
        article36.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article36.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article36.setArticleApprove(340);

        Article article37 = new Article();
        article37.setArticleSection("mangas");
        article37.setArticleTitle("Leechi: le succès français");
        article37.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
        article37.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 6);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article37.setArticleDate(myDate);
        article37.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article37.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
        article37.setArticleApprove(145);

        Article article38 = new Article();
        article38.setArticleSection("mangas");
        article38.setArticleTitle("Nintendo : la wii");
        article38.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
        article38.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 6);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article38.setArticleDate(myDate);
        article38.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article38.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
        article38.setArticleApprove(1120);

        Article article39 = new Article();
        article39.setArticleSection("mangas");
        article39.setArticleTitle("Fairy Tail: Acnologia");
        article39.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article39.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 8);
            calendar.set(Calendar.DATE, 5);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article39.setArticleDate(myDate);
        article39.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
        article39.setArticleDescription("Cum autem commodis coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article39.setArticleApprove(750);

        Article article40 = new Article();
        article40.setArticleSection("comics");
        article40.setArticleTitle("TF1 et France2: record d'audience");
        article40.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article40.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 3);
            calendar.set(Calendar.DATE, 21);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article40.setArticleDate(myDate);
        article40.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article40.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article40.setArticleApprove(98);

        Article article41 = new Article();
        article41.setArticleSection("comics");
        article41.setArticleTitle("James Bond : Golden Eye");
        article41.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article41.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 2);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article41.setArticleDate(myDate);
        article41.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");
        article41.setArticleDescription("Cum a tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article41.setArticleApprove(1007);

        Article article42 = new Article();
        article42.setArticleSection("comics");
        article42.setArticleTitle("5 bonnes résolutions pour 2016");
        article42.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article42.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 1);
            calendar.set(Calendar.DATE, 5);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article42.setArticleDate(myDate);
        article42.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG");
        article42.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, peregrinum invitari conveniet, et si digesto plene consilio id placuerit fieri.");
        article42.setArticleApprove(46);

        Article article43 = new Article();
        article43.setArticleSection("comics");
        article43.setArticleTitle("La success story de Facebook");
        article43.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
        article43.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 6);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article43.setArticleDate(myDate);
        article43.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article43.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
        article43.setArticleApprove(168);

        Article article44 = new Article();
        article44.setArticleSection("comics");
        article44.setArticleTitle("Microsoft vs Apple: Gates vs Jobs");
        article44.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
        article44.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 6);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article44.setArticleDate(myDate);
        article44.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article44.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
        article44.setArticleApprove(14);

        Article article45 = new Article();
        article45.setArticleSection("comics");
        article45.setArticleTitle("Amplificateur opérationel : où en sommes-nous ?");
        article45.setArticleText("Cum autem commodis intervallata temporibus convivia longa et noxia coeperint apparari vel distributio sollemnium  sportularum, anxia deliberatione tractatur an exceptis his quibus vicissitudo debetur, placuerit fieri.");
        article45.setUserProfile(caroleProfile);
            calendar.set(Calendar.MONTH, 6);
            calendar.set(Calendar.DATE, 6);
            calendar.set(Calendar.YEAR, 2015);
        myDate = calendar.getTime();
        article45.setArticleDate(myDate);
        article45.setArticlePicture("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boba_Fet.jpg/800px-Boba_Fet.jpg");
        article45.setArticleDescription("Cum autem apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione apparari vel distributio sollemnium  sportularum, anxia deliberatione consilio id placuerit fieri.");
        article45.setArticleApprove(12);

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
        boolean article10Ok = articleDao.create(article10);
        boolean article11Ok = articleDao.create(article11);
        boolean article12Ok = articleDao.create(article12);
        boolean article13Ok = articleDao.create(article13);
        boolean article14Ok = articleDao.create(article14);
        boolean article15Ok = articleDao.create(article15);
        boolean article16Ok = articleDao.create(article16);
        boolean article17Ok = articleDao.create(article17);
        boolean article18Ok = articleDao.create(article18);
        boolean article19Ok = articleDao.create(article19);
        boolean article20Ok = articleDao.create(article20);
        boolean article21Ok = articleDao.create(article21);
        boolean article22Ok = articleDao.create(article22);
        boolean article23Ok = articleDao.create(article23);
        boolean article24Ok = articleDao.create(article24);
        boolean article25Ok = articleDao.create(article25);
        boolean article26Ok = articleDao.create(article26);
        boolean article27Ok = articleDao.create(article27);
        boolean article28Ok = articleDao.create(article28);
        boolean article29Ok = articleDao.create(article29);
        boolean article30Ok = articleDao.create(article30);
        boolean article31Ok = articleDao.create(article31);
        boolean article32Ok = articleDao.create(article32);
        boolean article33Ok = articleDao.create(article33);
        boolean article34Ok = articleDao.create(article34);
        boolean article35Ok = articleDao.create(article35);
        boolean article36Ok = articleDao.create(article36);
        boolean article37Ok = articleDao.create(article37);
        boolean article38Ok = articleDao.create(article38);
        boolean article39Ok = articleDao.create(article39);
        boolean article40Ok = articleDao.create(article40);
        boolean article41Ok = articleDao.create(article41);
        boolean article42Ok = articleDao.create(article42);
        boolean article43Ok = articleDao.create(article43);
        boolean article44Ok = articleDao.create(article44);
        boolean article45Ok = articleDao.create(article45);


        ArticleShared articleShared = new ArticleShared();
            articleShared.setUserProfile(meganProfile);
            articleShared.setArticle(article40);
            articleShared.setIdUserProfile(meganProfile.getIdUserProfile());
            articleShared.setIdArticle(article40.getArticleKey());
            articleShared.setSection("main");
        article40.getUserProfileList().add(articleShared);
        // Also add the association object to the employee.
        meganProfile.getArticleListFromShared().add(articleShared);

        ArticleShared articleShared1 = new ArticleShared();
            articleShared1.setUserProfile(meganProfile);
            articleShared1.setArticle(article28);
            articleShared1.setIdUserProfile(meganProfile.getIdUserProfile());
            articleShared1.setIdArticle(article28.getArticleKey());
            articleShared1.setSection("main");
        article28.getUserProfileList().add(articleShared1);
        // Also add the association object to the employee.
        meganProfile.getArticleListFromShared().add(articleShared1);


        ArticleSharedDao articleSharedDao = new ArticleSharedDaoImpl();
        boolean articleSharedOK = articleSharedDao.create(articleShared);
        boolean articleShared1OK = articleSharedDao.create(articleShared1);


        System.out.println("Megan: " + meganOk);
        System.out.println("Helen: " + helenOk);
        System.out.println("Carole: " + caroleOk);
        System.out.println("MeganProfile: " + meganProfileOk);
        System.out.println("HelenProfile: " + helenProfileOk);
        System.out.println("CaroleProfile: " + caroleProfileOk);
        System.out.println("Article1: " + article1Ok);
        System.out.println("Article2: " + article2Ok);
        System.out.println("Article3: " + article3Ok);
        System.out.println("Article4: " + article4Ok);
        System.out.println("Article5: " + article5Ok);
        System.out.println("Article6: " + article6Ok);
        System.out.println("Article7: " + article7Ok);
        System.out.println("Article8: " + article8Ok);
        System.out.println("Article9: " + article9Ok);
        System.out.println("Article10: " + article10Ok);
        System.out.println("Article11: " + article11Ok);
        System.out.println("Article12: " + article12Ok);
        System.out.println("Article13: " + article13Ok);
        System.out.println("Article14: " + article14Ok);
        System.out.println("Article15: " + article15Ok);
        System.out.println("Article16: " + article16Ok);
        System.out.println("Article17: " + article17Ok);
        System.out.println("Article18: " + article18Ok);
        System.out.println("Article19: " + article19Ok);
        System.out.println("Article20: " + article20Ok);
        System.out.println("Article21: " + article21Ok);
        System.out.println("Article22: " + article22Ok);
        System.out.println("Article23: " + article23Ok);
        System.out.println("Article24: " + article24Ok);
        System.out.println("Article25: " + article25Ok);
        System.out.println("Article26: " + article26Ok);
        System.out.println("Article27: " + article27Ok);
        System.out.println("Article28: " + article28Ok);
        System.out.println("Article29: " + article29Ok);
        System.out.println("Article30: " + article30Ok);
        System.out.println("Article31: " + article31Ok);
        System.out.println("Article32: " + article32Ok);
        System.out.println("Article33: " + article33Ok);
        System.out.println("Article34: " + article34Ok);
        System.out.println("Article35: " + article35Ok);
        System.out.println("Article36: " + article36Ok);
        System.out.println("Article37: " + article37Ok);
        System.out.println("Article38: " + article38Ok);
        System.out.println("Article39: " + article39Ok);
        System.out.println("Article40: " + article40Ok);
        System.out.println("Article41: " + article41Ok);
        System.out.println("Article42: " + article42Ok);
        System.out.println("Article43: " + article43Ok);
        System.out.println("Article44: " + article44Ok);
        System.out.println("Article45: " + article45Ok);
        System.out.println("ArticleShared: " + articleSharedOK);
        System.out.println("ArticleShared1: " + articleShared1OK);

        for (Article article : articleDao.findLastArticles()){
            System.out.println("-----------------");
            System.out.println("article id: " + article.getArticleKey());
            System.out.println("article title: " + article.getArticleTitle());
            System.out.println("article user name: " + article.getUserProfile().getProfileName());
        }

    }

}
