package com.project.articles.entity;

import com.project.user.entity.UserProfile;

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
    @GeneratedValue
    private Integer articleKey;
    private String articleTitle;
    private String articleDivider;
    private Date articleDate;
    @Lob
    @Column(columnDefinition="TEXT")
    private String articleText;
    /*@ManyToOne(targetEntity =UserProfile.class, fetch = FetchType.EAGER)
    private UserProfile userProfile;*/
    @OneToMany(fetch = FetchType.EAGER)
    private List<ArticleKeyWord> articleKeyWordList = new ArrayList<ArticleKeyWord>();


    public Integer getArticleKey() {return articleKey;}

    public String getArticleTitle() {return articleTitle;}
    public void setArticleTitle(String articleTitle) {this.articleTitle = articleTitle;}

    public String getArticleDivider() {return articleDivider;}
    public void setArticleDivider(String articleDivider) {this.articleDivider = articleDivider;}

    public String getArticleText() {return articleText;}
    public void setArticleText(String articleText) {this.articleText = articleText;}

    /*public UserProfile getUserProfile() {return userProfile;}
    public void setUserProfile(UserProfile userProfile) {this.userProfile = userProfile;}*/

    public List<ArticleKeyWord> getArticleKeyWordList() {return articleKeyWordList;}
    public void setArticleKeyWordList(List<ArticleKeyWord> articleKeyWordList) {this.articleKeyWordList = articleKeyWordList;}

    public Date getArticleDate() {return articleDate;}
    public void setArticleDate(Date articleDate) {this.articleDate = articleDate;}

}
