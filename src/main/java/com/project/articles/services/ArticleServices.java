package com.project.articles.services;

import com.project.articles.dao.ArticleDao;
import com.project.articles.dao.ArticleSharedDao;
import com.project.articles.dao.impl.ArticleDaoImpl;
import com.project.articles.dao.impl.ArticleSharedDaoImpl;
import com.project.articles.dto.ArticleResponseDto;
import com.project.articles.dto.ArticlesResponseDto;
import com.project.articles.dto.ArticlesSectionResponseDto;
import com.project.articles.entity.Article;
import com.project.articles.entity.ArticleShared;
import com.project.user.dao.UserProfileDao;
import com.project.user.dao.impl.UserProfileDaoImpl;
import com.project.user.dto.UserProfileResponseDto;
import com.project.user.entity.UserProfile;
import com.project.user.services.UserServices;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.*;

/**
 * Created by olivier on 19/12/2015.
 */
@Path("/articles")
public class ArticleServices {

    private ArticleDao articleDao = new ArticleDaoImpl();
    private ArticleSharedDao articleSharedDao = new ArticleSharedDaoImpl();
    private UserProfileDao userProfileDao = new UserProfileDaoImpl();

    @Path("/lastarticles")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<ArticlesResponseDto> findLastArticles(){
        List<Article> lastArticlesList = articleDao.findLastArticles();
        List<ArticlesResponseDto> finalList = doArticlesMapping(lastArticlesList);
        return finalList;
    }

    @Path("/readarticle")
    @POST
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public ArticleResponseDto findArticle(@FormParam("idContent") Integer idContent){
        Article article = articleDao.read(idContent);
        ArticleResponseDto articleResponseDto = new ArticleResponseDto();
            articleResponseDto.setArticleDate(article.getArticleDate());
            //articlesResponseDto.setArticleKeyWordList(article.getArticleKeyWordList());
            articleResponseDto.setArticleKey(article.getArticleKey());
            articleResponseDto.setArticleText(article.getArticleText());
            articleResponseDto.setArticleTitle(article.getArticleTitle());
            articleResponseDto.setArticlePicture(article.getArticlePicture());
            articleResponseDto.setArticleDescription(article.getArticleDescription());
            articleResponseDto.setArticleApprove(article.getArticleApprove());
            articleResponseDto.setProfileName(article.getUserProfile().getProfileName());
            articleResponseDto.setProfilePicture(article.getUserProfile().getProfilePicture());
            articleResponseDto.setUserEmail(article.getUserProfile().getUser().getEmail());
        return articleResponseDto;
    }


    @Path("/searchedarticles")
    @POST
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public Map<String,List<ArticlesResponseDto>> findSearchedArticles(@FormParam("search") String search){
        List<String> requestList = new ArrayList<String>();
        if (search !=null) {
            StringTokenizer st = new StringTokenizer(search);
            while (st.hasMoreTokens()) {
                requestList.add(st.nextToken());
            }
        }
        Map<String, List<Article>> searchedArticlesMap = articleDao.findSearchedArticles(requestList);
        Map<String,List<ArticlesResponseDto>> mapArticle = new HashMap<String, List<ArticlesResponseDto>>();
        for (Map.Entry<String, List<Article>> entry : searchedArticlesMap.entrySet()) {
            List<ArticlesResponseDto> finalList = new ArrayList<ArticlesResponseDto>();
            finalList = doArticlesMapping(entry.getValue());
            mapArticle.put(entry.getKey(),finalList);
        }
        return mapArticle;
    }

    @Path("/findsectionarticles")
    @POST
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public ArticlesSectionResponseDto findSectionArticles(@FormParam("sectionName") String sectionName, @FormParam("id") String email){

        UserProfile userProfile = null;
        userProfile = userProfileDao.findProfileUsingUserEmail(email);
        List<Article> lastArticlesList = articleDao.findSectionArticles(sectionName,userProfile.getIdUserProfile());
        List<ArticlesResponseDto> finalList = doArticlesMapping(lastArticlesList);

        List<Article> articleSharedList = articleSharedDao.findAllSharedArticleForGivenSection(userProfile.getIdUserProfile(),sectionName);
        List<ArticlesResponseDto> articleSharedListDto = doArticlesMapping(articleSharedList);
        finalList.addAll(articleSharedListDto);
        Collections.sort(finalList);

        UserProfileResponseDto userProfileResponseDto = new UserProfileResponseDto();
            userProfileResponseDto.setProfileName(userProfile.getProfileName());
            userProfileResponseDto.setProfilePicture(userProfile.getProfilePicture());
            userProfileResponseDto.setBannerPicture(userProfile.getBannerPicture());
            userProfileResponseDto.setStatus(userProfile.getStatus());
            userProfileResponseDto.setUniversityName(userProfile.getUniversityName());
            userProfileResponseDto.setUniversityCity(userProfile.getUniversityCity());
        ArticlesSectionResponseDto articlesSectionResponseDto = new ArticlesSectionResponseDto();
            articlesSectionResponseDto.setArticlesResponseDto(finalList);
            articlesSectionResponseDto.setUserProfileResponseDto(userProfileResponseDto);
        return articlesSectionResponseDto;
    }

    @Path("/addsharedarticle")
    @POST
    @Consumes("application/x-www-form-urlencoded")
    @Produces(MediaType.APPLICATION_JSON)
    public Boolean addSharedArticle(@FormParam("id") String email,
                                    @FormParam("idArticle") Integer idArticle,
                                    @FormParam("sectionName") String sectionName){

        return false;
    }



    private List<ArticlesResponseDto> doArticlesMapping(List<Article> lastArticlesList) {
        List<ArticlesResponseDto> finalList = new ArrayList();
        for (Article article: lastArticlesList){
            ArticlesResponseDto articlesResponseDto = new ArticlesResponseDto();
                articlesResponseDto.setArticleDate(article.getArticleDate());
                //articlesResponseDto.setArticleKeyWordList(article.getArticleKeyWordList());
                articlesResponseDto.setArticleKey(article.getArticleKey());
                //articlesResponseDto.setArticleText(article.getArticleText());
                articlesResponseDto.setArticleTitle(article.getArticleTitle());
                articlesResponseDto.setArticlePicture(article.getArticlePicture());
                articlesResponseDto.setArticleDescription(article.getArticleDescription());
                //articlesResponseDto.setArticleApprove(article.getArticleApprove());
                articlesResponseDto.setProfileName(article.getUserProfile().getProfileName());
                articlesResponseDto.setProfilePicture(article.getUserProfile().getProfilePicture());
                articlesResponseDto.setUserEmail(article.getUserProfile().getUser().getEmail());
            finalList.add(articlesResponseDto);
        }
        return finalList;
    }

}