package com.project.articles.entity;

import com.project.user.entity.UserProfile;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by olivier on 19/12/2015.
 */
@Entity
@XmlRootElement
public class Article implements java.io.Serializable{

    @Id
    @GeneratedValue
    private Integer articleKey;
    private String articleTitle;
    private String articleDivider;
    @Lob
    @Column(columnDefinition="TEXT")
    private String articleText;
    @ManyToOne(targetEntity =UserProfile.class, fetch = FetchType.LAZY)
    private UserProfile userProfile;


    public Integer getArticleKey() {return articleKey;}

    public String getArticleTitle() {return articleTitle;}
    public void setArticleTitle(String articleTitle) {this.articleTitle = articleTitle;}

    public String getArticleDivider() {return articleDivider;}
    public void setArticleDivider(String articleDivider) {this.articleDivider = articleDivider;}

    public String getArticleText() {return articleText;}
    public void setArticleText(String articleText) {this.articleText = articleText;}

    public UserProfile getUserProfile() {return userProfile;}
    public void setUserProfile(UserProfile userProfile) {this.userProfile = userProfile;}

}
