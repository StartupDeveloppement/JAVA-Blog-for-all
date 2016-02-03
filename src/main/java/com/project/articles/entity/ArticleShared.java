package com.project.articles.entity;

import com.project.user.entity.UserProfile;

import javax.persistence.*;

/**
 * Created by olivier on 03/02/2016.
 */
@Entity
@IdClass(ArticleSharedId.class)
public class ArticleShared implements java.io.Serializable{

    @Id
    private Integer idArticle;
    @Id
    private Integer idUserProfile;
    private String section;
    @ManyToOne//(cascade=CascadeType.PERSIST)
    private Article article;
    @ManyToOne//(cascade=CascadeType.PERSIST)
    private UserProfile userProfile;


    public Integer getIdArticle() {return idArticle;}
    public void setIdArticle(Integer idArticle) {this.idArticle = idArticle;}

    public Integer getIdUserProfile() {return idUserProfile;}
    public void setIdUserProfile(Integer idUserProfile) {this.idUserProfile = idUserProfile;}

    public String getSection() {return section;}
    public void setSection(String section) {this.section = section;}

    public Article getArticle() {return article;}
    public void setArticle(Article article) {this.article = article;}

    public UserProfile getUserProfile() {return userProfile;}
    public void setUserProfile(UserProfile userProfile) {this.userProfile = userProfile;}

}
