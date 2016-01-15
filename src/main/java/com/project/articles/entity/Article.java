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
    private String articlePicture;
    private String articleDescription;
    private Integer articleApprove;
    @Lob
    @Column(columnDefinition="TEXT")
    private String articleText;
    private Integer idUserProfile;
    @OneToMany(fetch = FetchType.EAGER)
    private List<ArticleKeyWord> articleKeyWordList = new ArrayList<ArticleKeyWord>();


    public Integer getArticleKey() {return articleKey;}

    public String getArticleTitle() {return articleTitle;}
    public void setArticleTitle(String articleTitle) {this.articleTitle = articleTitle;}

    public String getArticleDivider() {return articleDivider;}
    public void setArticleDivider(String articleDivider) {this.articleDivider = articleDivider;}

    public String getArticlePicture() {return articlePicture;}
    public void setArticlePicture(String articlePicture) {this.articlePicture = articlePicture;}

    public String getArticleDescription() {return articleDescription;}
    public void setArticleDescription(String articleDescription) {this.articleDescription = articleDescription;}

    public Integer getArticleApprove() {return articleApprove;}
    public void setArticleApprove(Integer articleApprove) {this.articleApprove = articleApprove;}

    public String getArticleText() {return articleText;}
    public void setArticleText(String articleText) {this.articleText = articleText;}

    public Integer getIdUserProfile() {return idUserProfile;}
    public void setIdUserProfile(Integer idUserProfile) {this.idUserProfile = idUserProfile;}

    public List<ArticleKeyWord> getArticleKeyWordList() {return articleKeyWordList;}
    public void setArticleKeyWordList(List<ArticleKeyWord> articleKeyWordList) {this.articleKeyWordList = articleKeyWordList;}

    public Date getArticleDate() {return articleDate;}
    public void setArticleDate(Date articleDate) {this.articleDate = articleDate;}


}
