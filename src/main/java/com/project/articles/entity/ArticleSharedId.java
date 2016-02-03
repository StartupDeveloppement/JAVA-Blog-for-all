package com.project.articles.entity;

import javax.persistence.Id;

/**
 * Created by olivier on 03/02/2016.
 */
public class ArticleSharedId implements java.io.Serializable{


    private Integer idArticle;
    private Integer idUserProfile;


    public Integer getIdArticle() {return idArticle;}
    public void setIdArticle(Integer idArticle) {this.idArticle = idArticle;}

    public Integer getIdUserProfile() {return idUserProfile;}
    public void setIdUserProfile(Integer idUserProfile) {this.idUserProfile = idUserProfile;}
}
