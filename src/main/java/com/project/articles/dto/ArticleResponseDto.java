package com.project.articles.dto;

import com.project.articles.entity.ArticleKeyWord;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;
import java.util.List;

/**
 * Created by olivier on 26/01/2016.
 */
@XmlRootElement
public class ArticleResponseDto {

    private Integer articleKey;
    private String articleTitle;
    private String articleDivider;
    private Date articleDate;
    private String articlePicture;
    private String articleDescription;
    private Integer articleApprove;
    private String articleText;
    private List<ArticleKeyWord> articleKeyWordList;
    private String profileName;
    private String profilePicture;
    private String userEmail;

    public Integer getArticleKey() {return articleKey;}
    public void setArticleKey(Integer articleKey) {this.articleKey = articleKey;}

    public String getArticleTitle() {return articleTitle;}
    public void setArticleTitle(String articleTitle) {this.articleTitle = articleTitle;}

    public String getArticleDivider() {return articleDivider;}
    public void setArticleDivider(String articleDivider) {this.articleDivider = articleDivider;}

    public Date getArticleDate() {return articleDate;}
    public void setArticleDate(Date articleDate) {this.articleDate = articleDate;}

    public String getArticlePicture() {return articlePicture;}
    public void setArticlePicture(String articlePicture) {this.articlePicture = articlePicture;}

    public String getArticleDescription() {return articleDescription;}
    public void setArticleDescription(String articleDescription) {this.articleDescription = articleDescription;}

    public Integer getArticleApprove() {return articleApprove;}
    public void setArticleApprove(Integer articleApprove) {this.articleApprove = articleApprove;}

    public String getArticleText() {return articleText;}
    public void setArticleText(String articleText) {this.articleText = articleText;}

    public List<ArticleKeyWord> getArticleKeyWordList() {return articleKeyWordList;}
    public void setArticleKeyWordList(List<ArticleKeyWord> articleKeyWordList) {this.articleKeyWordList = articleKeyWordList;}

    public String getProfileName() {return profileName;}
    public void setProfileName(String profileName) {this.profileName = profileName;}

    public String getProfilePicture() {return profilePicture;}
    public void setProfilePicture(String profilePicture) {this.profilePicture = profilePicture;}

    public String getUserEmail() {return userEmail;}
    public void setUserEmail(String userEmail) {this.userEmail = userEmail;}

}
