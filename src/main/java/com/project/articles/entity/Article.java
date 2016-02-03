package com.project.articles.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.project.user.entity.UserProfile;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by olivier on 19/12/2015.
 */
@Entity
@XmlRootElement
public class Article implements java.io.Serializable{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer articleKey;
    private String articleTitle;
    private Date articleDate;
    private String articlePicture;
    private String articleDescription;
    private Integer articleApprove;
    @Lob
    @Column(columnDefinition="TEXT")
    private String articleText;
    @ManyToOne(fetch = FetchType.LAZY)
    //@JsonIgnore
    @JsonBackReference
    private UserProfile userProfile;
    private String articleSection;
    @OneToMany(mappedBy="article")
    private List<ArticleShared> userProfileList = new ArrayList<ArticleShared>();
    /*@ManyToMany(fetch = FetchType.EAGER, mappedBy = "articleList")
    private List<ArticleKeyWord> articleKeyWordList = new ArrayList<ArticleKeyWord>();*/

    public void addUserProfile(UserProfile userProfile, String section) {
        ArticleShared articleShared = new ArticleShared();
        articleShared.setUserProfile(userProfile);
        articleShared.setArticle(this);
        articleShared.setIdUserProfile(userProfile.getIdUserProfile());
        articleShared.setIdArticle(this.getArticleKey());
        articleShared.setSection(section);

        this.userProfileList.add(articleShared);
        // Also add the association object to the employee.
        userProfile.getArticleListFromShared().add(articleShared);
    }


    public Integer getArticleKey() {return articleKey;}

    public String getArticleTitle() {return articleTitle;}
    public void setArticleTitle(String articleTitle) {this.articleTitle = articleTitle;}

    public String getArticlePicture() {return articlePicture;}
    public void setArticlePicture(String articlePicture) {this.articlePicture = articlePicture;}

    public String getArticleDescription() {return articleDescription;}
    public void setArticleDescription(String articleDescription) {this.articleDescription = articleDescription;}

    public Integer getArticleApprove() {return articleApprove;}
    public void setArticleApprove(Integer articleApprove) {this.articleApprove = articleApprove;}

    public String getArticleText() {return articleText;}
    public void setArticleText(String articleText) {this.articleText = articleText;}

    /*public List<ArticleKeyWord> getArticleKeyWordList() {return articleKeyWordList;}
    public void setArticleKeyWordList(List<ArticleKeyWord> articleKeyWordList) {this.articleKeyWordList = articleKeyWordList;}*/

    public Date getArticleDate() {return articleDate;}
    public void setArticleDate(Date articleDate) {this.articleDate = articleDate;}

    public UserProfile getUserProfile() {return userProfile;}
    public void setUserProfile(UserProfile userProfile) {this.userProfile = userProfile;}

    public String getArticleSection() {return articleSection;}
    public void setArticleSection(String articleSection) {this.articleSection = articleSection;}

    public List<ArticleShared> getUserProfileList() {return userProfileList;}
    public void setUserProfileList(List<ArticleShared> userProfileList) {
        this.userProfileList = userProfileList;
    }
}
