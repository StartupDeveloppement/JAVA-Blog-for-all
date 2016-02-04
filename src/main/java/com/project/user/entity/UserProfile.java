package com.project.user.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.project.articles.entity.Article;
import com.project.articles.entity.ArticleSection;
import com.project.articles.entity.ArticleShared;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by olivier on 26/11/2015.
 */
@Entity
@XmlRootElement
public class UserProfile implements java.io.Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer idUserProfile;
    @OneToOne
    private UserAuth user;
    /*private String firstname;
    private String lastname;*/
    private String profileName;
    private String profilePicture;
    private String status;
    private String facebook;
    private String twitter;
    private String pinterest;
    private String universityName;
    private String universityCity;
    private String workName;
    private String workCity;
    /*@Temporal(TemporalType.DATE)
    private Date birthday;*/
    @OneToMany(fetch = FetchType.LAZY, mappedBy="userProfile")
    @JsonManagedReference
    private List<Article> articleList = new ArrayList<Article>();
    @OneToMany(fetch = FetchType.LAZY, mappedBy="userProfile")
    @JsonManagedReference
    private List<ArticleSection> articleSectionList = new ArrayList<ArticleSection>();
    @OneToMany(mappedBy="userProfile")
    private List<ArticleShared> articleListFromShared = new ArrayList<ArticleShared>();





    public Integer getIdUserProfile() {return idUserProfile;}

    public UserAuth getUser() {return user;}
    public void setUser(UserAuth user) {this.user = user;}

    public String getProfileName() {return profileName;}
    public void setProfileName(String profileName) {this.profileName = profileName;}

    public String getProfilePicture() {return profilePicture;}
    public void setProfilePicture(String profilePicture) {this.profilePicture = profilePicture;}

    public List<Article> getArticleList() {return articleList;}
    public void setArticleList(List<Article> articleList) {this.articleList = articleList;}

    public String getStatus() {return status;}
    public void setStatus(String status) {this.status = status;}

    public String getFacebook() {return facebook;}
    public void setFacebook(String facebook) {this.facebook = facebook;}

    public String getTwitter() {return twitter;}
    public void setTwitter(String twitter) {this.twitter = twitter;}

    public String getPinterest() {return pinterest;}
    public void setPinterest(String pinterest) {this.pinterest = pinterest;}

    public String getUniversityName() {return universityName;}
    public void setUniversityName(String universityName) {this.universityName = universityName;}

    public String getUniversityCity() {return universityCity;}
    public void setUniversityCity(String universityCity) {this.universityCity = universityCity;}

    public String getWorkName() {return workName;}
    public void setWorkName(String workName) {this.workName = workName;}

    public String getWorkCity() {return workCity;}
    public void setWorkCity(String workCity) {this.workCity = workCity;}

    public List<ArticleSection> getArticleSectionList() {return articleSectionList;}
    public void setArticleSectionList(List<ArticleSection> articleSectionList) {
        this.articleSectionList = articleSectionList;
    }

    public List<ArticleShared> getArticleListFromShared() {return articleListFromShared;}
    public void setArticleListFromShared(List<ArticleShared> articleListFromShared) {
        this.articleListFromShared = articleListFromShared;
    }
}
